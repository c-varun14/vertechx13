"use client";
// ============================================
// VideoSection.jsx - RESPONSIVE VERSION
// ============================================
import React, { useState, useEffect, useRef } from "react";

const VideoSection = () => {
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = windowHeight;
      let newScale = 1 + 0.08 * (1 - Math.min(distance / maxDistance, 1));
      newScale = Math.max(1, Math.min(1.08, newScale));
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .video-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 5rem 1rem;
        }

        .video-spotlight {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 800px;
          height: 800px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle at center, rgba(255, 107, 107, 0.35), rgba(0, 0, 0, 0) 70%);
          filter: blur(90px);
          z-index: 0;
          animation: glowPulse 6s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes glowPulse {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }

        .video-container {
          position: relative;
          z-index: 2;
          width: 90%;
          max-width: 1000px;
          transform-origin: center;
        }

        .video-glass-box {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(15, 19, 29, 0.6);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          animation: breatheRed 4s ease-in-out infinite;
        }

        @keyframes breatheRed {
          0%, 100% {
            box-shadow:
              0 0 25px rgba(255, 107, 107, 0.25),
              0 0 45px rgba(255, 107, 107, 0.2);
          }
          50% {
            box-shadow:
              0 0 40px rgba(255, 107, 107, 0.5),
              0 0 80px rgba(255, 153, 102, 0.4);
          }
        }

        .video-glass-box::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg,
            rgba(255, 107, 107, 0.8),
            rgba(255, 153, 102, 0.9),
            rgba(255, 204, 153, 0.8),
            rgba(255, 107, 107, 0.9));
          background-size: 300% 300%;
          animation: borderFlow 6s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        /* Tablet */
        @media screen and (max-width: 1024px) {
          .video-section {
            min-height: 70vh;
            padding: 4rem 1rem;
          }

          .video-spotlight {
            width: 600px;
            height: 600px;
            filter: blur(70px);
          }

          .video-glass-box {
            border-radius: 20px;
          }

          .video-wrapper {
            border-radius: 18px;
          }
        }

        /* Mobile */
        @media screen and (max-width: 768px) {
          .video-section {
            min-height: 50vh;
            padding: 3rem 1rem;
          }

          .video-spotlight {
            width: 400px;
            height: 400px;
            filter: blur(50px);
          }

          .video-container {
            width: 95%;
          }

          .video-glass-box {
            border-radius: 16px;
            background: rgba(15, 19, 29, 0.5);
            backdrop-filter: blur(15px) saturate(150%);
          }

          @keyframes breatheRed {
            0%, 100% {
              box-shadow:
                0 0 15px rgba(255, 107, 107, 0.2),
                0 0 30px rgba(255, 107, 107, 0.15);
            }
            50% {
              box-shadow:
                0 0 25px rgba(255, 107, 107, 0.4),
                0 0 50px rgba(255, 153, 102, 0.25);
            }
          }

          .video-glass-box::before {
            padding: 1.5px;
          }

          .video-wrapper {
            border-radius: 14px;
          }
        }

        /* Small Mobile */
        @media screen and (max-width: 480px) {
          .video-section {
            min-height: 40vh;
            padding: 2rem 0.75rem;
          }

          .video-spotlight {
            width: 300px;
            height: 300px;
            filter: blur(40px);
          }

          .video-glass-box {
            border-radius: 12px;
          }

          @keyframes breatheRed {
            0%, 100% {
              box-shadow:
                0 0 10px rgba(255, 107, 107, 0.15),
                0 0 20px rgba(255, 107, 107, 0.1);
            }
            50% {
              box-shadow:
                0 0 18px rgba(255, 107, 107, 0.3),
                0 0 35px rgba(255, 153, 102, 0.2);
            }
          }

          .video-glass-box::before {
            padding: 1px;
          }

          .video-wrapper {
            border-radius: 10px;
          }
        }
      `}</style>

      <section className="video-section" ref={sectionRef}>
        <div className="video-spotlight"></div>
        <div
          className="video-container"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="video-glass-box">
            <div className="video-wrapper">
              <video autoPlay loop muted playsInline>
                {/* <source src="https://pub-ad7b9dfb5d1942639c6f3b5196e947c8.r2.dev/teaser.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
