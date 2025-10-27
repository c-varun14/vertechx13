"use client";
import "./CollegeInfoSection.css";
import React, { useRef } from "react";

const CollegeInfoSection = () => {
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

        * {
          font-family:"Exo", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        .college-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6rem 2rem;
          z-index: 100;
        }

        .college-heading {
          font-family: "Exo", sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 6px;
          text-align: center;
          margin-bottom: 4rem;
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

        .college-content-wrapper {
          max-width: 1400px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .college-main-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
        }

        .college-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(15, 19, 29, 0.4);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 107, 107, 0.3);
          box-shadow: 0 10px 40px rgba(255, 107, 107, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .college-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .college-image-container:hover .college-image {
          transform: scale(1.05);
        }

        .college-right-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: 100%;
        }

        .college-text-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .college-text {
          position: relative;
          padding: 1px;
          border-radius: 19px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
          flex: 1;
        }

        .college-text-spotlight {
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

        .college-text:hover .college-text-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .college-text-inner {
          position: relative;
          z-index: 10;
          padding: 2rem;
          background: rgba(12, 8, 28, 0.43);
          backdrop-filter: blur(10px);
          border-radius: 19px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          text-align: center; 
  text-justify: inter-word;
        }

        .college-text-inner p {
          margin-bottom: 1.5rem;
        }

        .college-text-inner p:last-child,
        .college-text-inner h4 {
          margin-bottom: 0;
        }

        .college-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .college-stat-box {
          position: relative;
          padding: 1px;
          border-radius: 15px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
        }

        .college-stat-box-spotlight {
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

        .college-stat-box:hover .college-stat-box-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .college-stat-box-inner {
          position: relative;
          z-index: 10;
          padding: 2rem 1.5rem;
          background: rgba(12, 8, 28, 0.43);
          backdrop-filter: blur(20px);
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: #ff6b6b;
          text-align: center;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
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
          .college-heading {
            font-size: 3rem;
            letter-spacing: 4px;
          }

          .college-main-content {
            gap: 2rem;
          }

          .college-image-container {
            min-height: 350px;
          }

          .college-text-inner {
            font-size: 1rem;
            padding: 1.5rem;
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
          .college-section {
            padding: 4rem 1.5rem;
          }

          .college-heading {
            font-size: 2.2rem;
            letter-spacing: 3px;
            margin-bottom: 3rem;
          }

          .college-main-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .college-image-container {
            min-height: 300px;
          }

          .college-text-inner {
            font-size: 0.95rem;
            line-height: 1.7;
            padding: 1.5rem;
            text-align: center;
          }

          .college-text-inner p {
            margin-bottom: 1.2rem;
          }

          .college-stats {
                {/* grid-template-columns: repeat(2, 1fr); */}
                grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .college-stat-box-inner {
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

        
         .college-stats {
            grid-template-columns: 1;
            gap: 1.5rem;
          }
        
          .college-heading {
            font-size: 1.6rem;
            letter-spacing: 2px;
          }

          .college-image-container {
            min-height: 250px;
          }

          .college-text-inner {
            font-size: 0.9rem;
            padding: 1.2rem;
          }

          .college-stat-box-inner {
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

      <section className="college-section">
        <h2 className="heading-glass">MVJ College of Engineering</h2>

        <div className="college-content-wrapper">
          <div className="college-main-content">
            {/* Left Side - Image */}
            <div className="college-image-container">
              <img
                src="https://mvjce.edu.in/wp-content/uploads/2024/03/Ranked-37th.webp"
                alt="MVJ College of Engineering"
                className="college-image"
              />
            </div>

            {/* Right Side - Text Content + Stats */}
            <div className="college-right-content">
              <div className="college-text-content">
                <div
                  className="college-text"
                  onMouseMove={(e) => _handleMouseMove(e, _textSpotlightRef)}
                >
                  <div
                    className="college-text-spotlight"
                    ref={_textSpotlightRef}
                  ></div>
                  <div className="college-text-inner">
                    <p>
                      In the heart of Bengaluru's ever-evolving techscape stands
                      MVJ College of Engineering, a campus where dreams don't
                      just graduate; they take flight. For over four decades and
                      more, MVJ has been more than an institution. It has been
                      canvas for curiosity, a home for innovation, and a launch
                      pad for the next generation of thinkers and creators.Here,
                      every corridor is filled with ambition. Classrooms
                      transform into ideas in motion, labs design stories of
                      innovation, and every student learns that engineering
                      isn't just about machines but also about meaning.
                    </p>
                    <p>
                      With over 26,500 students and a legacy of 43+ years of
                      excellence, MVJ continues to shape minds that balance
                      precision with passion. The faculty aren't just teachers
                      but also mentors who turn potential into purpose. Life at
                      MVJ flows beyond academics filled with cultural rhythms,
                      technical fests, and the quiet confidence of those
                      building tomorrow.
                    </p>
                    <h4>
                      MVJ College of Engineering "Not just a college, but a
                      journey through ideas, energy, and evolution."
                    </h4>
                  </div>
                </div>
              </div>

              {/* Stats inside right content */}
              <div className="college-stats">
                <div
                  className="college-stat-box"
                  onMouseMove={(e) => _handleMouseMove(e, _stat1SpotlightRef)}
                >
                  <div
                    className="college-stat-box-spotlight"
                    ref={_stat1SpotlightRef}
                  ></div>
                  <div className="college-stat-box-inner">
                    <div className="stat-corners corner-tl"></div>
                    <div className="stat-corners corner-tr"></div>
                    <div className="stat-corners corner-bl"></div>
                    <div className="stat-corners corner-br"></div>
                    <div className="stat-number">26,500+</div>
                    <div className="stat-label">Students</div>
                  </div>
                </div>

                <div
                  className="college-stat-box"
                  onMouseMove={(e) => _handleMouseMove(e, _stat2SpotlightRef)}
                >
                  <div
                    className="college-stat-box-spotlight"
                    ref={_stat2SpotlightRef}
                  ></div>
                  <div className="college-stat-box-inner">
                    <div className="stat-corners corner-tl"></div>
                    <div className="stat-corners corner-tr"></div>
                    <div className="stat-corners corner-bl"></div>
                    <div className="stat-corners corner-br"></div>
                    <div className="stat-number">43+</div>
                    <div className="stat-label">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollegeInfoSection;
