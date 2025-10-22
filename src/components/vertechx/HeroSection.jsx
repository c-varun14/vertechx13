
"use client"; // only needed if you're using App Router (Next 13+)

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Next.js image optimization

const HeroSection = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".header");
    if (navbar) setNavbarHeight(navbar.offsetHeight);

    const handleResize = () => {
      if (navbar) setNavbarHeight(navbar.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: calc(100vh - ${navbarHeight}px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          box-sizing: border-box;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          transform: translate(42px, 26px);
        }

        .hero-logo-container {
          animation: fadeInUp 1.2s ease-out;
          margin-bottom: 0.5rem;
        }

        .hero-logo {
          width: 90vw;
          max-width: 1800px;
          height: auto;
        }

        .hero-gif {
          width: 250px;
          max-width: 50vw;
          height: auto;
          margin-top: -20px;
          background: transparent;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 1024px) {
          .hero-logo {
            width: 80vw;
            max-width: 1400px;
          }
          .hero-gif {
            width: 220px;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            transform: translate(0, 0);
            margin-top: 130px;
            margin-left: 23px;
          }

          .hero-logo {
            width: 95vw;
            max-width: 900px;
          }

          .hero-gif {
            width: 180px;
            margin-top: 10px;
          }
        }

        @media (max-width: 480px) {
          .hero-logo {
            width: 98vw;
            max-width: 700px;
          }
          .hero-gif {
            width: 150px;
          }
          .hero-content {
            margin-top: 150px;
          }
        }

        @media (max-width: 360px) {
          .hero-logo {
            width: 100vw;
            max-width: 550px;
          }
          .hero-gif {
            width: 120px;
          }
          .hero-content {
            margin-top: 160px;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-logo-container">
            <Image
              src="/mainlog.svg"
              alt="Company Logo"
              className="hero-logo"
              width={1800}
              height={600}
              priority
            />
          </div>
          <div className="hero-gif-container">
            <Image
              src="/blocks-unscreen.gif"
              alt="Animated Blocks"
              className="hero-gif"
              width={250}
              height={250}
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
