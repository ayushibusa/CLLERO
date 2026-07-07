"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useMotionTemplate, HTMLMotionProps } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion.config";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  delay = 0,
  ...props
}: GlassCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  
  // Track relative mouse position inside the card using Framer Motion values for 60fps performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const backgroundTemplate = useMotionTemplate`radial-gradient(140px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.15), transparent 80%)`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    setIsLightMode(document.documentElement.classList.contains("light"));
    const observer = new MutationObserver(() => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (!hoverEffect || prefersReducedMotion || isMobile || isLightMode) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Clean className to prevent duplicate/overlapping border and background styles overriding our premium glass mask
  const cleanedClassName = className
    ? className
        .replace(/\bborder border-white\/\d+/g, "")
        .replace(/\bborder border-primary\/\d+/g, "")
        .replace(/\bbg-white\/\d+/g, "")
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: DURATION.slow, delay, ease: EASE }}
      onMouseMove={handleMouseMove}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group",
        hoverEffect && !isMobile && "hover:-translate-y-2 hover:scale-[1.015] glass-glow cursor-pointer hover:shadow-cyan-500/10 hover:shadow-xl bg-white/65",
        hoverEffect && isMobile && "bg-white/65",
        cleanedClassName
      )}
      {...props}
    >
      {/* 1. Cursor-Tracking Spotlight Glow: moves with mouse inside the card */}
      {hoverEffect && !prefersReducedMotion && !isMobile && !isLightMode && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: backgroundTemplate,
          }}
        />
      )}

      {/* 2. Premium Cinematic Light Sweep: runs once diagonally on hover */}
      {hoverEffect && !prefersReducedMotion && !isMobile && !isLightMode && (
        <motion.div
          className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-primary-glow/12 to-transparent pointer-events-none z-10"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{ skewX: -25 }}
        />
      )}

      {/* 3. Cybernetic Dot Grid Pattern */}
      {hoverEffect && !isMobile && !isLightMode && (
        <div className="absolute inset-0 bg-[radial-gradient(rgba(6,182,212,0.06)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="relative z-20 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
