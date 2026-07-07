"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowBlobProps {
  className?: string;
  size?: string;
  delay?: number;
  duration?: number;
}

export function GlowBlob({
  className,
  size = "w-72 h-72",
  delay = 0,
  duration = 8,
}: GlowBlobProps) {
  return (
    <motion.div
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full bg-gradient-to-tr from-primary-glow/20 to-primary/10 blur-3xl -z-10",
        size,
        className
      )}
    />
  );
}
