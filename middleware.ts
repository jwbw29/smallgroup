import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface MyJwtPayload extends JwtPayload {
  "https://smallgroup.vercel.app/roles"?: string[];
  "https://smallgroup.vercel.app/logins"?: number;
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  /* //* Keep in mind
    - Security Assumptions: Relying on the mere presence of a cookie as an indication of authentication assumes that the session it represents is valid and not expired. In many cases, especially for initial middleware checks, this is a practical and acceptable assumption. However, be aware that without validating the session (e.g., checking its signature, expiration, and so forth), there's a slight risk. Such validation is typically handled in more detail within your application, either on specific routes that require secure access or via server-side page rendering logic. */

  const token = request.cookies.get("appSession"); //

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Decode the JWT Token
  let decoded: MyJwtPayload | null;
  try {
    const tokenString = token as unknown as string;
    decoded = jwt.decode(tokenString) as MyJwtPayload | null;
  } catch (error) {
    // If there's an error decoding the token, redirect to login
    // TODO uncomment the next line and comment out the line below it:
    // return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.json({ message: "Error decoding token" });
  }

  // Extract Custom Claims
  if (decoded) {
    const roles = decoded["https://smallgroup.vercel.app/roles"];
    const loginCount = decoded["https://smallgroup.vercel.app/logins"];

    if (
      (roles && roles.includes("Pending")) ||
      (loginCount && loginCount === 1)
    ) {
      return NextResponse.redirect(new URL("/signup", request.url));
    }
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
