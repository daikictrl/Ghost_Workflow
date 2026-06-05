import { prisma } from "@/lib/prisma"
import { checkProjectAccess } from "@/lib/project-access"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params

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

  const specs = await prisma.projectSpec.findMany({
    where: { projectId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      createdAt: true,
    },
  })

  return Response.json({
    specs: specs.map((s: { id: string; createdAt: Date }) => ({
      id: s.id,
      filename: `spec-${s.id}.md`,
      createdAt: s.createdAt.toISOString(),
    })),
  })
}
