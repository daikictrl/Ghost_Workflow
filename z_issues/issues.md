Verify each finding against current code. Fix only still-valid issues, skip the
rest with a brief reason, keep changes minimal, and validate.

===================================================================================
Inline comments:
In `@app/api/projects/`[projectId]/collaborators/route.ts:
- Around line 163-173: The self-invite guard around
clerkClient()/client.users.getUser(project.ownerId) currently swallows errors
and allows the flow to continue; change the catch block so failures do not
bypass the check by returning an error response (e.g., Response.json({ error:
"Unable to verify owner email" }, { status: 500 }) or 503) instead of only
logging. Update the catch that references clerkOwner/ownerEmails/trimmedEmail to
return this error response so a Clerk API failure fails closed and prevents a
potential self-invite.

===================================================================================
In `@components/editor/project-sidebar.tsx`:
- Around line 85-98: The clickable project row uses a plain div with an onClick
handler (see the onClick that calls router.push(`/editor/${project.id}`) and the
isActive check) which is not keyboard-accessible; update the element to be a
semantic interactive control by either replacing the div with a <button> or
Next.js <Link>, or add role="button", tabIndex={0} and a keyDown handler that
triggers the same navigation when Enter or Space is pressed (call router.push
with project.id), and ensure focus/active styling matches the existing isActive
logic so both mouse and keyboard users can open a project (apply the same change
to the shared list rows around the lines handling project.id and isActive).

===================================================================================
In `@components/editor/room-workspace.tsx`:
- Around line 44-51: The AI sidebar is still keyboard-focusable when hidden;
update the aside in room-workspace.tsx to mirror ProjectSidebar by adding inert
and aria-hidden attributes tied to isAiSidebarOpen (e.g., set inert and
aria-hidden when !isAiSidebarOpen) so the hidden sidebar and its interactive
elements are removed from the tab order and accessibility tree; update the aside
element that currently uses isAiSidebarOpen for translation to also apply
inert={...} and aria-hidden={...} based on that same flag.

===================================================================================
In `@components/editor/share-dialog.tsx`:
- Around line 53-81: Clear the stale access state (call setIsOwner(false),
setOwner(null), setCollaborators([])) before starting the fetch so the UI
doesn't show the previous project's people; additionally prevent late responses
from overwriting state by adding a request identifier check (create a requestId
ref, increment it in the useEffect before calling fetchCollaborators, capture
the current id inside fetchCollaborators and only call state setters if it
matches the latest ref) or use an AbortController to cancel previous requests;
update the useEffect and fetchCollaborators functions to implement these changes
and keep the existing loading/error/invite resets.
- Around line 195-199: The share link currently uses window.location.origin
during render in the Input value (in components/editor/share-dialog.tsx),
causing a hydration mismatch between SSR and the first client render; change the
logic to render a deterministic relative URL by default (e.g.,
`/editor/${projectId}`) and compute the absolute URL only after the component
mounts: add a mounted state (useState) and set the full URL using useEffect
(access window.location.origin inside useEffect) and use that state as the Input
value when available, ensuring no window access occurs during initial render and
keeping projectId and the Input value logic intact.

===================================================================================
In `@lib/prisma.ts`:
- Around line 23-32: The hardcoded DNS override inside the lookup implementation
for hostname 'pooled.db.prisma.io' (the lookup function) must be removed or
gated; update the lookup function so it either always defers to
dns.lookup(hostname, options, callback) or only returns the hardcoded IP when an
explicit env var (e.g., PRISMA_FORCE_POOLED_IP=true) is set; locate the lookup
function in lib/prisma.ts and replace the unconditional override with a check
against that env var (or remove the branch entirely) so DNS-based
load-balancing/failover is preserved unless explicitly opted into.

===================================================================================
In `@test_db.ts`:
- Line 5: The console.log call that prints process.env.DATABASE_URL in
test_db.ts leaks credentials; change the console.log("Connecting using modified
lib/prisma with dotenv/config...", process.env.DATABASE_URL) to log a
non-sensitive indicator instead (e.g., "Connecting to database" or a
masked/host-only value), or remove the env var from the message entirely so
credentials are not written to stdout/CI logs.

---

Nitpick comments:
In `@app/api/projects/`[projectId]/collaborators/route.ts:
- Around line 253-262: The DELETE route currently reads email from either a JSON
body or URL search params which is confusing; update the handler (the DELETE
request handling block in route.ts) to accept email only from the JSON body:
remove the URL fallback logic that parses new URL(request.url) and
url.searchParams.get("email"), instead always await request.json(), extract and
validate body.email, and return a 400 error when email is missing or invalid;
update any related tests or callers to send JSON payloads and keep error
messages consistent (e.g., "email is required").
- Around line 5-26: The GET handler redundantly calls getUserIdentity() after
checkProjectAccess() already obtains the identity; update the flow so you don't
fetch identity twice: either have checkProjectAccess() return the identity
(e.g., include an identity field on the accessCheck object and use
accessCheck.identity) and use that to compute isOwner, or remove the
getUserIdentity() call and rely on accessCheck.project.ownerId and
accessCheck.identity to determine isOwner; adjust references in the GET function
(project, accessCheck, isOwner) accordingly and remove the extra
getUserIdentity() invocation.

=================================================================================
In `@app/editor/`[roomId]/page.tsx:
- Around line 14-40: Both generateMetadata and EditorRoomPage call
checkProjectAccess(roomId) causing duplicate DB/auth calls; wrap the
checkProjectAccess implementation with React's cache() (e.g., export a
cachedCheckProjectAccess) in the module that defines checkProjectAccess
(lib/project-access.ts) so subsequent calls within the same request return the
cached result, then replace usage in generateMetadata and EditorRoomPage to call
the cached version (keep function name references clear: checkProjectAccess ->
cachedCheckProjectAccess or export the cached wrapper under the same name).

================================================================================
In `@components/editor/room-workspace.tsx`:
- Around line 72-92: The send-and-clear logic is duplicated in the form onSubmit
and textarea onKeyDown handlers; extract it into a single handler (e.g.,
handleSend) that checks input.trim(), logs "Send query to AI:" with the input,
and calls setInput(""); replace the inline blocks in onSubmit and onKeyDown to
call handleSend (onSubmit should still e.preventDefault() before calling it, and
onKeyDown should keep the Enter-without-Shift check before calling it) so
behavior stays in sync across the form and textarea.

===================================================================================
In `@lib/project-access.ts`:
- Around line 36-72: The code in checkProjectAccess uses (c: any) for
collaborators which loses type safety; fix by using Prisma-generated types for
the findUnique result (e.g., use Prisma.ProjectGetPayload<{ include: {
collaborators: true } }> or declare a ProjectWithCollaborators type) when
calling prisma.project.findUnique (or by providing the generic to findUnique),
then remove the any and use the typed collaborators (e.g., (c) or (c:
CollaboratorType)) in the some(...) callback so TypeScript infers correct
properties like c.email.