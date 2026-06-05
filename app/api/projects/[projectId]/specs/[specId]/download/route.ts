import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { checkProjectAccess } from "@/lib/project-access"
import { get } from "@vercel/blob"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ projectId: string; specId: string }> }
) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { projectId, specId } = await params

  // Verify the authenticated user has access to this project (owner or collaborator)
  const accessCheck = await checkProjectAccess(projectId)
  if (!accessCheck.hasAccess || !accessCheck.project) {
    if (accessCheck.error === "unauthenticated") {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }
    if (accessCheck.error === "not_found") {
      return Response.json({ error: "Project not found" }, { status: 404 })
    }
    return Response.json({ error: "Forbidden" }, { status: 403 })
  }

  // Verify the spec belongs to this project
  const spec = await prisma.projectSpec.findUnique({
    where: { id: specId },
  })

  if (!spec) {
    return Response.json({ error: "Spec not found" }, { status: 404 })
  }

  if (spec.projectId !== projectId) {
    return Response.json({ error: "Forbidden" }, { status: 403 })
  }

  // Fetch the Markdown content from Vercel Blob using the stored URL
  try {
    const response = await get(spec.filePath, { access: "private" })

    if (!response || !response.stream) {
      return Response.json({ error: "Spec file not found" }, { status: 404 })
    }

    const filename = `spec-${specId}.md`

    return new Response(response.stream, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error(
      `[GET /api/projects/${projectId}/specs/${specId}/download] Failed to fetch blob:`,
      error
    )
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
