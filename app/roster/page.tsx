import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { Person } from "@/components/person";
import { getSession } from "@auth0/nextjs-auth0";

import familyData from "@/public/data/familyData.json";

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
      client_id: clientId ?? "",
      client_secret: clientSecret ?? "",
      audience: audience ?? "",
      grant_type: "client_credentials",
    }),
  });
  if (!tokenResponse.ok) {
    throw new Error("Failed to fetch the token");
  }
  const token: Token = await tokenResponse.json();

  //Fetch userId via getSession
  const session = await getSession();
  if (!session || !session.user) {
    throw new Error(`Requires authentication`);
  }
  const userId = session.user.sub;

  //Use the token to fetch the roles
  const rolesResponse = await fetch(
    (audience as string) + `users/${userId}/roles`,
    {
      headers: {
        Authorization: `${token.token_type ?? ""} ${token.access_token ?? ""}`,
      },
    }
  );
  const roles: Role[] = await rolesResponse.json();
  //Check if the user is a member
  const isPending = roles?.some((role: Role) => role.name === "Pending");

  return isPending ? (
    <MembershipPending />
  ) : (
    <main className="flex flex-col min-h-screen p-2">
      <Nav />{" "}
      <div className="flex flex-col flex-1 testBorder items-center ">
        <h1 className="text-3xl testBorder text-center my-6">Roster</h1>{" "}
        <div className="flex flex-col testBorder h-fit w-3/4 gap-8 my-6">
          {familyData.map((family, i) => (
            <Person key={i} family={family} />
          ))}
        </div>
      </div>
    </main>
  );
}
