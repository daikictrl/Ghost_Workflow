import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { checkProjectAccess } from "@/lib/project-access"
import { tasks, auth as triggerAuth } from "@trigger.dev/sdk"
import { z } from "zod"
import type { generateSpecTask } from "@/trigger/generate-spec"

const RequestSchema = z.object({
  roomId: z.string().min(1, "roomId is required"),
  chatHistory: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .optional()
    .default([]),
  nodes: z.array(z.any()).optional().default([]),
  edges: z.array(z.any()).optional().default([]),
})

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let rawBody: unknown
  try {
    rawBody = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const parsed = RequestSchema.safeParse(rawBody)
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request body", details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { roomId, chatHistory, nodes, edges } = parsed.data

  // Resolve project from roomId — do not trust a client-supplied projectId
  const access = await checkProjectAccess(roomId)
  if (!access.hasAccess || !access.project) {
    if (access.error === "unauthenticated") {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }
    if (access.error === "not_found") {
      return Response.json({ error: "Project not found" }, { status: 404 })
    }
    return Response.json({ error: "Forbidden" }, { status: 403 })
  }

  const projectId = access.project.id

  try {
    // Trigger the background spec generation task
    const handle = await tasks.trigger<typeof generateSpecTask>("generate-spec", {
      projectId,
      roomId,
      chatHistory,
      nodes,
      edges,
    })

    // Persist run record for ownership tracking
    await prisma.taskRun.create({
      data: {
        runId: handle.id,
        projectId,
        userId,
      },
    })

    // Issue a run-scoped public token for client-side subscription
    const publicToken = await triggerAuth.createPublicToken({
      scopes: {
        read: {
          runs: [handle.id],
          tasks: ["generate-spec"],
        },
      },
      expirationTime: "1h",
    })

    return Response.json({ runId: handle.id, publicToken })
  } catch (error) {
    console.error("[POST /api/ai/spec] Failed to trigger generate-spec task:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
