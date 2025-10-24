
"use client";
import React, { useRef } from "react";

const InfoSection = () => {
  const _textSpotlightRef = useRef(null);
  const _stat1SpotlightRef = useRef(null);
  const _stat2SpotlightRef = useRef(null);

  const _handleMouseMove = (e, spotlightRef) => {
    if (!spotlightRef.current) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    spotlightRef.current.style.transition = "none";
    spotlightRef.current.style.transform = `translate(-50%, -50%) translate(${
      x - 50
    }%, ${y - 50}%)`;
  };
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700;900&display=swap");
        @import url('https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Exo:ital,wght@0,100..900;1,100..900&display=swap');

        .info-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding:  2rem;
          z-index: 100;
        }

        .info-heading {
          font-family: "Exo", sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 6px;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #fff 0%, #ff6b6b 50%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(255, 107, 107, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(255, 107, 107, 0.6));
          }
        }

        .info-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .info-text {
        
          position: relative;
          padding: 1px;
          border-radius: 19px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
        }

        .info-text-spotlight {
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
          transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.3s ease;
          z-index: 0;
          will-change: transform, opacity;
          pointer-events: none;
        }

        .info-text:hover .info-text-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .info-text-inner {
          position: relative;
          z-index: 10;
          {/* padding: 2rem; */}
          background: rgba(12, 8, 28, 0.43);
          backdrop-filter: blur(10px);
          border-radius: 19px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          
          text-align: center; /* ✅ make start and end align */
   
        }

        .info-text-inner p {
          margin-bottom: 1.5rem;
        }

        .info-text-inner p:last-child,
        .info-text-inner h5 {
          margin-bottom: 0;
        }

        .info-text p {
          margin-bottom: 1.5rem;
        }

        .info-text p:last-child {
          margin-bottom: 0;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-box {
          position: relative;
          padding: 1px;
          border-radius: 20px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
        }

        .stat-box-spotlight {
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
          transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.3s ease;
          z-index: 0;
          will-change: transform, opacity;
          pointer-events: none;
        }

        .stat-box:hover .stat-box-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .stat-box-inner {
          position: relative;
          z-index: 10;
          padding: 3rem 2rem;
          background: rgba(12, 8, 28, 0.43);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .stat-box:hover .stat-box-inner {
          transform: translateY(-5px);
        }

        @keyframes rotateBorder {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        .stat-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
        }

        .stat-number {
          font-family: "Exo", sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: #ff6b6b;
          text-align: center;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
        }

        .stat-label {
          font-family: "Exo", sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .stat-corners {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid #ff6b6b;
        }

        .corner-tl {
          top: 10px;
          left: 10px;
          border-right: none;
          border-bottom: none;
        }

        .corner-tr {
          top: 10px;
          right: 10px;
          border-left: none;
          border-bottom: none;
        }

        .corner-bl {
          bottom: 10px;
          left: 10px;
          border-right: none;
          border-top: none;
        }

        .corner-br {
          bottom: 10px;
          right: 10px;
          border-left: none;
          border-top: none;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .info-heading {
            font-size: 3rem;
            letter-spacing: 4px;
          }

          .info-text {
            font-size: 1rem;
            padding: 0.6rem;
          }

          .stat-number {
            font-size: 3rem;
          }

          .stat-label {
            font-size: 1.1rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
        .info-text-inner {
            font-size: 0.75rem;
        
        }
        .stat-box-inner{
        padding: 2.5rem 0.1rem;
        }
          .info-section {
            padding: 0rem 1.2rem;
          }

          .info-heading {
            font-size: 2.2rem;
            letter-spacing: 3px;
            margin-bottom: 2rem;
          }

          .info-text {
            font-size: 0.95rem;
            line-height: 1.7;
            padding: 1.5rem;
          }

          .info-text p {
            margin-bottom: 1.2rem;
          }

          .stats-container {
           
            margin-top: 1.5rem;
          }

          .stat-box {
            padding: 2rem 1.5rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .stat-label {
            font-size: 1rem;
            letter-spacing: 1px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {

        .info-text-inner {
            font-size: 0.75rem;
        
        }
          .info-heading {
            font-size: 1.8rem;
            letter-spacing: 2px;
          }

          .info-text {
            font-size: 0.9rem;
            padding: 1.2rem;
          }

          .stat-box {
            padding: 1.5rem 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.9rem;
          }

          .stat-corners {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>

      <section className="info-section">
        <div className="info-content">
          <div
            className="info-text"
            onMouseMove={(e) => _handleMouseMove(e, _textSpotlightRef)}
          >
            <div className="info-text-spotlight" ref={_textSpotlightRef}></div>
            <div className="info-text-inner">
              <p>
                VertechX is the annual tech fest organized by MVJ College of
                Engineering in Bangalore, India, bringing together students and
                tech enthusiasts from diverse colleges and universities. This
                vibrant event provides a stage for participants to demonstrate
                their technical expertise and insights.
              </p>
              <p>
                VertechX 13.0 features a wide range of activities, including
                competitive events, hands-on workshops, and informative seminars
                across various technology domains, such as robotics, artificial
                intelligence, machine learning, and cybersecurity.
              </p>
            </div>
          </div>

          <div className="stats-container">
            <div
              className="stat-box"
              onMouseMove={(e) => _handleMouseMove(e, _stat1SpotlightRef)}
            >
              <div
                className="stat-box-spotlight"
                ref={_stat1SpotlightRef}
              ></div>
              <div className="stat-box-inner">
                <div className="stat-corners corner-tl"></div>
                <div className="stat-corners corner-tr"></div>
                <div className="stat-corners corner-bl"></div>
                <div className="stat-corners corner-br"></div>
                <div className="stat-number">2500+</div>
                <div className="stat-label">Participants</div>
              </div>
            </div>

            <div
              className="stat-box"
              onMouseMove={(e) => _handleMouseMove(e, _stat2SpotlightRef)}
            >
              <div
                className="stat-box-spotlight"
                ref={_stat2SpotlightRef}
              ></div>
              <div className="stat-box-inner">
                <div className="stat-corners corner-tl"></div>
                <div className="stat-corners corner-tr"></div>
                <div className="stat-corners corner-bl"></div>
                <div className="stat-corners corner-br"></div>
                <div className="stat-number">200+</div>
                <div className="stat-label">Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
