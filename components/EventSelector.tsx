"use client";

import { useState } from "react";
import eventData from "@/public/data/eventData.json";
import { EventCard } from "@/components/event";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const getCurrentSemester = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // getMonth is zero-indexed
  if (month >= 8) {
    return `Fall ${year}`;
  } else if (month >= 1 && month <= 5) {
    return `Spring ${year}`;
  } else {
    return `Summer ${year}`;
  }
};

const EventSelector = () => {
  const currentSemester = getCurrentSemester();
  const [selectedSemester, setSelectedSemester] = useState(currentSemester);

  const filteredEvents = eventData.filter((event) => {
    const semesterYear = selectedSemester.split(" ");
    const semester = semesterYear[0];
    const year = semesterYear[1];
    return event.year === year && event.semester === semester;
  });

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
