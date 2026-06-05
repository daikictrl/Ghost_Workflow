"use client"

import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { X, Download, FileText, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface SpecPreviewModalProps {
  projectId: string
  specId: string | null
  specFilename: string | null
  onClose: () => void
}

export function SpecPreviewModal({
  projectId,
  specId,
  specFilename,
  onClose,
}: SpecPreviewModalProps) {
  const isOpen = !!specId
  const [content, setContent] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch spec content whenever a spec is selected
  useEffect(() => {
    if (!specId) {
      setContent(null)
      setError(null)
      return
    }

    let cancelled = false
    setIsLoading(true)
    setContent(null)
    setError(null)

    // Reuse the download endpoint — it streams the raw Markdown file
    fetch(`/api/projects/${projectId}/specs/${specId}/download`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to load spec (${res.status})`)
        }
        return res.text()
      })
      .then((text) => {
        if (!cancelled) {
          setContent(text)
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load spec")
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [projectId, specId])

  const handleDownload = () => {
    if (!specId) return
    // Let the browser follow the Content-Disposition: attachment header
    const a = document.createElement("a")
    a.href = `/api/projects/${projectId}/specs/${specId}/download`
    a.download = specFilename ?? `spec-${specId}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-3xl w-full max-h-[85vh] flex flex-col gap-0 p-0 border border-surface-border bg-bg-surface rounded-3xl overflow-hidden"
        aria-describedby={undefined}
      >
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between px-6 py-4 border-b border-surface-border shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-ai/10 text-accent-ai border border-accent-ai/20">
              <FileText className="h-4 w-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <DialogTitle className="text-sm font-semibold text-copy-primary truncate">
                {specFilename ?? "Technical Specification"}
              </DialogTitle>
              <p className="text-[10px] text-copy-muted">Generated spec · Markdown</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDownload}
              disabled={!content}
              className="h-8 gap-1.5 text-[11px] border-surface-border text-copy-secondary hover:text-copy-primary hover:bg-bg-subtle disabled:opacity-40 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="px-6 py-5">
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <Loader2 className="h-6 w-6 text-accent-ai animate-spin" />
                <p className="text-xs text-copy-muted">Loading specification…</p>
              </div>
            )}

            {error && !isLoading && (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-state-error/10 text-state-error border border-state-error/20">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <p className="text-xs text-state-error font-medium">{error}</p>
              </div>
            )}

            {content && !isLoading && (
              <div className="spec-md-body text-xs leading-relaxed text-copy-secondary">
                <style>{`
                  .spec-md-body h1,.spec-md-body h2,.spec-md-body h3,.spec-md-body h4 {
                    color: var(--text-primary);
                    font-weight: 600;
                    margin-top: 1.25em;
                    margin-bottom: 0.4em;
                  }
                  .spec-md-body h1 { font-size: 0.95rem; }
                  .spec-md-body h2 { font-size: 0.85rem; }
                  .spec-md-body h3 { font-size: 0.78rem; }
                  .spec-md-body h4 { font-size: 0.72rem; }
                  .spec-md-body p { margin-bottom: 0.65em; }
                  .spec-md-body ul,.spec-md-body ol { padding-left: 1.25rem; margin-bottom: 0.65em; }
                  .spec-md-body li { margin-bottom: 0.2em; }
                  .spec-md-body a { color: var(--accent-primary); text-decoration: none; }
                  .spec-md-body a:hover { text-decoration: underline; }
                  .spec-md-body strong { color: var(--text-primary); font-weight: 600; }
                  .spec-md-body code {
                    color: var(--accent-ai-text);
                    background: var(--bg-elevated);
                    padding: 0.1em 0.35em;
                    border-radius: 0.25rem;
                    font-size: 0.7rem;
                    font-family: var(--font-geist-mono), monospace;
                  }
                  .spec-md-body pre {
                    background: var(--bg-elevated);
                    border: 1px solid var(--border-default);
                    border-radius: 0.6rem;
                    padding: 0.75rem 1rem;
                    overflow-x: auto;
                    font-size: 0.7rem;
                    margin-bottom: 0.65em;
                  }
                  .spec-md-body pre code {
                    background: none;
                    padding: 0;
                    color: var(--text-secondary);
                  }
                  .spec-md-body blockquote {
                    border-left: 2px solid var(--accent-ai);
                    padding-left: 0.75rem;
                    color: var(--text-muted);
                    margin: 0.65em 0;
                  }
                  .spec-md-body hr {
                    border-color: var(--border-default);
                    margin: 1em 0;
                  }
                  .spec-md-body table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 0.65em;
                    font-size: 0.7rem;
                  }
                  .spec-md-body th,.spec-md-body td {
                    border: 1px solid var(--border-default);
                    padding: 0.3rem 0.5rem;
                    text-align: left;
                  }
                  .spec-md-body th {
                    background: var(--bg-elevated);
                    color: var(--text-primary);
                    font-weight: 600;
                  }
                `}</style>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
