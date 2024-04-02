"use client";

import { useState, useEffect } from "react";
import eventData from "@/public/data/eventData.json";
import { EventDetails } from "@/components/event";

const getCurrentSemester = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // getMonth is zero-indexed
  if (month >= 8) {
    return `Fall ${year}`;
  } else if (month >= 1 && month <= 5) {
    return `Spring ${year}`;
  } else {
    // Adjust based on your semester system; maybe Summer or a previous semester
    return `Summer ${year}`;
  }
};

const EventSelector = () => {
  const currentSemester = getCurrentSemester();
  const [selectedSemester, setSelectedSemester] = useState(currentSemester);

  // Assuming the eventData format allows this kind of filtering directly
  const filteredEvents = eventData.filter((event) => {
    const semesterYear = selectedSemester.split(" ");
    const semester = semesterYear[0];
    const year = semesterYear[1]; // Converts "'23" to "2023"
    return event.year === year && event.semester === semester;
  });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end my-6 pr-4 ">
        <select
          className="primaryButton text-base px-2 min-w-fit h-10"
          value={selectedSemester}
          onChange={handleSelectChange}
        >
          <option value="Fall 2023">{"Fall '23"}</option>
          <option value="Spring 2024">{"Spring '24"}</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex flex-col flex-1 items-center ">
        <div className="flex flex-col h-fit w-3/4 gap-8 my-6">
          {filteredEvents.map((event, i) => (
            <EventDetails key={i} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSelector;
