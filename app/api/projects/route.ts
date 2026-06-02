import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { slugify } from "@/lib/utils"
import { getProjectsForUser } from "@/lib/project-data"

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const formattedProjects = await getProjectsForUser()
    return Response.json(formattedProjects)
  } catch (error) {
    console.error("Failed to list projects:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: any = {}
  try {
    body = await request.json()
  } catch {
    // Treat empty or invalid JSON as empty body
  }

  const name = typeof body?.name === "string" && body.name.trim() ? body.name.trim() : "Untitled Project"
  const description = typeof body?.description === "string" ? body.description.trim() : null
  const id = typeof body?.id === "string" && body.id.trim() ? body.id.trim() : undefined

  try {
    const project = await prisma.project.create({
      data: {
        id,
        ownerId: userId,
        name,
        description,
        status: "DRAFT",
      },
    })

    return Response.json({
      id: project.id,
      name: project.name,
      slug: slugify(project.name),
      isOwned: true,
      createdAt: project.createdAt.toISOString(),
      status: project.status,
      description: project.description,
    })
  } catch (error) {
    console.error("Failed to create project:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
