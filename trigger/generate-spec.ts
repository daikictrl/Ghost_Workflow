import { task, metadata } from "@trigger.dev/sdk"
import { z } from "zod"
import { generateText } from "ai"
import { runWithFailover } from "@/lib/google-failover"

// ---------------------------------------------------------------------------
// Input schema
// ---------------------------------------------------------------------------

const ChatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
})

const PayloadSchema = z.object({
  projectId: z.string().min(1),
  roomId: z.string().min(1),
  chatHistory: z.array(ChatMessageSchema).optional().default([]),
  nodes: z.array(z.any()).optional().default([]),
  edges: z.array(z.any()).optional().default([]),
})

export type GenerateSpecPayload = z.infer<typeof PayloadSchema>

// ---------------------------------------------------------------------------
// Task
// ---------------------------------------------------------------------------

export const generateSpecTask = task({
  id: "generate-spec",
  retry: {
    maxAttempts: 3,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 10000,
    factor: 2,
  },
  run: async (rawPayload: unknown) => {
    // Validate input at the task boundary
    const parsed = PayloadSchema.safeParse(rawPayload)
    if (!parsed.success) {
      throw new Error(
        `[generate-spec] Invalid payload: ${JSON.stringify(parsed.error.flatten())}`
      )
    }

    const { projectId, roomId, chatHistory, nodes, edges } = parsed.data

    console.log(
      `[generate-spec] Starting spec generation for project=${projectId} room=${roomId} ` +
        `nodes=${nodes.length} edges=${edges.length} history=${chatHistory.length}`
    )

    // Track progress via run metadata for realtime observation
    metadata.set("status", "starting")
    metadata.set("projectId", projectId)
    await metadata.flush()

    // Build a readable summary of the canvas graph
    const nodesSummary =
      nodes
        .map((n: any) => {
          const label = n?.data?.label ?? n?.label ?? n?.id ?? "unknown"
          const shape = n?.data?.shape ?? n?.shape ?? "rectangle"
          const id = n?.id ?? "?"
          return `- Node [${id}] "${label}" (shape: ${shape})`
        })
        .join("\n") || "No nodes on canvas."

    const edgesSummary =
      edges
        .map((e: any) => {
          const label = e?.data?.label ?? e?.label ?? ""
          const source = e?.source ?? "?"
          const target = e?.target ?? "?"
          return `- Edge ${source} → ${target}${label ? ` (label: "${label}")` : ""}`
        })
        .join("\n") || "No edges on canvas."

    const chatSummary =
      chatHistory.length > 0
        ? chatHistory
            .map((m) => `${m.role === "user" ? "User" : "AI"}: ${m.content}`)
            .join("\n")
        : "No chat history."

    metadata.set("status", "generating")
    await metadata.flush()

    const prompt = `You are a technical documentation expert. \
Your task is to produce a professional Markdown technical specification \
document for a software system based on the canvas architecture diagram \
and the conversation history provided below.

## Canvas Nodes
${nodesSummary}

## Canvas Edges (Connections)
${edgesSummary}

## Conversation History
${chatSummary}

---

Write a complete technical specification in Markdown. \
Include the following sections where applicable:
1. **Overview** — brief description of the system
2. **Architecture** — high-level architecture description referencing the canvas nodes and edges
3. **Components** — one subsection per node, describing its role, responsibilities, and interfaces
4. **Data Flow** — how data moves between components based on the edges
5. **Technology Decisions** — inferred or recommended technology choices
6. **Open Questions** — any ambiguities or items that need clarification

Use proper Markdown heading levels (##, ###), bullet lists, and code blocks where appropriate. \
Keep the language precise, concise, and professional.`

    console.log("[generate-spec] Calling Gemini to generate spec...")

    const specMarkdown = await runWithFailover(async (model) => {
      const result = await generateText({
        model,
        prompt,
        maxOutputTokens: 8192,
      })
      return result.text
    })

    if (!specMarkdown || !specMarkdown.trim()) {
      throw new Error("[generate-spec] Gemini returned an empty spec")
    }

    console.log(
      `[generate-spec] Spec generation complete. Length: ${specMarkdown.length} chars`
    )

    // -------------------------------------------------------------------------
    // Persist spec to Vercel Blob and record metadata in ProjectSpec
    // Follows the same metadata + blob pattern used for canvas persistence.
    // -------------------------------------------------------------------------
    metadata.set("status", "saving")
    await metadata.flush()

    const { put, del } = await import("@vercel/blob")
    const { prisma } = await import("@/lib/prisma")

    // -----------------------------------------------------------------------
    // One-spec-per-project: delete any existing specs before creating the new
    // one. Remove both the blob files and the database records.
    // -----------------------------------------------------------------------
    const existingSpecs = await prisma.projectSpec.findMany({
      where: { projectId },
      select: { id: true, filePath: true },
    })

    if (existingSpecs.length > 0) {
      // Delete blobs (best-effort — don't fail the run if a blob is already gone)
      await Promise.allSettled(
        existingSpecs.map((s: { id: string; filePath: string }) => del(s.filePath).catch(() => {}))
      )

      // Delete DB records
      await prisma.projectSpec.deleteMany({ where: { projectId } })

      console.log(
        `[generate-spec] Cleaned up ${existingSpecs.length} old spec(s) for project=${projectId}`
      )
    }

    // Generate a unique spec ID so the blob path is stable and addressable
    const specId = crypto.randomUUID()
    const blobPath = `specs/${projectId}/${specId}.md`

    const blob = await put(blobPath, specMarkdown, {
      contentType: "text/markdown",
      access: "private",
      addRandomSuffix: false,
    })

    // Store only the blob URL as metadata — content stays in Vercel Blob
    await prisma.projectSpec.create({
      data: {
        id: specId,
        projectId,
        filePath: blob.url,
      },
    })

    console.log(
      `[generate-spec] Spec saved. specId=${specId} blobUrl=${blob.url}`
    )

    metadata.set("status", "complete")
    metadata.set("specLength", specMarkdown.length)
    metadata.set("specId", specId)
    await metadata.flush()

    return {
      success: true,
      projectId,
      specId,
    }
  },
})
