import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("appSession"); //
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/roster", "/events", "/profile", "/schedule/:path*"],
};

/* Could maybe plug this in instead of appSession?
  //Fetch userId via getSession
  const session = await getSession();
  if (!session || !session.user) {
    throw new Error(`Requires authentication`);
  }
  const userId = session.user.sub;
  console.log("UserId: ", userId);
*/
