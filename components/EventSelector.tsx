"use client";

import { useState, useEffect } from "react";
// import eventData from "@/public/data/eventData.json";
import { EventCard } from "@/components/event";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  semesterId: number;
  groupId: number;
  yearId: number;
  semester: {
    id: number;
    semester_name: string;
  };
  year: {
    id: number;
    year: string; // Note that year is a string here
  };
  group: {
    id: number;
    group_type: string;
  };
}

const getCurrentSemester = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // getMonth is zero-indexed
  if (currentMonth >= 8) {
    return `Fall`;
  } else if (currentMonth >= 1 && currentMonth <= 5) {
    return `Spring`;
  } else {
    return `Summer`;
  }
};

const EventSelector = () => {
  const currentSemester = getCurrentSemester();
  const currentYear = new Date().getFullYear();

  const [selectedSemester, setSelectedSemester] = useState(currentSemester);
  const [eventData, setEventData] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: Event[] = await response.json();
        console.log("data:", data);
        setEventData(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, []);

  //TODO Update this
  const filteredEvents = eventData.filter((event) =>
    //grab only the events that match the current semester AND current year
    {
      const eventYear = parseInt(event.year.year);
      const eventSemester = event.semester.semester_name;
      return eventYear === currentYear && eventSemester === currentSemester;
    }
  );

  const handleDropdownSelect = (semester: string) => {
    setSelectedSemester(semester);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-6 ">
        <div className="flex h-fit w-3/4 max-w-[750px] justify-end my-8 lg:my-16">
          <Select
            onValueChange={setSelectedSemester}
            defaultValue={selectedSemester}
          >
            {" "}
            <SelectTrigger className="bg-blue-950 rounded-md text-white w-[9rem] min-w-fit lg:h-12 lg:w-36">
              <SelectValue placeholder="Choose a Semester" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem
                value="Spring 2024"
                onClick={() => handleDropdownSelect("Spring 2024")}
              >
                {"Spring '24"}
              </SelectItem>
              <SelectItem
                value="Fall 2023"
                onClick={() => handleDropdownSelect("Fall 2023")}
              >
                {"Fall '23"}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center ">
        <div className="flex flex-col h-fit w-3/4 max-w-[750px] gap-8 my-6">
          {filteredEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSelector;
