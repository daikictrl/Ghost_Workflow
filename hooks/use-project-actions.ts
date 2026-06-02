import { useProjects } from "@/lib/project-context"

export function useProjectActions() {
  const {
    projects,
    openDialog,
    closeDialog,
    createProject,
    renameProject,
    deleteProject,
    activeDialog,
    selectedProject,
    isLoading,
  } = useProjects()

  return {
    projects,
    openDialog,
    closeDialog,
    createProject,
    renameProject,
    deleteProject,
    activeDialog,
    selectedProject,
    isLoading,
  }
}
