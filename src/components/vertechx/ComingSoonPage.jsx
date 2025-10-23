"use client";
import React, { useEffect, useState, useRef } from "react";

const ComingSoonPage = () =>
  // { title, icon, message }
  {
    const [particles, setParticles] = useState([]);
    const spotlightRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
      const newParticles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        size: Math.random() * 5 + 3,
      }));
      setParticles(newParticles);
    }, []);

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      spotlightRef.current.style.transform = `translate(-50%, -50%) translate(${
        x - 50
      }%, ${y - 50}%)`;
    };

    return (
      <>
        <style>{`
        .coming-soon-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background-color: #0f131d;
          padding: 12rem 2rem 4rem;
          overflow: hidden;
          box-sizing: border-box;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          bottom: -10px;
          background: rgba(255, 107, 107, 0.6);
          border-radius: 50%;
          animation: rise 10s infinite ease-in;
          box-shadow: 0 0 15px rgba(255, 107, 107, 0.6);
        }

        @keyframes rise {
          0% { bottom: -10px; opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { bottom: 110vh; opacity: 0; }
        }

        .content-container {
          position: relative;
          z-index: 10;
          max-width: 950px;
          width: 100%;
          text-align: center;
          background: rgba(15, 19, 29, 0.35); /* more transparent */
          backdrop-filter: blur(25px);
          border-radius: 40px;
          padding: 6rem 4rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          animation: fadeInScale 0.8s ease-out;
          overflow: hidden;
        }

        .spotlight {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 1200px;
          height: 1200px;
          background: radial-gradient(circle, rgba(255,107,107,0.35) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(180px);
          transform: translate(-50%, -50%);
          opacity: 0.4; /* initially visible */
          pointer-events: none;
          z-index: 0;
          transition: transform 0.2s ease;
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .icon-container {
          font-size: 6rem;
          margin-bottom: 2.5rem;
          animation: bounce 2s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }

        .icon-container i {
          background: linear-gradient(135deg, #ff6b6b, #ff4757);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 25px rgba(255, 107, 107, 0.7));
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .coming-soon-title {
          font-size: 4rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 4px;
          background: linear-gradient(135deg, #fff, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 2s ease-in-out infinite;
          z-index: 2;
          position: relative;
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(255,107,107,0.4)); }
          50% { filter: drop-shadow(0 0 40px rgba(255,107,107,0.8)); }
        }

        .coming-soon-subtitle {
          font-size: 2rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          z-index: 2;
        }

        .coming-soon-message {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          line-height: 1.9;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          z-index: 2;
          position: relative;
        }

        .divider {
          width: 70%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 107, 0.5), transparent);
          margin: 2.5rem auto;
          z-index: 2;
          position: relative;
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
          z-index: 2;
          position: relative;
        }

        .dot {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #ff6b6b, #ff4757);
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(255,107,107,0.7);
        }

        .dot:nth-child(2) { animation-delay: 0.3s; }
        .dot:nth-child(3) { animation-delay: 0.6s; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.4); opacity: 1; }
        }

        .back-button {
          margin-top: 2.5rem;
          padding: 1rem 3rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(15px);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          z-index: 2;
        }

        .back-button:hover {
          background: rgba(255,107,107,0.35);
          border-color: rgba(255,107,107,0.7);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,107,107,0.6);
        }

        @media (max-width: 768px) {
          .content-container { padding: 5rem 2rem; }
          .coming-soon-title { font-size: 3rem; }
          .coming-soon-subtitle { font-size: 1.5rem; }
          .coming-soon-message { font-size: 1.1rem; max-width: 90%; }
          .icon-container { font-size: 5rem; }
        }
      `}</style>

        <div className="coming-soon-page">
          <div className="particles-container">
            {particles.map((p) => (
              <div
                key={p.id}
                className="particle"
                style={{
                  left: `${p.left}%`,
                  animationDelay: `${p.animationDelay}s`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
              />
            ))}
          </div>

          <div
            className="content-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
          >
            <div className="spotlight" ref={spotlightRef}></div>
            {/* 
            <div className="icon-container">
              <i className={`bx ${icon}`}></i>
            </div> */}

            <h1 className="coming-soon-title">Coming Soon</h1>
            {/* <h2 className="coming-soon-subtitle">{title}</h2> */}
            <div className="divider"></div>
            <p className="coming-soon-message">
              {/* {message || */}
              `We're working hard to bring you an amazing experience. Stay tuned
              for updates!`
              {/* } */}
            </p>

            <div className="loading-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <a href="/" className="back-button">
              Back to Home
            </a>
          </div>
        </div>
      </>
    );
  };

export default ComingSoonPage;
