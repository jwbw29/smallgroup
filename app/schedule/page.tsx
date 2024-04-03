import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import EventSelector from "@/components/EventSelector";
import eventData from "@/public/data/eventData.json";

export default withPageAuthRequired(
  async function Page() {
    const { roles } = await getUserSessionAndRoles();
    //Check if the user has authorization
    //   const isPending = roles.some((role: string) => role === "Pending");

    const notAuthorized = roles.length === 0;
    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        {" "}
        <Nav />
        <EventSelector />{" "}
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
