# Progress Tracker

## Completed Work

### Phase 1: Foundations & Authentication
- [x] Initial Next.js 16 setup with TypeScript and Tailwind CSS v4
- [x] Theme system with dark-only CSS property tokens (`app/globals.css`)
- [x] Clerk authentication and protected routing (`app/page.tsx`, middleware)

### Phase 2: Navigation & Projects
- [x] Editor navigation, layout shell, and header structure (`components/editor/editor-layout.tsx`)
- [x] React context for mock projects state and dialog hooks (`lib/project-context.tsx`)
- [x] Project dialog components: Create (with live slugify preview), Rename (with prefilled auto-focus), and Delete (destructive confirmation only) (`components/editor/project-dialogs.tsx`)
- [x] Project sidebar updates to display owned and shared tabs, wire actions, and add mobile backdrop click-outside scrim (`components/editor/project-sidebar.tsx`)
- [x] Editor home page with New Project button (`app/editor/page.tsx`)
- [x] Workspace routing and access checks (`/editor/[roomId]`) validating owners/collaborators against backend database projects (`lib/project-access.ts`, `app/editor/[roomId]/page.tsx`, `components/editor/access-denied.tsx`)
- [x] Room workspace layout with central canvas, dynamic metadata titles, and toggleable sliding AI Chat sidebar (`components/editor/room-workspace.tsx`, `components/editor/editor-navbar.tsx`)
- [x] Fixed project deletion redirect behavior: when the active project is deleted, redirect the user to the immediate next project, or back to the editor home dashboard (`/editor`) if no projects remain

### Phase 3: Database & Persistence
- [x] Database schema models: `Project` and `ProjectCollaborator` with correct relations, cascade delete, constraints, and indexes (`prisma/models/project.prisma`)
- [x] Cached Prisma Client singleton with dynamic branching logic supporting direct pg and Accelerate connections (`lib/prisma.ts`)
- [x] Run database migrations and generate client types (`prisma/migrations`)
- [x] Backend project API routes (`GET /api/projects`, `POST /api/projects`, `PATCH /api/projects/[projectId]`, `DELETE /api/projects/[projectId]`) enforcing Clerk auth and owner permissions
- [x] Wired editor home screen dashboard, sidebar, and CRUD dialogs to the backend APIs with server-side layout fetching and Client Component state syncing

### Phase 8: Editor Workspace Shell
- [x] Main editor workspace layout with centered canvas, offsetting sliding panels, and responsive resizing boundaries
- [x] Multiline scrollable AI assistant text area with Shift+Enter carriage returns and Enter submits

### Phase 9: Project Collaboration & Share Dialog
- [x] Project collaborator API endpoints for listing, inviting, and deleting collaborators (`app/api/projects/[projectId]/collaborators/route.ts`)
- [x] Clerk integration to enrich database email records with display names and avatars
- [x] Radix UI Share Dialog component with email invitation forms, collaborator removal controls, copy-to-clipboard actions, and visual loading states (`components/editor/share-dialog.tsx`)
- [x] Integrated Share Dialog trigger and state management into editor navigation bar (`components/editor/editor-navbar.tsx`)

### Phase 10: Liveblocks Setup
- [x] Installed `@liveblocks/node` dependency and configured `liveblocks.config.ts` defining Presence and UserMeta
- [x] Created cached Liveblocks client in `lib/liveblocks-client.ts` with deterministic user color generator
- [x] Implemented authentication route `POST /api/liveblocks-auth` to enforce project access via db helper, check room existence, and return session tokens enriched with name, avatar, and cursor color

