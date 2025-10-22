"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Event } from "./AdminEventRegistrations";
import { Label } from "@/components/ui/label";

interface EventSelectorProps {
  events: Event[];
  selectedEvent: string | null;
  onSelectEvent: (eventId: string) => void;
  disabled: boolean;
}

export const EventSelector = ({
  events,
  selectedEvent,
  onSelectEvent,
  disabled,
}: EventSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="event-select">Select Event</Label>
      <Select
        value={selectedEvent || ""}
        onValueChange={onSelectEvent}
        disabled={disabled}
      >
        <SelectTrigger id="event-select" className="w-full">
          <SelectValue
            placeholder={disabled ? "Select a club first" : "Select an event"}
          />
        </SelectTrigger>
        <SelectContent>
          {events.map((event) => (
            <SelectItem key={event.id} value={event.id}>
              {event.title}
            </SelectItem>
          ))}
          <SelectItem key={"None"} value={"ALL"}>
            ALL
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
