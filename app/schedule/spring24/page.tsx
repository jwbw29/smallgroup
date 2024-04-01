import Nav from "@/components/nav";
import { EventDetails } from "@/components/event";
import MembershipPending from "@/components/pending";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

import eventData from "@/public/data/eventData.json";

export default withPageAuthRequired(
  async function Page() {
    const filteredEvents = eventData.filter((event) => {
      return event.year === "2024" && event.semester === "Spring";
    });

    //Fetch the token
    //Fetch user data via getSession
    const session = await getSession();

    if (!session || !session.user || !session.accessToken) {
      throw new Error(`Requires authentication`);
    }

    const roles = session.user["https://smallgroup.vercel.app/roles"] || [];
    console.log(roles);
    //Check if the user is a member
    const isPending = roles.some((role: string) => role === "Pending");

    return isPending ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col min-h-screen p-2">
        <Nav />{" "}
        <div className="flex flex-col flex-1 testBorder items-center ">
          <h1 className="text-3xl testBorder text-center my-6">
            {"Spring '24 Schedule"}
          </h1>{" "}
          <div className="flex flex-col testBorder h-fit w-3/4 gap-8 my-6">
            {filteredEvents.map((event, i) => (
              <EventDetails key={i} event={event} />
            ))}
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/schedule/spring24" }
);
