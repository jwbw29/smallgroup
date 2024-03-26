// Attempt to remove getSession and use withPageAuthRequired

import Nav from "@/components/nav";
import { getSession } from "@auth0/nextjs-auth0";

type Token = {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
};

interface Role {
  id: string;
  name: string;
  description?: string;
}

export default async function Page() {
  const clientId = process.env.AUTH0_CLIENT_ID;
  const clientSecret = process.env.AUTH0_CLIENT_SECRET;
  const audience = process.env.AUTH0_AUDIENCE;
  const tokenUrl = process.env.AUTH0_TOKEN_URL;

  //Fetch the token
  const tokenResponse = await fetch(tokenUrl as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId as string,
      client_secret: clientSecret as string,
      audience: audience as string,
      grant_type: "client_credentials",
    }),
  });
  const token: Token = await tokenResponse.json();

  //Fetch userId via getSession
  const session = await getSession();
  if (!session) {
    throw new Error(`Requires authentication`);
  }
  const { user } = session;
  const userId = user.sub;
  console.log(userId);

  //Use the token to fetch the roles
  const rolesResponse = await fetch(
    (audience as string) + `users/${userId}/roles`,
    {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    }
  );
  const roles: Role[] = await rolesResponse.json();
  console.log(roles);

  //Check if the user is a member
  const isMember = roles.some((role: Role) => role.name === "Member");

  return (
    isMember && (
      <main className="flex flex-col min-h-screen p-2">
        <Nav />
        <div className="flex flex-1 testBorder justify-center">
          <div className="flex flex-col testBorder h-96 w-3/4 gap-8 mt-28 ">
            <h1 className="text-3xl testBorder text-center">Next Event</h1>{" "}
            <div className="flex flex-col border-4 rounded-xl flex-1 justify-around">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl">{"{eventName}"}</h2>
                <h3 className=" font-bold">{"Date: {date}"}</h3>
              </div>
              <div className="testBorder mx-4">
                <p>{"Who: {guys/girls/all/etc}"}</p>
                <p>{"Where: {location}"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
}
