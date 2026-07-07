"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/40 shadow-xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute right-4 top-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-md z-10">
        {afterLabel}
      </div>

      {/* Before Image (Foreground overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
        />
        <div className="absolute left-4 top-4 bg-text-heading/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-md z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Bar & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 group"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-primary shadow-lg flex items-center justify-center transition-transform group-hover:scale-110 pointer-events-none">
          <div className="flex gap-1 justify-center items-center">
            <span className="text-primary text-xs font-black">◀</span>
            <span className="text-primary text-xs font-black">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}
