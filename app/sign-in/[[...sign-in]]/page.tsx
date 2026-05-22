import { SignIn } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"

/**
 * Renders the sign-in page using the AuthPageShell and Clerk's SignIn component.
 *
 * The embedded SignIn is configured to use path-based routing at `/sign-in`, will
 * redirect to `/editor` when no target is determined, and uses the
 * `NEXT_PUBLIC_CLERK_SIGN_UP_URL` environment variable for the sign-up URL if set,
 * falling back to `/sign-up` otherwise.
 *
 * @returns The React element for the sign-in page.
 */
export default function SignInPage() {
  return (
    <AuthPageShell
      title="Sign in to your workspace"
      tagline="A focused place to build and manage AI workflow projects."
    >
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"}
        fallbackRedirectUrl="/editor"
      />
    </AuthPageShell>
  )
}
