"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type InfiniteMovingCardsProps = {
  images: string[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  duration?: number;
};

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  images,
  direction = "left",
  pauseOnHover = true,
  className = "",
  duration = 18,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;

    // Remove clones from previous renders
    while (scroller.children.length > images.length) {
      scroller.removeChild(scroller.lastChild as Node);
    }

    // Duplicate items for seamless scroll
    const items = Array.from(scroller.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      scroller.appendChild(clone);
    });

    // Set animation direction and speed
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty(
      "--animation-duration",
      `${duration}s`
    ); // fast speed

    setStart(true);
  }, [images, direction]);

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: var(--animation-direction, forwards);
          animation-duration: var(--animation-duration, 12s);
        }
      `}</style>

      <div
        ref={containerRef}
        className={`mx-auto relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
      >
        <ul
          ref={scrollerRef}
          className={`flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4 ${
            start ? "animate-scroll" : ""
          } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        >
          {images.map((url, idx) => (
            <li
              key={`${url}-${idx}`}
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ width: "200px", height: "200px", position: "relative" }}
            >
              <Image
                src={url}
                alt={`Sponsor ${idx + 1}`}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
                sizes="200px"
                priority
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InfiniteMovingCards;
