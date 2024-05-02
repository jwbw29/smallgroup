/** // TODO create table of events like we did users/members */
import { Event } from "@/utils/types";

export function EventCard({ event }: { event: Event }) {
  const { name, date, location, group } = event;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="eventCard">
      <div className="flex flex-col items-start ">
        <h2 className="text-2xl text-left">{name}</h2>
        <h3 className="text-lg font-light">{formattedDate}</h3>
      </div>
      <div className=" mx-4">
        {" "}
        <p>
          <span className="font-light">Who: </span>
          {group.group_type}
        </p>
        <p>
          <span className="font-light">Where: </span>
          {location}
        </p>
      </div>
    </div>
  );
}
