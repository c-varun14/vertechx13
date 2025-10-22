"use client";

import React, { useState, useEffect, useRef } from "react";
import "./MegaEventsSlider.css";
import { getdepartmentEvents } from "@/lib/eventsData";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MegaEventsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const megaEvents = getdepartmentEvents("MEGA");

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused && megaEvents.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === megaEvents.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, megaEvents.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === megaEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? megaEvents.length - 1 : prevIndex - 1
    );
  };

  const currentEvent = megaEvents[currentIndex];

  return (
    <div className="mega-events-section pt-8!">
      <div
        className="mega-slider-container overflow-visible!"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mega-slider-inner">
          {/* Header */}
          <div className="mega-slider-header">
            <h2 className="mega-slider-title">Mega Events</h2>
            <p className="mega-slider-subtitle">
              Featured Competitions with Big Prizes!
            </p>
          </div>

          {/* Main Content */}
          <div className="mega-slide-content">
            {/* Event Graphic */}
            {/* <div className="mega-event-graphic">
              <div className="mega-event-badge">
                <span className="badge-label">MEGA</span>
                <span className="badge-number">#{currentIndex + 1}</span>
              </div>
              <div className="mega-graphic-background"></div>
            </div> */}
            <Image
              src={currentEvent.image}
              alt={currentEvent.name}
              height={100}
              width={80}
              className="w-64"
            />

            {/* Event Details */}
            <div className="mega-event-info">
              <div className="mega-event-top">
                <div className="mega-event-department">
                  {currentEvent.id === "clw3q9v6e002a08l0h6qy7q2s"
                    ? "AE AS"
                    : "Computer Science"}
                </div>
                <h3 className="mega-event-name">{currentEvent.name}</h3>
                <p className="mega-event-description">
                  {currentEvent.description}
                </p>
              </div>

              <div className="mega-event-stats">
                <div className="stat-item">
                  <i className="bx bx-money"></i>
                  <div className="stat-content">
                    <span className="stat-label">Fee</span>
                    <span className="stat-value">
                      {currentEvent.registration_fee === 0
                        ? "Free"
                        : `₹${currentEvent.registration_fee}`}
                    </span>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="bx bx-group"></i>
                  <div className="stat-content">
                    <span className="stat-label">Team</span>
                    <span className="stat-value">
                      {currentEvent.minTeamMembers ===
                      currentEvent.maxTeamMembers
                        ? `${currentEvent.minTeamMembers}`
                        : `${currentEvent.minTeamMembers}-${currentEvent.maxTeamMembers}`}
                    </span>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="bx bx-trophy"></i>
                  <div className="stat-content">
                    <span className="stat-label">Prize Pool</span>
                    <span className="stat-value">
                      ₹
                      {parseInt(currentEvent.prizes.first.replace(",", "")) +
                        parseInt(currentEvent.prizes.second.replace(",", ""))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mega-event-actions">
                <button className="mega-register-btn">
                  <i className="bx bx-rocket"></i>
                  Register Now
                </button>
                <button className="mega-details-btn">
                  <i className="bx bx-info-circle"></i>
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          {megaEvents.length > 1 && (
            <>
              <button
                className="slider-arrow slider-arrow-left"
                onClick={prevSlide}
              >
                <ArrowLeft className="w-4" />
              </button>
              <button
                className="slider-arrow slider-arrow-right"
                onClick={nextSlide}
              >
                <ArrowRight className="w-4" />
              </button>

              {/* Dots Indicator */}
              <div className="slider-dots">
                {megaEvents.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaEventsSlider;
