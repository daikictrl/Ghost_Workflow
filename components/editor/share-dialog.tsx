"use client"

import React, { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, Copy, Check, UserMinus, User, Mail, AlertCircle } from "lucide-react"

interface OwnerUser {
  id: string
  email: string
  displayName: string
  avatarUrl: string | null
}

interface CollaboratorUser {
  id: string
  email: string
  displayName: string | null
  avatarUrl: string | null
  createdAt: string
}

interface ShareDialogProps {
  isOpen: boolean
  onClose: () => void
  projectId: string
}

export function ShareDialog({ isOpen, onClose, projectId }: ShareDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isOwner, setIsOwner] = useState(false)
  const [owner, setOwner] = useState<OwnerUser | null>(null)
  const [collaborators, setCollaborators] = useState<CollaboratorUser[]>([])

  const [inviteEmail, setInviteEmail] = useState("")
  const [isInviting, setIsInviting] = useState(false)
  const [inviteError, setInviteError] = useState<string | null>(null)
  const [inviteSuccess, setInviteSuccess] = useState(false)

  const [removingEmail, setRemovingEmail] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Fetch collaborators list
  const fetchCollaborators = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/projects/${projectId}/collaborators`)
      if (!response.ok) {
        throw new Error("Failed to load project access list")
      }
      const data = await response.json()
      setIsOwner(data.isOwner)
      setOwner(data.owner)
      setCollaborators(data.collaborators)
    } catch (err: any) {
      console.error(err)
      setError(err?.message || "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen && projectId) {
      fetchCollaborators()
      // Reset invitation status
      setInviteEmail("")
      setInviteError(null)
      setInviteSuccess(false)
    }
  }, [isOpen, projectId])

  // Handle invitation submission
  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inviteEmail.trim() || isInviting) return

    setIsInviting(true)
    setInviteError(null)
    setInviteSuccess(false)

    try {
      const response = await fetch(`/api/projects/${projectId}/collaborators`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inviteEmail.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to invite collaborator")
      }

      setInviteSuccess(true)
      setInviteEmail("")
      
      // Update local state by appending newly invited collaborator
      const newCollab: CollaboratorUser = {
        id: data.id,
        email: data.email,
        displayName: data.displayName,
        avatarUrl: data.avatarUrl,
        createdAt: data.createdAt,
      }
      setCollaborators((prev) => [...prev, newCollab])

      // Auto-clear success message after 3 seconds
      setTimeout(() => {
        setInviteSuccess(false)
      }, 3000)
    } catch (err: any) {
      console.error(err)
      setInviteError(err?.message || "Something went wrong")
    } finally {
      setIsInviting(false)
    }
  }

  // Handle collaborator removal
  const handleRemoveCollaborator = async (email: string) => {
    if (removingEmail || !isOwner) return

    // Show warning prompt/confirmation or perform immediately depending on guidelines. 
    // The spec does not mandate a modal confirm, let's process and provide loading states.
    setRemovingEmail(email)
    try {
      const response = await fetch(`/api/projects/${projectId}/collaborators`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to remove collaborator")
      }

      // Remove from local array
      setCollaborators((prev) => prev.filter((c) => c.email.toLowerCase() !== email.toLowerCase()))
    } catch (err: any) {
      console.error(err)
      alert(err?.message || "Failed to remove collaborator")
    } finally {
      setRemovingEmail(null)
    }
  }

  // Handle Copy Link
  const handleCopyLink = async () => {
    if (copied) return
    try {
      const projectUrl = `${window.location.origin}/editor/${projectId}`
      await navigator.clipboard.writeText(projectUrl)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Copy failed:", err)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[420px] gap-5">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Share project</DialogTitle>
          <DialogDescription className="text-xs">
            Manage who can view and edit this workflow architecture workspace.
          </DialogDescription>
        </DialogHeader>

        {/* Link sharing / copying section */}
        <div className="space-y-2">
          <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider select-none">
            Project Link
          </label>
          <div className="flex gap-2">
            <Input
              type="text"
              readOnly
              value={typeof window !== "undefined" ? `${window.location.origin}/editor/${projectId}` : `/editor/${projectId}`}
              className="text-xs h-8 bg-muted/40 font-mono text-muted-foreground select-all focus-visible:ring-0"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="h-8 gap-1.5 px-3 min-w-[90px] border-border text-xs"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy link</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Invite section - visible only to Owners */}
        {isOwner && (
          <div className="space-y-2 border-t border-border pt-4">
            <label htmlFor="invite-email" className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider select-none">
              Invite collaborator
            </label>
            <form onSubmit={handleInvite} className="flex gap-2">
              <Input
                id="invite-email"
                type="email"
                placeholder="collaborator@example.com"
                value={inviteEmail}
                onChange={(e) => {
                  setInviteEmail(e.target.value)
                  if (inviteError) setInviteError(null)
                }}
                disabled={isInviting}
                required
                className="text-xs h-8 focus:border-primary"
              />
              <Button type="submit" disabled={isInviting || !inviteEmail.trim()} size="sm" className="h-8 px-4 text-xs">
                {isInviting ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  "Invite"
                )}
              </Button>
            </form>

            {/* Error or Success Feedback */}
            {inviteError && (
              <div className="flex items-center gap-1.5 text-xs text-destructive mt-1 bg-destructive/5 p-2 rounded-lg border border-destructive/10 animate-fade-in">
                <AlertCircle className="h-3.5 w-3.5" />
                <span className="truncate">{inviteError}</span>
              </div>
            )}
            {inviteSuccess && (
              <div className="flex items-center gap-1.5 text-xs text-green-500 mt-1 bg-green-500/5 p-2 rounded-lg border border-green-500/10 animate-fade-in">
                <Check className="h-3.5 w-3.5" />
                <span>Collaborator added successfully!</span>
              </div>
            )}
          </div>
        )}

        {/* Member Access List */}
        <div className="space-y-2.5 border-t border-border pt-4">
          <h4 className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider select-none">
            People with access
          </h4>

          {isLoading ? (
            <div className="flex h-20 items-center justify-center">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center p-4 border border-dashed rounded-lg border-destructive/20 bg-destructive/5 text-destructive">
              <AlertCircle className="h-5 w-5 mb-1" />
              <p className="text-xs">{error}</p>
            </div>
          ) : (
            <ScrollArea className="max-h-[180px] pr-1">
              <div className="space-y-3">
                {/* Project Owner */}
                {owner && (
                  <div className="flex items-center justify-between gap-3 p-1 rounded-lg">
                    <div className="flex items-center gap-3 min-w-0">
                      {owner.avatarUrl ? (
                        <img
                          src={owner.avatarUrl}
                          alt={owner.displayName}
                          className="h-8 w-8 rounded-full border border-border shrink-0 select-none pointer-events-none"
                        />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground shrink-0 border border-border select-none">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-foreground truncate">
                          {owner.displayName}
                        </div>
                        <div className="text-[10px] text-muted-foreground truncate">
                          {owner.email}
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary select-none shrink-0 uppercase tracking-wider">
                      Owner
                    </span>
                  </div>
                )}

                {/* Collaborators */}
                {collaborators.map((collab) => (
                  <div
                    key={collab.id}
                    className="flex items-center justify-between gap-3 p-1 rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {collab.avatarUrl ? (
                        <img
                          src={collab.avatarUrl}
                          alt={collab.displayName || collab.email}
                          className="h-8 w-8 rounded-full border border-border shrink-0 select-none pointer-events-none"
                        />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground shrink-0 border border-border select-none">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-foreground truncate">
                          {collab.displayName || collab.email}
                        </div>
                        {collab.displayName && (
                          <div className="text-[10px] text-muted-foreground truncate">
                            {collab.email}
                          </div>
                        )}
                      </div>
                    </div>

                    {isOwner && (
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => handleRemoveCollaborator(collab.email)}
                        disabled={removingEmail === collab.email}
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0 h-7 w-7 rounded-md"
                        aria-label={`Remove collaborator ${collab.email}`}
                      >
                        {removingEmail === collab.email ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <UserMinus className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    )}
                  </div>
                ))}

                {collaborators.length === 0 && !isLoading && (
                  <div className="flex flex-col items-center justify-center p-5 border border-dashed rounded-lg border-border bg-muted/10 select-none">
                    <Mail className="h-5 w-5 text-muted-foreground mb-1.5 opacity-55" />
                    <p className="text-[10px] text-muted-foreground">
                      No collaborators have been added yet
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
