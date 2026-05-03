import { SignUp } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"

/**
 * Render the sign-up page with Clerk's SignUp UI inside the AuthPageShell.
 *
 * The page sets the shell's title to "Create your workspace" and a brief tagline,
 * and configures the `SignUp` component to use path-based routing (`/sign-up`),
 * use `NEXT_PUBLIC_CLERK_SIGN_IN_URL` (falling back to `/sign-in`) for the sign-in URL,
 * and redirect to `/editor` after successful sign-up.
 *
 * @returns A React element containing the sign-up UI wrapped by the auth page shell.
 */
export default function SignUpPage() {
  return (
    <AuthPageShell
      title="Create your workspace"
      tagline="Start with a secure account before opening the editor."
    >
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"}
        fallbackRedirectUrl="/editor"
      />
    </AuthPageShell>
  )
}
