"use client";

import React from "react";
import Image from "next/image";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-logo-container">
          <Image
            src="/mainlog.svg"
            alt="Company Logo"
            width={1800}
            height={600}
            className="hero-logo"
            priority
          />
        </div>
        <div className="hero-gif-container">
          <Image
            src="/blocks-unscreen.gif"
            alt="Animated Blocks"
            width={250}
            height={250}
            className="hero-gif"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
