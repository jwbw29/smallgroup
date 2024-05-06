import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import EventsPage from "@/components/EventsPage";
import AddEvent from "@/components/AddEvent";
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
        {/* make the button a floating fixed position */}
        <NewEventModal />
      </main>
    );
  },
  { returnTo: "/schedule" }
);
