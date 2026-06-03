"use client"

import { WifiOff, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CanvasErrorFallbackProps {
  error?: Error
  reset?: () => void
}

export function CanvasErrorFallback({ error, reset }: CanvasErrorFallbackProps) {
  const handleRetry = () => {
    if (reset) {
      reset()
    } else {
      window.location.reload()
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950 p-6">
      <div className="max-w-md w-full p-8 rounded-3xl border border-red-500/20 bg-zinc-900 shadow-2xl shadow-red-950/10 space-y-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-950/30 text-red-400 border border-red-500/30 shadow-md animate-pulse">
          <WifiOff className="h-6 w-6" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Connection Lost
          </h2>
          <p className="text-sm text-zinc-400">
            {error?.message || "We encountered an issue connecting to the collaborative canvas session. Please check your internet connection and try again."}
          </p>
        </div>
        
        <div className="pt-2">
          <Button 
            onClick={handleRetry} 
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 hover:border-zinc-600 transition-all flex items-center justify-center gap-2 rounded-xl py-5"
          >
            <RefreshCw className="h-4 w-4" />
            Reconnect to Session
          </Button>
        </div>
      </div>
    </div>
  )
}
