import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

/**
 * Wraps the application with the root HTML structure and Clerk authentication provider.
 *
 * Renders an <html> and <body>, nests a ClerkProvider that supplies auth state, displays
 * sign-in and sign-up controls when the user is signed out and a user menu when signed in,
 * then renders the provided children beneath the header.
 *
 * @param children - The page or app content to render inside the layout
 * @returns The top-level HTML element containing the ClerkProvider, header, and `children`
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header>
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
