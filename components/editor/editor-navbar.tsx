"use client"

import React, { useState } from "react"
import { UserButton } from "@clerk/nextjs"
import { PanelLeftClose, PanelLeftOpen, Share2, Sparkles, Home } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useProjects } from "@/lib/project-context"
import { ShareDialog } from "./share-dialog"

type EditorNavbarProps = {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
  className?: string
}

function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen
  const params = useParams()
  const router = useRouter()
  const roomId = params?.roomId as string | undefined
  const { projects, isAiSidebarOpen, toggleAiSidebar } = useProjects()
  const [isShareOpen, setIsShareOpen] = useState(false)

  const currentProject = roomId ? projects.find((p) => p.id === roomId) : null

  return (
    <>
      <header
        className={cn(
          "flex h-14 shrink-0 items-center border-b border-border bg-background px-3 justify-between",
          className
        )}
      >
        <div className="flex min-w-0 flex-1 items-center justify-start gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isSidebarOpen ? "Close projects sidebar" : "Open projects sidebar"}
            aria-pressed={isSidebarOpen}
            onClick={onSidebarToggle}
          >
            <SidebarIcon />
          </Button>

          {currentProject && (
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Go to editor dashboard"
                onClick={() => router.push("/editor")}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-4 w-4" />
              </Button>
              <span className="text-muted-foreground">/</span>
              <span className="truncate text-sm font-medium text-foreground max-w-[150px] sm:max-w-xs select-none">
                {currentProject.name}
              </span>
            </div>
          )}
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center sm:flex" />

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          {currentProject && (
            <>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs h-8"
                onClick={() => setIsShareOpen(true)}
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </Button>

              <Button
                type="button"
                variant={isAiSidebarOpen ? "secondary" : "ghost"}
                size="icon-sm"
                aria-label="Toggle AI assistant"
                aria-pressed={isAiSidebarOpen}
                onClick={toggleAiSidebar}
                className={cn(
                  "relative h-8 w-8",
                  isAiSidebarOpen && "text-accent-ai bg-accent-ai/10 border-accent-ai/20"
                )}
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </>
          )}
          <UserButton />
        </div>
      </header>
      {currentProject && (
        <ShareDialog
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          projectId={currentProject.id}
        />
      )}
    </>
  )
}

export { EditorNavbar }
