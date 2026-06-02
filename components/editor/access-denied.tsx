import Link from "next/link"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AccessDenied() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-background min-h-[85vh]">
      <div className="max-w-md w-full p-8 rounded-3xl border border-border bg-card shadow-xl space-y-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive border border-destructive/20 shadow-sm">
          <Lock className="h-5 w-5" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Access Denied
          </h1>
          <p className="text-sm text-muted-foreground">
            You don't have permission to access this project, or the project does not exist.
          </p>
        </div>
        
        <div className="pt-2">
          <Button asChild variant="outline" className="w-full">
            <Link href="/editor">
              Back to Editor
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
