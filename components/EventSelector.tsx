"use client";

import { useState, useEffect } from "react";
import eventData from "@/public/data/eventData.json";
import { EventDetails } from "@/components/event";

const fall23 = eventData.filter((event) => {
  return event.year === "2023" && event.semester === "Fall";
});

const spring24 = eventData.filter((event) => {
  return event.year === "2024" && event.semester === "Spring";
});

const EventSelector = () => {
  const [selectedSemester, setSelectedSemester] = useState("Fall '23");

  const handleSelectChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="flex flex-col flex-1 p-4">
      {/* Select dropdown for choosing semester */}
      <select className="testBorder w-full" onChange={handleSelectChange}>
        <option value="fall23">{"Fall '23"}</option>
        <option value="spring24">{"Spring '24"}</option>
      </select>
      {/* Conditionally render events based on selected semester */}
      <div className="flex flex-col testBorder h-fit w-3/4 gap-8 my-6">
        {(selectedSemester === "fall23" ? fall23 : spring24).map((event, i) => (
          <EventDetails key={i} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventSelector;
