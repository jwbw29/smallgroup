"use client";

// import eventTestData from "@/public/data/evenTestData.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SemesterYearOption } from "@/utils/types";
import AddEvent from "@/components/AddEvent";

interface EventSelectorProps {
  selectedSemester: string;
  selectedYear: string;
  onSemesterYearChange: (semester: string, year: string) => void;
  semesterYearOptions: SemesterYearOption[];
}

const EventSelector: React.FC<EventSelectorProps> = ({
  selectedSemester,
  selectedYear,
  onSemesterYearChange,
  semesterYearOptions,
}) => {
  const handleDropdownSelect = (value: string) => {
    const [semester, year] = value.split(" ");
    // Assuming you add selectedYear to your state
    onSemesterYearChange(semester, year);
  };

  return (
    <div className="flex justify-center my-6 ">
      <div className="flex w-full h-fit md:justify-end">
        <Select
          onValueChange={(newValue) => {
            const [semester, year] = newValue.split(" ");
            onSemesterYearChange(semester, year);
          }}
          defaultValue={`${selectedSemester} ${selectedYear}`}
        >
          {" "}
          <SelectTrigger className="bg-primary rounded-md text-primary-foreground w-full min-w-fit md:h-12 md:w-48">
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
        {/* <AddEvent /> */}
      </div>
    </div>
  );
};

export default EventSelector;
