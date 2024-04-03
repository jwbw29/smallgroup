"use client";

import { useState, useEffect } from "react";
import eventData from "@/public/data/eventData.json";
import { EventDetails } from "@/components/event";
import { Dropdown } from "flowbite-react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  // Assuming the eventData format allows this kind of filtering directly
  const filteredEvents = eventData.filter((event) => {
    const semesterYear = selectedSemester.split(" ");
    const semester = semesterYear[0];
    const year = semesterYear[1]; // Converts "'23" to "2023"
    return event.year === year && event.semester === semester;
  });

  const handleDropdownSelect = (semester: string) => {
    setSelectedSemester(semester);
  };

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col">
      <div className="testBorder flex justify-center my-6 ">
        {/* -------A stab at custom dropdown--------- */}
        <div className="testBorder flex h-fit w-3/4 justify-end">
          <button onClick={toggle} className="primaryButton">
            {selectedSemester}
          </button>
          {/* TODO make this float */}
          {isExpanded && (
            <div className="bg-white rounded border px-2 py-1 my-2 w-full ">
              <li className="listItem">{"Spring '24"}</li>
              <li className="listItem">{"Fall '23"}</li>
            </div>
          )}
        </div>
        {/* -------A stab at custom dropdown--------- */}
        {/* <Dropdown label={selectedSemester} dismissOnClick={true}>
          <Dropdown.Item onClick={() => handleDropdownSelect("Spring 2024")}>
            {"Spring '24"}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleDropdownSelect("Fall 2023")}>
            {"Fall '23"}
          </Dropdown.Item>
        </Dropdown> */}
      </div>
      <div className="testBorder flex flex-col flex-1 items-center ">
        <div className="testBorder flex flex-col h-fit w-3/4 gap-8 my-6">
          {filteredEvents.map((event, i) => (
            <EventDetails key={i} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSelector;
