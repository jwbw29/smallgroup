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
import { useEvents } from "@/context/EventContext";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  date: z.date(),
  location: z.string().min(2).max(100),
  groupId: z.number(),
  semesterId: z.number(),
  yearId: z.number(),
});

export function NewEventForm({
  onSubmit,
}: {
  onSubmit: (values: NewEvent) => void;
}) {
  const { groupOptions, semesterOptions, yearOptions } = useEvents();

  // 1. Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: new Date(),
      location: "",
      groupId: 0,
      semesterId: 0,
      yearId: 0,
    },
  });

  // 2. Define a submit handler
  async function handleSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formattedValues = { ...values, date: values.date.toISOString() }; // Ensure date is in ISO format IF NEEDED
      await onSubmit(formattedValues);
      form.reset(); // Reset the form fields after successful submit
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
                <Input placeholder="Enter Event Name" {...field} />
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
          name="groupId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group: </FormLabel>
              <Select {...field} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-input text-primary-foreground">
                  {groupOptions.map((group) => (
                    <SelectItem key={group.id} value={group.id}>
                      {group.group_type}
                    </SelectItem>
                  ))}
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
                <Input placeholder="Enter Location" {...field} />
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
