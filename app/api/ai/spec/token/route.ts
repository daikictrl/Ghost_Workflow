import { auth as clerkAuth } from "@clerk/nextjs/server"
import { auth as triggerAuth } from "@trigger.dev/sdk"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const RequestSchema = z.object({
  runId: z.string().min(1, "runId is required"),
})

export async function POST(request: Request) {
  const { userId } = await clerkAuth()
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

  const { runId } = parsed.data

  // Verify the run exists and belongs to the authenticated user
  const taskRun = await prisma.taskRun.findUnique({
    where: { runId },
  })

  if (!taskRun) {
    return Response.json({ error: "Task run not found" }, { status: 404 })
  }

  if (taskRun.userId !== userId) {
    return Response.json({ error: "Forbidden" }, { status: 403 })
  }

  try {
    // Issue a run-scoped public access token, valid for 1 hour
    const token = await triggerAuth.createPublicToken({
      scopes: {
        read: {
          runs: [runId],
          tasks: ["generate-spec"],
        },
      },
      expirationTime: "1h",
    })

    return Response.json({ token })
  } catch (error) {
    console.error("[POST /api/ai/spec/token] Failed to generate public token:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
