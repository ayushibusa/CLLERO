"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import { KineticHeadline } from "@/components/ui/KineticHeadline";
import { DashboardMockup } from "@/components/home/DashboardMockup";

export function HomeHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-start pt-4 pb-16 md:pt-8 md:pb-24 overflow-hidden bg-background w-full"
    >
      {/* Interactive Cursor Spotlight Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-500 ease-out z-0"
          style={{
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            left: `${mousePos.x - 350}px`,
            top: `${mousePos.y - 350}px`,
          }}
        />
      )}

      {/* Background Glow Blobs for premium depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-gradient-to-br from-primary/10 to-primary-light/5 blur-[100px] md:blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[250px] md:w-[600px] h-[250px] md:h-[600px] rounded-full bg-gradient-to-tr from-primary-glow/10 to-transparent blur-[80px] md:blur-[130px] -z-10 pointer-events-none" />

      {/* Left Digital Matrix Dash Waves */}
      <div className="absolute left-0 top-[25%] bottom-[15%] w-[12%] max-w-[160px] hidden md:block pointer-events-none opacity-40 text-primary z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 100 600" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => {
            const x = 12 + i * 11;
            const h = 200 + Math.sin(i * 0.8) * 150;
            const yStart = 300 - h / 2;
            const yEnd = 300 + h / 2;
            return (
              <line
                key={i}
                x1={x}
                y1={yStart}
                x2={x}
                y2={yEnd}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 6"
                opacity={0.3 + (i / 8) * 0.5}
              />
            );
          })}
          {[...Array(15)].map((_, i) => {
            const y = 80 + i * 35;
            const w = 25 + Math.cos(i * 0.6) * 35;
            return (
              <line
                key={i}
                x1="0"
                y1={y}
                x2={w}
                y2={y}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2 4"
                opacity={0.2}
              />
            );
          })}
        </svg>
      </div>

      {/* Right Digital Matrix Dash Waves */}
      <div className="absolute right-0 top-[25%] bottom-[15%] w-[12%] max-w-[160px] hidden md:block pointer-events-none opacity-40 text-primary z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 100 600" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => {
            const x = 88 - i * 11;
            const h = 220 + Math.cos(i * 0.9) * 140;
            const yStart = 300 - h / 2;
            const yEnd = 300 + h / 2;
            return (
              <line
                key={i}
                x1={x}
                y1={yStart}
                x2={x}
                y2={yEnd}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 6"
                opacity={0.3 + (i / 8) * 0.5}
              />
            );
          })}
          {[...Array(15)].map((_, i) => {
            const y = 90 + i * 35;
            const w = 25 + Math.sin(i * 0.5) * 35;
            return (
              <line
                key={i}
                x1="100"
                y1={y}
                x2={100 - w}
                y2={y}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2 4"
                opacity={0.2}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center relative z-10">
        
        {/* Top Text Content Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-8">
          
          {/* Eyebrow badge with animated glow border effect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: prefersReducedMotion ? 0 : 0.05,
            }}
            className="inline-block relative p-[1px] rounded-full bg-gradient-to-r from-primary via-primary-light to-primary-glow mb-6 shadow-md shadow-primary/10"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md">
              <span className="text-primary text-xs font-extrabold tracking-widest uppercase">
                THE ALL-IN-ONE GYM GROWTH PLATFORM
              </span>
            </div>
          </motion.div>

          {/* Kinetic headline centered */}
          <KineticHeadline
            text="Run Your Gym. Grow Your Members."
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-heading leading-[1.12] mb-6 text-center"
            delay={prefersReducedMotion ? 0 : 0.25}
            useH1={true}
          />

          {/* Subheadline paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: prefersReducedMotion ? 0 : 0.55,
            }}
            className="text-base md:text-lg text-text-body leading-relaxed max-w-2xl mb-8"
          >
            CLLERO gives gym owners and fitness operators a powerful management dashboard and a custom done-for-you website — built to fill classes, automate billing, and save hours of admin every single week.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: prefersReducedMotion ? 0 : 0.7,
            }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Link href="/#contact" className="w-full sm:w-auto">
              <PrimaryButton 
                variant="solid" 
                className="w-full sm:w-auto justify-center gap-2 shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.45)] px-8"
              >
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </Link>
            <Link href="/#product" className="w-full sm:w-auto">
              <PrimaryButton variant="outline" className="w-full sm:w-auto justify-center px-8">
                See How It Works
              </PrimaryButton>
            </Link>
          </motion.div>
        </div>

        {/* Centered Dashboard Showcase */}
        <div className="w-full max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
              delay: prefersReducedMotion ? 0 : 0.45,
            }}
            className="w-full"
          >
            <DashboardMockup />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
