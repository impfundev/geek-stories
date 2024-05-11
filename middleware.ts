import { NextRequest, NextResponse } from "next/server";
import { updateSession, verifySession } from "@/lib/session";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup", "/"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Get the session from the cookie
  const session = await verifySession();

  // 4. Redirect to /login if the user is not authenticated

  if (isProtectedRoute && !session.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 6. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  // 7. Redirect to /dashboard/subscriptions if the user subscription is expired

  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith("/dashboard") &&
    !session.isSubscribed
  ) {
    return NextResponse.redirect(
      new URL("/dashboard/subscriptions", req.nextUrl)
    );
  }

  // 8. Update the session expiration time if session 1 day before expired
  if (session?.userId && session.expiresAt) {
    const now = new Date();
    const expiresAt = new Date(session.expiresAt as Date);

    if (expiresAt.getTime() - now.getTime() < 24 * 60 * 60 * 1000) {
      await updateSession();
    }
  }

  // 9. Continue to the next middleware or the requested page

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
