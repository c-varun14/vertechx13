"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const SponsorsSection = () => {
  const scrollRef = useRef(null);

  // Sample sponsor logos - Replace these URLs with your actual sponsor logos
  const sponsors = [
    // {
    //   id: 1,
    //   name: "MVJ COLLEGE OF ENGENNERING",
    //   logo: "/assets/mvjLogo.webp",
    // },
    { id: 2, name: "Casio", logo: "Casio.png" },

    {
      id: 3,
      name: "Global degree",
      logo: "https://globaldegrees.in/wp-content/uploads/2025/02/Logo_0000_Group-1-copy-1.png",
    },
    { id: 4, name: "iskon", logo: "/iskcon_logo.svg" },
    {
      id: 5,
      name: "thebelgianwaffle",
      logo: "https://thebelgianwaffle.co/wp-content/uploads/2023/11/bwc-logo-1.png",
    },
    { id: 5, name: "Luxev", logo: "/noidea.png" },
    { id: 6, name: 'swish', logo: '/swish.png' },
    // { id: 7, name: 'Sponsor 7', logo: 'https://via.placeholder.com/200x100/ef4444/ffffff?text=Sponsor+7' },
    // { id: 8, name: 'Sponsor 8', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Sponsor+8' },
    // { id: 9, name: 'Sponsor 9', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Sponsor+9' },
    // { id: 10, name: 'Sponsor 10', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Sponsor+10' },
    // { id: 11, name: 'Sponsor 11', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Sponsor+11' },
    // { id: 12, name: 'Sponsor 12', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Sponsor+12' },
    // { id: 13, name: 'Sponsor 13', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Sponsor+13' },
  ];

  // Duplicate sponsors for infinite scroll effect
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll position for infinite loop
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
      
      @import url('https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Exo:ital,wght@0,100..900;1,100..900&display=swap');
        @import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700;900&display=swap");

        .sponsors-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6rem 1rem;
          overflow: hidden;
        }

        .sponsors-heading {
          font-family: "Exo", sans-serif;
          font-size: 5rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 12px;
          text-align: center;
          margin-bottom: 5rem;
          background: linear-gradient(135deg, #fff 0%, #6366f1 25%, #ec4899 50%, #8b5cf6 75%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: sponsorGradient 5s ease infinite;
          position: relative;
        }

        @keyframes sponsorGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .carousel-container {
          width: 100%;
          max-width: 100vw;
          position: relative;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 3rem;
          padding: 2rem 0;
          overflow-x: hidden;
          cursor: grab;
        }

        .carousel-track:active {
          cursor: grabbing;
        }

        .sponsor-card {
          flex: 0 0 auto;
          width: 280px;
          height: 160px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          overflow: hidden;
        }

        .sponsor-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          transition: left 0.6s ease;
        }

        .sponsor-card:hover {
          transform: translateY(-20px) scale(1.08);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .sponsor-card:hover::before {
          left: 100%;
        }

        .sponsor-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.95);
        }

        .sponsor-card:hover .sponsor-logo {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        .carousel-gradient-left,
        .carousel-gradient-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 10;
          pointer-events: none;
        }

        .carousel-gradient-left {
          left: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
        }

        .carousel-gradient-right {
          right: 0;
          background: linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .sponsors-heading {
            font-size: 4rem;
            letter-spacing: 10px;
            margin-bottom: 4rem;
          }

          .sponsor-card {
            width: 240px;
            height: 140px;
          }

          .carousel-track {
            gap: 2rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .sponsors-section {
            padding: 4rem 1rem;
            min-height: 62vh;
          }

          .sponsors-heading {
            font-size: 2.5rem;
            letter-spacing: 6px;
            margin-bottom: 3rem;
          }

          .sponsor-card {
            width: 200px;
            height: 120px;
            padding: 1.5rem;
          }

          .carousel-track {
            gap: 1.5rem;
          }

          .carousel-gradient-left,
          .carousel-gradient-right {
            width: 2px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .sponsors-heading {
            font-size: 1.8rem;
            letter-spacing: 4px;
          }

          .sponsor-card {
            width: 180px;
            height: 100px;
            padding: 1rem;
          }

          .carousel-track {
            gap: 1rem;
          }
        }
      `}</style>

      <section className="sponsors-section">
        <h1 id="sponser" className="sponsors-heading mb-12!">
          Sponsors
        </h1>
        <Image
          src={"/assets/mvjLogo.webp"}
          height={100}
          width={100}
          className="w-40 md:w-52"
          alt="MVJ Logo"
        />
        <Image
          src={"/logos/luxev.png"}
          height={100}
          width={100}
          className="w-48 md:w-64 mt-3"
          alt="Luxev Logo"
        />
        <div className="carousel-container px-auto">
          <div className="carousel-gradient-left"></div>
          <div className="carousel-gradient-right"></div>

          <div className="carousel-track w-full" ref={scrollRef}>
            {duplicatedSponsors.map((sponsor, index) => (
              <div key={`${sponsor.id}-${index}`} className="sponsor-card">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorsSection;
