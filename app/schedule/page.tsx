import Nav from "@/components/nav";
import Link from "next/link";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";

const links = [
  { name: "Fall 2023", href: "/schedule/fall23" },
  { name: "Spring 2024", href: "/schedule/spring24" },
];

export default withPageAuthRequired(
  async function Page() {
    const { roles, loginCount } = await getUserSessionAndRoles();
    //Check if the user has authorization
    const isPending = roles.some((role: string) => role === "Pending");

    const isAuthorized = !isPending || loginCount > 1;

    return isAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        {" "}
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

/** // **NOTES
 * should default to the current semester
 * and the route by default should be /schedule/{current semester}
 * ***** OR ******
 * we get rid of the fall23 and spring24 routes
 * and whatever is chosen in the drop down just displays different data
 * fall23 = 08/01/2023 - 12/31/2023
 * spring24 = 01/01/2024 - 05/31/2024
 * fall24 = 08/01/2024 - 12/31/2024
 * etc
 *
 *
 *
 *
 */
