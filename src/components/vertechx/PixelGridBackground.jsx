"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const CELL_SIZE = 60;
const FADE_DELAY = 5000;
const MIN_RANDOM_PIXELS = 5;
const MAX_RANDOM_PIXELS = 10;
const MIN_RADIUS = 2;
const MAX_RADIUS = 3;

export default function PixelGridBackground() {
  const [mounted, setMounted] = useState(false);
  const [cells, setCells] = useState([]);
  const pixelCellsRef = useRef([]);
  const fadeTimeoutRef = useRef(null);
  const isHoveringRef = useRef(false);

  const getGridDimensions = useCallback(() => {
    const cols = Math.ceil(window.innerWidth / CELL_SIZE);
    const rows = Math.ceil(window.innerHeight / CELL_SIZE);
    return { cols, rows };
  }, []);

  const clearHoverEffects = useCallback(() => {
    pixelCellsRef.current.forEach((cell) => cell?.classList.remove("hovered"));
    isHoveringRef.current = false;
  }, []);

  const generateRandomCluster = useCallback((centerRow, centerCol, cols) => {
    const pixelCells = pixelCellsRef.current;
    if (!pixelCells.length) return;

    const numRandomPixels = Math.floor(
      Math.random() * (MAX_RANDOM_PIXELS - MIN_RANDOM_PIXELS + 1) + MIN_RANDOM_PIXELS
    );

    const usedIndices = new Set();
    const centerIndex = centerRow * cols + centerCol;

    if (pixelCells[centerIndex]) {
      pixelCells[centerIndex].classList.add("hovered");
      usedIndices.add(centerIndex);
    }

    for (let i = 0; i < numRandomPixels; i++) {
      const maxRadius = Math.floor(Math.random() * (MAX_RADIUS - MIN_RADIUS + 1)) + MIN_RADIUS;
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * maxRadius;

      const rowOffset = Math.round(Math.sin(angle) * distance);
      const colOffset = Math.round(Math.cos(angle) * distance);

      const targetRow = centerRow + rowOffset;
      const targetCol = centerCol + colOffset;
      const targetIndex = targetRow * cols + targetCol;

      if (!usedIndices.has(targetIndex) && pixelCells[targetIndex]) {
        pixelCells[targetIndex].classList.add("hovered");
        usedIndices.add(targetIndex);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      const pixelCells = pixelCellsRef.current;
      if (!pixelCells.length) return;

      const { cols } = getGridDimensions();
      const col = Math.floor(e.clientX / CELL_SIZE);
      const row = Math.floor(e.clientY / CELL_SIZE);

      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

      isHoveringRef.current = true;
      clearHoverEffects();
      generateRandomCluster(row, col, cols);

      fadeTimeoutRef.current = setTimeout(() => {
        if (isHoveringRef.current) clearHoverEffects();
      }, FADE_DELAY);
    },
    [getGridDimensions, clearHoverEffects, generateRandomCluster]
  );

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    clearHoverEffects();
  }, [clearHoverEffects]);

  const generateGrid = useCallback(() => {
    const { cols, rows } = getGridDimensions();
    const totalCells = cols * rows;

    const newCells = Array.from({ length: totalCells }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      return (
        <div
          key={i}
          className="pixel-cell"
          ref={(el) => el && (pixelCellsRef.current[i] = el)}
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            gridColumn: col + 1,
            gridRow: row + 1,
          }}
        />
      );
    });

    setCells(newCells);
  }, [getGridDimensions]);

  useEffect(() => {
    setMounted(true);
    generateGrid();

    window.addEventListener("resize", generateGrid);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", generateGrid);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [generateGrid, handleMouseMove, handleMouseLeave]);

  if (!mounted) return null;

  return <div className="pixel-wrapper grid">{cells}</div>;
}
