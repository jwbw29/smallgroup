import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import EventsPage from "@/components/EventsPage";
import AddEvent from "@/components/AddEvent";
import NewEventForm from "@/components/NewEventForm";

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
        <AddEvent />
        <NewEventForm />
      </main>
    );
  },
  { returnTo: "/schedule" }
);
