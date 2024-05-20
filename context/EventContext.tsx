"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Event, EventsContextType } from "@/utils/types";

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

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};
