import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { slugify } from "@/lib/utils"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { projectId } = await params

  let body: any = {}
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const name = body?.name
  if (typeof name !== "string" || !name.trim()) {
    return Response.json({ error: "Project name is required" }, { status: 400 })
  }

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })

    if (!project) {
      return Response.json({ error: "Project not found" }, { status: 404 })
    }

    if (project.ownerId !== userId) {
      return Response.json({ error: "Forbidden" }, { status: 403 })
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        name: name.trim(),
      },
    })

    return Response.json({
      id: updatedProject.id,
      name: updatedProject.name,
      slug: slugify(updatedProject.name),
      isOwned: true,
      createdAt: updatedProject.createdAt.toISOString(),
      status: updatedProject.status,
      description: updatedProject.description,
    })
  } catch (error) {
    console.error(`Failed to update project ${projectId}:`, error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { userId } = await auth()
  console.log("[DELETE DEBUG] Authenticated userId:", userId)
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { projectId } = await params
  console.log("[DELETE DEBUG] Resolved projectId from params:", projectId)

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })
    console.log("[DELETE DEBUG] Project found in DB:", project)

    if (!project) {
      console.log("[DELETE DEBUG] Returning 404: project not found in database for ID:", projectId)
      return Response.json({ error: "Project not found" }, { status: 404 })
    }

    if (project.ownerId !== userId) {
      console.log("[DELETE DEBUG] Returning 403: project ownerId", project.ownerId, "does not match userId", userId)
      return Response.json({ error: "Forbidden" }, { status: 403 })
    }

    await prisma.project.delete({
      where: { id: projectId },
    })
    console.log("[DELETE DEBUG] Project successfully deleted")

    return Response.json({ success: true })
  } catch (error) {
    console.error(`Failed to delete project ${projectId}:`, error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
