"use client";

// context/EventContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { Event, EventsContextType, Semester, Year, Group } from "@/utils/types";
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
  initialSemesters,
  initialGroups,
  initialYears,
}: {
  children: ReactNode;
  initialEvents: Event[];
  initialSemesters: Semester[];
  initialGroups: Group[];
  initialYears: Year[];
}) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [semesters, setSemesters] = useState<Semester[]>(initialSemesters);
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [years, setYears] = useState<Year[]>(initialYears);

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        semesters,
        setSemesters,
        groups,
        setGroups,
        years,
        setYears,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
