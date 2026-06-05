"use client"

import React from "react"
import { UserButton, useUser } from "@clerk/nextjs"
import { useOthers } from "@liveblocks/react/suspense"

function getInitials(name: string) {
  if (!name) return "?"
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function PresenceAvatars() {
  const { user } = useUser()
  const others = useOthers()

  const currentUserId = user?.id

  // Deduplicate collaborators by user ID, and filter out the current user and the AI agent
  const collaboratorsMap = new Map<string, typeof others[number]>()
  for (const other of others) {
    if (other.id && other.id !== currentUserId && other.id !== "ai-agent") {
      if (!collaboratorsMap.has(other.id)) {
        collaboratorsMap.set(other.id, other)
      }
    }
  }
  const collaborators = Array.from(collaboratorsMap.values())

  const visibleCollaborators = collaborators.slice(0, 5)
  const overflowCount = collaborators.length - 5

  return (
    <div className="absolute top-4 right-4 z-30 flex items-center gap-2.5 bg-bg-surface/90 backdrop-blur-md border border-border-default rounded-full p-1.5 pr-2 pl-2.5 shadow-lg select-none">
      {collaborators.length > 0 && (
        <div className="flex items-center -space-x-1.5">
          {visibleCollaborators.map((collaborator) => {
            const name = collaborator.info?.name || "Collaborator"
            const avatar = collaborator.info?.avatar
            const color = collaborator.info?.color || "#00c8d4"

            return (
              <div key={collaborator.id} className="relative shrink-0">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="h-7 w-7 rounded-full ring-2 ring-bg-surface object-cover"
                  />
                ) : (
                  <div
                    style={{ backgroundColor: color }}
                    className="h-7 w-7 rounded-full ring-2 ring-bg-surface flex items-center justify-center text-[9px] font-bold text-zinc-950 uppercase"
                  >
                    {getInitials(name)}
                  </div>
                )}
              </div>
            )
          })}

          {overflowCount > 0 && (
            <div className="h-7 w-7 rounded-full ring-2 ring-bg-surface bg-bg-subtle text-text-secondary text-[9px] font-bold flex items-center justify-center shrink-0">
              +{overflowCount}
            </div>
          )}
        </div>
      )}

      {collaborators.length > 0 && (
        <div className="h-4 w-[1px] bg-border-default shrink-0" />
      )}

      <div className="flex items-center justify-center shrink-0">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "h-7 w-7",
            },
          }}
        />
      </div>
    </div>
  )
}
