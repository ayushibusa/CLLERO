"use client";

import React from "react";

export function LiquidTransition() {
  return (
    <div className="relative w-full h-12 flex items-center justify-center pointer-events-none z-30 overflow-visible my-6">
      {/* Soft, low-opacity ambient depth glow */}
      <div className="absolute w-[60%] h-12 bg-gradient-to-r from-primary/10 via-primary-light/15 to-primary-glow/10 blur-[40px] rounded-full opacity-30" />
      {/* Thin 1px gradient divider line */}
      <div className="w-[85%] md:w-[70%] h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
    </div>
  );
}
