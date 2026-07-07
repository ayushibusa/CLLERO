"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
}

export function PageHero({ title, description, breadcrumbs = [], eyebrow }: PageHeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Animation variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-5 pb-8 md:pt-7 md:pb-10 overflow-hidden border-b border-primary/10 bg-gradient-to-b from-background-alt/10 to-background/50 w-full"
    >
      {/* Interactive Cursor Spotlight Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-500 ease-out z-0"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            left: `${mousePos.x - 250}px`,
            top: `${mousePos.y - 250}px`,
          }}
        />
      )}

      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[90px] pointer-events-none -z-10" />

      {/* Glowing bottom border divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Eyebrow Badge */}
          {eyebrow && (
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-1 text-primary text-[9px] font-extrabold tracking-widest uppercase bg-primary/10 px-2.5 py-1 rounded-full mb-4 border border-primary/20 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </motion.span>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.nav 
              variants={itemVariants}
              className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-text-body/60 mb-5 bg-white/40 backdrop-blur-md py-1 px-3 rounded-full border border-primary/5"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3 h-3 text-text-body/40" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-primary font-black">{crumb.name}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-text-heading mb-4 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-text-heading to-text-heading/85"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base text-text-body max-w-2xl leading-relaxed font-medium"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
