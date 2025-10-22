"use client";

// import { getClubEvent } from "@/lib/eventsData";
// import { useState } from "react";
import EventCard from "./EventCard";
// import { Event } from "@/types/event";

// const event: Event = getClubEvent("Nrityatrix", "clw3q9v6e001108l0h6qy7q1z");

export default function EventSlider() {
  return (
    <div className="relative overflow-hidden px-2 sm:px-4 md:px-6 lg:px-10 py-6">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <EventCard />
        </div>
      </div>
    </div>
  );
}
