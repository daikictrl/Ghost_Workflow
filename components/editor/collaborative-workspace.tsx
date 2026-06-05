"use client"

import { useProjects } from "@/lib/project-context"
import { cn } from "@/lib/utils"

import { CollaborativeCanvas } from "./collaborative-canvas"
import { ShapePanel } from "./shape-panel"
import { PresenceAvatars } from "./presence-avatars"
import { AiSidebar } from "./ai-sidebar"


interface CollaborativeWorkspaceProps {
  project: {
    id: string
    name: string
    description?: string | null
    canvasJsonPath?: string | null
  }
}

export function CollaborativeWorkspace({ project }: CollaborativeWorkspaceProps) {
  const { isAiSidebarOpen } = useProjects()

  return (
    <div className="relative flex flex-1 min-h-0 h-full w-full overflow-hidden bg-background">
      {/* Central Canvas Area */}
      <div
        className={cn(
          "flex-1 flex flex-col relative transition-[margin] duration-250 ease-out h-full w-full",
          isAiSidebarOpen ? "md:mr-[22rem]" : "md:mr-0"
        )}
      >
        <CollaborativeCanvas projectId={project.id} canvasJsonPath={project.canvasJsonPath} />
        <ShapePanel />
        <PresenceAvatars />
      </div>

      {/* Right Sidebar (AI Chat Assistant) */}
      <AiSidebar projectId={project.id} />
    </div>
  )
}

