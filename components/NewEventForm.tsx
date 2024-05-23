"use client";

// [ ] Replace date input with <DatePicker />

import * as React from "react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { NewEvent } from "@/utils/types";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  date: z.date(),
  attendees: z.string().min(2).max(100),
  location: z.string().min(2).max(100),
});

export function NewEventForm({
  onSubmit,
}: {
  onSubmit: (values: NewEvent) => void;
}) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // 1. Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: new Date(),
      attendees: "",
      location: "",
    },
  });

  // 2. Define a submit handler
  async function handleSubmit(values: z.infer<typeof formSchema>) {
    try {
      await onSubmit(values);
      toast({
        title: "Event added",
        description:
          "Your event was added successfully! The event will not appear in the list until the page is refreshed.",
      });
    } catch (error) {
      toast({
        title: "Uh oh!",
        description: "Something went wrong while trying to add your event",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name: </FormLabel>
              <FormControl>
                <Input placeholder="Event Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* // [ ]  replace w/ DatePicker */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>When: </FormLabel>
              <FormControl>
                <DatePicker />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* // [ ] Attendees needs to be a dropdown */}

        <FormField
          control={form.control}
          name="attendees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attendees: </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Attendees" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-input text-primary-foreground">
                  <SelectItem value="Guys">{"pull 'Guys' from db"}</SelectItem>
                  <SelectItem value="Girls">
                    {" "}
                    {"pull 'Girls' from db"}
                  </SelectItem>
                  <SelectItem value="All"> {"pull 'All' from db"}</SelectItem>
                  <SelectItem value="Off"> {"pull 'Off' from db"}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location: </FormLabel>
              <FormControl>
                <Input placeholder="Location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-8">
          SAVE
        </Button>
      </form>
    </Form>
  );
}
