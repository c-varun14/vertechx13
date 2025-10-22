import React from "react";
import EventCard from "./EventCard";
import "./events.css";
import { departmentsType, getdepartmentEvents } from "@/lib/eventsData";

const EventsGrid = ({
  selectedDepartment,
}: {
  selectedDepartment: departmentsType;
}) => {
  const events = getdepartmentEvents(selectedDepartment);
  console.log(selectedDepartment);
  // Filter events based on selected department

  return (
    <div className="events-grid-section">
      <h2 className="events-grid-title">All Events</h2>

      {!events ? (
        <div className="no-events-message">
          <p>No events found</p>
        </div>
      ) : (
        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} eventNumber={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsGrid;
