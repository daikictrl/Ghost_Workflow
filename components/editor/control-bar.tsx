"use client"

import React, { useState, useEffect, useRef } from "react"
import { useReactFlow, useViewport } from "@xyflow/react"
import { useHistory } from "@liveblocks/react/suspense"
import { ZoomIn, ZoomOut, Maximize, Undo2, Redo2 } from "lucide-react"
import { cn } from "@/lib/utils"

const PRESETS = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1.0 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2.0 },
]

export function ControlBar() {
  const { zoomIn, zoomOut, fitView, zoomTo } = useReactFlow()
  const { zoom } = useViewport()
  const history = useHistory()
  const undo = () => history.undo()
  const redo = () => history.redo()
  const canUndo = history.canUndo()
  const canRedo = history.canRedo()

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState("")

  // Keep input value in sync with viewport zoom when NOT editing
  useEffect(() => {
    if (!isEditing) {
      setInputValue(`${Math.round(zoom * 100)}%`)
    }
  }, [zoom, isEditing])

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
        setIsEditing(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputFocus = () => {
    setIsEditing(true)
    setIsDropdownOpen(true)
    // Strip '%' for editing and select the text
    setInputValue(`${Math.round(zoom * 100)}`)
    setTimeout(() => {
      inputRef.current?.select()
    }, 0)
  }

  const applyZoomText = (val: string) => {
    const parsed = parseInt(val.replace(/%/g, ""), 10)
    if (!isNaN(parsed) && parsed >= 5 && parsed <= 800) {
      zoomTo(parsed / 100, { duration: 300 })
    }
  }

  const handleInputBlur = () => {
    if (isEditing) {
      applyZoomText(inputValue)
      setIsEditing(false)
    }
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      applyZoomText(inputValue)
      inputRef.current?.blur()
      setIsDropdownOpen(false)
      setIsEditing(false)
    } else if (e.key === "Escape") {
      e.preventDefault()
      setInputValue(`${Math.round(zoom * 100)}%`)
      inputRef.current?.blur()
      setIsDropdownOpen(false)
      setIsEditing(false)
    }
  }

  const handlePresetClick = (presetValue: number) => {
    zoomTo(presetValue, { duration: 300 })
    setIsDropdownOpen(false)
    setIsEditing(false)
    inputRef.current?.blur()
  }

  return (
    <div className="absolute bottom-6 left-6 z-50 flex items-center bg-bg-surface/90 backdrop-blur-md border border-border-default px-2.5 py-1.5 rounded-full shadow-2xl transition-all duration-300 ease-in-out select-none nodrag nopan">
      {/* Zoom Controls */}
      <div className="flex items-center gap-0.5">
        <button
          onClick={() => zoomTo(zoom - 0.1, { duration: 300 })}
          className="p-1.5 text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all duration-200 cursor-pointer"
          title="Zoom Out (-)"
          aria-label="Zoom Out"
        >
          <ZoomOut className="h-4 w-4" />
        </button>

        {/* Zoom Percentage Modifiable Input & Dropdown */}
        <div ref={containerRef} className="relative flex items-center justify-center">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-12 bg-transparent text-center text-xs font-semibold text-text-primary focus:outline-none select-text cursor-pointer hover:bg-bg-elevated rounded py-0.5 transition-all duration-150"
            style={{ caretColor: "var(--accent-primary)" }}
            title="Type percentage and press Enter, or click to show presets"
          />

          {isDropdownOpen && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 mb-1 z-50 flex flex-col bg-bg-surface/95 backdrop-blur-md border border-border-default rounded-xl shadow-xl w-20 overflow-hidden py-0.5 animate-in fade-in slide-in-from-bottom-2 duration-150">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  onMouseDown={(e) => {
                    e.preventDefault() // prevent input blur
                    handlePresetClick(preset.value)
                  }}
                  className="w-full text-center px-2 py-1 text-[11px] font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors duration-150 cursor-pointer"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => fitView({ duration: 300, padding: 0.2 })}
          className="p-1.5 text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all duration-200 cursor-pointer"
          title="Fit View"
          aria-label="Fit View"
        >
          <Maximize className="h-4 w-4" />
        </button>
        <button
          onClick={() => zoomTo(zoom + 0.1, { duration: 300 })}
          className="p-1.5 text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all duration-200 cursor-pointer"
          title="Zoom In (+)"
          aria-label="Zoom In"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>

      {/* Divider */}
      <div className="h-4 w-px bg-border-default mx-1.5" />

      {/* History Controls */}
      <div className="flex items-center gap-0.5">
        <button
          onClick={undo}
          disabled={!canUndo}
          className={cn(
            "p-1.5 rounded-full transition-all duration-200",
            canUndo
              ? "text-text-secondary hover:text-text-primary hover:bg-bg-elevated cursor-pointer"
              : "text-text-secondary/30 opacity-40 cursor-not-allowed"
          )}
          title="Undo (Ctrl+Z)"
          aria-label="Undo"
        >
          <Undo2 className="h-4 w-4" />
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className={cn(
            "p-1.5 rounded-full transition-all duration-200",
            canRedo
              ? "text-text-secondary hover:text-text-primary hover:bg-bg-elevated cursor-pointer"
              : "text-text-secondary/30 opacity-40 cursor-not-allowed"
          )}
          title="Redo (Ctrl+Shift+Z / Ctrl+Y)"
          aria-label="Redo"
        >
          <Redo2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
