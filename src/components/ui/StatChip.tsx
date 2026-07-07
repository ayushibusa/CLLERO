"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface StatChipProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  duration?: number;
}

export function StatChip({
  end,
  suffix = "",
  prefix = "",
  label,
  className,
  duration = 2.5,
}: StatChipProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-success-bg/80 border border-success-text/20 rounded-full px-4 py-2 inline-flex items-center gap-2 backdrop-blur-md shadow-sm",
        className
      )}
    >
      <span className="text-success-text font-bold text-lg leading-none">
        {prefix}
        {inView ? <CountUp end={end} duration={duration} separator="," /> : 0}
        {suffix}
      </span>
      <span className="text-text-body text-sm font-medium leading-none">{label}</span>
    </div>
  );
}
