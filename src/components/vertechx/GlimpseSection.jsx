"use client";
// ============================================
// GlimpseSection.jsx - RESPONSIVE VERSION
// ============================================
import React, { useState, useEffect, useRef } from "react";

const GlimpseSection = () => {
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
        .glimpse-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 5rem 1rem;
        }

        .spotlight {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 800px;
          height: 800px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.4), rgba(0, 0, 0, 0) 70%);
          filter: blur(90px);
          z-index: 0;
          animation: glowPulse 6s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes glowPulse {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }

        .glimpse-container {
          position: relative;
          z-index: 2;
          width: 90%;
          max-width: 1000px;
          transform-origin: center;
        }

        .glass-box {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          animation: breathePurple 4s ease-in-out infinite;
        }

        @keyframes breathePurple {
          0%, 100% {
            box-shadow:
              0 0 25px rgba(139, 92, 246, 0.25),
              0 0 45px rgba(99, 102, 241, 0.2);
          }
          50% {
            box-shadow:
              0 0 40px rgba(139, 92, 246, 0.6),
              0 0 80px rgba(236, 72, 153, 0.4);
          }
        }

        .glass-box::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg,
            rgba(99, 102, 241, 0.8),
            rgba(139, 92, 246, 0.9),
            rgba(236, 72, 153, 0.9),
            rgba(245, 158, 11, 0.9));
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

        .glimpse-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
        }

        .glimpse-video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        /* Tablet */
        @media screen and (max-width: 1024px) {
          .glimpse-section {
            min-height: 70vh;
            padding: 4rem 1rem;
          }

          .spotlight {
            width: 600px;
            height: 600px;
            filter: blur(70px);
          }

          .glass-box {
            border-radius: 20px;
          }

          .glimpse-video {
            border-radius: 18px;
          }
        }

        /* Mobile */
        @media screen and (max-width: 768px) {
          .glimpse-section {
            min-height: 50vh;
            padding: 3rem 1rem;
          }

          .spotlight {
            width: 400px;
            height: 400px;
            filter: blur(50px);
          }

          .glimpse-container {
            width: 95%;
          }

          .glass-box {
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px) saturate(150%);
          }

          @keyframes breathePurple {
            0%, 100% {
              box-shadow:
                0 0 15px rgba(139, 92, 246, 0.2),
                0 0 30px rgba(99, 102, 241, 0.15);
            }
            50% {
              box-shadow:
                0 0 25px rgba(139, 92, 246, 0.4),
                0 0 50px rgba(236, 72, 153, 0.25);
            }
          }

          .glass-box::before {
            padding: 1.5px;
          }

          .glimpse-video {
            border-radius: 14px;
          }
        }

        /* Small Mobile */
        @media screen and (max-width: 480px) {
          .glimpse-section {
            min-height: 40vh;
            padding: 2rem 0.75rem;
          }

          .spotlight {
            width: 300px;
            height: 300px;
            filter: blur(40px);
          }

          .glass-box {
            border-radius: 12px;
          }

          @keyframes breathePurple {
            0%, 100% {
              box-shadow:
                0 0 10px rgba(139, 92, 246, 0.15),
                0 0 20px rgba(99, 102, 241, 0.1);
            }
            50% {
              box-shadow:
                0 0 18px rgba(139, 92, 246, 0.3),
                0 0 35px rgba(236, 72, 153, 0.2);
            }
          }

          .glass-box::before {
            padding: 1px;
          }

          .glimpse-video {
            border-radius: 10px;
          }
        }
      `}</style>

      <section className="glimpse-section" ref={sectionRef}>
        <div className="spotlight"></div>
        <div
          className="glimpse-container"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="glass-box">
            <div className="glimpse-video">
              <video autoPlay loop muted playsInline>
                {/* <source src="https://pub-ad7b9dfb5d1942639c6f3b5196e947c8.r2.dev/glimpse.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlimpseSection;
