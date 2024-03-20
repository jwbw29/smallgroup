// app/api/auth/[auth0]/route.js
import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import jwt from "jsonwebtoken";

// Custom afterCallback function to enrich session with roles
const afterCallback = async (req, res, session) => {
  // Assuming the roles are stored in the ID Token
  const decodedToken = jwt.decode(session.idToken);
  const roles = decodedToken["https://smallgroup.vercel.app/roles"] || [];
  console.log("Extracted Roles:", roles); // Log the extracted roles

  session.user.roles = roles; // Add roles to the session

  return session;
};

// Modify the GET handler to customize the callback handling
export const GET = handleAuth({
  // Override the default callback handler
  async callback(req, res) {
    await handleCallback(req, res, { afterCallback });
  },
});

// * This creates the following routes:
// - `/api/auth/login`
//      The route used to perform login with Auth0.
// - `/api/auth/logout`:
//      The route used to log the user out.
// - `/api/auth/callback`:
//      The route Auth0 will redirect the user to after a successful login.
// - `/api/auth/me`:
//      The route to fetch the user profile from.
