"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getdepartmentEvents } from "@/lib/eventsData";
import "./MegaEventsSlider.css";

const MegaEventsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const megaEvents = getdepartmentEvents("MEGA");

  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, megaEvents.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!spotlightRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlightRef.current.style.transform = `translate(-50%, -50%) translate(${x - 50}%, ${y - 50}%)`;
  };

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === megaEvents.length - 1 ? 0 : prevIndex + 1
    );
  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? megaEvents.length - 1 : prevIndex - 1
    );

  const currentEvent = megaEvents[currentIndex];

  return (
    <div className="mega-events-section">
      <div
        className="mega-slider-container"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight div */}
        <div className="spotlight" ref={spotlightRef}></div>

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
            <Image
              src={currentEvent.image}
              alt={currentEvent.name}
              height={150}      // reduced from 200
  width={200}  
              className="event-card-image"
            />

            <div className="mega-event-info">
              <div className="mega-event-top">
                <div className="mega-event-department">
                  {currentEvent.department || "Computer Science"}
                </div>
                <h3 className="mega-event-name">{currentEvent.name}</h3>
                <p className="mega-event-description">{currentEvent.description}</p>
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
                <Link
                  href={`/${currentEvent.id}/register?clubName=MEGA`}
                  className="mega-register-btn"
                >
                  Register Now
                </Link>
                <button className="mega-details-btn">Details</button>
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
