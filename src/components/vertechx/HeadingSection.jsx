
"use client";
import React from 'react';

const HeadingSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');;

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
          font-family: 'Exo',Geologica, sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 5rem;
          text-align: center;
          background: linear-gradient(120deg, #9c27ff 0%, #ff6b6b 50%, #ffffff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 6px;
          animation: gradientShift 5s ease-in-out infinite, floatText 3s ease-in-out infinite;
          text-shadow: 0 0 25px rgba(156, 39, 255, 0.3);
          position: relative;
          transition: transform 0.3s ease;
        }

        .main-heading::before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          color: rgba(255, 255, 255, 0.1);
          z-index: -1;
          transform: translate(3px, 3px);
          filter: blur(2px);
        }

        .main-heading:hover {
          transform: scale(1.03);
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .main-heading {
            font-size: 4rem;
            letter-spacing: 5px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .heading-section {
            min-height: 30vh;
            padding: 3rem 1.5rem;
          }

          .main-heading {
            font-size: 2.8rem;
            letter-spacing: 3px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .main-heading {
            font-size: 2rem;
            letter-spacing: 2px;
          }
        }
      `}</style>

      <section className="heading-section">
        <h1 className="main-heading" data-text="VERTECHX 13.0">
          VERTECHX 13.0
        </h1>
      </section>
    </>
  );
};

export default HeadingSection;
