import { NextRequest, NextResponse } from "next/server";
import { updateSession, verifySession } from "./lib/session";
import { isAuthorized } from "./lib/auth";

export const config = {
  matcher: ["/api/:function*", "/dashboard/:function*", "/editor/:function*"],
};

export async function middleware(req: NextRequest) {
  // Authorization API handler
  const isApiRoute = req.nextUrl.pathname.startsWith("/api");

  if (!isAuthorized(req) && isApiRoute) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Protected Route handler
  const session = await verifySession();
  const isProtectedRoute =
    req.nextUrl.pathname.startsWith("/dashboard") &&
    req.nextUrl.pathname.startsWith("/editor");

  // Redirect to login page if the user is not authenticated
  if (isProtectedRoute && !session.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Update the session expiration time if session 1 day before expired
  if (isProtectedRoute && session?.userId && session.expiresAt) {
    const now = new Date();
    const expiresAt = new Date(session.expiresAt as Date);

    if (expiresAt.getTime() - now.getTime() < 24 * 60 * 60 * 1000) {
      await updateSession();
    }
  }

  // Redirect to subscriptions page if the user subscription is expired
  if (isProtectedRoute && session?.userId && session.isSubscribed) {
    return NextResponse.redirect(
      new URL("/dashboard/subscriptions", req.nextUrl)
    );
  }

  return NextResponse.next();
}
