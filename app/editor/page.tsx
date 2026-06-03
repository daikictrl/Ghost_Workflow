import { NewProjectButton } from "@/components/editor/new-project-button"

export default function EditorPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-background overflow-y-auto h-full">
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
          <NewProjectButton />
        </div>
      </div>
    </div>
  )
}
