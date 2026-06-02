import { auth, clerkClient } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { checkProjectAccess } from "@/lib/project-access"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params

  // 1. Verify project access
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

  const project = accessCheck.project
  const isOwner = project.ownerId === accessCheck.identity.userId

  try {
    // 2. Fetch all collaborators from db
    const dbCollaborators = await prisma.projectCollaborator.findMany({
      where: { projectId },
      orderBy: { createdAt: "asc" },
    })

    const emails = dbCollaborators.map((c: any) => c.email)
    let enrichedCollaborators = dbCollaborators.map((c: any) => ({
      id: c.id,
      email: c.email,
      displayName: null as string | null,
      avatarUrl: null as string | null,
      createdAt: c.createdAt.toISOString(),
    }))
 
    const client = await clerkClient()
 
    // 3. Fetch collaborators info from Clerk (in a try-catch for safety)
    if (emails.length > 0) {
      try {
        const response = await client.users.getUserList({
          emailAddress: emails,
          limit: 100,
        })
        const clerkUsers = response.data || []
 
        enrichedCollaborators = dbCollaborators.map((c: any) => {
          const clerkUser = clerkUsers.find((u) =>
            u.emailAddresses.some(
              (e) => e.emailAddress.toLowerCase() === c.email.toLowerCase()
            )
          )
 
          const displayName = clerkUser
            ? [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
              clerkUser.username ||
              null
            : null
 
          return {
            id: c.id,
            email: c.email,
            displayName,
            avatarUrl: clerkUser?.imageUrl || null,
            createdAt: c.createdAt.toISOString(),
          }
        })
      } catch (err) {
        console.error("Failed to enrich collaborators with Clerk:", err)
      }
    }

    // 4. Fetch owner info from Clerk (in a try-catch for safety)
    let ownerEnriched = {
      id: project.ownerId,
      email: "",
      displayName: "Owner",
      avatarUrl: null as string | null,
    }

    try {
      const clerkOwner = await client.users.getUser(project.ownerId)
      const primaryEmail =
        clerkOwner.emailAddresses.find(
          (e) => e.id === clerkOwner.primaryEmailAddressId
        )?.emailAddress ||
        clerkOwner.emailAddresses[0]?.emailAddress ||
        ""

      ownerEnriched = {
        id: project.ownerId,
        email: primaryEmail,
        displayName:
          [clerkOwner.firstName, clerkOwner.lastName].filter(Boolean).join(" ") ||
          clerkOwner.username ||
          "Owner",
        avatarUrl: clerkOwner.imageUrl || null,
      }
    } catch (err) {
      console.error("Failed to fetch owner details from Clerk:", err)
    }

    return Response.json({
      isOwner,
      owner: ownerEnriched,
      collaborators: enrichedCollaborators,
    })
  } catch (error) {
    console.error("Failed to fetch collaborators:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { projectId } = await params

  // Fetch the project to verify owner
  const project = await prisma.project.findUnique({
    where: { id: projectId },
  })

  if (!project) {
    return Response.json({ error: "Project not found" }, { status: 404 })
  }

  if (project.ownerId !== userId) {
    return Response.json({ error: "Only the project owner can invite collaborators" }, { status: 403 })
  }

  let body: any = {}
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const { email } = body
  if (typeof email !== "string" || !email.trim()) {
    return Response.json({ error: "Email address is required" }, { status: 400 })
  }

  const trimmedEmail = email.trim().toLowerCase()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmedEmail)) {
    return Response.json({ error: "Invalid email address format" }, { status: 400 })
  }

  // Verify the owner isn't inviting themselves — fail closed on Clerk errors
  const client = await clerkClient()
  try {
    const clerkOwner = await client.users.getUser(project.ownerId)
    const ownerEmails = clerkOwner.emailAddresses.map((e) => e.emailAddress.toLowerCase())
    if (ownerEmails.includes(trimmedEmail)) {
      return Response.json({ error: "You cannot invite yourself as a collaborator" }, { status: 400 })
    }
  } catch (err) {
    console.error("Error fetching owner emails in invite:", err)
    return Response.json({ error: "Unable to verify owner email" }, { status: 503 })
  }

  try {
    // Check if they are already a collaborator
    const existing = await prisma.projectCollaborator.findUnique({
      where: {
        projectId_email: {
          projectId,
          email: trimmedEmail,
        },
      },
    })

    if (existing) {
      return Response.json({ error: "User is already a collaborator" }, { status: 400 })
    }

    const collaborator = await prisma.projectCollaborator.create({
      data: {
        projectId,
        email: trimmedEmail,
      },
    })

    // Return the new collaborator, trying to enrich with Clerk data if possible
    let displayName: string | null = null
    let avatarUrl: string | null = null

    try {
      const response = await client.users.getUserList({
        emailAddress: [trimmedEmail],
        limit: 1,
      })
      const clerkUser = response.data?.[0]
      if (clerkUser) {
        displayName = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || clerkUser.username || null
        avatarUrl = clerkUser.imageUrl || null
      }
    } catch (err) {
      console.error("Failed to enrich invited collaborator:", err)
    }

    return Response.json({
      id: collaborator.id,
      email: collaborator.email,
      displayName,
      avatarUrl,
      createdAt: collaborator.createdAt.toISOString(),
    }, { status: 201 })

  } catch (error) {
    console.error("Failed to add collaborator:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { projectId } = await params

  // Verify project and ownership
  const project = await prisma.project.findUnique({
    where: { id: projectId },
  })

  if (!project) {
    return Response.json({ error: "Project not found" }, { status: 404 })
  }

  if (project.ownerId !== userId) {
    return Response.json({ error: "Only the project owner can remove collaborators" }, { status: 403 })
  }

  // Accept email only from JSON body
  let body: any = {}
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const email = body?.email
  if (!email || typeof email !== "string" || !email.trim()) {
    return Response.json({ error: "Email is required" }, { status: 400 })
  }

  const trimmedEmail = email.trim().toLowerCase()

  try {
    const collaborator = await prisma.projectCollaborator.findUnique({
      where: {
        projectId_email: {
          projectId,
          email: trimmedEmail,
        },
      },
    })

    if (!collaborator) {
      return Response.json({ error: "Collaborator not found" }, { status: 404 })
    }

    await prisma.projectCollaborator.delete({
      where: {
        projectId_email: {
          projectId,
          email: trimmedEmail,
        },
      },
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("Failed to delete collaborator:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