### Phase 11: Base Collaborative Canvas
- [x] Shared canvas types definition (`types/canvas.ts`)
- [x] Custom Error Boundary and premium reconnect fallback UI (`components/editor/canvas-error-boundary.tsx`, `components/editor/canvas-error-fallback.tsx`)
- [x] Skeleton loading placeholder representing active connection (`components/editor/canvas-loading-state.tsx`)
- [x] Collaborative canvas implementation utilizing Liveblocks React Flow integrations and Cursors (`components/editor/collaborative-canvas.tsx`)
- [x] Refactored `RoomWorkspace` to wrap the collaborative elements in Liveblocks room providers and client-side suspense (`components/editor/room-workspace.tsx`, `components/editor/collaborative-workspace.tsx`)

### Phase 12: Shape Panel
- [x] Added custom theme tokens and Tailwind utility configuration to `app/globals.css`
- [x] Created `CustomNode` custom React Flow node component with 4 hoverable connection handles (`components/editor/custom-node.tsx`)
- [x] Updated `CollaborativeCanvas` to support `ReactFlowProvider`, custom node type registration, and canvas projected drop mapping (`components/editor/collaborative-canvas.tsx`)
- [x] Created `ShapePanel` floating, collapsible, glassmorphic shape toolbar with HTML5 drag and drop payload mapping (`components/editor/shape-panel.tsx`)
- [x] Integrated `ShapePanel` into the `CollaborativeWorkspace` canvas area (`components/editor/collaborative-workspace.tsx`)
- [x] Prevented auto-zooming out and jumping of the canvas viewport on shape drops by implementing a custom programmatic `fitView` that runs only on initial load for existing nodes, leaving empty canvas instances at a normal zoom level (1.0).

### Phase 13: Node Shape Rendering & Drag Preview
- [x] Replaced placeholder rectangular node styling with dynamic shape-specific renders:
  - CSS styling for `rectangle`, `pill`, and `circle` shapes
  - Scalable SVG renderers with `vector-effect="non-scaling-stroke"` for `diamond`, `hexagon`, and `cylinder` shapes
  - Subtle borders at rest and brand-accent highlight (`--accent-primary`) when selected
- [x] Implemented custom shape-specific drag preview using HTML5 `setDragImage` with dynamic off-screen preview element creation and clean-up on drag conclusion
- [x] Verified type-safety and Next.js project compilation via `npm run build`

### Phase 14: Node Resizing & Inline Label Editing
- [x] Added custom-styled `<NodeResizer>` with no minimum constraints (supports scaling down to 1px) and subtle selection highlights (thinner 0.5px dashed border, circular 6px handle controls)
- [x] Integrated custom double-click handler to trigger inline editing state
- [x] Implemented absolute-centered auto-adjusting textarea overlay with `nodrag nopan` preventing canvas conflicts
- [x] Implemented line-clamp multiline ellipsis layout truncation (`...`) preventing text overflow outside node shapes
- [x] Wired real-time sync via React Flow `updateNodeData` updating on every character change
- [x] Added keyboard listeners on Escape (discard/exit), Enter (submit/exit), and Blur to gracefully exit editing state
- [x] Refined shape sizing, padding, and text weight: shrunk default shape template dimensions by ~40%, reduced custom node padding to `p-0.5`, and set text styling to `text-[10px]` with `font-light` weight.
- [x] Increased font size of node labels from `text-[6.4px]` to `text-[12.1px]` (bold with `lineHeight: 14px`) and edge labels from `text-[10px]` to `text-[15.7px]` (bold) to improve readability.
- [x] Changed all selection outline indicators to an ultra-thin white style, including 4px circular white dots and thin 0.5px white dashed selection borders for resizer controls.
- [x] Resized connection handles (`Handle`) to 1.5px (6px) and styled them solid white to sit flush on selection outlines when selected or hovered.

### Phase 15: Nodes Color Toolbar
- [x] Added floating color swatch toolbar above selected canvas nodes
- [x] Configured 8 predefined background/text color pairs with tight, controlled hover glow matching the respective text colors
- [x] Standardized swatch borders to display active selection states (1.5px borders matching text color, inner dot representation, and active glow effects)
- [x] Added `nodrag` and `nopan` helpers along with event bubbling prevention to prevent node dragging or canvas panning conflicts
- [x] Enabled instant reactive updates by wiring selected swatches to React Flow's `updateNodeData` updating the collaborative state

