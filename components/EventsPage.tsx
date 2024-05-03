"use client";

import { useState, useEffect } from "react";
import EventSelector from "./EventSelector";
import EventsList from "./EventsList";
import { Event, SemesterYearOption } from "@/utils/types";
import { ScheduleSkeleton } from "./ui/ScheduleSkeleton";

const EventsPage = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [semesterYearOptions, setSemesterYearOptions] = useState<
    SemesterYearOption[]
  >([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSemesterYearChange = (semester: string, year: string) => {
    setSelectedSemester(semester);
    setSelectedYear(year);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: Event[] = await response.json();
        const uniqueSemesterYears = data.reduce<SemesterYearOption[]>(
          (acc, event) => {
            const key = `${event.semester.semester_name} ${event.year.year}`;
            if (!acc.some((item) => item.key === key)) {
              acc.push({
                key,
                label: `${
                  event.semester.semester_name
                } '${event.year.year.slice(2)}`,
                value: key,
              });
            }
            return acc;
          },
          []
        );

        console.log("data:", data);
        setEvents(data);
        setSemesterYearOptions(uniqueSemesterYears);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return isLoading ? (
    <ScheduleSkeleton />
  ) : (
    <div className="flex flex-col">
      <EventSelector
        selectedSemester={selectedSemester}
        selectedYear={selectedYear}
        onSemesterYearChange={handleSemesterYearChange}
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
