"use client";
import React from 'react';

const Glimpinfo = () => {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap");

        .heading-section {
          position: relative;
          width: 100%;
          min-height: 40vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 2rem;
          z-index: 100;
        }

        .main-heading {
          font-family: "Orbitron", sans-serif;
          font-size: 5rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 8px;
          text-align: center;
          background: linear-gradient(135deg, #fff 0%, #ff6b6b 50%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(255, 107, 107, 0.3);
          animation: glowPulse 3s ease-in-out infinite;
          position: relative;
        }

        .main-heading::before,
        .main-heading::after {
          content: 'VERTECHX 13.0';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .main-heading::before {
          color: rgba(255, 107, 107, 0.3);
          animation: glitch1 2s infinite;
        }

        .main-heading::after {
          color: rgba(107, 255, 255, 0.3);
          animation: glitch2 3s infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(255, 107, 107, 0.7));
          }
        }

        @keyframes glitch1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch2 {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          75% { transform: translate(2px, 2px); }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .main-heading {
            font-size: 4rem;
            letter-spacing: 6px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .heading-section {
            min-height: 30vh;
            padding: 3rem 1.5rem;
          }

          .main-heading {
            font-size: 2.5rem;
            letter-spacing: 4px;
          }

          .main-heading::before,
          .main-heading::after {
            content: 'VERTECHX 13.0';
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .main-heading {
            font-size: 1.8rem;
            letter-spacing: 2px;
          }
        }
      `}</style>

      <section className="heading-section">
        <h1 className="main-heading">
Here's a glimpse!</h1>
      </section>
    </>
  );
};

export default Glimpinfo;