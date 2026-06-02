"use client"

import { useState } from "react"
import { useProjects } from "@/lib/project-context"
import { cn } from "@/lib/utils"
import { Sparkles, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoomWorkspaceProps {
  project: {
    id: string
    name: string
    description?: string | null
  }
}

export function RoomWorkspace({ project }: RoomWorkspaceProps) {
  const { isAiSidebarOpen } = useProjects()
  const [input, setInput] = useState("")

  return (
    <div className="relative flex flex-1 min-h-0 overflow-hidden bg-background">
      {/* Central Canvas Area Placeholder */}
      <div
        className={cn(
          "flex-1 flex flex-col items-center justify-center p-8 bg-zinc-950/40 relative transition-[padding] duration-250 ease-out",
          isAiSidebarOpen ? "md:pr-[22rem]" : "md:pr-0"
        )}
      >
        <div className="max-w-md text-center space-y-4 pointer-events-none select-none">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent-primary-dim text-accent-primary border border-accent-primary/20 mb-2">
            <span className="text-[10px] font-bold tracking-wider uppercase">Canvas Workspace</span>
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {project.name}
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            This is the real-time collaborative canvas. Nodes, connections, and system design tools will be rendered here.
          </p>
        </div>
      </div>

      {/* Right Sidebar (AI Chat Assistant Placeholder) */}
      <aside
        className={cn(
          "fixed top-18 bottom-4 right-4 z-40 flex w-[min(20rem,calc(100vw-2rem))] flex-col rounded-lg border border-border bg-popover/85 backdrop-blur-md text-popover-foreground shadow-xl shadow-background/40 transition-transform duration-250 ease-out",
          isAiSidebarOpen
            ? "translate-x-0"
            : "pointer-events-none translate-x-[calc(100%+1rem)]"
        )}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent-ai" />
            <h2 className="text-sm font-medium">AI Assistant</h2>
          </div>
        </div>

        {/* Chat Messages / Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-sm text-muted-foreground select-none overflow-y-auto">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-ai/10 text-accent-ai border border-accent-ai/20 mb-4">
            <MessageSquare className="h-5 w-5" />
          </div>
          <p className="font-medium text-foreground mb-1">AI Chat Integration</p>
          <p className="text-xs max-w-[200px] leading-normal">
            This panel will contain interactive chat, recommendations, and graph generation commands.
          </p>
        </div>

        {/* AI Chat Input Area */}
        <div className="shrink-0 border-t border-border p-3 bg-background/50">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (!input.trim()) return
              console.log("Send query to AI:", input)
              setInput("")
            }}
            className="relative flex items-start"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  if (input.trim()) {
                    console.log("Send query to AI:", input)
                    setInput("")
                  }
                }
              }}
              placeholder="Ask AI to design or modify..."
              rows={3}
              className="w-full rounded-lg border border-border bg-background pl-3 pr-10 py-2 text-xs focus:border-accent-ai focus:outline-none focus:ring-1 focus:ring-accent-ai text-foreground placeholder:text-muted-foreground resize-none min-h-[60px] max-h-32"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon-xs"
              className={cn(
                "absolute right-1.5 bottom-1.5 h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-transparent",
                input.trim() && "text-accent-ai hover:text-accent-ai"
              )}
              disabled={!input.trim()}
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
          <div className="mt-1.5 text-[10px] text-muted-foreground px-1 flex items-center justify-between select-none">
            <span>Press Enter to send, Shift+Enter for new line</span>
            <span className="font-mono text-[9px]">v1.0</span>
          </div>
        </div>
      </aside>
    </div>
  )
}
