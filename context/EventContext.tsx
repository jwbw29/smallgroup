"use client";

// context/EventContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { Event, EventsContextType, SemesterYearOption } from "@/utils/types";
import { useEffect } from "react";

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};

export const EventsProvider = ({
  children,
  initialEvents,
}: {
  children: ReactNode;
  initialEvents: Event[];
}) => {
  const [events, setEvents] = useState(initialEvents);
  const [semesterOptions, setSemesterOptions] = useState<SemesterYearOption[]>(
    []
  );
  const [groupOptions, setGroupOptions] = useState<SemesterYearOption[]>([]);
  const [yearOptions, setYearOptions] = useState<SemesterYearOption[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const semesterData = await fetch("/api/semesters").then((res) =>
        res.json()
      );
      const groupData = await fetch("/api/groups").then((res) => res.json());
      const yearData = await fetch("/api/years").then((res) => res.json());

      setSemesterOptions(semesterData);
      setGroupOptions(groupData);
      setYearOptions(yearData);
    };

    fetchOptions();
  }, []);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};
