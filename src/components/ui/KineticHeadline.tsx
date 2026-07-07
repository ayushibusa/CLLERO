"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger client-side only to prevent SSR crashes
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface KineticHeadlineProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  useH1?: boolean;
}

export function KineticHeadline({
  text,
  className,
  delay = 0,
  highlightWords = [],
  useH1 = false,
}: KineticHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Immediate fallback visibility for reduced motion preference
    if (prefersReducedMotion) {
      const words = containerRef.current?.querySelectorAll(".kinetic-word");
      if (words) {
        words.forEach((w) => {
          (w as HTMLElement).style.opacity = "1";
          (w as HTMLElement).style.transform = "none";
        });
      }
      return;
    }

    const words = containerRef.current?.querySelectorAll(".kinetic-word");
    if (!words || words.length === 0) return;

    // Detect if this is the Hero Headline ("Train Beyond Limits.")
    const isHero = useH1 || text.includes("Train Beyond Limits");

    if (isHero) {
      // Hero headline snaps in shortly after the 3D model's first key light sweep on mount
      gsap.fromTo(
        words,
        {
          opacity: 0,
          scale: 1.45,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          delay: 0.25 + delay, // sync with 3D sweep
          ease: "power4.out", // Snappy easing
        }
      );
    } else {
      // Section headlines reveal when scrolled into view
      gsap.fromTo(
        words,
        {
          opacity: 0,
          scale: 1.35,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.06,
          delay: delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%", // Trigger slightly before the headline hits the center of screen
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === containerRef.current) {
          t.kill();
        }
      });
    };
  }, [prefersReducedMotion, text, useH1, delay]);

  const words = text.split(" ");
  const Tag = useH1 ? "h1" : "h2";

  return (
    <Tag
      ref={containerRef}
      className={className}
      style={{ overflow: "visible" }} // Ensure scaled letters don't clip
    >
      {words.map((word, idx) => {
        // Strip punctuation for matching highlights
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        const shouldHighlight =
          highlightWords.some((h) => cleanWord.toLowerCase() === h.toLowerCase()) ||
          word.includes("Limits.") ||
          word.toLowerCase() === "limits";

        // Keep specific layout line break after "Beyond" in hero
        const needsLineBreak = word === "Beyond";

        return (
          <React.Fragment key={idx}>
            <span
              className={`kinetic-word inline-block mr-[0.22em] origin-center opacity-0 ${
                shouldHighlight ? "text-gradient" : ""
              }`}
              style={{ willChange: "transform, opacity" }}
            >
              {word}
            </span>
            {needsLineBreak && <br />}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
