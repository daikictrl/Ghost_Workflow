
🔴 1. Auth Route — Validate User-to-Room Ownership

In `app/api/liveblocks-auth/route.ts`, review the Liveblocks auth handler.
Ensure it does NOT authorize any authenticated user for any room ID.
Add an explicit check that the requesting user owns or is a member of the
requested room before calling `liveblocks.prepareSession()` or
`liveblocks.identifyUser()`. If the user is not authorized for that room,
return a 403 response immediately. Do not fall through to authorization.

=========================================================
🟠 2. Room Workspace — Guard Initial Storage Against Overwrite

In `components/editor/room-workspace.tsx`, find where initial shared storage
(nodes, edges, or any LiveList/LiveMap) is set on mount.
Wrap that initialization in a guard so it only runs when the storage is
actually empty (e.g. `nodes.length === 0`). It must NOT overwrite existing
collaborative data when a user reconnects or the component remounts.
Use the Liveblocks `useMutation` hook with a read-then-write pattern inside
the mutation callback to safely check before writing.

==========================================================
🟠 3. Collaborative Canvas — Fix Undo/Redo Conflict

In `components/editor/collaborative-canvas.tsx`, audit the undo/redo wiring.
Remove or disable React Flow's built-in history (if enabled). All undo/redo
must go through Liveblocks `useHistory` (`history.undo()` / `history.redo()`)
so that history is shared across collaborators and stays in sync with
Liveblocks storage. Ensure node and edge mutations use  `useMutation` and are
wrapped with `history.pause()` / `history.resume()` where needed to batch
related changes into a single undo step.

=============================================================
🟡 4. Performance — Use Selectors for Storage and Presence

In `components/editor/collaborative-canvas.tsx` and any child components,
audit every `useStorage` and `useOthers` call.
Replace broad `useStorage(root => root)` calls with fine-grained selectors,
e.g. `useStorage(root => root.nodes)`. For presence, use
`useOthersMapped(other => other.presence.cursor)` instead of `useOthers()`
to prevent full re-renders when unrelated presence fields change.
Add referential equality check