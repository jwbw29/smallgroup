import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import { EventCard } from "@/components/event";
// import eventData from "@/public/data/eventTestData.json";
import { prisma } from "@/db/client";
// import { eventData } from "@/public/data/eventTestData.json";
import { Event } from "@/utils/types";

async function getEventData() {
  const eventData = await prisma.event.findMany({
    orderBy: { date: "asc" },
    include: {
      semester: true,
      year: true,
      group: true,
    },
  });
  return eventData;
}

export default withPageAuthRequired(
  async function Page() {
    const eventData = await getEventData();
    // get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // filter eventData to only include future ones
    const futureEvents: Event[] = eventData.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    });

    //// sort future eventData by date //TODO might delete this after pulling from db
    futureEvents.sort((a: Event, b: Event) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });

    // select the next event (closest to today)
    const nextEvent: Event | null = futureEvents[0] || null;

    //Fetch user data via getSession
    const { roles } = await getUserSessionAndRoles();

    const notAuthorized = roles.length === 0;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        <Nav />
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col w-3/4 max-w-[750px] gap-8 mt-20 ">
            <h1 className="text-3xl pl-2">Next Event</h1>
            {nextEvent ? (
              <EventCard event={nextEvent} />
            ) : (
              <div className="eventCard">
                <div className="flex flex-col items-start ">
                  <h2 className="text-2xl text-left font-bold">
                    No upcoming Events
                  </h2>
                  <h3 className="text-lg font-light  ">None</h3>
                </div>
                <div className=" mx-4">
                  {" "}
                  <p>
                    Who: <span className="font-bold">N/A</span>
                  </p>
                  <p>
                    Where: <span className="font-bold">N/A</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/" }
);
