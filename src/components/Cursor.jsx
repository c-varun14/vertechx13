"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY }); // Adjust offset as needed
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <img
      src="/cursor.png"
      alt="Custom Cursor"
      className="hidden lg:block"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvents: "none", // Ensures it doesn't block interactions
        width: "36px",
        height: "36px",
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
