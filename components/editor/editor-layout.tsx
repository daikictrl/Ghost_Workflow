"use client"

import { useState } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { ProjectProvider, type Project } from "@/lib/project-context"
import { ProjectDialogs } from "@/components/editor/project-dialogs"
import { cn } from "@/lib/utils"

type EditorLayoutProps = {
  children: React.ReactNode
  initialProjects?: Project[]
}

function EditorLayout({ children, initialProjects }: EditorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <ProjectProvider initialProjects={initialProjects}>
      <div className="flex h-dvh flex-col bg-background text-foreground overflow-hidden">
        <EditorNavbar
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={() => setIsSidebarOpen((isOpen) => !isOpen)}
        />
        <main className="relative flex flex-col isolate min-h-0 flex-1 overflow-hidden">
          <ProjectSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <div
            className={cn(
              "flex flex-col flex-1 min-h-0 h-full transition-[margin] duration-250 ease-out",
              isSidebarOpen ? "md:ml-[22rem]" : "md:ml-0"
            )}
          >
            {children}
          </div>
        </main>
      </div>
      <ProjectDialogs />
    </ProjectProvider>
  )
}

export { EditorLayout }
