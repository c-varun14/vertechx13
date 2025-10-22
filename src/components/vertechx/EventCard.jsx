"use client";
import React from "react";
import "./events.css";
import eventImage from "@/assets/WhatsApp Image 2025-10-07 at 21.48.17_59318160.jpg?url";
import Image from "next/image";

const EventCard = ({ event, eventNumber }) => {
  return (
    <div className="event-card">
      {/* Event Number Badge */}
      <div className="event-number-badge">{eventNumber}</div>

      {/* Main Content Card */}
      <div className="event-card-content">
        <div className="event-card-inner">
          {/* Header Section */}
          <div className="event-card-header">
            <h2 className="event-title">{event.name}</h2>
          </div>

          {/* Content Section */}
          <div className="event-card-body">
            {/* Left Side - Image */}
            <Image
              src={event.image || eventImage}
              alt={event.name}
              width={80}
              height={100}
              className="w-48! mx-8!"
            />

            {/* Right Side - Details */}
            <div className="event-details-section">
              <div className="event-description">
                <h3 className="section-title">Description</h3>
                <p className="description-text">{event.description}</p>
              </div>

              <div className="event-info-grid">
                {/* <div className="info-item">
                                    <span className="info-label">Department:</span>
                                    <span className="info-value">{event.department}</span>
                                </div> */}
                <div className="info-item">
                  <span className="info-label">Registration Fee:</span>
                  <span className="info-value">
                    {event.registration_fee === 0
                      ? "Free"
                      : `₹${event.registration_fee}`}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Team Size:</span>
                  <span className="info-value">
                    {event.minTeamMembers === event.maxTeamMembers
                      ? `${event.minTeamMembers} member${
                          event.minTeamMembers > 1 ? "s" : ""
                        }`
                      : `${event.minTeamMembers}-${event.maxTeamMembers} members`}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Prizes:</span>
                  <span className="info-value">
                    {event.prizes.first !== "-" && event.prizes.second !== "-"
                      ? `1st: ₹${event.prizes.first} | 2nd: ₹${event.prizes.second}`
                      : "Participation Certificate"}
                  </span>
                </div>
                {event.sponsors && (
                  <div className="info-item">
                    <span className="info-label">Sponsors:</span>
                    <span className="info-value">{event.sponsors}</span>
                  </div>
                )}
                {event.expenses && event.expenses !== "Nil" && (
                  <div className="info-item">
                    <span className="info-label">Expenses:</span>
                    <span className="info-value">₹{event.expenses}</span>
                  </div>
                )}
                {event.requirements && (
                  <div className="info-item">
                    <span className="info-label">Requirements:</span>
                    <span className="info-value">{event.requirements}</span>
                  </div>
                )}
              </div>

              <div className="event-buttons">
                <button className="register-btn">Register Now</button>
                <button className="know-more-btn">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
