import Nav from "@/components/nav";
import Link from "next/link";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import EventSelector from "@/components/EventSelector";
import eventData from "@/public/data/eventData.json";
import { EventDetails } from "@/components/event";

// const links = [
//   { name: "Fall '23", href: "/schedule/fall23" },
//   { name: "Spring '24", href: "/schedule/spring24" },
// ];

const fall23 = eventData.filter((event) => {
  return event.year === "2023" && event.semester === "Fall";
});

const spring24 = eventData.filter((event) => {
  return event.year === "2024" && event.semester === "Spring";
});

export default withPageAuthRequired(
  async function Page() {
    const { roles } = await getUserSessionAndRoles();
    //Check if the user has authorization
    const isPending = roles.some((role: string) => role === "Pending");

    const notAuthorized = isPending || roles.length === 0;

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
