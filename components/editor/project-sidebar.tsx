"use client"

import { Plus, X, Folder, Pencil, Trash2 } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useProjectActions } from "@/hooks/use-project-actions"

type ProjectSidebarProps = {
  isOpen: boolean
  onClose: () => void
  className?: string
}

function EmptyProjectState() {
  return (
    <div className="flex h-full min-h-48 items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 px-5 text-center text-sm text-muted-foreground">
      No projects yet.
    </div>
  )
}

function ProjectSidebar({ isOpen, onClose, className }: ProjectSidebarProps) {
  const { projects, openDialog } = useProjectActions()
  const params = useParams()
  const router = useRouter()
  const roomId = params?.roomId as string | undefined

  const myProjects = projects.filter((p) => p.isOwned)
  const sharedProjects = projects.filter((p) => !p.isOwned)

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-xs md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "fixed top-18 bottom-4 left-4 z-40 flex w-[min(20rem,calc(100vw-2rem))] flex-col rounded-lg border border-border bg-popover text-popover-foreground shadow-xl shadow-background/40 transition-transform duration-200 ease-out",
          isOpen
            ? "translate-x-0"
            : "pointer-events-none -translate-x-[calc(100%+1rem)]",
          className
        )}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
          <h2 className="text-sm font-medium">Projects</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Close projects sidebar"
            onClick={onClose}
          >
            <X />
          </Button>
        </div>

        <Tabs defaultValue="my-projects" className="min-h-0 flex-1 gap-0">
          <div className="border-b border-border px-4 py-3">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="min-h-0 flex-1">
            <div className="p-4">
              <TabsContent value="my-projects" className="mt-0">
                {myProjects.length === 0 ? (
                  <EmptyProjectState />
                ) : (
                  <div className="space-y-1">
                    {myProjects.map((project) => {
                      const isActive = project.id === roomId
                      return (
                        <div
                          key={project.id}
                          className={cn(
                            "group relative flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors select-none cursor-pointer border border-transparent",
                            isActive
                              ? "bg-muted/80 text-foreground border-border font-semibold shadow-xs"
                              : "text-secondary-foreground hover:bg-muted/40"
                          )}
                          onClick={() => {
                            if (!isActive) {
                              router.push(`/editor/${project.id}`)
                            }
                          }}
                        >
                          <div className="flex items-center gap-2 min-w-0 pr-12">
                            <Folder className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <span className="truncate">{project.name}</span>
                          </div>
                          <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-xs"
                              onClick={(e) => {
                                e.stopPropagation()
                                openDialog("rename", project)
                              }}
                              aria-label={`Rename project ${project.name}`}
                            >
                              <Pencil className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-xs"
                              onClick={(e) => {
                                e.stopPropagation()
                                openDialog("delete", project)
                              }}
                              aria-label={`Delete project ${project.name}`}
                            >
                              <Trash2 className="h-3 w-3 text-destructive hover:text-destructive/80" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="shared" className="mt-0">
                {sharedProjects.length === 0 ? (
                  <EmptyProjectState />
                ) : (
                  <div className="space-y-1">
                    {sharedProjects.map((project) => {
                      const isActive = project.id === roomId
                      return (
                        <div
                          key={project.id}
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors select-none cursor-pointer border border-transparent",
                            isActive
                              ? "bg-muted/80 text-foreground border-border font-semibold shadow-xs"
                              : "text-secondary-foreground hover:bg-muted/40"
                          )}
                          onClick={() => {
                            if (!isActive) {
                              router.push(`/editor/${project.id}`)
                            }
                          }}
                        >
                          <Folder className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <span className="truncate">{project.name}</span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>

        <div className="shrink-0 border-t border-border p-4">
          <Button
            type="button"
            className="w-full"
            onClick={() => openDialog("create")}
          >
            <Plus />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}

export { ProjectSidebar }
