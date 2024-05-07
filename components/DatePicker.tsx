"use client";

import * as React from "react";
import { format } from "date-fns";
import { LuCalendar as LuCalendarIcon } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "flex h-9 text-primary-foreground items-start justify-start w-full rounded-md bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            !date && "items-start justify-start text-primary-foreground"
          )}
        >
          <LuCalendarIcon className="mr-2 h-4 w-4 text-primary-foreground" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-primary-foreground">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
