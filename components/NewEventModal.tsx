// # Modal
// [x] get modal from Component Gallery or ShadCN

// # Form
// [x] get form from Component Gallery or ShadCN

// [x] install popover
// [x] install calendar
// [ ] look at instrux to build date picker
// [ ] put date picker inside form
// [ ] put form inside modal

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import AddEventButton from "@/components/AddEventButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Event Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" placeholder="Date" className="col-span-3" />
          </div>
        </div> */}
      </DialogContent>{" "}
    </Dialog>
  );
}
