import { useEffect } from "react"
import { useViewport } from "@xyflow/react"
import type { useReactFlow } from "@xyflow/react"

interface UseKeyboardShortcutsProps {
  reactFlowInstance: ReturnType<typeof useReactFlow>
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

export function useKeyboardShortcuts({
  reactFlowInstance,
  undo,
  redo,
  canUndo,
  canRedo,
}: UseKeyboardShortcutsProps) {
  const { zoom } = useViewport()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if target is an editable element (input, textarea, or contenteditable)
      const target = event.target as HTMLElement | null
      if (target) {
        const tagName = target.tagName.toLowerCase()
        const isContentEditable =
          target.isContentEditable ||
          target.hasAttribute("contenteditable") ||
          target.getAttribute("contenteditable") === "true"

        if (
          tagName === "input" ||
          tagName === "textarea" ||
          isContentEditable
        ) {
          return
        }
      }

      const isMac =
        typeof window !== "undefined" &&
        /Mac|iPod|iPhone|iPad/.test(window.navigator.userAgent)
      const isCmdOrCtrl = isMac ? event.metaKey : event.ctrlKey

      // Undo: Cmd/Ctrl + Z
      if (isCmdOrCtrl && event.key.toLowerCase() === "z" && !event.shiftKey) {
        event.preventDefault()
        if (canUndo) {
          undo()
        }
        return
      }

      // Redo: Cmd/Ctrl + Shift + Z OR Cmd/Ctrl + Y
      if (
        (isCmdOrCtrl && event.shiftKey && event.key.toLowerCase() === "z") ||
        (isCmdOrCtrl && event.key.toLowerCase() === "y")
      ) {
        event.preventDefault()
        if (canRedo) {
          redo()
        }
        return
      }

      // Zoom In: + or =
      if (!isCmdOrCtrl && (event.key === "+" || event.key === "=")) {
        event.preventDefault()
        reactFlowInstance.zoomTo(zoom + 0.1, { duration: 300 })
        return
      }

      // Zoom Out: -
      if (!isCmdOrCtrl && event.key === "-") {
        event.preventDefault()
        reactFlowInstance.zoomTo(zoom - 0.1, { duration: 300 })
        return
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [reactFlowInstance, undo, redo, canUndo, canRedo, zoom])
}
