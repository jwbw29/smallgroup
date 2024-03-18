// ** use server side rendering to get data from the server

import Nav from "@/components/nav";
import { EventDetails } from "@/components/event";

import eventData from "@/public/data/eventData.json";

export default function Page() {
  const filteredEvents = eventData.filter((event) => {
    return event.year === "2024" && event.semester === "Spring";
  });

  return (
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
}
