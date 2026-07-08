"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  TrendingUp,
  Activity,
  UtensilsCrossed,
  Wrench,
  Brain,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   HeroOrbitAnimation
   ─────────────────────────────────────────────────────────────
   Renders the hero visual: concentric circle tracks, a center
   gym person image, and six animated floating stat cards that
   gently bob/float around the person — matching the reference
   design with Member Activity, Workout Analytics, Body
   Composition, AI Insights, Nutrition Tracking, and Equipment
   Status.
   ───────────────────────────────────────────────────────────── */

// ── Stat card data ──────────────────────────────────────────
const statCards = [
  {
    id: "member-activity",
    icon: <Users className="w-4 h-4 text-cyan-500" />,
    title: "Member Activity",
    value: "1,250",
    subtitle: "Active Members",
    hasBar: true,
    barPercent: 78,
    // Position: top-left
    position: { top: "4%", left: "4%" },
    delay: 0,
  },
  {
    id: "workout-analytics",
    icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
    title: "Workout Analytics",
    value: "+28%",
    subtitle: "Performance",
    hasChart: true,
    // Position: top-right
    position: { top: "6%", right: "2%" },
    delay: 0.15,
  },
  {
    id: "body-composition",
    icon: <Activity className="w-4 h-4 text-cyan-500" />,
    title: "Body Composition",
    value: "68%",
    subtitle: "Muscle Mass",
    hasDonut: true,
    // Position: mid-right
    position: { top: "42%", right: "0%" },
    delay: 0.3,
  },
  {
    id: "ai-insights",
    icon: <Brain className="w-4 h-4 text-violet-500" />,
    title: "AI Insights",
    value: "",
    subtitle: "",
    hasInsights: true,
    // Position: mid-left
    position: { top: "38%", left: "0%" },
    delay: 0.45,
  },
  {
    id: "nutrition-tracking",
    icon: <UtensilsCrossed className="w-4 h-4 text-amber-500" />,
    title: "Nutrition Tracking",
    value: "1,890",
    subtitle: "Today",
    valueSuffix: "kcal",
    // Position: bottom-left
    position: { bottom: "6%", left: "8%" },
    delay: 0.6,
  },
  {
    id: "equipment-status",
    icon: <Wrench className="w-4 h-4 text-teal-500" />,
    title: "Equipment Status",
    value: "All Systems",
    subtitle: "Operational",
    hasCheck: true,
    // Position: bottom-right
    position: { bottom: "4%", right: "4%" },
    delay: 0.75,
  },
];

export function HeroOrbitAnimation() {
  return (
    <div className="w-[300px] h-[300px] sm:w-[430px] sm:h-[430px] lg:w-[540px] lg:h-[540px] relative flex items-center justify-center overflow-visible select-none">
      {/* Scaled wrapper to keep aspect ratio and card positioning exact on all devices */}
      <div className="w-[540px] h-[540px] shrink-0 absolute flex items-center justify-center scale-[0.55] sm:scale-[0.8] lg:scale-100 origin-center transition-transform duration-300">
        
        {/* Central Premium Soft Glow */}
        <div className="absolute w-64 h-64 bg-cyan-500/8 blur-[100px] rounded-full z-0" />

        {/* Inner Circle Track */}
        <div className="absolute w-[260px] h-[260px] rounded-full border border-cyan-500/10 z-0" />

        {/* Middle Circle Track with Orbiting Orange Dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] rounded-full border border-cyan-500/8 z-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_#F97316]" />
        </motion.div>

        {/* Outer Circle Track with Orbiting Cyan Dot */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[540px] h-[540px] rounded-full border border-cyan-500/6 z-0"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#00F2FF]" />
        </motion.div>

        {/* Center Person Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative z-10 w-[280px] h-[340px] mix-blend-multiply"
        >
          <Image
            src="/gym_hero_person.png"
            alt="Fitness professional using CLLERO"
            fill
            className="object-contain object-bottom"
            priority
          />
        </motion.div>

        {/* Floating Stat Cards */}
        {statCards.map((card) => (
          <FloatingStatCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

/* ── Individual Floating Stat Card ─────────────────────────── */
interface StatCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  position: Record<string, string>;
  delay: number;
  hasBar?: boolean;
  barPercent?: number;
  hasChart?: boolean;
  hasDonut?: boolean;
  hasInsights?: boolean;
  hasCheck?: boolean;
  valueSuffix?: string;
}

function FloatingStatCard({ card }: { card: StatCard }) {
  // Unique float animation per card to avoid uniform motion
  const floatY = card.delay < 0.3 ? [0, -8, 0] : [0, 6, 0];
  const floatDuration = 4 + card.delay * 3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.6 + card.delay,
      }}
      className="absolute z-20"
      style={card.position}
    >
      <motion.div
        animate={{ y: floatY }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border border-white/60 p-3.5 sm:p-4 min-w-[140px] sm:min-w-[160px] cursor-default hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)] transition-shadow duration-300"
      >
        {/* Card Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center">
            {card.icon}
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wide">
            {card.title}
          </span>
        </div>

        {/* Card Body - varies by type */}
        {card.hasInsights ? (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400">Injury Risk</span>
              <span className="text-[11px] font-extrabold text-emerald-500">
                Low
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400">Recovery</span>
              <span className="text-[11px] font-extrabold text-teal-600">
                Optimal
              </span>
            </div>
          </div>
        ) : card.hasDonut ? (
          <div className="flex items-center gap-3">
            {/* Mini donut chart */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="4"
                  strokeDasharray="87.96"
                  initial={{ strokeDashoffset: 87.96 }}
                  animate={{ strokeDashoffset: 87.96 * 0.32 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-800 leading-none">
                {card.value}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                {card.subtitle}
              </div>
            </div>
          </div>
        ) : card.hasChart ? (
          <div className="space-y-2">
            {/* Mini sparkline */}
            <div className="flex items-end gap-[2px] h-6">
              {[3, 5, 4, 7, 6, 8, 7, 9, 8, 10].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 2.4}px` }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                  className="w-[3px] rounded-full bg-emerald-400/70"
                />
              ))}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-black text-emerald-500 leading-none">
                {card.value}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {card.subtitle}
              </span>
            </div>
          </div>
        ) : card.hasBar ? (
          <div className="space-y-2">
            <div className="text-lg sm:text-xl font-black text-slate-800 leading-none">
              {card.value}
            </div>
            <div className="text-[10px] text-slate-400 font-medium">
              {card.subtitle}
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${card.barPercent}%` }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
              />
            </div>
          </div>
        ) : card.hasCheck ? (
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-black text-slate-800 leading-none">
                {card.value}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-emerald-500">
                {card.subtitle}
              </span>
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-black text-slate-800 leading-none">
                {card.value}
              </span>
              {card.valueSuffix && (
                <span className="text-[10px] text-slate-400 font-bold">
                  {card.valueSuffix}
                </span>
              )}
            </div>
            <div className="text-[10px] text-slate-400 font-medium">
              {card.subtitle}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
