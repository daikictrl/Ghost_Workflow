"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import { useProjects } from "@/lib/project-context"
import { cn } from "@/lib/utils"
import { Sparkles, X, Send, FileText, Download, Play, Bot, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStorage, useOthers, useSelf, useMutation } from "@liveblocks/react/suspense"
import { AiStatusMessageSchema, AiChatMessageSchema, AiChatMessage } from "@/types/tasks"
import { useRealtimeRun } from "@trigger.dev/react-hooks"
import type { designAgentTask } from "@/trigger/design-agent"
import type { generateSpecTask } from "@/trigger/generate-spec"
import { SpecPreviewModal } from "@/components/editor/spec-preview-modal"

interface AiSidebarProps {
  projectId: string
}

interface ProjectSpec {
  id: string
  filename: string
  createdAt: string
}

export function AiSidebar({ projectId }: AiSidebarProps) {
  const { isAiSidebarOpen, toggleAiSidebar } = useProjects()
  const [activeTab, setActiveTab] = useState("architect")
  const [input, setInput] = useState("")
  const [sendError, setSendError] = useState<string | null>(null)

  // Single spec per project
  const [currentSpec, setCurrentSpec] = useState<ProjectSpec | null>(null)
  const [specLoading, setSpecLoading] = useState(false)
  const [specError, setSpecError] = useState<string | null>(null)

  // Spec generation run tracking (mirrors design agent tracking pattern)
  const [specRunId, setSpecRunId] = useState<string | null>(null)
  const [specPublicToken, setSpecPublicToken] = useState<string | null>(null)
  const [isSpecSubmitting, setIsSpecSubmitting] = useState(false)

  // Spec preview modal state
  const [previewSpecId, setPreviewSpecId] = useState<string | null>(null)
  const [previewSpecFilename, setPreviewSpecFilename] = useState<string | null>(null)

  // Local state for active Trigger.dev design agent run tracking
  const [activeRunId, setActiveRunId] = useState<string | null>(null)
  const [publicToken, setPublicToken] = useState<string | null>(null)
  const [isSubmitLoading, setIsSubmitLoading] = useState(false)

  // Liveblocks user, feed, and presence tracking
  const self = useSelf()
  const others = useOthers()
  const statusFeed = useStorage((root) => root["ai-status-feed"]) as any[] | undefined
  const rawChatFeed = useStorage((root) => root["ai-chat"]) as any[] | undefined

  const sendChatMessage = useMutation(({ storage }, message: AiChatMessage) => {
    const chat = storage.get("ai-chat") as any
    if (chat) {
      chat.push(message)
    }
  }, [])

  const clearStatusFeed = useMutation(({ storage }) => {
    const feed = storage.get("ai-status-feed") as any
    if (feed) {
      feed.clear()
    }
  }, [])


  // Hook to track the active Trigger.dev design agent run
  const { run: activeRun } = useRealtimeRun<typeof designAgentTask>(
    activeRunId || undefined,
    {
      accessToken: publicToken || undefined,
      enabled: !!activeRunId && !!publicToken,
    }
  )

  // Hook to track the active Trigger.dev spec generation run
  const { run: specRun } = useRealtimeRun<typeof generateSpecTask>(
    specRunId || undefined,
    {
      accessToken: specPublicToken || undefined,
      enabled: !!specRunId && !!specPublicToken,
    }
  )

  // Centralized terminal status tracking to handle completed runs (including instant completions)
  useEffect(() => {
    if (!activeRun || !activeRunId) return

    const terminalStatuses = ["COMPLETED", "SUCCESS", "FAILED", "CANCELED", "CRASHED", "SYSTEM_FAILURE"]
    if (terminalStatuses.includes(activeRun.status)) {
      console.log(`Design Agent Run finished with status: ${activeRun.status}`)

      // If the run failed, push an assistant message to the ai-chat feed
      const isFailed = ["FAILED", "CANCELED", "CRASHED", "SYSTEM_FAILURE"].includes(activeRun.status)
      if (isFailed) {
        let errorContent = "Generation task failed or was canceled."
        if (activeRun.output && typeof activeRun.output === "object" && "error" in activeRun.output) {
          errorContent = `Generation task failed: ${String((activeRun.output as any).error)}`
        }

        try {
          sendChatMessage({
            id: `chat-error-${Date.now()}`,
            sender: "Archi_Dev",
            role: "assistant",
            content: errorContent,
            timestamp: Date.now(),
          })
        } catch (err) {
          console.error("Failed to push run error message:", err)
        }
      }

      // Reset tracking states
      setActiveRunId(null)
      setPublicToken(null)
    }
  }, [activeRun?.status, activeRunId, sendChatMessage])

  const validatedMessages = (rawChatFeed || [])
    .map((msg) => {
      const parseResult = AiChatMessageSchema.safeParse(msg)
      return parseResult.success ? parseResult.data : null
    })
    .filter((msg): msg is AiChatMessage => msg !== null)

  const latestRawStatus = statusFeed && statusFeed.length > 0 ? statusFeed[statusFeed.length - 1] : null

  let validatedStatus = null
  if (latestRawStatus) {
    const parseResult = AiStatusMessageSchema.safeParse(latestRawStatus)
    if (parseResult.success) {
      validatedStatus = parseResult.data
    }
  }

  const isAiAgentThinking = others.some((other) => other.id === "ai-agent" && other.presence?.thinking)
  const isFeedStatusActive = validatedStatus?.status === "starting" || validatedStatus?.status === "processing"
  const isAiGenerating = isAiAgentThinking || isFeedStatusActive
  const isCurrentlyWorking = isSubmitLoading || !!activeRunId || isAiGenerating

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Fetch the single spec for this project
  const fetchCurrentSpec = useCallback(async () => {
    setSpecLoading(true)
    setSpecError(null)
    try {
      const res = await fetch(`/api/projects/${projectId}/specs`)
      if (!res.ok) throw new Error(`Failed to load spec (${res.status})`)
      const data = await res.json()
      const specList = data.specs as ProjectSpec[]
      // One-spec-per-project: use the first (most recent) spec, or null
      setCurrentSpec(specList.length > 0 ? specList[0] : null)
    } catch (err: unknown) {
      setSpecError(err instanceof Error ? err.message : "Failed to load spec")
    } finally {
      setSpecLoading(false)
    }
  }, [projectId])

  // Load spec when the Specs tab becomes active
  useEffect(() => {
    if (activeTab === "specs") {
      fetchCurrentSpec()
    }
  }, [activeTab, fetchCurrentSpec])

  // Clear spec state when navigating to a different project (isolation)
  useEffect(() => {
    setCurrentSpec(null)
    setSpecError(null)
    setSpecRunId(null)
    setSpecPublicToken(null)
    setIsSpecSubmitting(false)
  }, [projectId])

  // Track spec generation run terminal state
  useEffect(() => {
    if (!specRun || !specRunId) return

    const terminalStatuses = ["COMPLETED", "FAILED", "CANCELED", "CRASHED", "SYSTEM_FAILURE"]
    if (terminalStatuses.includes(specRun.status)) {
      console.log(`Spec generation run finished with status: ${specRun.status}`)

      const isSuccess = specRun.status === "COMPLETED"
      if (isSuccess) {
        // Refresh the spec after a brief delay to allow DB commit propagation
        setTimeout(() => fetchCurrentSpec(), 1500)
      }

      // Reset tracking states
      setSpecRunId(null)
      setSpecPublicToken(null)
    }
  }, [specRun?.status, specRunId, fetchCurrentSpec])

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    // Reset height to compute scrollHeight
    textarea.style.height = "auto"
    
    // Clamp height between 72px (min) and 160px (max)
    const nextHeight = Math.min(Math.max(textarea.scrollHeight, 72), 160)
    textarea.style.height = `${nextHeight}px`
  }, [input])

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [validatedMessages])

  const handleSend = async (textToSend = input) => {
    const trimmed = textToSend.trim()
    if (!trimmed) return

    setSendError(null)
    setIsSubmitLoading(true)

    const userMsg: AiChatMessage = {
      id: `chat-${Math.random().toString(36).substring(7)}`,
      sender: self?.info?.name || "Guest",
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
      userId: self?.id,
    }

    try {
      // 1. Push user message to chat feed and clear status feed
      sendChatMessage(userMsg)
      clearStatusFeed()
      setInput("")
      if (textareaRef.current) {
        textareaRef.current.style.height = "72px"
      }

      // 2. Trigger background generation via design API
      const res = await fetch("/api/ai/design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: trimmed,
          roomId: projectId,
          projectId: projectId,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        throw new Error(errorData.error || `Server returned ${res.status}`)
      }

      const { runId, publicToken: token } = await res.json()
      
      // 3. Store in state for useRealtimeRun tracking
      setActiveRunId(runId)
      setPublicToken(token)
    } catch (err: any) {
      console.error("Failed to submit design request:", err)
      
      // Show errors as messages in the ai-chat feed
      try {
        sendChatMessage({
          id: `chat-error-${Date.now()}`,
          sender: "Archi_Dev",
          role: "assistant",
          content: `Failed to start design generation: ${err.message || String(err)}`,
          timestamp: Date.now(),
        })
      } catch (chatErr) {
        console.error("Failed to push local chat error message:", chatErr)
      }
      
      setSendError(err.message || "Failed to submit request")
      setTimeout(() => setSendError(null), 4000)
    } finally {
      setIsSubmitLoading(false)
    }
  }

  const handleStarterChipClick = (prompt: string) => {
    setInput(prompt)
    textareaRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const isGeneratingSpec = isSpecSubmitting || !!specRunId

  const handleGenerateSpec = async () => {
    setIsSpecSubmitting(true)
    try {
      const nodesRaw = Array.from(
        document.querySelectorAll<HTMLElement>("[data-id]"),
        (el) => ({ id: el.dataset.id })
      )
      const res = await fetch("/api/ai/spec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, roomId: projectId, nodes: nodesRaw, edges: [] }),
      })

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`)
      }

      const { runId, publicToken: token } = await res.json()

      // Start tracking the run — loading stays active until terminal state
      setSpecRunId(runId)
      setSpecPublicToken(token)
    } catch (err) {
      console.error("Failed to trigger spec generation:", err)
      setSpecError("Failed to start spec generation. Please try again.")
      setTimeout(() => setSpecError(null), 4000)
    } finally {
      setIsSpecSubmitting(false)
    }
  }

  const handleSpecPreview = (spec: ProjectSpec) => {
    setPreviewSpecId(spec.id)
    setPreviewSpecFilename(spec.filename)
  }

  const handlePreviewClose = () => {
    setPreviewSpecId(null)
    setPreviewSpecFilename(null)
  }

  return (
    <>
    <aside
      aria-hidden={!isAiSidebarOpen}
      inert={!isAiSidebarOpen ? true : undefined}
      className={cn(
        "fixed top-18 bottom-4 right-4 z-40 flex w-[min(20rem,calc(100vw-2rem))] flex-col rounded-lg border border-surface-border bg-base/95 backdrop-blur-md text-popover-foreground shadow-xl shadow-background/40 transition-transform duration-250 ease-out",
        isAiSidebarOpen
          ? "translate-x-0"
          : "pointer-events-none translate-x-[calc(100%+1rem)]"
      )}
    >
      {/* Header */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-surface-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-ai/10 text-accent-ai border border-accent-ai/20 shadow-inner">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold tracking-tight text-copy-primary">AI Workspace</h2>
            <p className="text-[10px] text-copy-muted">Collaborate with Archi_Dev</p>
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          onClick={toggleAiSidebar}
          aria-label="Close AI workspace"
          className="h-7 w-7 text-copy-muted hover:text-copy-primary hover:bg-bg-subtle rounded-md"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs Layout */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex flex-1 flex-col min-h-0"
      >
        <div className="px-3 pt-3 shrink-0">
          <TabsList className="grid w-full grid-cols-2 bg-bg-surface border border-surface-border p-0.5 rounded-lg h-9">
            <TabsTrigger
              value="architect"
              className={cn(
                "text-xs font-medium py-1.5 rounded-md transition-all cursor-pointer",
                "data-[state=active]:bg-accent-ai/10 data-[state=active]:text-accent-ai-text data-[state=active]:border-accent-ai/20 border border-transparent",
                "data-[state=inactive]:text-copy-muted data-[state=inactive]:hover:text-copy-primary"
              )}
            >
              AI Architect
            </TabsTrigger>
            <TabsTrigger
              value="specs"
              className={cn(
                "text-xs font-medium py-1.5 rounded-md transition-all cursor-pointer",
                "data-[state=active]:bg-accent-ai/10 data-[state=active]:text-accent-ai-text data-[state=active]:border-accent-ai/20 border border-transparent",
                "data-[state=inactive]:text-copy-muted data-[state=inactive]:hover:text-copy-primary"
              )}
            >
              Specs
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Content: AI Architect */}
        <TabsContent
          value="architect"
          className="flex-1 !flex !flex-col min-h-0 w-full mt-2 focus-visible:outline-none overflow-hidden"
        >
          {validatedMessages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-2 px-2 text-center select-none overflow-hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-ai/10 text-accent-ai border border-accent-ai/20 mb-2 shadow-inner">
                <Bot className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-semibold text-copy-primary mb-0.5">Architecture Agent</h3>
              <p className="text-[11px] text-copy-muted max-w-[200px] leading-snug mb-3.5">
                I generate system architectures and can modify your current canvas design.
              </p>

              {/* Starter Prompt Chips */}
              <div className="flex flex-col gap-1.5 w-full max-w-[240px]">
                <p className="text-[9px] uppercase tracking-wider font-semibold text-copy-muted text-left mb-0.5 px-1">
                  Suggested Prompts
                </p>
                <button
                  onClick={() => handleStarterChipClick("Design an e-commerce backend")}
                  className="w-full text-left text-[11px] px-2.5 py-1.5 bg-bg-subtle hover:bg-bg-elevated border border-surface-border hover:border-border-subtle rounded-lg text-accent-ai-text transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Design an e-commerce backend
                </button>
                <button
                  onClick={() => handleStarterChipClick("Create a chat app architecture")}
                  className="w-full text-left text-[11px] px-2.5 py-1.5 bg-bg-subtle hover:bg-bg-elevated border border-surface-border hover:border-border-subtle rounded-lg text-accent-ai-text transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Create a chat app architecture
                </button>
                <button
                  onClick={() => handleStarterChipClick("Build a CI/CD pipeline")}
                  className="w-full text-left text-[11px] px-2.5 py-1.5 bg-bg-subtle hover:bg-bg-elevated border border-surface-border hover:border-border-subtle rounded-lg text-accent-ai-text transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Build a CI/CD pipeline
                </button>
              </div>
            </div>
          ) : (
            <ScrollArea className="flex-1 min-h-0 w-full">
              <div className="flex flex-col gap-3 px-4 py-4 w-full min-w-0">
                {validatedMessages.map((msg) => {
                  const isOwnMessage = msg.role === "user" && msg.userId === self?.id
                  const isAssistant = msg.role === "assistant"
                  const timeString = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  
                  return (
                    <div
                      key={msg.id}
                      className={cn(
                        "flex flex-col max-w-[85%] min-w-0 w-full",
                        isOwnMessage ? "self-end" : "self-start"
                      )}
                    >
                      {!isOwnMessage && (
                        <span className={cn(
                          "text-[10px] font-semibold mb-0.5 ml-1 select-none",
                          isAssistant ? "text-accent-ai-text" : "text-copy-muted"
                        )}>
                          {isAssistant ? "Archi_Dev" : msg.sender}
                        </span>
                      )}
                      <div
                        className={cn(
                          "flex flex-col rounded-2xl p-3 text-xs leading-normal select-text shadow-sm min-w-0 w-full",
                          msg.role === "user"
                            ? "bg-[#62C073] text-[#080809] font-medium"
                            : "bg-bg-elevated border border-surface-border text-copy-primary",
                          isOwnMessage ? "rounded-tr-none" : "rounded-tl-none"
                        )}
                      >
                        <p className="whitespace-pre-wrap break-words [word-break:break-word] w-full overflow-hidden">{msg.content}</p>
                        <span className={cn(
                          "text-[9px] mt-1.5 self-end select-none",
                          msg.role === "user" ? "text-[#080809]/70" : "text-copy-muted"
                        )}>
                          {timeString}
                        </span>
                      </div>
                    </div>
                  )
                })}

                {isCurrentlyWorking && (
                  <div className="flex flex-col max-w-[85%] min-w-0 self-start w-full">
                    <span className="text-[10px] font-semibold text-accent-ai-text mb-0.5 ml-1 select-none">
                      Archi_Dev
                    </span>
                    <div className="bg-bg-elevated border border-surface-border rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1 shadow-sm w-full min-w-0">
                      <span className="h-1.5 w-1.5 bg-accent-ai-text rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="h-1.5 w-1.5 bg-accent-ai-text rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="h-1.5 w-1.5 bg-accent-ai-text rounded-full animate-bounce"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          )}

          {/* Chat Input Footer */}
          <div className="shrink-0 border-t border-surface-border p-3 bg-bg-surface/50">
            {sendError && (
              <div className="mb-2 px-2.5 py-1.5 rounded-lg bg-state-error/10 border border-state-error/20 flex items-center gap-2 animate-in fade-in duration-200">
                <span className="text-[10px] text-state-error font-medium leading-tight">
                  {sendError}
                </span>
              </div>
            )}
            {isCurrentlyWorking && (
              <div className="mb-2 px-2.5 py-1.5 rounded-lg bg-[#080809] border border-[#62C073]/30 flex items-center gap-2 animate-in fade-in duration-200 select-none">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62C073] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#62C073]"></span>
                </span>
                <span className="text-[10px] text-[#62C073] font-medium leading-tight truncate">
                  {validatedStatus?.text || "Archi_Dev is starting..."}
                </span>
              </div>
            )}
            <div className="relative flex items-start">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isCurrentlyWorking ? "AI is generating architecture..." : "Ask AI to design or modify..."}
                disabled={isCurrentlyWorking}
                className={cn(
                  "w-full rounded-lg border border-surface-border bg-bg-base pl-3 pr-11 py-2 text-xs",
                  "focus:border-accent-ai focus:outline-none focus:ring-1 focus:ring-accent-ai",
                  "text-copy-primary placeholder:text-copy-muted resize-none min-h-[72px] max-h-[160px] leading-relaxed transition-all",
                  isCurrentlyWorking && "opacity-60 cursor-not-allowed"
                )}
              />
              <Button
                type="button"
                onClick={() => handleSend()}
                className={cn(
                  "absolute right-2.5 bottom-2.5 h-7 w-7 rounded-md bg-bg-subtle text-copy-muted hover:text-copy-primary hover:bg-bg-elevated transition-all border border-surface-border cursor-pointer",
                  (input.trim() && !isCurrentlyWorking) && "bg-[#62C073] hover:bg-[#52b063] text-[#080809] border-transparent shadow-sm hover:scale-[1.02]",
                  isCurrentlyWorking && "bg-[#62C073]/40 text-[#080809]/40 cursor-not-allowed border-transparent"
                )}
                disabled={isCurrentlyWorking || !input.trim()}
                aria-label={isCurrentlyWorking ? "AI is generating" : "Send message"}
              >
                {isCurrentlyWorking ? (
                  <svg className="animate-spin h-3.5 w-3.5 text-[#080809]/50" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )}
              </Button>
            </div>
            <div className="mt-2 text-[9px] text-copy-muted px-1 flex items-center justify-between select-none font-sans">
              <span>Press Enter to send, Shift+Enter for new line</span>
              <span className="font-mono text-[8px]">GHOST-AI v1.1</span>
            </div>
          </div>
        </TabsContent>

        {/* Tab Content: Specs */}
        <TabsContent
          value="specs"
          className="flex-1 !flex !flex-col p-4 min-h-0 mt-0 focus-visible:outline-none"
        >
          {/* Generate Spec Action */}
          <Button
            type="button"
            onClick={handleGenerateSpec}
            disabled={isGeneratingSpec}
            className="w-full text-xs font-semibold py-2.5 bg-accent-ai hover:bg-accent-ai/90 text-white rounded-lg shadow-md border border-accent-ai/20 transition-all duration-200 shrink-0 mb-4 gap-2 cursor-pointer"
          >
            {isGeneratingSpec ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>{currentSpec ? "Regenerating Spec..." : "Generating Spec..."}</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5" />
                <span>{currentSpec ? "Regenerate Tech Spec" : "Generate Tech Spec"}</span>
              </>
            )}
          </Button>

          {/* Spec Generation Status */}
          {isGeneratingSpec && (
            <div className="mb-3 px-3 py-2 rounded-lg bg-accent-ai/5 border border-accent-ai/20 flex items-center gap-2.5 animate-in fade-in duration-200 select-none shrink-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-ai opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-ai"></span>
              </span>
              <span className="text-[10px] text-accent-ai-text font-medium leading-tight">
                Archi_Dev is generating your spec…
              </span>
            </div>
          )}

          {/* Error State */}
          {specError && !specLoading && (
            <div className="mb-3 px-3 py-2 rounded-lg bg-state-error/10 border border-state-error/20 flex items-center gap-2 animate-in fade-in duration-200 shrink-0">
              <AlertCircle className="h-3.5 w-3.5 text-state-error shrink-0" />
              <span className="text-[10px] text-state-error font-medium leading-tight">{specError}</span>
            </div>
          )}

          {/* Single Spec Card or Empty State */}
          <div className="flex-1 flex flex-col min-h-0">
            {specLoading && (
              <div className="flex flex-col items-center justify-center flex-1 gap-2">
                <Loader2 className="h-5 w-5 text-accent-ai animate-spin" />
                <p className="text-[10px] text-copy-muted">Loading spec…</p>
              </div>
            )}

            {!specLoading && !currentSpec && !isGeneratingSpec && (
              <div className="flex flex-col items-center justify-center flex-1 gap-2 text-center select-none">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-bg-elevated border border-surface-border text-copy-muted">
                  <FileText className="h-4 w-4" />
                </div>
                <p className="text-[11px] text-copy-muted max-w-[180px] leading-snug">
                  No spec yet. Generate one from your canvas design.
                </p>
              </div>
            )}

            {!specLoading && currentSpec && (
              <div
                className="group flex items-center gap-2.5 rounded-xl border border-surface-border bg-bg-elevated hover:border-border-subtle hover:bg-bg-subtle transition-all duration-150 p-3 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Preview ${currentSpec.filename}`}
                onClick={() => handleSpecPreview(currentSpec)}
                onKeyDown={(e) => e.key === "Enter" && handleSpecPreview(currentSpec)}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-ai/10 text-accent-ai border border-accent-ai/20 group-hover:bg-accent-ai/15 transition-all">
                  <FileText className="h-4 w-4" />
                </div>

                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[11px] font-medium text-copy-primary truncate">
                    Technical Specification
                  </span>
                  <span className="text-[9px] text-copy-muted">
                    {new Date(currentSpec.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" · "}
                    {new Date(currentSpec.createdAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <button
                  type="button"
                  aria-label="Download spec"
                  onClick={(e) => {
                    e.stopPropagation()
                    const a = document.createElement("a")
                    a.href = `/api/projects/${projectId}/specs/${currentSpec.id}/download`
                    a.download = currentSpec.filename
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                  }}
                  className="shrink-0 h-7 w-7 flex items-center justify-center rounded-md text-copy-muted hover:text-copy-primary hover:bg-bg-elevated transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </aside>

    {/* Spec Preview Modal — rendered outside the sidebar so it escapes its stacking context */}
    {previewSpecId && (
      <SpecPreviewModal
        projectId={projectId}
        specId={previewSpecId}
        specFilename={previewSpecFilename}
        onClose={handlePreviewClose}
      />
    )}
  </>
  )
}
