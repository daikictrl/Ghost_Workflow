import { useEffect, useRef, useCallback } from "react"
import { useProjects } from "@/lib/project-context"
import { useRoom } from "@liveblocks/react/suspense"
import type { CanvasNode, CanvasEdge } from "@/types/canvas"

export function useCanvasAutosave(
  projectId: string,
  nodes: CanvasNode[],
  edges: CanvasEdge[]
) {
  const { setCanvasSaveStatus } = useProjects()
  const prevSerializedRef = useRef<string>("")
  const isFirstRender = useRef(true)
  const room = useRoom()

  // Serialized state of current nodes/edges to compare structure/values
  const currentSerialized = JSON.stringify({ nodes, edges })

  // Function to perform the save
  const saveCanvas = useCallback(async () => {
    // Determine if current user is the leader (lowest connectionId) to prevent concurrent autosaves
    const self = room.getSelf()
    const others = room.getOthers()
    
    // If self is null (not connected), don't save
    if (!self) return
    
    const isLeader = others.every((other) => other.connectionId > self.connectionId)
    if (!isLeader) return

    setCanvasSaveStatus("saving")
    
    let attempt = 0
    let success = false
    let lastError: any = null

    while (attempt < 3 && !success) {
      try {
        const res = await fetch(`/api/projects/${projectId}/canvas`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: currentSerialized,
        })

        if (!res.ok) {
          throw new Error(`Failed to save canvas, status: ${res.status}`)
        }

        success = true
        setCanvasSaveStatus("saved")
      } catch (err) {
        lastError = err
        attempt++
        if (attempt < 3) {
          // Wait before retrying (exponential backoff: 1s, 2s)
          await new Promise((resolve) => setTimeout(resolve, attempt * 1000))
        }
      }
    }

    if (!success) {
      console.error("Autosave failed after 3 attempts:", lastError)
      setCanvasSaveStatus("error")
    }
  }, [projectId, currentSerialized, setCanvasSaveStatus, room])

  // Debouncing effect
  useEffect(() => {
    // Skip if it's the first render or if nothing has changed
    if (isFirstRender.current) {
      isFirstRender.current = false
      prevSerializedRef.current = currentSerialized
      return
    }

    if (currentSerialized === prevSerializedRef.current) {
      return
    }

    prevSerializedRef.current = currentSerialized

    // Set saving status when a change is detected
    setCanvasSaveStatus("saving")

    const timer = setTimeout(() => {
      saveCanvas()
    }, 2000) // 2 second debounce

    return () => clearTimeout(timer)
  }, [currentSerialized, saveCanvas, setCanvasSaveStatus])

  // Listen to manual save triggers
  useEffect(() => {
    const handleManualSave = () => {
      saveCanvas()
    }
    window.addEventListener("trigger-canvas-save", handleManualSave)
    return () => {
      window.removeEventListener("trigger-canvas-save", handleManualSave)
    }
  }, [saveCanvas])
}
