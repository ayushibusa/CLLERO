"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ClleroLogo from "@/assets/gym_logo.png";
import { EASE } from "@/lib/motion.config";

export function LogoAssembly() {
  // Define particle points that converge toward the center logo
  const particles = [
    { id: 1, x: -150, y: -80, scale: 0.8, delay: 0.1 },
    { id: 2, x: 120, y: -120, scale: 0.6, delay: 0.2 },
    { id: 3, x: -100, y: 150, scale: 0.7, delay: 0.15 },
    { id: 4, x: 180, y: 90, scale: 0.9, delay: 0.25 },
    { id: 5, x: -60, y: -140, scale: 0.5, delay: 0.3 },
    { id: 6, x: 80, y: 130, scale: 0.6, delay: 0.05 },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center py-10 select-none w-full max-w-lg mx-auto">
      {/* Drifting glow backdrop behind logo */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[100px] -z-10 animate-pulse pointer-events-none" />

      {/* Outer converging decorative frames (light borders) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.3, rotate: -15 }}
        whileInView={{ opacity: [0, 0.4, 0], scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: EASE }}
        className="absolute w-64 h-24 border border-primary/20 rounded-2xl pointer-events-none -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
        whileInView={{ opacity: [0, 0.3, 0], scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE, delay: 0.2 }}
        className="absolute w-48 h-16 border border-primary-glow/20 rounded-xl pointer-events-none -z-10"
      />

      {/* Converging Particle Sparks */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 0, scale: p.scale }}
          whileInView={{ x: 0, y: 0, opacity: [0, 0.8, 0], scale: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE, delay: p.delay }}
          className="absolute w-3 h-3 rounded-full bg-primary blur-[1px] pointer-events-none"
        />
      ))}

      {/* Logo container assembly */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: EASE, delay: 0.4 }}
        className="flex items-center justify-center w-full px-8 relative"
      >
        <Image
          src={ClleroLogo}
          alt="Cllero Logo"
          className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
