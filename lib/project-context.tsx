"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export interface Project {
  id: string
  name: string
  slug: string
  isOwned: boolean
  createdAt: string
  status?: string
  description?: string | null
}

interface ProjectContextType {
  projects: Project[]
  activeDialog: "create" | "rename" | "delete" | null
  selectedProject: Project | null
  isLoading: boolean
  isAiSidebarOpen: boolean
  openDialog: (type: "create" | "rename" | "delete", project?: Project) => void
  closeDialog: () => void
  createProject: (name: string, slug: string) => Promise<void>
  renameProject: (id: string, name: string, slug: string) => Promise<void>
  deleteProject: (id: string) => Promise<void>
  setAiSidebarOpen: (open: boolean) => void
  toggleAiSidebar: () => void
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

export function ProjectProvider({
  children,
  initialProjects = [],
}: {
  children: React.ReactNode
  initialProjects?: Project[]
}) {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [activeDialog, setActiveDialog] = useState<"create" | "rename" | "delete" | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false)

  const toggleAiSidebar = () => setIsAiSidebarOpen((prev) => !prev)

  // Keep state in sync with server-side page updates
  useEffect(() => {
    setProjects(initialProjects)
  }, [initialProjects])

  const openDialog = (type: "create" | "rename" | "delete", project?: Project) => {
    setSelectedProject(project || null)
    setActiveDialog(type)
  }

  const closeDialog = () => {
    setActiveDialog(null)
    setSelectedProject(null)
  }

  const createProject = async (name: string, slug: string) => {
    setIsLoading(true)
    try {
      // Generate client-side custom ID (slugify(name)-suffix) to align with Liveblocks room ID
      const randomSuffix = Math.random().toString(36).substring(2, 8)
      const projectId = `${slugify(name)}-${randomSuffix}`

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: projectId, name }),
      })
      if (!res.ok) {
        throw new Error("Failed to create project")
      }
      const data = await res.json()
      setProjects((prev) => [data, ...prev])
      closeDialog()
      router.refresh()
    } catch (error) {
      console.error("Failed to create project:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const renameProject = async (id: string, name: string, slug: string) => {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      })
      if (!res.ok) {
        throw new Error("Failed to rename project")
      }
      const data = await res.json()
      setProjects((prev) =>
        prev.map((proj) => (proj.id === id ? data : proj))
      )
      closeDialog()
      router.refresh()
    } catch (error) {
      console.error("Failed to rename project:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteProject = async (id: string) => {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) {
        throw new Error("Failed to delete project")
      }
      setProjects((prev) => prev.filter((proj) => proj.id !== id))
      closeDialog()
      router.refresh()
    } catch (error) {
      console.error("Failed to delete project:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        activeDialog,
        selectedProject,
        isLoading,
        isAiSidebarOpen,
        openDialog,
        closeDialog,
        createProject,
        renameProject,
        deleteProject,
        setAiSidebarOpen: setIsAiSidebarOpen,
        toggleAiSidebar,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider")
  }
  return context
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}
