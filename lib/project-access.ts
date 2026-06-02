import { auth, currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export interface UserIdentity {
  userId: string
  email: string | null
}

/**
 * Gets the current Clerk user's identity: userId and primary email address.
 */
export async function getUserIdentity(): Promise<UserIdentity | null> {
  const { userId } = await auth()
  if (!userId) {
    return null
  }

  const user = await currentUser()
  if (!user) {
    return null
  }

  const email =
    user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ||
    user.emailAddresses[0]?.emailAddress ||
    null

  return { userId, email }
}

/**
 * Verifies if the authenticated user has access (as owner or collaborator)
 * to a project.
 */
export async function checkProjectAccess(projectId: string) {
  const identity = await getUserIdentity()
  if (!identity) {
    return { hasAccess: false, project: null, error: "unauthenticated" as const }
  }

  const { userId, email } = identity

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        collaborators: true,
      },
    })

    if (!project) {
      return { hasAccess: false, project: null, error: "not_found" as const }
    }

    const isOwner = project.ownerId === userId
    const isCollaborator = email
      ? project.collaborators.some(
          (c: any) => c.email.toLowerCase() === email.toLowerCase()
        )
      : false

    if (!isOwner && !isCollaborator) {
      return { hasAccess: false, project: null, error: "denied" as const }
    }

    return { hasAccess: true, project, error: null }
  } catch (error) {
    console.error("Error checking project access:", error)
    return { hasAccess: false, project: null, error: "error" as const }
  }
}
