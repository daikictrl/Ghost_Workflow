import { auth, currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { slugify } from "@/lib/utils"

export interface ProjectData {
  id: string
  name: string
  slug: string
  isOwned: boolean
  createdAt: string
  status: string
  description: string | null
}

export async function getProjectsForUser(): Promise<ProjectData[]> {
  const { userId } = await auth()
  if (!userId) {
    return []
  }

  const user = await currentUser()
  const emails = user?.emailAddresses.map((e) => e.emailAddress) || []

  try {
    const projects = await prisma.project.findMany({
      where: {
        OR: [
          { ownerId: userId },
          { collaborators: { some: { email: { in: emails } } } },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        collaborators: true, // Need this if we want to trace collaborators, but filtering uses email
      },
    })

    return projects.map((project: any) => ({
      id: project.id,
      name: project.name,
      slug: slugify(project.name),
      isOwned: project.ownerId === userId,
      createdAt: project.createdAt.toISOString(),
      status: project.status,
      description: project.description,
    }))
  } catch (error) {
    console.error("Failed to fetch projects for user:", error)
    return []
  }
}
