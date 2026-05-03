"use client"

import { UserButton } from "@clerk/nextjs"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type EditorNavbarProps = {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
  className?: string
}

/**
 * Renders the editor top navbar with a sidebar toggle and user account button.
 *
 * Renders a header containing a left-aligned sidebar toggle button (icon and ARIA state reflect `isSidebarOpen`), an empty center region, and a right-aligned Clerk `UserButton`. The `onSidebarToggle` callback is invoked when the toggle button is clicked.
 *
 * @param isSidebarOpen - Whether the projects sidebar is currently open; controls the toggle icon and `aria-pressed` state.
 * @param onSidebarToggle - Click handler invoked to toggle the sidebar state.
 * @param className - Optional additional CSS classes applied to the header container.
 * @returns The navbar header element containing the toggle button and user button.
 */
function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center border-b border-border bg-background px-3",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center justify-start">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close projects sidebar" : "Open projects sidebar"}
          aria-pressed={isSidebarOpen}
          onClick={onSidebarToggle}
        >
          <SidebarIcon />
        </Button>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-center" />

      <div className="flex min-w-0 flex-1 items-center justify-end">
        <UserButton />
      </div>
    </header>
  )
}

export { EditorNavbar }
