import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import EventsPage from "@/components/EventsPage";
import NewEventModal from "@/components/NewEventModal";

export default withPageAuthRequired(
  async function Page() {
    const { roles } = await getUserSessionAndRoles();
    const notAuthorized = roles.length === 0;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col items-center">
        {" "}
        <Nav />
        <EventsPage />
        <NewEventModal />
      </main>
    );
  },
  { returnTo: "/schedule" }
);
