"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 }); // Adjust offset as needed
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <img
      src="/favicon.ico"
      alt="Custom Cursor"
      className="hidden lg:block"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvents: "none", // Ensures it doesn't block interactions
        width: "48px",
        height: "48px",
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
