"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import {
  EdgeLabelRenderer,
  getSmoothStepPath,
  useReactFlow,
  type EdgeProps,
} from "@xyflow/react"

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
  style = {},
  data = {},
  label,
}: EdgeProps) {
  const { setEdges } = useReactFlow()
  const [isHovered, setIsHovered] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [localValue, setLocalValue] = useState((label as string) || (data as any)?.label || "")
  const inputRef = useRef<HTMLInputElement>(null)

  // Keep local value in sync with incoming data updates
  useEffect(() => {
    if (!isEditing) {
      setLocalValue((label as string) || (data as any)?.label || "")
    }
  }, [label, data, isEditing])

  // Auto focus and select input text when editing begins
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  // Get orthogonal path and default label position from React Flow's getSmoothStepPath
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    borderRadius: 8,
  })

  // Highlight state: active when hovered or selected
  const isActive = !!selected || isHovered

  // Styling properties
  const strokeColor = isActive ? "#f8fafc" : "#505060"
  const strokeWidth = isActive ? 1.5 : 1

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIsEditing(true)
  }, [])

  const handleSave = useCallback(() => {
    setIsEditing(false)
    const trimmedVal = localValue.trim()
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            label: trimmedVal,
            data: {
              ...edge.data,
              label: trimmedVal,
            },
          }
        }
        return edge
      })
    )
  }, [id, localValue, setEdges])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        handleSave()
      } else if (e.key === "Escape") {
        e.preventDefault()
        // Reset to original value and exit
        setLocalValue((label as string) || (data as any)?.label || "")
        setIsEditing(false)
      }
    },
    [label, data, handleSave]
  )

  const handleBlur = useCallback(() => {
    handleSave()
  }, [handleSave])

  const labelText = (label as string) || (data as any)?.label || ""

  return (
    <>
      {/* SVG definitions for dynamic Arrowhead Marker */}
      <defs>
        <marker
          id={`arrow-${id}`}
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M 0 1.5 L 10 5 L 0 8.5 Z"
            fill={strokeColor}
            className="transition-colors duration-150"
          />
        </marker>
      </defs>

      {/* Invisible wider interaction path for easy clicking/hovering */}
      <path
        d={edgePath}
        fill="none"
        stroke="transparent"
        strokeWidth={15}
        className="cursor-pointer pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDoubleClick={handleDoubleClick}
      />

      {/* Visible thin right-angle path */}
      <path
        id={id}
        d={edgePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        markerEnd={`url(#arrow-${id})`}
        style={style}
        className="transition-[stroke,stroke-width] duration-150 pointer-events-none"
      />

      {/* HTML Edge Label Renderer positioned at path midpoint */}
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan select-none z-30"
          onDoubleClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          {isEditing ? (
            <div className="relative inline-flex items-center min-w-[60px] max-w-[200px] h-6 bg-bg-subtle border border-accent-primary rounded-md px-2 py-0.5 shadow-lg shadow-background/50">
              {/* Hidden text helper to automatically resize input container */}
              <span className="invisible whitespace-pre text-[7.8px] font-bold px-1">
                {localValue || "Add label"}
              </span>
              <input
                ref={inputRef}
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder="Add label"
                className="absolute inset-0 w-full h-full bg-transparent text-text-primary text-[7.8px] font-bold text-center border-none outline-none focus:ring-0 focus:outline-none"
              />
            </div>
          ) : labelText ? (
            <div
              onDoubleClick={handleDoubleClick}
              className="bg-bg-elevated/90 border border-border-default hover:border-border-subtle hover:bg-bg-subtle/95 hover:text-text-primary text-text-secondary text-[7.8px] font-bold tracking-wide px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-sm cursor-pointer transition-all duration-150"
            >
              {labelText}
            </div>
          ) : (
            isActive && (
              <div
                onClick={handleDoubleClick}
                className="bg-bg-base/60 border border-dashed border-border-subtle hover:border-accent-primary hover:text-text-primary text-text-muted text-[7.8px] font-light italic px-2.5 py-0.5 rounded-full cursor-pointer transition-all duration-150 animate-in fade-in duration-200"
              >
                Add label
              </div>
            )
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  )
}
