"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProjects } from "@/lib/project-context"

export function NewProjectButton() {
  const { openDialog } = useProjects()

  return (
    <Button
      type="button"
      size="lg"
      className="gap-2"
      onClick={() => openDialog("create")}
    >
      <Plus className="h-4 w-4" />
      New Project
    </Button>
  )
}
