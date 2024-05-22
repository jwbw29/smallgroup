import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import EventsPage from "@/components/EventsPage";
import AddEvent from "@/components/AddEvent";
import { EventsProvider } from "@/context/EventContext";

async function fetchEvents() {
  const baseUrl = process.env.AUTH0_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/events`);
  console.log("Here's the res", res);

  if (!res.ok) {
    throw new Error("Failed to fetch event data");
  }
  return res.json();
}

export default withPageAuthRequired(
  async function Page() {
    const { roles } = await getUserSessionAndRoles();
    const notAuthorized = roles.length === 0;
    const events = await fetchEvents();

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <EventsProvider initialEvents={events}>
        <main className="flex flex-col items-center">
          <Nav />
          <EventsPage />
          <AddEvent />
        </main>
      </EventsProvider>
    );
  },
  { returnTo: "/schedule" }
);
