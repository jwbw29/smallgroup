import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.json({
    hello: "Middleware!",
  });

  /* PSEUDO CODE
    if !isAuthenticated
        return NextResponse.redirect(new URL("/login", request.url));
    else if isAuthenticated && role === "Pending"
        return NextResponse.redirect(new URL("/signup", request.url));
    else
        return NextResponse.next();
  */

  //   return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/roster", "/events", "/profile", "/schedule/:path*"],
};
