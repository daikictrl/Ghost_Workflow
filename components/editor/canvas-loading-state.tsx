"use client"

import { Loader2 } from "lucide-react"

export function CanvasLoadingState() {
  return (
    <div className="relative h-full w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
      {/* Skeleton canvas dot background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #27272a 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
      
      {/* Floating abstract skeleton nodes for look-and-feel */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-around p-20">
        <div className="h-24 w-40 bg-zinc-800 border border-zinc-700 rounded-xl animate-pulse" />
        <div className="h-32 w-48 bg-zinc-800 border border-zinc-700 rounded-xl animate-pulse" />
        <div className="h-20 w-36 bg-zinc-800 border border-zinc-700 rounded-xl animate-pulse" />
      </div>

      {/* Loading HUD overlay */}
      <div className="relative z-10 flex flex-col items-center gap-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 px-6 py-5 rounded-2xl shadow-xl max-w-xs text-center">
        <Loader2 className="h-6 w-6 animate-spin text-cyan-400" />
        <div className="space-y-1">
          <p className="text-sm font-medium text-zinc-200">Connecting to session</p>
          <p className="text-xs text-zinc-400">Loading collaborative canvas...</p>
        </div>
      </div>
    </div>
  )
}
