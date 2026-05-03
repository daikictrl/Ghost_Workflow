"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

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
  return (
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
              <EmptyProjectState />
            </TabsContent>
            <TabsContent value="shared" className="mt-0">
              <EmptyProjectState />
            </TabsContent>
          </div>
        </ScrollArea>
      </Tabs>

      <div className="shrink-0 border-t border-border p-4">
        <Button type="button" className="w-full">
          <Plus />
          New Project
        </Button>
      </div>
    </aside>
  )
}

export { ProjectSidebar }
