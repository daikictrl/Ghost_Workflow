"use client"

import React, { useState } from "react"
import { slugify, type Project } from "@/lib/project-context"
import { useProjectActions } from "@/hooks/use-project-actions"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function CreateForm({
  onClose,
  onCreate,
  isLoading,
}: {
  onClose: () => void
  onCreate: (name: string, slug: string) => Promise<void>
  isLoading: boolean
}) {
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
    setSlug(slugify(value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    await onCreate(name.trim(), slug)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="create-name" className="text-xs font-medium text-muted-foreground">
          Project Name
        </label>
        <Input
          id="create-name"
          type="text"
          placeholder="e.g. My Awesome Project"
          value={name}
          onChange={handleNameChange}
          disabled={isLoading}
          required
          autoFocus
        />
      </div>
      <div className="rounded-lg bg-muted/30 p-3 border border-border/40">
        <div className="text-xs text-muted-foreground">Slug Preview</div>
        <div className="mt-1 font-mono text-xs break-all text-secondary-foreground select-all">
          editor/{slug || "..."}
        </div>
      </div>
      <DialogFooter className="mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading || !name.trim()}>
          {isLoading ? "Creating..." : "Create Project"}
        </Button>
      </DialogFooter>
    </form>
  )
}

function CreateProjectDialog() {
  const { activeDialog, closeDialog, createProject, isLoading } = useProjectActions()

  return (
    <Dialog open={activeDialog === "create"} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Start a new architecture workspace.
          </DialogDescription>
        </DialogHeader>
        {activeDialog === "create" && (
          <CreateForm
            onClose={closeDialog}
            onCreate={createProject}
            isLoading={isLoading}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

interface RenameFormProps {
  project: Project
  onClose: () => void
  onRename: (id: string, name: string, slug: string) => Promise<void>
  isLoading: boolean
}

function RenameForm({ project, onClose, onRename, isLoading }: RenameFormProps) {
  const [name, setName] = useState(project.name)
  const [slug, setSlug] = useState(project.slug)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
    setSlug(slugify(value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    await onRename(project.id, name.trim(), slug)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="rename-name" className="text-xs font-medium text-muted-foreground">
          New Name
        </label>
        <Input
          id="rename-name"
          type="text"
          value={name}
          onChange={handleNameChange}
          disabled={isLoading}
          required
          autoFocus
        />
      </div>
      <div className="rounded-lg bg-muted/30 p-3 border border-border/40">
        <div className="text-xs text-muted-foreground">Slug Preview</div>
        <div className="mt-1 font-mono text-xs break-all text-secondary-foreground select-all">
          editor/{slug || "..."}
        </div>
      </div>
      <DialogFooter className="mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading || !name.trim() || name === project.name}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </DialogFooter>
    </form>
  )
}

function RenameProjectDialog() {
  const { activeDialog, selectedProject, closeDialog, renameProject, isLoading } = useProjectActions()

  return (
    <Dialog open={activeDialog === "rename"} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Project</DialogTitle>
          <DialogDescription>
            Rename the project &quot;{selectedProject?.name}&quot;.
          </DialogDescription>
        </DialogHeader>
        {selectedProject && activeDialog === "rename" && (
          <RenameForm
            project={selectedProject}
            onClose={closeDialog}
            onRename={renameProject}
            isLoading={isLoading}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

function DeleteProjectDialog() {
  const { activeDialog, selectedProject, closeDialog, deleteProject, isLoading } = useProjectActions()

  const handleDelete = async () => {
    if (!selectedProject) return
    await deleteProject(selectedProject.id)
  }

  return (
    <Dialog open={activeDialog === "delete"} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Project</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete &quot;{selectedProject?.name}&quot;? This action cannot be undone and will permanently remove this project.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={closeDialog}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete Project"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function ProjectDialogs() {
  return (
    <>
      <CreateProjectDialog />
      <RenameProjectDialog />
      <DeleteProjectDialog />
    </>
  )
}
