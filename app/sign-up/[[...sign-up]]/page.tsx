import { SignUp } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"

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
