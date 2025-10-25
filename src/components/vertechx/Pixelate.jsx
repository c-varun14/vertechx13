"use client";
import "./CollegeInfoSection"
import React, { useRef } from 'react';

const ParadoxiaSection = () => {
  const _introSpotlightRef = useRef(null);
  const _feature1SpotlightRef = useRef(null);
  const _feature2SpotlightRef = useRef(null);

  const _handleMouseMove = (e, spotlightRef) => {
    if (!spotlightRef.current) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    spotlightRef.current.style.transition = 'none';
    spotlightRef.current.style.transform = `translate(-50%, -50%) translate(${x - 50}%, ${y - 50}%)`;
  };
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700;900&display=swap");

        @import url('https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Exo:ital,wght@0,100..900;1,100..900&display=swap');

        * {
          font-family:"Exo", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        .paradoxia-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6rem 2rem;
          z-index: 100;
        }

        .paradoxia-heading {
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

        .paradoxia-content-wrapper {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .paradoxia-intro {
          position: relative;
          padding: 1px;
          border-radius: 19px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
        }

        .paradoxia-intro-spotlight {
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

        .paradoxia-intro:hover .paradoxia-intro-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .paradoxia-intro-inner {
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
        }

        .paradoxia-intro-inner p {
          margin-bottom: 1.5rem;
        }

        .paradoxia-intro-inner p:last-child {
          margin-bottom: 0;
        }

        .paradoxia-intro p {
          margin-bottom: 1.5rem;
        }

        .paradoxia-intro p:last-child {
          margin-bottom: 0;
        }

        .paradoxia-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .feature-card {
          position: relative;
          padding: 1px;
          border-radius: 20px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
        }

        .feature-card-spotlight {
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

        .feature-card:hover .feature-card-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .feature-card-inner {
          position: relative;
          z-index: 10;
          padding: 2.5rem 2rem;
          background: rgba(12, 8, 28, 0.43);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-card-inner {
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

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .feature-title {
          font-family: " ui-sans-serif", sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ff6b6b;
          text-align: center;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .feature-description {
          font-family:" ui-sans-serif",  sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
        }

        .feature-corners {
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
          .paradoxia-heading {
            font-size: 3rem;
            letter-spacing: 4px;
          }

          .paradoxia-intro {
            font-size: 1rem;
            padding: 1.5rem;
          }

          .feature-title {
            font-size: 1.3rem;
          }

          .feature-description {
            font-size: 0.95rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .paradoxia-section {
            padding: 4rem 1.5rem;
          }
          .paradoxia-intro-inner{
           padding: 1rem;
           font-size: 0.9rem;
          } 

          .paradoxia-heading {
            font-size: 2.2rem;
            letter-spacing: 3px;
            margin-bottom: 2rem;
          }

          .paradoxia-intro {
            font-size: 0.95rem;
            line-height: 1.7;
            padding: 1.5rem;
          }

          .paradoxia-intro p {
            margin-bottom: 1.2rem;
          }

          .paradoxia-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }

          .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .feature-title {
            font-size: 1.2rem;
          }

          .feature-description {
            font-size: 0.9rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .paradoxia-heading {
            font-size: 1.8rem;
            letter-spacing: 2px;
          }

          .paradoxia-intro {
            font-size: 0.9rem;
            padding: 1.2rem;
          }

          .feature-card {
            padding: 1.5rem 1rem;
          }

          .feature-icon {
            font-size: 2rem;
          }

          .feature-title {
            font-size: 1.1rem;
          }

          .feature-description {
            font-size: 0.85rem;
          }

          .feature-corners {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>

      <section className="paradoxia-section">
        <h2 className="heading-glass">About Pixelate</h2>

        <div className="paradoxia-content-wrapper">
          <div 
            className="paradoxia-intro"
            onMouseMove={(e) => _handleMouseMove(e, _introSpotlightRef)}
          >
            <div className="paradoxia-intro-spotlight" ref={_introSpotlightRef}></div>
            <div className="paradoxia-intro-inner">
              <p>
                This year, VertechX introduces <strong>Pixelate</strong>—a journey through the unexpected 
                intersections between expectation and reality. Embracing the pixelated aesthetic at its core, 
                Pixelate invites participants to explore how opposites like order and chaos, simplicity and 
                complexity, digital and analog coexist in surprising harmony, sparking new pathways for innovation.
              </p>
              <p>
                The Pixelate theme represents the fundamental building blocks of digital creation—where individual 
                pixels combine to form something greater. Through interactive workshops on paradoxical technology 
                and competitions that blend simplicity with complexity, VertechX encourages creative minds to 
                break boundaries and uncover the potential in opposing ideas.
              </p>
            </div>
          </div>

          <div className="paradoxia-features">
            <div 
              className="feature-card"
              onMouseMove={(e) => _handleMouseMove(e, _feature1SpotlightRef)}
            >
              <div className="feature-card-spotlight" ref={_feature1SpotlightRef}></div>
              <div className="feature-card-inner">
                <div className="feature-corners corner-tl"></div>
                <div className="feature-corners corner-tr"></div>
                <div className="feature-corners corner-bl"></div>
                <div className="feature-corners corner-br"></div>
                
                <h3 className="feature-title">Innovative Workshops</h3>
                <p className="feature-description">
                  Explore paradoxical technology and systems that bridge real and virtual applications.
                </p>
              </div>
            </div>

            <div 
              className="feature-card"
              onMouseMove={(e) => _handleMouseMove(e, _feature2SpotlightRef)}
            >
              <div className="feature-card-spotlight" ref={_feature2SpotlightRef}></div>
              <div className="feature-card-inner">
                <div className="feature-corners corner-tl"></div>
                <div className="feature-corners corner-tr"></div>
                <div className="feature-corners corner-bl"></div>
                <div className="feature-corners corner-br"></div>
                
                <h3 className="feature-title">Competitions</h3>
                <p className="feature-description">
                  Participate in paradox-themed hackathons, robotics challenges, and coding contests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParadoxiaSection;