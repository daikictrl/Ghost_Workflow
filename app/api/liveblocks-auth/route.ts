import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { checkProjectAccess } from "@/lib/project-access";
import { liveblocks, getUserColor } from "@/lib/liveblocks-client";

export async function POST(request: Request) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { room: projectId } = body;

    if (!projectId || typeof projectId !== "string") {
      return NextResponse.json({ error: "Missing or invalid room parameter" }, { status: 400 });
    }

    // Fetch user details from Clerk
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Failed to fetch user details" }, { status: 401 });
    }

    // 1 & 2. Verify project access
    const access = await checkProjectAccess(projectId);
    if (!access.hasAccess || !access.project) {
      if (access.error === "unauthenticated") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Explicit check that the requesting user owns or is a member of the requested room
    const isOwner = access.project.ownerId === user.id;
    const userEmails = user.emailAddresses.map((e) => e.emailAddress.toLowerCase());
    const isCollaborator = access.project.collaborators.some(
      (c) => userEmails.includes(c.email.toLowerCase())
    );

    if (!isOwner && !isCollaborator) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 3. Ensure the room exists in Liveblocks
    try {
      await liveblocks.getOrCreateRoom(projectId, {
        defaultAccesses: [], // Private by default, users authorized via token session
      });
    } catch (roomError) {
      console.error("Failed to get or create Liveblocks room:", roomError);
      return NextResponse.json({ error: "Internal room initialization error" }, { status: 500 });
    }

    // Resolve name with fallbacks
    const name =
      [user.firstName, user.lastName].filter(Boolean).join(" ") ||
      user.username ||
      user.emailAddresses[0]?.emailAddress ||
      "Guest";

    const avatar = user.imageUrl;
    const color = getUserColor(user.id);

    // 4. Return session token with custom user info and permissions
    const session = liveblocks.prepareSession(user.id, {
      userInfo: {
        name,
        avatar,
        color,
      },
    });

    // Grant full access (read/write) to the project room (using the project ID as the room ID)
    session.allow(projectId, session.FULL_ACCESS);

    const { status, body: responseBody } = await session.authorize();
    return new Response(responseBody, { status });
  } catch (error) {
    console.error("Liveblocks auth route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
