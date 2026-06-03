"use client"

import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense"
import { useEffect } from "react"
import { useMutation } from "@liveblocks/react/suspense"
import { LiveObject, LiveMap } from "@liveblocks/client"
import { CanvasErrorBoundary } from "./canvas-error-boundary"
import { CanvasErrorFallback } from "./canvas-error-fallback"
import { CanvasLoadingState } from "./canvas-loading-state"
import { CollaborativeWorkspace } from "./collaborative-workspace"

interface RoomWorkspaceProps {
  project: {
    id: string
    name: string
    description?: string | null
  }
}

function RoomStorageInitializer({ children }: { children: React.ReactNode }) {
  const initializeStorage = useMutation(({ storage }) => {
    const flow = storage.get("flow")
    if (!flow) {
      storage.set(
        "flow",
        new LiveObject({
          nodes: new LiveMap(),
          edges: new LiveMap(),
        })
      )
    } else {
      // Ensure nested properties exist as well
      if (!flow.get("nodes")) {
        flow.set("nodes", new LiveMap())
      }
      if (!flow.get("edges")) {
        flow.set("edges", new LiveMap())
      }
    }
  }, [])

  useEffect(() => {
    initializeStorage()
  }, [initializeStorage])

  return <>{children}</>
}

export function RoomWorkspace({ project }: RoomWorkspaceProps) {
  return (
    <div className="h-full w-full flex flex-col">
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
        <RoomProvider
          id={project.id}
          initialPresence={{
            cursor: null,
            isThinking: false,
          }}
          initialStorage={{
            flow: new LiveObject({
              nodes: new LiveMap(),
              edges: new LiveMap(),
            }),
          }}
        >
          <CanvasErrorBoundary fallback={(error, reset) => <CanvasErrorFallback error={error} reset={reset} />}>
            <ClientSideSuspense fallback={<CanvasLoadingState />}>
              <RoomStorageInitializer>
                <CollaborativeWorkspace project={project} />
              </RoomStorageInitializer>
            </ClientSideSuspense>
          </CanvasErrorBoundary>
        </RoomProvider>
      </LiveblocksProvider>
    </div>
  )
}
