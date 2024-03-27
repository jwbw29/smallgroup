import Nav from "@/components/nav";
import Link from "next/link";
import MembershipPending from "@/components/pending";
import { getSession } from "@auth0/nextjs-auth0";

const links = [
  { name: "Fall 2023", href: "/schedule/fall23" },
  { name: "Spring 2024", href: "/schedule/spring24" },
];

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
  //Check if the user is a member
  const isPending = roles.some((role: Role) => role.name === "Pending");
  return isPending ? (
    <MembershipPending />
  ) : (
    <main className="flex flex-col min-h-screen p-2">
      <Nav />
      <div className="flex flex-col flex-1 testBorder p-4">
        {/* TODO Not MVP */}
        {/* <div className="flex justify-end testBorder m-4">
            <button className="testBorder rounded-md py-2 px-4 shadow-lg">
              New Event
            </button>
          </div> */}
        <div className="flex flex-col testBorder items-center">
          {links.map((link) => {
            return (
              <Link key={link.name} href={link.href} className="customLink">
                <h2>{link.name}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
// <Link href="/schedule/fall23" className="testBorder">
//   <h2>Fall 2023</h2>
// </Link>
// <Link href="/schedule/spring24" className="testBorder">
//   <h2>Spring 2024</h2>
// </Link>
