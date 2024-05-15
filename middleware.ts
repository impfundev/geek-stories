import { NextRequest, NextResponse } from "next/server";
import { updateSession, verifySession } from "./lib/session";

export const config = {
  matcher: ["/dashboard/:function*", "/editor/:function*"],
};

export async function middleware(req: NextRequest) {
  // get session
  const { isAuth, expiresAt } = await verifySession();

  // Protected Route handler
  const isDasboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isEditor = req.nextUrl.pathname.startsWith("/editor");
  const isProtectedRoute = isDasboard || isEditor;

  // Redirect to login page if the user is not authenticated
  if (isProtectedRoute && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Update the session expiration time if session 1 day before expired
  if (isProtectedRoute && isAuth && expiresAt) {
    const now = new Date();
    const expires = new Date(expiresAt as Date);

    if (expires.getTime() - now.getTime() < 24 * 60 * 60 * 1000) {
      await updateSession();
    }
  }

  return NextResponse.next();
}
