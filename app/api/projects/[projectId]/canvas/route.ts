import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { checkProjectAccess } from "@/lib/project-access"
import { put, del, get } from "@vercel/blob"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { projectId } = await params

  // Verify project access
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

  if (!project.canvasJsonPath) {
    return Response.json({ nodes: [], edges: [] })
  }

  try {
    const response = await get(project.canvasJsonPath, {
      access: "private",
    })

    if (!response || response.statusCode === 304 || !response.stream) {
      return Response.json({ nodes: [], edges: [] })
    }

    return new Response(response.stream, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Failed to read canvas blob data:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { projectId } = await params

  // Verify project access
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

  let body: any = {}
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  if (!body || !Array.isArray(body.nodes) || !Array.isArray(body.edges)) {
    return Response.json({ error: "Invalid canvas JSON structure. Must have 'nodes' and 'edges' arrays." }, { status: 400 })
  }

  const oldPath = accessCheck.project.canvasJsonPath

  try {
    // Save to Vercel Blob
    // addRandomSuffix: true will generate unique filenames (useful to bypass Edge/CDN cache)
    const blob = await put(`projects/${projectId}/canvas.json`, JSON.stringify(body), {
      contentType: "application/json",
      access: "private",
      addRandomSuffix: true,
      allowOverwrite: true,
    })

    // Store the returned blob URL on the project record in the DB
    await prisma.project.update({
      where: { id: projectId },
      data: {
        canvasJsonPath: blob.url,
      },
    })

    // Delete old blob from Vercel Blob asynchronously to prevent bloat
    if (oldPath) {
      try {
        await del(oldPath)
      } catch (delError) {
        console.error("Failed to delete old canvas blob:", delError)
      }
    }

    return Response.json({ success: true, url: blob.url })
  } catch (error) {
    console.error("Failed to save canvas state:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
