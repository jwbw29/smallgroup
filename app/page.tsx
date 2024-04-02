import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import events from "@/public/data/eventData.json";

interface Event {
  name: string;
  date: string;
  location: string;
  group_type: string;
}

export default withPageAuthRequired(
  async function Page() {
    // get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // filter events to only include future ones
    const futureEvents: Event[] = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    });

    // sort future events by date
    futureEvents.sort((a: Event, b: Event) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });

    // select the next event (closest to today)
    const nextEvent: Event | null = futureEvents[0] || null;

    // format the date
    const formattedDate = new Date(nextEvent.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    //Fetch user data via getSession
    const { roles } = await getUserSessionAndRoles();
    //Check if the user has authorization

    const isPending = roles.some((role: string) => role === "Pending");

    const notAuthorized = isPending || roles.length === 0;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col text-blue-950">
        <Nav />
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col w-3/4 max-w-[500px] gap-16 mt-28 ">
            <h1 className="text-3xl pl-2">Next Event</h1>{" "}
            <div className="flex flex-col shadow-custom bg-white border-4 border-blue-950 rounded-xl h-72 justify-around px-4">
              <div className="flex flex-col items-start">
                <h2 className="text-4xl">{nextEvent.name}</h2>
                <h3 className="text-lg font-light">{formattedDate}</h3>
              </div>
              <div className="">
                <p className="py-1 font-light">Who: {nextEvent.group_type}</p>
                <p className="py-1 font-light">Where: {nextEvent.location}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/" }
);
