import React from "react";
import FadeInBlock from "./FadeInBlock";
import InfiniteMovingCards from "@/components/ui/InfiniteMovingCards2";

const sponsors = [
  "/assets/mvjLogo.webp",
  "/assets/sponsors/cityunion.png",
  "/assets/sponsors/whitefield.png",
  "/assets/sponsors/bmw.png",
  "/assets/sponsors/rudra2.png",
  "/assets/sponsors/polarbear.jpg",
  "/assets/sponsors/connect2.jpg",
  "/assets/sponsors/trends_logo.jpg",
];

const Sponsors = () => {
  return (
    <section className="py-8 md:py-16">
      <FadeInBlock>
        <h2 className="text-center text-4xl md:text-6xl mb-8">Sponsors</h2>
        <InfiniteMovingCards
          images={sponsors}
          direction="right"
          duration={40}
        />
      </FadeInBlock>
    </section>
  );
};

export default Sponsors;
