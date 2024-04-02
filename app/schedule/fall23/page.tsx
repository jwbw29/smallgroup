import Nav from "@/components/nav";
import { EventDetails } from "@/components/event";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";

import eventData from "@/public/data/eventData.json";

export default withPageAuthRequired(
  async function Page() {
    const filteredEvents = eventData.filter((event) => {
      return event.year === "2023" && event.semester === "Fall";
    });

    //Fetch user data via getSession
    const { roles, loginCount } = await getUserSessionAndRoles();
    //Check if the user is a member
    //Check if the user has authorization
    const isPending = roles.some((role: string) => role === "Pending");

    const notAuthorized = isPending || loginCount <= 1;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        {" "}
        <Nav />{" "}
        <div className="flex flex-col flex-1 testBorder items-center ">
          <h1 className="text-3xl testBorder text-center my-6">
            {"Fall '23 Schedule"}
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
  { returnTo: "/schedule/fall23 " }
);
