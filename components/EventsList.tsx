'use client'


import { EventCard } from "@/components/event";
import { Event } from "@/utils/types";

interface EventsListProps {
  events: Event[];
  selectedSemester: string;
  selectedYear: string;
}

const EventsList: React.FC<EventsListProps> = ({
  events,
  selectedSemester,
  selectedYear,
}) => {
  //// Filtering Events
  const filteredEvents = events.filter((event) => {
    const eventYear = event.year.year;
    const eventSemester = event.semester.semester_name;
    return eventYear === selectedYear && eventSemester === selectedSemester;
  });

  return (
    <div className="flex flex-col flex-1 items-center ">
      <div className="flex flex-col h-fit w-3/4 max-w-[750px] gap-8 my-6">
        {filteredEvents.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;
