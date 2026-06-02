"use client"

import React, { createContext, useContext, useState } from "react"

export interface Project {
  id: string
  name: string
  slug: string
  isOwned: boolean
  createdAt: string
}

interface ProjectContextType {
  projects: Project[]
  activeDialog: "create" | "rename" | "delete" | null
  selectedProject: Project | null
  isLoading: boolean
  openDialog: (type: "create" | "rename" | "delete", project?: Project) => void
  closeDialog: () => void
  createProject: (name: string, slug: string) => Promise<void>
  renameProject: (id: string, name: string, slug: string) => Promise<void>
  deleteProject: (id: string) => Promise<void>
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj_1",
    name: "E-Commerce Microservices",
    slug: "e-commerce-microservices",
    isOwned: true,
    createdAt: "2026-05-15T10:00:00Z",
  },
  {
    id: "proj_2",
    name: "Real-time Chat App",
    slug: "real-time-chat-app",
    isOwned: true,
    createdAt: "2026-05-20T14:30:00Z",
  },
  {
    id: "proj_3",
    name: "Data Analytics Pipeline",
    slug: "data-analytics-pipeline",
    isOwned: true,
    createdAt: "2026-05-28T09:15:00Z",
  },
  {
    id: "proj_4",
    name: "Company Landing Page",
    slug: "company-landing-page",
    isOwned: false,
    createdAt: "2026-05-10T12:00:00Z",
  },
  {
    id: "proj_5",
    name: "Auth Service Architecture",
    slug: "auth-service-architecture",
    isOwned: false,
    createdAt: "2026-05-22T16:45:00Z",
  },
]

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS)
  const [activeDialog, setActiveDialog] = useState<"create" | "rename" | "delete" | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(false)

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
    await new Promise((resolve) => setTimeout(resolve, 500))
    const newProject: Project = {
      id: `proj_${Date.now()}`,
      name,
      slug,
      isOwned: true,
      createdAt: new Date().toISOString(),
    }
    setProjects((prev) => [newProject, ...prev])
    setIsLoading(false)
    closeDialog()
  }

  const renameProject = async (id: string, name: string, slug: string) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setProjects((prev) =>
      prev.map((proj) => (proj.id === id ? { ...proj, name, slug } : proj))
    )
    setIsLoading(false)
    closeDialog()
  }

  const deleteProject = async (id: string) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setProjects((prev) => prev.filter((proj) => proj.id !== id))
    setIsLoading(false)
    closeDialog()
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        activeDialog,
        selectedProject,
        isLoading,
        openDialog,
        closeDialog,
        createProject,
        renameProject,
        deleteProject,
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
