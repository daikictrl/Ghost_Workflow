"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProjects } from "@/lib/project-context"

export default function EditorPage() {
  const { openDialog } = useProjects()

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-background">
      <div className="max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Create a project or open an existing one
          </h1>
          <p className="text-sm text-muted-foreground">
            Start a new architecture workspace, or choose a project from the sidebar.
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            type="button"
            size="lg"
            className="gap-2"
            onClick={() => openDialog("create")}
          >
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  )
}
