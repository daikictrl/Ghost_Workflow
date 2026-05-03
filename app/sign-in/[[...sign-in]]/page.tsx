import { SignIn } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"

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
