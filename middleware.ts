import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  /* //* Keep in mind
    - Security Assumptions: Relying on the mere presence of a cookie as an indication of authentication assumes that the session it represents is valid and not expired. In many cases, especially for initial middleware checks, this is a practical and acceptable assumption. However, be aware that without validating the session (e.g., checking its signature, expiration, and so forth), there's a slight risk. Such validation is typically handled in more detail within your application, either on specific routes that require secure access or via server-side page rendering logic. */
  const token = request.cookies.get("appSession"); //
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // TODO
  //   else if (token && role === "Pending"){
  //      return NextResponse.redirect(new URL("/signup", request.url));
  //   }
  else {
    return NextResponse.next();
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/roster",
    "/events",
    "/profile",
    "/schedule/:path*",
    "/signup",
  ],
};
