import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { checkProjectAccess } from "@/lib/project-access"
import { tasks, auth as triggerAuth } from "@trigger.dev/sdk"
import type { designAgentTask } from "@/trigger/design-agent"

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: any = {}
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const { prompt, roomId, projectId } = body
  const finalProjectId = projectId || roomId

  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    return Response.json({ error: "Prompt is required and must be a non-empty string" }, { status: 400 })
  }
  if (!roomId || typeof roomId !== "string") {
    return Response.json({ error: "roomId is required and must be a string" }, { status: 400 })
  }
  if (!finalProjectId || typeof finalProjectId !== "string") {
    return Response.json({ error: "projectId or roomId is required and must be a string" }, { status: 400 })
  }

  // Verify user has access to the project
  const accessCheck = await checkProjectAccess(finalProjectId)
  if (!accessCheck.hasAccess || !accessCheck.project) {
    if (accessCheck.error === "unauthenticated") {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }
    if (accessCheck.error === "not_found") {
      return Response.json({ error: "Project not found" }, { status: 404 })
    }
    return Response.json({ error: "Forbidden" }, { status: 403 })
  }

  try {
    // Trigger the background task using the tasks.trigger helper
    const handle = await tasks.trigger<typeof designAgentTask>("design-agent", {
      prompt,
      roomId,
    })

    // Store the run in the database to track ownership
    await prisma.taskRun.create({
      data: {
        runId: handle.id,
        projectId: finalProjectId,
        userId,
      },
    })

    // Generate run-scoped public token using Trigger.dev SDK
    const publicToken = await triggerAuth.createPublicToken({
      scopes: {
        read: {
          runs: [handle.id],
          tasks: ["design-agent"],
        },
      },
      expirationTime: "1h",
    })

    return Response.json({ runId: handle.id, publicToken })
  } catch (error) {
    console.error("Failed to trigger design agent task:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
