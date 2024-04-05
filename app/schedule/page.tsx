import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import EventSelector from "@/components/EventSelector";
import eventData from "@/public/data/eventData.json";

export default withPageAuthRequired(
  async function Page() {
    const { roles } = await getUserSessionAndRoles();

    const notAuthorized = roles.length === 0;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        {" "}
        <Nav />
        {/* //* I feel like this should map EventCard, and the EventSelector should only be the selector component */}
        <EventSelector />{" "}
      </main>
    );
  },
  { returnTo: "/schedule" }
);
