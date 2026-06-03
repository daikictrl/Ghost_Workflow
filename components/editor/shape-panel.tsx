"use client"

import React, { useState } from "react"
import {
  Square,
  Diamond,
  Circle,
  Pill,
  Cylinder,
  Hexagon,
  ChevronDown,
  ChevronUp,
  Shapes,
} from "lucide-react"

interface ShapeTemplate {
  type: string
  label: string
  icon: React.ComponentType<any>
  width: number
  height: number
}

const SHAPE_TEMPLATES: ShapeTemplate[] = [
  { type: "rectangle", label: "Rectangle", icon: Square, width: 90, height: 50 },
  { type: "diamond", label: "Diamond", icon: Diamond, width: 64, height: 64 },
  { type: "circle", label: "Circle", icon: Circle, width: 50, height: 50 },
  { type: "pill", label: "Pill", icon: Pill, width: 80, height: 36 },
  { type: "cylinder", label: "Cylinder", icon: Cylinder, width: 56, height: 64 },
  { type: "hexagon", label: "Hexagon", icon: Hexagon, width: 72, height: 64 },
]

export function ShapePanel() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onDragStart = (
    event: React.DragEvent,
    shapeType: string,
    width: number,
    height: number
  ) => {
    const data = JSON.stringify({ shape: shapeType, width, height })
    event.dataTransfer.setData("application/reactflow", data)
    event.dataTransfer.effectAllowed = "move"

    // Clean up any existing drag preview elements
    const existing = document.getElementById("drag-preview-element")
    if (existing) {
      existing.remove()
    }

    // Create the ghost preview element
    const preview = document.createElement("div")
    preview.id = "drag-preview-element"
    preview.style.position = "fixed"
    preview.style.top = "-1000px"
    preview.style.left = "-1000px"
    preview.style.width = `${width}px`
    preview.style.height = `${height}px`
    preview.style.pointerEvents = "none"
    preview.style.display = "flex"
    preview.style.alignItems = "center"
    preview.style.justifyContent = "center"
    preview.style.opacity = "0.6"
    preview.style.fontFamily = "Geist Sans, sans-serif"
    preview.style.fontSize = "10px"
    preview.style.fontWeight = "300"
    preview.style.color = "#EDEDED"
    preview.style.zIndex = "99999"

    // Background & shape-specific styling
    if (shapeType === "rectangle" || shapeType === "pill" || shapeType === "circle") {
      preview.style.backgroundColor = "#1F1F1F"
      preview.style.border = "1.5px solid var(--border-default)"
      if (shapeType === "rectangle") {
        preview.style.borderRadius = "12px"
      } else {
        preview.style.borderRadius = "9999px"
      }
    } else if (shapeType === "diamond") {
      preview.innerHTML = `
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;">
          <polygon points="50,2 98,50 50,98 2,50" fill="#1F1F1F" stroke="var(--border-default)" stroke-width="1.5" vector-effect="non-scaling-stroke" />
        </svg>
      `
    } else if (shapeType === "hexagon") {
      preview.innerHTML = `
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;">
          <polygon points="25,2 75,2 98,50 75,98 25,98 2,50" fill="#1F1F1F" stroke="var(--border-default)" stroke-width="1.5" vector-effect="non-scaling-stroke" />
        </svg>
      `
    } else if (shapeType === "cylinder") {
      preview.innerHTML = `
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;">
          <path d="M 2,15 L 2,85 A 48,12 0 0,0 98,85 L 98,15 Z" fill="#1F1F1F" stroke="var(--border-default)" stroke-width="1.5" vector-effect="non-scaling-stroke" />
          <ellipse cx="50" cy="15" rx="48" ry="12" fill="#1F1F1F" stroke="var(--border-default)" stroke-width="1.5" vector-effect="non-scaling-stroke" />
        </svg>
      `
    }

    // Add centered placeholder text
    const labelSpan = document.createElement("span")
    labelSpan.innerText = "Label"
    labelSpan.style.position = "relative"
    labelSpan.style.zIndex = "10"
    labelSpan.style.opacity = "0.4"
    labelSpan.style.fontStyle = "italic"
    preview.appendChild(labelSpan)

    document.body.appendChild(preview)
    
    // Center the drag image relative to the cursor
    event.dataTransfer.setDragImage(preview, width / 2, height / 2)
  }

  const onDragEnd = () => {
    const element = document.getElementById("drag-preview-element")
    if (element) {
      element.remove()
    }
  }

  if (isCollapsed) {
    return (
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out">
        <button
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-2 px-4 py-2.5 bg-bg-surface/90 backdrop-blur-md border border-border-default hover:border-accent-primary hover:bg-bg-subtle text-text-primary rounded-full shadow-lg transition-all duration-200 cursor-pointer"
        >
          <Shapes className="h-4 w-4 text-accent-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase">Shapes</span>
          <ChevronUp className="h-4 w-4 text-text-secondary" />
        </button>
      </div>
    )
  }

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-bg-surface/90 backdrop-blur-md border border-border-default px-2.5 py-1.5 rounded-full shadow-2xl transition-all duration-300 ease-in-out max-w-[90vw] overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-1">
        {SHAPE_TEMPLATES.map((shape) => {
          const Icon = shape.icon
          return (
            <div
              key={shape.type}
              draggable
              onDragStart={(e) => onDragStart(e, shape.type, shape.width, shape.height)}
              onDragEnd={onDragEnd}
              className="group flex flex-col items-center justify-center w-11 h-11 rounded-lg border border-transparent hover:border-border-subtle hover:bg-bg-elevated text-text-secondary hover:text-accent-primary transition-all duration-200 cursor-grab active:cursor-grabbing select-none"
              title={`Drag ${shape.label} onto canvas`}
            >
              <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span className="text-[8.5px] mt-0.5 font-medium transition-colors duration-200">
                {shape.label}
              </span>
            </div>
          )}
        )}

        <div className="h-6 w-px bg-border-default mx-1" />

        <button
          onClick={() => setIsCollapsed(true)}
          className="p-1.5 text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all duration-200 cursor-pointer"
          title="Collapse Panel"
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
