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

export default function NewEventModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <AddEventButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Event</DialogTitle>
          <DialogDescription>Add a new small group event.</DialogDescription>
        </DialogHeader>
        <NewEventForm />
      </DialogContent>{" "}
    </Dialog>
  );
}
