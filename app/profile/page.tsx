import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import ProfileClient from "@/components/user";
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
      <Nav />
      <div className="flex flex-col flex-1 items-center gap-8">
        <h1 className="text-3xl text-center my-6">Profile</h1>{" "}
        <div className="flex flex-col h-fit w-3/4 gap-8 my-6">
          <ProfileClient />
        </div>
        <div className="flex w-3/4 justify-end">
          <a href="/api/auth/logout">
            <button className="border p-2 px-6 rounded-lg">Logout</button>
          </a>
        </div>
      </div>
    </main>
  );
}