### Phase 16: Edge Behavior & Inline Labels
- [x] Customized connection handles in `CustomNode` with ultra-subtle base border styling (`!border-[#080809]`) and 6px size flush on selection outlines.
- [x] Built `CustomEdge` component with right-angle step routing (`getSmoothStepPath` with 8px border radius), Rest vs Active styling (#505060 vs #f8fafc), and custom SVG `<defs>` arrowhead marker that scales dynamically.
- [x] Integrated custom interactive double-click handler for inline edge label editing with auto-growing input.
- [x] Configured pill badges for saved labels and dashed hint badges for active edges without labels.
- [x] Registered custom edge renderer and configured `defaultEdgeOptions` in `CollaborativeCanvas`.
- [x] Fixed edge lag/after-effect during node movement by scoping the CSS transition in `CustomEdge` specifically to `stroke,stroke-width` instead of `all` to prevent animating the SVG path coordinate modifications.
- [x] Configured `LiveblocksProvider` throttle option to `16` (60FPS updates) in `RoomWorkspace` to keep real-time position updates completely smooth.
- [x] Verified full type-safety and successful clean build.

### Phase 17: Canvas Ergonomics & Control Bar
- [x] Created bottom-left floating pill-shaped Control Bar with zoom (in/out/fit) and undo/redo buttons (`components/editor/control-bar.tsx`)
- [x] Made the zoom percentage indicator editable as a direct text input that doubles as an interactive presets dropdown (modifying preset value directly)
- [x] Built the `useKeyboardShortcuts` hook (`hooks/use-keyboard-shortcuts.ts`) to map keys: `+`/`=` for Zoom In, `-` for Zoom Out, `Cmd/Ctrl+Z` for Undo, and `Cmd/Ctrl+Shift+Z`/`Cmd/Ctrl+Y` for Redo
- [x] Ignored keyboard shortcuts while typing inside inputs, textareas, and contenteditable elements to prevent keystroke collisions
- [x] Removed `MiniMap` from the collaborative canvas layout
- [x] Verified full type-safety and successful clean production build

### Phase 18: Node Deletion Context Menu
- [x] Implemented right-click (desktop) and long-press (mobile) `onNodeContextMenu` handler
- [x] Fixed context menu unmounting issue by replacing the generic click listener with a ref-based check on `mousedown`
- [x] Wired deletion to Liveblocks' `onDelete` mutation API to resolve node and connected edge removal from room storage
- [x] Created a sleek, ultra-minimal floating delete context menu positioned fixed at the mouse coordinates
- [x] Verified full type-safety and successful clean production build

### Phase 19: Starter Template Library
- [x] Created starter templates data structure with Microservices, CI/CD Pipeline, and Event-Driven System architectures (`components/editor/starter-templates.ts`)
- [x] Designed responsive `StarterTemplatesModal` with scaled custom SVG preview canvas, shape rendering, and interactive triggers (`components/editor/starter-templates-modal.tsx`)
- [x] Added entry point button trigger to editor navbar (`components/editor/editor-navbar.tsx`)
- [x] Wired template loading callback to Liveblocks storage mutation for collaborative clear-and-set data execution and automatic center zoom (`components/editor/collaborative-canvas.tsx`)
- [x] Resolved template import runtime crash (`TypeError: nodesMap.clear is not a function`) by iterating and deleting keys individually via `Array.from(map.keys())`
- [x] Registered fallback schema in `liveblocks.config.ts` and set `initialStorage` in `room-workspace.tsx` for type-safety
- [x] Verified full type-safety and successful clean production build

## Next Steps
- [ ] AI architecture generation background workflows using Trigger.dev




