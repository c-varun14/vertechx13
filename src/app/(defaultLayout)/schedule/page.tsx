"use client";

import React, { useRef, useState } from "react";

const scheduleData = {
  day1: {
    date: "14-Nov",
    events: [
      {
        name: "Aquanova",
        time: "11am-3pm",
        venue: "Room No:045(&40) and Playground",
      },
      {
        name: "Mecha Bird",
        time: "12pm-3pm",
        venue: "Room No:041(&042),Double Lobby",
      },
      { name: "Glitch n Glide", time: "2pm-5pm", venue: "Auditorium" },
      {
        name: "Pixel Animation Challenge",
        time: "11am-2pm",
        venue: "Seminar Hall 3,Internet Connection",
      },
      {
        name: "Pixel Gauntlet",
        time: "11am-2pm",
        venue: "Lab-260(&261 opp to CSE Department),Internet Connection",
      },
      {
        name: "Traversal Trials",
        time: "12pm-3pm",
        venue: "Lab-260(&261),Internet Connection",
      },
      {
        name: "Aromatica",
        time: "11am-2pm",
        venue: "Chemical Reaction Engineering Lab(PU Block-2nd Floor)",
      },
      {
        name: "Block by Block",
        time: "11am-2pm",
        venue: "Seminar Hall 2,Internet Connection",
      },
      { name: "Meme Arena", time: "1pm-4pm", venue: "RJSH" },
      {
        name: "Cosmo Craze",
        time: "11am-2pm",
        venue: "Ground(next to old block)",
      },
      { name: "Virtual Vista", time: "12pm-3pm", venue: "ROBO Lab" },
      {
        name: "Robo Kabaddi",
        time: "2pm-5pm",
        venue: "Fountain(Near Double Lobby)",
      },
      {
        name: "Arc Reactor Wars",
        time: "10am-4pm",
        venue: "Seminar Hall 1,Room No.127 Internet Connection",
      },
      {
        name: "Algo Fix and Forge",
        time: "11am-2pm",
        venue: "Lab-226(&227),Internet Connection",
      },
      {
        name: "Escape Room",
        time: "2pm-5pm",
        venue: "Lab-226(&227),Internet Connection",
      },
      { name: "One Piece", time: "10am-1pm", venue: "Mechanical Workshop" },
    ],
  },
  day2: {
    date: "15-Nov",
    events: [
      {
        name: "Fast and Furious-Drone Edition",
        time: "9am-2pm",
        venue: "Playground",
      },
      {
        name: "The Para Launch",
        time: "9am-12pm",
        venue: "Room No:248(&247),Single Lobby",
      },
      { name: "Dimensio-Craft", time: "10am-1pm", venue: "Room No:44 CAD Lab" },
      {
        name: "Tensor A Build-a-thon",
        time: "10am-2pm",
        venue: "Seminar Hall 1,Internet Connection",
      },
      {
        name: "Pixel Craft",
        time: "9am-12pm",
        venue: "Seminar Hall 3,Internet Connection",
      },
      {
        name: "Binary Build",
        time: "11am-2pm",
        venue: "Lab-250(&251),Internet Connection",
      },
      {
        name: "Chemquest",
        time: "10am-1pm",
        venue: "Mass Transfer Lab(PU Block 2nd Floor)",
      },
      { name: "TrafficX", time: "10am-2pm", venue: "Double Lobby" },
      {
        name: "UI Flow",
        time: "9am-12pm",
        venue: "Seminar Hall 2,Internet Connection",
      },
      {
        name: "Data Driven Riddles",
        time: "10am-1pm",
        venue: "Lab-Old Block,DS Department",
      },
      { name: "Line-Xtreme", time: "9am-12pm", venue: "RJSH" },
      { name: "Circutronics", time: "10am-1pm", venue: "Robo Lab" },
      {
        name: "Aqua Bot",
        time: "11am-2pm",
        venue: "Fountain(Near Double Lobby)",
      },
      {
        name: "Pix Hunter",
        time: "10am-2pm",
        venue: "Lab-226(&227),Internet Connection",
      },
      { name: "Pontification", time: "11am-1pm", venue: "CAMD Lab" },
      {
        name: "Block by Block",
        time: "9am-12pm",
        venue: "Seminar Hall 2,Internet Connection",
      },
      {
        name: "UI Flow",
        time: "11am-2pm",
        venue: "Seminar Hall 2,Internet Connection",
      },
    ],
  },
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const spotlightRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const spotlightRef = spotlightRefs.current[index];
    if (!spotlightRef) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    spotlightRef.style.transition = "none";
    spotlightRef.style.transform = `translate(-50%, -50%) translate(${
      x - 50
    }%, ${y - 50}%)`;
  };

  const currentSchedule = scheduleData[activeDay];

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700;900&display=swap");

        @import url("https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Exo:ital,wght@0,100..900;1,100..900&display=swap");

        .schedule-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8rem 2rem 4rem 2rem;
          z-index: 100;
          background: transparent;
        }

        .schedule-container {
          max-width: 1400px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          z-index: 10;
        }

        .schedule-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .schedule-title {
          font-family: "Exo", sans-serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 6px;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #fff 0%, #ff6b6b 50%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glowPulse 3s ease-in-out infinite;
        }

        .schedule-subtitle {
          font-family: "Exo", sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.2rem);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 2px;
        }

        @keyframes glowPulse {
          0%,
          100% {
            filter: drop-shadow(0 0 15px rgba(255, 107, 107, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(255, 107, 107, 0.6));
          }
        }

        .day-selector {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .day-button {
          font-family: "Exo", sans-serif;
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-weight: 700;
          padding: 1rem 2.5rem;
          border: 2px solid #ff9b26;
          background: rgba(12, 8, 28, 0.6);
          color: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          overflow: hidden;
        }

        .day-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 155, 38, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .day-button:hover::before {
          left: 100%;
        }

        .day-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(255, 155, 38, 0.4);
        }

        .day-button.active {
          background: linear-gradient(135deg, #ff9b26, #ff6b6b);
          color: #fff;
          border-color: #ff6b6b;
          box-shadow: 0 5px 25px rgba(255, 107, 107, 0.5);
        }

        .current-date {
          font-family: "Exo", sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 700;
          color: #ff9b26;
          text-align: center;
          margin-bottom: 2rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          width: 100%;
        }

        .schedule-card {
          position: relative;
          padding: 1px;
          border-radius: 16px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
          min-height: 180px;
        }

        .schedule-card:hover {
          transform: translateY(-5px);
        }

        .schedule-card-spotlight {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(300px, 175%, 800px);
          aspect-ratio: 1;
          background: linear-gradient(to bottom right, #ff9b26, #6b21ef);
          border-radius: 100%;
          filter: blur(60px);
          transform: translate(-50%, -50%);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease,
            transform 0.3s ease;
          z-index: 0;
          will-change: transform, opacity;
          pointer-events: none;
        }

        .schedule-card:hover .schedule-card-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .schedule-card-inner {
          position: relative;
          z-index: 10;
          padding: 1.5rem;
          background: rgba(12, 8, 28, 0.43);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .event-name {
          font-family: "Exo", sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ff6b6b;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .event-time {
          font-family: "Exo", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #6b21ef;
          padding: 0.5rem 0.75rem;
          background: rgba(107, 33, 239, 0.1);
          border-radius: 8px;
          border-left: 3px solid #6b21ef;
          letter-spacing: 1px;
        }

        .event-venue {
          font-family: "Exo", sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          padding: 0.5rem 0.75rem;
          background: rgba(255, 155, 38, 0.05);
          border-radius: 8px;
          border-left: 3px solid #ff9b26;
        }

        .venue-label {
          font-size: 0.75rem;
          color: rgba(255, 155, 38, 0.9);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.25rem;
          display: block;
        }

        /* Tablet */
        @media screen and (max-width: 1024px) {
          .schedule-page {
            padding: 6rem 1.5rem 3rem 1.5rem;
          }

          .schedule-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.25rem;
          }

          .day-button {
            padding: 0.875rem 2rem;
            font-size: 1.1rem;
          }
        }

        /* Mobile */
        @media screen and (max-width: 768px) {
          .schedule-page {
            padding: 5rem 1rem 2rem 1rem;
          }

          .schedule-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .day-selector {
            gap: 1rem;
          }

          .day-button {
            padding: 0.75rem 1.5rem;
            font-size: 0.95rem;
            letter-spacing: 1px;
          }

          .event-name {
            font-size: 1rem;
          }

          .event-time {
            font-size: 0.9rem;
          }

          .event-venue {
            font-size: 0.85rem;
          }
        }

        /* Small Mobile */
        @media screen and (max-width: 480px) {
          .schedule-page {
            padding: 4rem 0.75rem 1.5rem 0.75rem;
          }

          .day-button {
            padding: 0.625rem 1.25rem;
            font-size: 0.85rem;
          }

          .schedule-card-inner {
            padding: 1.25rem;
          }

          .event-name {
            font-size: 0.9rem;
            letter-spacing: 1px;
          }
        }
      `}</style>

      <div className="schedule-page">
        <div className="schedule-container">
          <div className="schedule-header">
            <h1 className="schedule-title">Event Schedule</h1>
            <p className="schedule-subtitle">VertechX 2025 - Two Day Fest</p>
          </div>

          <div className="day-selector">
            <button
              className={`day-button ${activeDay === "day1" ? "active" : ""}`}
              onClick={() => setActiveDay("day1")}
            >
              Day 1 - Nov 14
            </button>
            <button
              className={`day-button ${activeDay === "day2" ? "active" : ""}`}
              onClick={() => setActiveDay("day2")}
            >
              Day 2 - Nov 15
            </button>
          </div>

          <div className="current-date">{currentSchedule.date}</div>

          <div className="schedule-grid">
            {currentSchedule.events.map((event, index) => (
              <div
                key={index}
                className="schedule-card"
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <div
                  className="schedule-card-spotlight"
                  ref={(el) => {
                    spotlightRefs.current[index] = el;
                  }}
                ></div>
                <div className="schedule-card-inner">
                  <div className="event-name">{event.name}</div>
                  <div className="event-time">{event.time}</div>
                  <div className="event-venue">
                    <span className="venue-label">Venue:</span>
                    {event.venue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleSection;
