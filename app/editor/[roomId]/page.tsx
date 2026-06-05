import { Metadata } from "next"
import { checkProjectAccess } from "@/lib/project-access"
import { AccessDenied } from "@/components/editor/access-denied"
import { RoomWorkspace } from "@/components/editor/room-workspace"

interface PageProps {
  params: Promise<{
    roomId: string
  }>
}

export const dynamic = "force-dynamic"

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { roomId } = await props.params
  const { hasAccess, project } = await checkProjectAccess(roomId)

  if (!hasAccess || !project) {
    return {
      title: "Access Denied | Archi_Dev",
      description: "You do not have access to this workspace.",
    }
  }

  return {
    title: `${project.name} | Archi_Dev`,
    description: project.description || "Archi_Dev collaborative workspace",
  }
}

export default async function EditorRoomPage(props: PageProps) {
  const { roomId } = await props.params
  const { hasAccess, project } = await checkProjectAccess(roomId)

  if (!hasAccess || !project) {
    return <AccessDenied />
  }

  return <RoomWorkspace project={project} />
}
