import { getSession } from "@auth0/nextjs-auth0";

export async function getUserSessionAndRoles() {
  const session = await getSession();

  if (!session || !session.user) {
    throw new Error(`Requires authentication`);
  }

  const roles: string[] =
    session.user["https://smallgroup.vercel.app/roles"] || [];

  return { roles };
}
