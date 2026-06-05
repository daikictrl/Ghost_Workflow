import { auth } from "@trigger.dev/sdk"
import { prisma } from "@/lib/prisma"
import { auth as clerkAuth } from "@clerk/nextjs/server"

export async function POST(request: Request) {
  const { userId } = await clerkAuth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: any = {}
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const { runId } = body
  if (!runId || typeof runId !== "string") {
    return Response.json({ error: "runId is required and must be a string" }, { status: 400 })
  }

  // Find the task run to verify ownership
  const taskRun = await prisma.taskRun.findUnique({
    where: { runId },
  })

  if (!taskRun) {
    return Response.json({ error: "Task run not found" }, { status: 404 })
  }

  // Verify ownership: only the user who triggered the run can access its token
  if (taskRun.userId !== userId) {
    return Response.json({ error: "Forbidden" }, { status: 403 })
  }

  try {
    // Generate run-scoped public token using Trigger.dev SDK
    const token = await auth.createPublicToken({
      scopes: {
        read: {
          runs: [runId],
          tasks: ["design-agent"],
        },
      },
      expirationTime: "1h",
    })

    return Response.json({ token })
  } catch (error) {
    console.error("Failed to generate public token for run:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
