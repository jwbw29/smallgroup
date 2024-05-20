"use client";

import { useState, useEffect } from "react";
import EventSelector from "./EventSelector";
import EventsList from "./EventsList";
import { Event, SemesterYearOption } from "@/utils/types";
import { ScheduleSkeleton } from "./ui/ScheduleSkeleton";
import { getCurrentSemester } from "@/utils/utils";
import { useEvents } from "@/context/EventContext";

const EventsPage = () => {
  const currentSemester = getCurrentSemester();
  const currentYear = new Date().getFullYear().toString();
  const [selectedSemester, setSelectedSemester] = useState(currentSemester);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { events, setEvents } = useEvents();
  const [isLoading, setIsLoading] = useState(true);

  const handleSemesterYearChange = (semester: string, year: string) => {
    setSelectedSemester(semester);
    setSelectedYear(year);
  };

  const semesterYearOptions = events.reduce<SemesterYearOption[]>(
    (acc, event) => {
      const key = `${event.semester.semester_name} ${event.year.year}`;
      if (!acc.some((item) => item.key === key)) {
        acc.push({
          key,
          label: `${event.semester.semester_name} '${event.year.year.slice(2)}`,
          value: key,
        });
      }
      return acc;
    },
    []
  );

  return isLoading ? (
    <ScheduleSkeleton />
  ) : (
    <div className="flex flex-col w-3/4 md:max-w-[750px]">
      <EventSelector
        selectedSemester={selectedSemester}
        selectedYear={selectedYear}
        onSemesterYearChange={handleSemesterYearChange}
        semesterYearOptions={semesterYearOptions}
      />
      <EventsList
        events={events}
        selectedSemester={selectedSemester}
        selectedYear={selectedYear}
      />
    </div>
  );
};

export default EventsPage;
