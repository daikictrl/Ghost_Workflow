import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Redirects the request to "/editor" when a user is authenticated, otherwise redirects to "/sign-in".
 *
 * The function decides the destination solely from the current authentication state and performs an immediate navigation redirect.
 */
export default async function Home() {
  const { userId } = await auth();
  const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in";

  redirect(userId ? "/editor" : signInUrl);
}
