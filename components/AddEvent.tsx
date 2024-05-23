// components/AddEvent.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddEventButton from "@/components/AddEventButton";
import { NewEventForm } from "./NewEventForm";
import { useEvents } from "@/context/EventContext";
import { NewEvent } from "@/utils/types";

// Define the function to save a new event to the database
async function saveEventToDB(newEvent: NewEvent) {
  //// The POST request to save the event to the database
  const response = await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const savedEvent = await response.json();
  return savedEvent;
}

export default function AddEvent() {
  const { events, setEvents } = useEvents();

  const handleAddEvent = async (newEvent: NewEvent) => {
    try {
      // Call the function to save the event and update local state
      const savedEvent = await saveEventToDB(newEvent);
      setEvents([...events, savedEvent]);
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddEventButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Event</DialogTitle>
          <DialogDescription>Add a new small group event.</DialogDescription>
        </DialogHeader>
        <NewEventForm onSubmit={handleAddEvent} />
      </DialogContent>
    </Dialog>
  );
}
