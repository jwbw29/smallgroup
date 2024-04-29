"use client";

import { useState, useEffect } from "react";
// import eventTestData from "@/public/data/evenTestData.json";
import { EventCard } from "@/components/event";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Event, SemesterYearOption } from "@/utils/types";
import { ScheduleSkeleton } from "./ui/ScheduleSkeleton";

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
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [semesterYearOptions, setSemesterYearOptions] = useState<
    SemesterYearOption[]
  >([]);
  const [eventData, setEventData] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setEventData(data);
        setSemesterYearOptions(uniqueSemesterYears);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  //// Filtering Events
  const filteredEvents = eventData.filter((event) => {
    const eventYear = event.year.year;
    const eventSemester = event.semester.semester_name;
    return eventYear === selectedYear && eventSemester === selectedSemester;
  });

  //// Handling Dropdown Select
  const handleDropdownSelect = (value: string) => {
    const [semester, year] = value.split(" ");
    // Assuming you add selectedYear to your state
    setSelectedSemester(semester);
    setSelectedYear(year);
  };

  return isLoading ? (
    <ScheduleSkeleton />
  ) : (
    <div className="flex flex-col">
      <div className="flex justify-center my-6 ">
        <div className="flex h-fit w-3/4 max-w-[750px] justify-end">
          {/* //// SELECTOR */}
          <Select
            onValueChange={(newValue) => {
              const [semester, year] = newValue.split(" ");
              setSelectedSemester(semester);
              setSelectedYear(year);
            }}
            defaultValue={`${selectedSemester} ${selectedYear}`}
          >
            {" "}
            <SelectTrigger className="bg-blue-950 rounded-md text-white w-[9rem] min-w-fit lg:h-12 lg:w-36">
              <SelectValue placeholder="Choose a Semester" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {semesterYearOptions.map(({ label, value }) => (
                <SelectItem
                  key={value}
                  value={value}
                  onClick={() => {
                    handleDropdownSelect(value);
                  }}
                >
                  {label}
                </SelectItem>
              ))}{" "}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* //// LISTED EVENTS */}
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
