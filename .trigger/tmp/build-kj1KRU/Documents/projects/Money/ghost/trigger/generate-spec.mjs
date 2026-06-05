import {
  external_exports,
  generateText,
  runWithFailover
} from "../../../../../chunk-G5IQEPRP.mjs";
import "../../../../../chunk-VM47NNMF.mjs";
import {
  metadata,
  task
} from "../../../../../chunk-WXMO3AC2.mjs";
import "../../../../../chunk-ZHBVPOXT.mjs";
import {
  __name,
  init_esm
} from "../../../../../chunk-5A2LE32G.mjs";

// trigger/generate-spec.ts
init_esm();
var ChatMessageSchema = external_exports.object({
  role: external_exports.enum(["user", "assistant"]),
  content: external_exports.string()
});
var PayloadSchema = external_exports.object({
  projectId: external_exports.string().min(1),
  roomId: external_exports.string().min(1),
  chatHistory: external_exports.array(ChatMessageSchema).optional().default([]),
  nodes: external_exports.array(external_exports.any()).optional().default([]),
  edges: external_exports.array(external_exports.any()).optional().default([])
});
var generateSpecTask = task({
  id: "generate-spec",
  retry: {
    maxAttempts: 3,
    minTimeoutInMs: 1e3,
    maxTimeoutInMs: 1e4,
    factor: 2
  },
  run: /* @__PURE__ */ __name(async (rawPayload) => {
    const parsed = PayloadSchema.safeParse(rawPayload);
    if (!parsed.success) {
      throw new Error(
        `[generate-spec] Invalid payload: ${JSON.stringify(parsed.error.flatten())}`
      );
    }
    const { projectId, roomId, chatHistory, nodes, edges } = parsed.data;
    console.log(
      `[generate-spec] Starting spec generation for project=${projectId} room=${roomId} nodes=${nodes.length} edges=${edges.length} history=${chatHistory.length}`
    );
    metadata.set("status", "starting");
    metadata.set("projectId", projectId);
    await metadata.flush();
    const nodesSummary = nodes.map((n) => {
      const label = n?.data?.label ?? n?.label ?? n?.id ?? "unknown";
      const shape = n?.data?.shape ?? n?.shape ?? "rectangle";
      const id = n?.id ?? "?";
      return `- Node [${id}] "${label}" (shape: ${shape})`;
    }).join("\n") || "No nodes on canvas.";
    const edgesSummary = edges.map((e) => {
      const label = e?.data?.label ?? e?.label ?? "";
      const source = e?.source ?? "?";
      const target = e?.target ?? "?";
      return `- Edge ${source} → ${target}${label ? ` (label: "${label}")` : ""}`;
    }).join("\n") || "No edges on canvas.";
    const chatSummary = chatHistory.length > 0 ? chatHistory.map((m) => `${m.role === "user" ? "User" : "AI"}: ${m.content}`).join("\n") : "No chat history.";
    metadata.set("status", "generating");
    await metadata.flush();
    const prompt = `You are a technical documentation expert. Your task is to produce a professional Markdown technical specification document for a software system based on the canvas architecture diagram and the conversation history provided below.

## Canvas Nodes
${nodesSummary}

## Canvas Edges (Connections)
${edgesSummary}

## Conversation History
${chatSummary}

---

Write a complete technical specification in Markdown. Include the following sections where applicable:
1. **Overview** — brief description of the system
2. **Architecture** — high-level architecture description referencing the canvas nodes and edges
3. **Components** — one subsection per node, describing its role, responsibilities, and interfaces
4. **Data Flow** — how data moves between components based on the edges
5. **Technology Decisions** — inferred or recommended technology choices
6. **Open Questions** — any ambiguities or items that need clarification

Use proper Markdown heading levels (##, ###), bullet lists, and code blocks where appropriate. Keep the language precise, concise, and professional.`;
    console.log("[generate-spec] Calling Gemini to generate spec...");
    const specMarkdown = await runWithFailover(async (model) => {
      const result = await generateText({
        model,
        prompt,
        maxOutputTokens: 8192
      });
      return result.text;
    });
    if (!specMarkdown || !specMarkdown.trim()) {
      throw new Error("[generate-spec] Gemini returned an empty spec");
    }
    console.log(
      `[generate-spec] Spec generation complete. Length: ${specMarkdown.length} chars`
    );
    metadata.set("status", "saving");
    await metadata.flush();
    const { put, del } = await import("../../../../../dist-BVJQSSG2.mjs");
    const { prisma } = await import("../../../../../prisma-DDPQBYBW.mjs");
    const existingSpecs = await prisma.projectSpec.findMany({
      where: { projectId },
      select: { id: true, filePath: true }
    });
    if (existingSpecs.length > 0) {
      await Promise.allSettled(
        existingSpecs.map((s) => del(s.filePath).catch(() => {
        }))
      );
      await prisma.projectSpec.deleteMany({ where: { projectId } });
      console.log(
        `[generate-spec] Cleaned up ${existingSpecs.length} old spec(s) for project=${projectId}`
      );
    }
    const specId = crypto.randomUUID();
    const blobPath = `specs/${projectId}/${specId}.md`;
    const blob = await put(blobPath, specMarkdown, {
      contentType: "text/markdown",
      access: "private",
      addRandomSuffix: false
    });
    await prisma.projectSpec.create({
      data: {
        id: specId,
        projectId,
        filePath: blob.url
      }
    });
    console.log(
      `[generate-spec] Spec saved. specId=${specId} blobUrl=${blob.url}`
    );
    metadata.set("status", "complete");
    metadata.set("specLength", specMarkdown.length);
    metadata.set("specId", specId);
    await metadata.flush();
    return {
      success: true,
      projectId,
      specId
    };
  }, "run")
});
export {
  generateSpecTask
};
//# sourceMappingURL=generate-spec.mjs.map
