# Architecture Context

## Stack

| Layer     | Technology                 | Role                                 |
| --------- | -------------------------- | ------------------------------------ |
| Framework | Next.js 16 + TypeScript    | App Router, layouts, pages, proxy    |
| UI        | Tailwind CSS + shadcn/ui   | Dark themed application components   |
| Auth      | Clerk + `@clerk/ui` themes | Authentication, route protection, UI |

## System Boundaries

- `app/` — Next.js routes and route-specific layouts.
- `app/sign-in/` and `app/sign-up/` — public Clerk auth pages.
- `app/editor/` — protected editor route tree wrapped by the editor chrome.
- `components/editor/` — reusable editor navbar, sidebar, and editor layout shell.
- `components/auth/` — reusable auth page presentation shell.
- `components/ui/` — generated shadcn/ui primitives.
- `proxy.ts` — root-level Clerk route protection for all matched requests.

## Storage Model

- **[Storage type e.g. Database]**: [What lives here —
  e.g. metadata, ownership, relationships]
- **[Storage type e.g. Blob/File Storage]**: [What lives
  here — e.g. generated files, media, large artifacts]

## Auth and Access Model

- Clerk provides authentication through `ClerkProvider` in the root layout.
- `/sign-in`, `/sign-up`, and `/` are public entry routes; `/` only redirects users based on auth state.
- All other matched routes are protected by Clerk in `proxy.ts` by default.
- Authenticated users are redirected from `/` to `/editor`; unauthenticated users are redirected to `/sign-in`.
- The editor chrome exposes Clerk's default `UserButton` for profile settings and logout.

## Invariants

1. Use `proxy.ts` for request protection; do not add `middleware.ts`.
2. Keep Clerk auth UI on Clerk components and avoid rebuilding Clerk internals.
3. Keep the editor shell under protected editor routes, not around public auth pages.
4. Use existing Clerk environment variable names for auth URLs and keys.
