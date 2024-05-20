import React, { createContext, useState, useContext, useEffect } from "react";

// Event Context
const EventContext = createContext();

export const useEventContext = () => {
  useContext(EventContext);
};

// Fetch events from the API
const fetchEvents = async () => {
  const res = await fetch("/api/events");
  const data = await res.json();
  return data;
};

// Add a new event using the API
const addNewEventToDB = async (eventData) => {
  const res = await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  const data = await res.json();
  return data;
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const initialEvents = await fetchEvents();
      setEvents(initialEvents);
    }
    fetchData();
  }, []);

  const addNewEvent = async (eventData) => {
    const newEvent = await addNewEventToDB(eventData);
    setEvents([...events, newEvent]);
  };

  return (
    <EventContext.Provider value={{ events, addNewEvent }}>
      {children}
    </EventContext.Provider>
  );
};
