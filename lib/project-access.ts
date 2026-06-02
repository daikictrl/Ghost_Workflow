import { cache } from "react"
import { auth, currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import type { Project, ProjectCollaborator } from "@/app/generated/prisma/client"

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

type ProjectWithCollaborators = Project & { collaborators: ProjectCollaborator[] }

type AccessResult =
  | { hasAccess: true; project: ProjectWithCollaborators; identity: UserIdentity; error: null }
  | { hasAccess: false; project: null; identity: UserIdentity | null; error: "unauthenticated" | "not_found" | "denied" | "error" }

/**
 * Verifies if the authenticated user has access (as owner or collaborator)
 * to a project. Wrapped with React cache() to deduplicate within a single
 * server request (e.g. generateMetadata + page component).
 */
export const checkProjectAccess = cache(async (projectId: string): Promise<AccessResult> => {
  const identity = await getUserIdentity()
  if (!identity) {
    return { hasAccess: false, project: null, identity: null, error: "unauthenticated" }
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
      return { hasAccess: false, project: null, identity, error: "not_found" }
    }

    const isOwner = project.ownerId === userId
    const isCollaborator = email
      ? project.collaborators.some(
          (c: ProjectCollaborator) => c.email.toLowerCase() === email.toLowerCase()
        )
      : false

    if (!isOwner && !isCollaborator) {
      return { hasAccess: false, project: null, identity, error: "denied" }
    }

    return { hasAccess: true, project, identity, error: null }
  } catch (error) {
    console.error("Error checking project access:", error)
    return { hasAccess: false, project: null, identity, error: "error" }
  }
})
