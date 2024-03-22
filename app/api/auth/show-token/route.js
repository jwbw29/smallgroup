// // app/api/show-token/route.js
// import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";

// export const GET = withApiAuthRequired(async function showToken(req, res) {
//   const { accessToken } = await getAccessToken(req, res);
//   // For security reasons, do not use this in production to send the access token directly to the client.
//   res.json({ accessToken });
// });
