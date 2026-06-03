"use client"

import React, { useCallback, useRef, useEffect, useState } from "react"
import {
  ReactFlow,
  Background,
  ConnectionMode,
  BackgroundVariant,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react"
import { useLiveblocksFlow, Cursors } from "@liveblocks/react-flow"
import { useUndo, useRedo, useCanUndo, useCanRedo, useMutation } from "@liveblocks/react/suspense"
import { LiveObject } from "@liveblocks/client"
import { useProjects } from "@/lib/project-context"
import { StarterTemplatesModal } from "./starter-templates-modal"
import type { CanvasTemplate } from "./starter-templates"
import { Trash2 } from "lucide-react"
import type { CanvasNode, CanvasEdge } from "@/types/canvas"
import { CustomNode } from "./custom-node"
import { CustomEdge } from "./custom-edge"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { ControlBar } from "./control-bar"

import "@xyflow/react/dist/style.css"
import "@liveblocks/react-flow/styles.css"

const nodeTypes = {
  customNode: CustomNode,
}

const edgeTypes = {
  customEdge: CustomEdge,
}

let nodeCounter = 0

function CollaborativeCanvasInner() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onDelete,
  } = useLiveblocksFlow<CanvasNode, CanvasEdge>({
    suspense: true,
    nodes: {
      initial: [],
    },
    edges: {
      initial: [],
    },
  })

  const [contextMenu, setContextMenu] = useState<{
    nodeId: string
    x: number
    y: number
  } | null>(null)

  const reactFlowInstance = useReactFlow()
  const { screenToFlowPosition, fitView } = reactFlowInstance
  
  const undo = useUndo()
  const redo = useRedo()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const { isTemplatesModalOpen, setTemplatesModalOpen } = useProjects()

  const importTemplate = useMutation(
    ({ storage }, templateNodes: CanvasNode[], templateEdges: CanvasEdge[]) => {
      const flow = storage.get("flow") as any
      if (!flow) return

      const nodesMap = flow.get("nodes") as any
      const edgesMap = flow.get("edges") as any

      if (nodesMap) {
        const nodeKeys = Array.from(nodesMap.keys()) as string[]
        for (const key of nodeKeys) {
          nodesMap.delete(key)
        }
        for (const node of templateNodes) {
          nodesMap.set(node.id, new LiveObject(node as any))
        }
      }

      if (edgesMap) {
        const edgeKeys = Array.from(edgesMap.keys()) as string[]
        for (const key of edgeKeys) {
          edgesMap.delete(key)
        }
        for (const edge of templateEdges) {
          edgesMap.set(edge.id, new LiveObject(edge as any))
        }
      }
    },
    []
  )

  const handleImportTemplate = useCallback(
    (template: CanvasTemplate) => {
      importTemplate(template.nodes, template.edges)
      setTemplatesModalOpen(false)

      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.2, duration: 400, maxZoom: 1 })
      }, 100)
    },
    [importTemplate, reactFlowInstance, setTemplatesModalOpen]
  )

  useKeyboardShortcuts({
    reactFlowInstance,
    undo,
    redo,
    canUndo,
    canRedo,
  })

  const menuRef = useRef<HTMLDivElement>(null)

  // Close context menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setContextMenu(null)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  const onNodeContextMenu = useCallback(
    (event: React.MouseEvent, node: any) => {
      event.preventDefault()
      setContextMenu({
        nodeId: node.id,
        x: event.clientX,
        y: event.clientY,
      })
    },
    []
  )

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      const nodeToDelete = nodes.find((n) => n.id === nodeId)
      const connectedEdges = edges.filter(
        (edge) => edge.source === nodeId || edge.target === nodeId
      )

      if (nodeToDelete) {
        onDelete({
          nodes: [nodeToDelete],
          edges: connectedEdges,
        })
      }

      setContextMenu(null)
    },
    [nodes, edges, onDelete]
  )

  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const hasFittedRef = useRef(false)
  const initialNodesLengthRef = useRef<number | null>(null)

  if (initialNodesLengthRef.current === null && nodes) {
    initialNodesLengthRef.current = nodes.length
  }

  useEffect(() => {
    if (
      initialNodesLengthRef.current !== null &&
      initialNodesLengthRef.current > 0 &&
      !hasFittedRef.current
    ) {
      hasFittedRef.current = true
      requestAnimationFrame(() => {
        fitView({ padding: 0.2, maxZoom: 1 })
      })
    }
  }, [fitView])

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const dataStr = event.dataTransfer.getData("application/reactflow")
      if (!dataStr) return

      try {
        const { shape, width, height } = JSON.parse(dataStr)
        if (!shape) return

        // Project coordinate to flow space
        const position = screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        })

        nodeCounter++
        const nodeId = `${shape}-${Date.now()}-${nodeCounter}`

        const newNode: CanvasNode = {
          id: nodeId,
          type: "customNode",
          position: {
            x: position.x - width / 2,
            y: position.y - height / 2,
          },
          data: {
            label: "",
            shape,
            color: "#1F1F1F", // Default node color
          },
          width,
          height,
          style: {
            width,
            height,
          },
        }

        // Add node using the add change type
        onNodesChange([{ type: "add", item: newNode } as any])
      } catch (err) {
        console.error("Error handling shape drop:", err)
      }
    },
    [screenToFlowPosition, onNodesChange]
  )

  return (
    <div
      ref={reactFlowWrapper}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className="h-full w-full bg-zinc-950/40 relative"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDelete={onDelete}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={{
          type: "customEdge",
        }}
        connectionMode={ConnectionMode.Loose}
        colorMode="dark"
        className="text-zinc-100"
        onNodeContextMenu={onNodeContextMenu}
        onPaneClick={() => setContextMenu(null)}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} className="!text-zinc-800" />
        <ControlBar />
        <Cursors />
      </ReactFlow>

      <StarterTemplatesModal
        isOpen={isTemplatesModalOpen}
        onClose={() => setTemplatesModalOpen(false)}
        onImport={handleImportTemplate}
      />

      {contextMenu && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: contextMenu.y,
            left: contextMenu.x,
          }}
          className="z-50 bg-bg-surface/95 backdrop-blur-md border border-border-default rounded-xl shadow-xl py-1 min-w-[100px] overflow-hidden animate-in fade-in zoom-in-95 duration-100"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => handleDeleteNode(contextMenu.nodeId)}
            className="w-full px-3 py-1.5 text-center text-xs font-semibold text-state-error hover:bg-bg-elevated flex items-center justify-center gap-1.5 cursor-pointer transition-colors duration-150"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  )
}

export function CollaborativeCanvas() {
  return (
    <ReactFlowProvider>
      <CollaborativeCanvasInner />
    </ReactFlowProvider>
  )
}
