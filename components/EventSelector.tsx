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
import { getCurrentSemester } from "@/utils/utils";

interface EventSelectorProps {
  selectedSemester: string;
  selectedYear: string;
  onSemesterYearChange: (semester: string, year: string) => void;
}

const EventSelector: React.FC<EventSelectorProps> = ({
  selectedSemester,
  selectedYear,
  onSemesterYearChange,
}) => {
  const currentSemester = getCurrentSemester();
  const currentYear = new Date().getFullYear();
  const [semesterYearOptions, setSemesterYearOptions] = useState<
    SemesterYearOption[]
  >([]);

  const handleDropdownSelect = (value: string) => {
    const [semester, year] = value.split(" ");
    // Assuming you add selectedYear to your state
    onSemesterYearChange(semester, year);
  };

  return (
    <div className="flex justify-center my-6 ">
      <div className="flex h-fit w-3/4 max-w-[750px] justify-between">
        <Select
          onValueChange={(newValue) => {
            const [semester, year] = newValue.split(" ");
            onSemesterYearChange(semester, year);
          }}
          defaultValue={`${selectedSemester} ${selectedYear}`}
        >
          {" "}
          <SelectTrigger className="bg-primary rounded-md text-primary-foreground w-[9rem] min-w-fit lg:h-12 lg:w-36">
            <SelectValue placeholder="Choose a Semester" />
          </SelectTrigger>
          <SelectContent className="bg-primary text-primary-foreground">
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
        <button className="bg-primary rounded-md text-primary-foreground text-sm w-[9rem] min-w-fit lg:h-12 lg:w-36">
          + Add Event
        </button>
      </div>
    </div>
  );
};

export default EventSelector;
