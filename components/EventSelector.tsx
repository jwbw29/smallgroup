"use client";

import { useState, useEffect } from "react";
import eventData from "@/public/data/eventData.json";
import { EventDetails } from "@/components/event";

// const fall23 = eventData.filter((event) => {
//   return event.year === "2023" && event.semester === "Fall";
// });

// const spring24 = eventData.filter((event) => {
//   return event.year === "2024" && event.semester === "Spring";
// });

// Helper function to determine the current semester
const getCurrentSemester = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const month = today.getMonth(); // January is 0, July is 6
  const isFallOrLater = month >= 7; // Assuming Fall semester starts in July or later
  const semester = isFallOrLater ? "Fall" : "Spring";
  const year = isFallOrLater
    ? currentYear.toString()
    : (currentYear - 1).toString();

  return `${semester} '${year.slice(-2)}`; // Returns "Fall '23" or "Spring '23" format
};

const EventSelector = () => {
  const currentSemester = getCurrentSemester();
  const [selectedSemester, setSelectedSemester] = useState(currentSemester);

  // Assuming the eventData format allows this kind of filtering directly
  const filteredEvents = eventData.filter((event) => {
    const semesterYear = selectedSemester.split(" ");
    const semester = semesterYear[0];
    const year = "20" + semesterYear[1].replace("'", ""); // Converts "'23" to "2023"
    return event.year === year && event.semester === semester;
  });

  const handleSelectChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="flex flex-col flex-1 p-4">
      <select
        className="testBorder w-full"
        value={selectedSemester}
        onChange={handleSelectChange}
      >
        <option value="Fall '23">{"Fall '23"}</option>
        <option value="Spring '24">{"Spring '24"}</option>
        {/* Add more options as needed */}
      </select>
      <div className="flex flex-col testBorder h-fit w-3/4 gap-8 my-6">
        {filteredEvents.map((event, i) => (
          <EventDetails key={i} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventSelector;
