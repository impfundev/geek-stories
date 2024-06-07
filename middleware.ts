import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./lib/session";

export const config = {
  matcher: ["/dashboard/:function*", "/editor/:function*"],
};

export async function middleware(req: NextRequest) {
  // get session
  const { isAuth } = await verifySession();

  // Protected Route handler
  const isDasboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isEditor = req.nextUrl.pathname.startsWith("/editor");
  const isProtectedRoute = isDasboard || isEditor;

  // Redirect to login page if the user is not authenticated
  if (isProtectedRoute && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}
