import Nav from "@/components/nav";
import Link from "next/link";
import MembershipPending from "@/components/pending";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

const links = [
  { name: "Fall 2023", href: "/schedule/fall23" },
  { name: "Spring 2024", href: "/schedule/spring24" },
];

export default withPageAuthRequired(
  async function Page() {
    //Fetch user data via getSession
    const session = await getSession();

    if (!session || !session.user || !session.accessToken) {
      throw new Error(`Requires authentication`);
    }

    const roles = session.user["https://smallgroup.vercel.app/roles"] || [];
    console.log(roles);
    //Check if the user is a member
    const isPending = roles.some((role: string) => role === "Pending");

    return isPending ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col min-h-screen p-2">
        <Nav />
        <div className="flex flex-col flex-1 testBorder p-4">
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
  },
  { returnTo: "/schedule" }
);
// <Link href="/schedule/fall23" className="testBorder">
//   <h2>Fall 2023</h2>
// </Link>
// <Link href="/schedule/spring24" className="testBorder">
//   <h2>Spring 2024</h2>
// </Link>
