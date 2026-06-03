"use client"

import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense"
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
              <CollaborativeWorkspace project={project} />
            </ClientSideSuspense>
          </CanvasErrorBoundary>
        </RoomProvider>
      </LiveblocksProvider>
    </div>
  )
}
