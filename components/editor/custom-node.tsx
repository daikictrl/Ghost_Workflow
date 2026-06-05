"use client"

import React, { memo, useState, useRef, useEffect, useCallback } from "react"
import { Handle, Position, NodeResizer, useReactFlow, type NodeProps } from "@xyflow/react"
import { type CanvasNode, NODE_COLORS } from "@/types/canvas"

// SVG shape renderer components
const DiamondShape = ({ fill, selected }: { fill: string; selected: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none"
  >
    <polygon
      points="50,2 98,50 50,98 2,50"
      fill={fill}
      stroke={selected ? "#ffffff" : "var(--border-default)"}
      strokeWidth={selected ? 1.2 : 1}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

const HexagonShape = ({ fill, selected }: { fill: string; selected: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none"
  >
    <polygon
      points="25,2 75,2 98,50 75,98 25,98 2,50"
      fill={fill}
      stroke={selected ? "#ffffff" : "var(--border-default)"}
      strokeWidth={selected ? 1.2 : 1}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

const CylinderShape = ({ fill, selected }: { fill: string; selected: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none"
  >
    {/* Body / walls */}
    <path
      d="M 2,15 L 2,85 A 48,12 0 0,0 98,85 L 98,15 Z"
      fill={fill}
      stroke={selected ? "#ffffff" : "var(--border-default)"}
      strokeWidth={selected ? 1.2 : 1}
      vectorEffect="non-scaling-stroke"
    />
    {/* Top lid */}
    <ellipse
      cx="50"
      cy="15"
      rx="48"
      ry="12"
      fill={fill}
      stroke={selected ? "#ffffff" : "var(--border-default)"}
      strokeWidth={selected ? 1.2 : 1}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

export const CustomNode = memo(({ id, data, selected }: NodeProps<CanvasNode>) => {
  const { updateNodeData } = useReactFlow()
  const shape = data.shape || "rectangle"
  const isSvg = shape === "diamond" || shape === "hexagon" || shape === "cylinder"

  // Inline editing state
  const [isEditing, setIsEditing] = useState(false)
  const [localValue, setLocalValue] = useState(data.label || "")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [hoveredColorIndex, setHoveredColorIndex] = useState<number | null>(null)

  // Keep local value in sync with incoming data updates (e.g. from other users)
  useEffect(() => {
    if (!isEditing) {
      setLocalValue(data.label || "")
    }
  }, [data.label, isEditing])

  // Auto focus, select all, and adjust height on editing start
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      const textarea = textareaRef.current
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
      textarea.focus()
      textarea.select()
    }
  }, [isEditing])

  // Adjust height on text change
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      const textarea = textareaRef.current
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [localValue, isEditing])

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIsEditing(true)
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value
    setLocalValue(val)
    updateNodeData(id, { label: val })
  }, [id, updateNodeData])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      setIsEditing(false)
    } else if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      setIsEditing(false)
    }
  }, [])

  const handleBlur = useCallback(() => {
    setIsEditing(false)
  }, [])

  // get color config
  const colorConfig =
    NODE_COLORS.find((c) => c.fill.toLowerCase() === data.color?.toLowerCase()) ||
    NODE_COLORS[0]

  let shapeClasses = ""
  if (isSvg) {
    shapeClasses = "bg-transparent border-transparent"
  } else {
    // CSS shapes
    const borderClasses = selected
      ? "border-white"
      : "border-border-default"

    if (shape === "rectangle") {
      shapeClasses = `rounded-xl border ${borderClasses}`
    } else {
      // pill or circle
      shapeClasses = `rounded-full border ${borderClasses}`
    }
  }

  const divStyle: React.CSSProperties = {
    color: colorConfig.text,
  }
  if (!isSvg) {
    divStyle.backgroundColor = colorConfig.fill
  }

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={`group relative w-full h-full flex items-center justify-center p-0.5 text-center transition-all duration-200 focus:outline-none ${shapeClasses}`}
      style={divStyle}
    >
      {/* Resizing controls */}
      <NodeResizer
        isVisible={!!selected && !isEditing}
        minWidth={1}
        minHeight={1}
        handleStyle={{
          width: 1.75,
          height: 1.75,
          background: "#ffffff",
          border: "1px solid #ffffff",
          borderRadius: "50%",
        }}
        lineStyle={{
          border: "0.5px dashed rgba(255, 255, 255, 0.4)",
        }}
      />

      {/* Color picker toolbar */}
      {selected && !isEditing && (
        <div
          className="nodrag nopan absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-bg-surface/95 border border-border-default shadow-lg backdrop-blur-sm rounded-full p-1 z-50 cursor-default select-none"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {NODE_COLORS.map((color, index) => {
            const isActive = colorConfig.fill.toLowerCase() === color.fill.toLowerCase()
            const isHovered = hoveredColorIndex === index
            return (
              <button
                key={color.fill}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  updateNodeData(id, { color: color.fill })
                }}
                onMouseEnter={() => setHoveredColorIndex(index)}
                onMouseLeave={() => setHoveredColorIndex(null)}
                className="w-3.5 h-3.5 rounded-full cursor-pointer flex items-center justify-center transition-all duration-150 relative border"
                style={{
                  backgroundColor: color.fill,
                  borderColor: isActive 
                    ? color.text 
                    : "rgba(255, 255, 255, 0.15)",
                  borderWidth: isActive ? "1.5px" : "1px",
                  boxShadow: (isHovered || isActive) 
                    ? `0 0 5px 0.5px ${color.text}` 
                    : undefined,
                  transform: isHovered ? "scale(1.15)" : isActive ? "scale(1.05)" : "scale(1)",
                }}
                title={color.label}
              >
                {isActive && (
                  <div
                    className="w-1 h-1 rounded-full animate-in fade-in zoom-in duration-100"
                    style={{ backgroundColor: color.text }}
                  />
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* SVG shape backgrounds if applicable */}
      {shape === "diamond" && <DiamondShape fill={colorConfig.fill} selected={!!selected} />}
      {shape === "hexagon" && <HexagonShape fill={colorConfig.fill} selected={!!selected} />}
      {shape === "cylinder" && <CylinderShape fill={colorConfig.fill} selected={!!selected} />}

      {/* Centered label or textarea */}
      {isEditing ? (
        <textarea
          ref={textareaRef}
          value={localValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="nodrag nopan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[calc(100%-8px)] max-h-[calc(100%-8px)] bg-transparent text-center text-[13.5px] font-bold border-none outline-none resize-none focus:ring-0 focus:outline-none scrollbar-none"
          placeholder="Label"
          rows={1}
          style={{
            color: colorConfig.text,
            lineHeight: "16px",
          }}
        />
      ) : (
        <div 
          className="relative z-10 text-[13.5px] leading-[16px] font-bold select-none overflow-hidden text-center w-[calc(100%-8px)] max-h-[calc(100%-8px)]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            overflow: "hidden",
            wordBreak: "break-word",
          }}
        >
          {data.label || <span className="opacity-40 italic text-[13.5px]">Label</span>}
        </div>
      )}

      {/* Connection Handles: Top, Right, Bottom, Left */}
      {/* Each position has a target and source handle overlapping, hidden by default and shown on hover */}
      
      {/* Top handles */}
      <Handle
        type="target"
        position={Position.Top}
        id="top-target"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top-source"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />

      {/* Right handles */}
      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />

      {/* Bottom handles */}
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-target"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-source"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />

      {/* Left handles */}
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left-source"
        className="!bg-white !border !border-[#080809] !rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
        style={{ width: "6px", height: "6px" }}
      />
    </div>
  )
})

CustomNode.displayName = "CustomNode"
