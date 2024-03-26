import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
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
