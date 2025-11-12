"use client";

import React, { useRef } from "react";

const scheduleData = [
  {
    venue: "Room No:045(&40) and Playground",
    event: "Fast and Furious-Drone Edition",
    time: "9am-2pm",
    finalVenue: "Playground",
  },
  {
    venue: "Room No:041(&042),Double Lobby",
    event: "The Para Launch",
    time: "9am-12pm",
    finalVenue: "Room No:248(&247),Single Lobby",
  },
  {
    venue: "Auditorium",
    event: "Dimensio-Craft",
    time: "10am-1pm",
    finalVenue: "Room No:44 CAD Lab",
  },
  {
    venue: "Seminar Hall 3,Internet Connection",
    event: "Tensor A Build-a-thon",
    time: "10am-2pm",
    finalVenue: "Seminar Hall 1,Internet Connection",
  },
  {
    venue: "Lab-260(&261 opp to CSE Department),Internet Connection",
    event: "Pixel Craft",
    time: "9am-12pm",
    finalVenue: "Seminar Hall 3,Internet Connection",
  },
  {
    venue: "Lab-260(&261),Internet Connection",
    event: "Binary Build",
    time: "11am-2pm",
    finalVenue: "Lab-250(&251),Internet Connection",
  },
  {
    venue: "Chemical Reaction Engineering Lab(PU Block-2nd Floor)",
    event: "Chemquest",
    time: "10am-1pm",
    finalVenue: "Mass Transfer Lab(PU Block 2nd Floor)",
  },
  {
    venue: "",
    event: "TrafficX",
    time: "10am-2pm",
    finalVenue: "Double Lobby",
  },
  {
    venue: "Seminar Hall 2,Internet Connection",
    event: "UI Flow",
    time: "9am-12pm",
    finalVenue: "Seminar Hall 2,Internet Connection",
  },
  {
    venue: "RJSH",
    event: "Data Driven Riddles",
    time: "10am-1pm",
    finalVenue: "Lab-Old Block,DS Department",
  },
  {
    venue: "Ground(next to old block)",
    event: "Line-Xtreme",
    time: "9am-12pm",
    finalVenue: "RJSH",
  },
  {
    venue: "ROBO Lab",
    event: "Circutronics",
    time: "10am-1pm",
    finalVenue: "Robo Lab",
  },
  {
    venue: "Fountain(Near Double Lobby)",
    event: "Aqua Bot",
    time: "11am-2pm",
    finalVenue: "Fountain(Near Double Lobby)",
  },
  {
    venue: "Seminar Hall 1,Room No.127 Internet Connection",
    event: "",
    time: "",
    finalVenue: "",
  },
  {
    venue: "Lab-226(&227),Internet Connection",
    event: "Pix Hunter",
    time: "10am-2pm",
    finalVenue: "Lab-226(&227),Internet Connection",
  },
  {
    venue: "Lab-226(&227),Internet Connection",
    event: "",
    time: "",
    finalVenue: "",
  },
  {
    venue: "Mechanical Workshop",
    event: "Pontification",
    time: "11am-1pm",
    finalVenue: "CAMD Lab",
  },
  {
    venue: "",
    event: "Block by Block",
    time: "9am-12pm",
    finalVenue: "Seminar Hall 2,Internet Connection",
  },
  {
    venue: "",
    event: "UI Flow",
    time: "11am-2pm",
    finalVenue: "Seminar Hall 2,Internet Connection",
  },
];

const ScheduleSection = () => {
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

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap");

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
          margin-bottom: 3rem;
        }

        .schedule-title {
          font-family: "Orbitron", sans-serif;
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

        .schedule-date {
          font-family: "Orbitron", sans-serif;
          font-size: clamp(1rem, 2vw, 1.5rem);
          font-weight: 700;
          color: #ff9b26;
          letter-spacing: 3px;
          text-transform: uppercase;
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

        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          width: 100%;
        }

        .schedule-card {
          position: relative;
          padding: 1px;
          border-radius: 19px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
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
          border-radius: 19px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .schedule-event-name {
          font-family: "Orbitron", sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ff6b6b;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 1rem;
          min-height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .schedule-detail {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.75rem;
          border-left: 2px solid #ff9b26;
          background: rgba(255, 155, 38, 0.05);
          border-radius: 8px;
        }

        .schedule-label {
          font-family: "Orbitron", sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 107, 107, 0.9);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .schedule-value {
          font-family: "Orbitron", sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        .schedule-time {
          font-family: "Orbitron", sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #6b21ef;
          text-align: center;
          padding: 0.75rem;
          background: rgba(107, 33, 239, 0.1);
          border-radius: 8px;
          letter-spacing: 2px;
        }

        .empty-card {
          opacity: 0.3;
          pointer-events: none;
        }

        /* Tablet */
        @media screen and (max-width: 1024px) {
          .schedule-page {
            padding: 6rem 1.5rem 3rem 1.5rem;
          }

          .schedule-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }

          .schedule-card-inner {
            padding: 1.25rem;
            min-height: 180px;
          }

          .schedule-event-name {
            font-size: 1.1rem;
            min-height: 2.5rem;
          }
        }

        /* Mobile */
        @media screen and (max-width: 768px) {
          .schedule-page {
            padding: 5rem 1rem 2rem 1rem;
          }

          .schedule-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .schedule-card-inner {
            padding: 1rem;
            min-height: 160px;
          }

          .schedule-event-name {
            font-size: 1rem;
            letter-spacing: 1px;
            min-height: 2rem;
            margin-bottom: 0.75rem;
          }

          .schedule-detail {
            padding: 0.5rem;
          }

          .schedule-label {
            font-size: 0.75rem;
          }

          .schedule-value {
            font-size: 0.85rem;
          }

          .schedule-time {
            font-size: 1rem;
            padding: 0.5rem;
          }
        }

        /* Small Mobile */
        @media screen and (max-width: 480px) {
          .schedule-page {
            padding: 4rem 0.75rem 1.5rem 0.75rem;
          }

          .schedule-grid {
            gap: 1rem;
          }

          .schedule-card-inner {
            padding: 0.875rem;
            min-height: 140px;
          }

          .schedule-event-name {
            font-size: 0.9rem;
          }

          .schedule-label {
            font-size: 0.7rem;
          }

          .schedule-value {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="schedule-page">
        <div className="schedule-container">
          <div className="schedule-header">
            <h1 className="schedule-title">Event Schedule</h1>
            <p className="schedule-date">15th November 2025</p>
          </div>

          <div className="schedule-grid">
            {scheduleData.map((item, index) => {
              const isEmpty = !item.event && !item.venue && !item.finalVenue;

              return (
                <div
                  key={index}
                  className={`schedule-card ${isEmpty ? "empty-card" : ""}`}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                >
                  <div
                    className="schedule-card-spotlight"
                    ref={(el) => {
                      spotlightRefs.current[index] = el;
                    }}
                  ></div>
                  <div className="schedule-card-inner">
                    <div className="schedule-event-name">
                      {item.event || "TBA"}
                    </div>

                    {item.time && (
                      <div className="schedule-time">{item.time}</div>
                    )}

                    {item.venue && (
                      <div className="schedule-detail">
                        <span className="schedule-label">Initial Venue:</span>
                        <span className="schedule-value">{item.venue}</span>
                      </div>
                    )}

                    {item.finalVenue && (
                      <div className="schedule-detail">
                        <span className="schedule-label">Final Venue:</span>
                        <span className="schedule-value">
                          {item.finalVenue}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleSection;
