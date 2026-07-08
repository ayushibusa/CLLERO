"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  BarChart3, Users, ScanLine, CreditCard, Layers, Dumbbell, Calendar,
  UtensilsCrossed, TrendingUp, Bell, Receipt, MessageSquare, UserCheck,
  Building2, Star, X, ArrowLeft, CalendarCheck,
} from "lucide-react";
import { getPanelById, PanelModule } from "@/lib/panelsData";

/* ── icon map ── */
const ICONS: Record<string, React.ReactNode> = {
  BarChart3:    <BarChart3   className="w-6 h-6" />,
  Users:        <Users        className="w-6 h-6" />,
  ScanLine:     <ScanLine     className="w-6 h-6" />,
  CreditCard:   <CreditCard   className="w-6 h-6" />,
  Layers:       <Layers       className="w-6 h-6" />,
  Dumbbell:     <Dumbbell     className="w-6 h-6" />,
  Calendar:     <Calendar     className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  TrendingUp:   <TrendingUp   className="w-6 h-6" />,
  Bell:         <Bell         className="w-6 h-6" />,
  Receipt:      <Receipt      className="w-6 h-6" />,
  MessageSquare:<MessageSquare className="w-6 h-6" />,
  UserCheck:    <UserCheck    className="w-6 h-6" />,
  Building2:    <Building2    className="w-6 h-6" />,
  Star:         <Star         className="w-6 h-6" />,
  CalendarCheck:<CalendarCheck className="w-6 h-6" />,
};

/* ── panel accent helpers ── */
const ACCENT: Record<string, { border: string; text: string; bg: string; btnBg: string }> = {
  cyan:    { border: "border-cyan-200",    text: "text-cyan-600",    bg: "bg-cyan-500/10",    btnBg: "bg-cyan-500" },
  violet:  { border: "border-violet-200",  text: "text-violet-600",  bg: "bg-violet-500/10",  btnBg: "bg-violet-500" },
  emerald: { border: "border-emerald-200", text: "text-emerald-600", bg: "bg-emerald-500/10", btnBg: "bg-emerald-500" },
  amber:   { border: "border-amber-200",   text: "text-amber-600",   bg: "bg-amber-500/10",   btnBg: "bg-amber-500" },
};

export default function PanelPage() {
  const { panel: panelId } = useParams<{ panel: string }>();
  const panel = getPanelById(panelId);
  const [selectedModule, setSelectedModule] = useState<PanelModule | null>(null);

  if (!panel) return notFound();

  const accent = ACCENT.cyan;

  const labelParts = panel.label.split(" ");
  const firstPart = labelParts.slice(0, -1).join(" ");
  const lastPart = labelParts[labelParts.length - 1];

  return (
    <div className="min-h-screen bg-slate-50">

      <section className={`pt-12 pb-20 px-6 md:px-12 lg:px-16 bg-gradient-to-br ${panel.bgGradient} border-b border-slate-200 relative overflow-hidden`}>
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column (Text & Back Button) */}
          <div>
            <Link
              href="/#features"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-cyan-600 uppercase tracking-widest mb-10 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Feature Ecosystem
            </Link>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
                {firstPart ? (
                  <>
                    <span>{firstPart} </span>
                    <span className={accent.text}>{lastPart}</span>
                  </>
                ) : (
                  <span>{lastPart}</span>
                )}
              </h1>
              <p className="text-slate-500 text-lg font-medium max-w-xl">
                {panel.tagline}
              </p>
              <p className={`mt-6 inline-block py-1.5 px-4 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold ${accent.text} uppercase tracking-widest`}>
                {panel.modules.length} modules · Click any card to explore
              </p>
            </motion.div>
          </div>

          {/* Right Column (Dashboard Widget Illustration) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }} 
            animate={{ opacity: 1, scale: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white p-6 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
              
              {/* Inner Glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 ${accent.bg} rounded-full blur-[50px] opacity-70`} />
              
              {/* Widget Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center ${accent.text} shadow-inner`}>
                    {ICONS[panel.modules[0]?.icon ?? "BarChart3"]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{panel.label} System</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Live Sync</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                </div>
              </div>
              
              {/* Widget Content */}
              <div className="space-y-5 relative z-10">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">System Capacity</span>
                    <span className={accent.text}>92%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: "92%" }} 
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className={`h-full ${accent.btnBg} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full transform -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
                    <TrendingUp className={`w-4 h-4 ${accent.text} mb-2`} />
                    <div className="text-lg font-black text-slate-800 leading-none">High</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Efficiency</div>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
                    <Users className={`w-4 h-4 ${accent.text} mb-2`} />
                    <div className="text-lg font-black text-slate-800 leading-none">Sync</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Real-time</div>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
                    <ScanLine className={`w-4 h-4 ${accent.text} mb-2`} />
                    <div className="text-lg font-black text-slate-800 leading-none">Secure</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Connection</div>
                  </div>
                </div>
                
                {/* Status Bar */}
                <div className="mt-2 p-4 rounded-2xl bg-slate-900 flex items-center justify-between border border-slate-800 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700`}>
                      <Star className={`w-4 h-4 ${accent.text}`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">Unified Platform</div>
                      <div className="text-[10px] text-slate-400 font-medium">Zero-friction architecture</div>
                    </div>
                  </div>
                  <div className={accent.text}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Module Grid ── */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {panel.modules.map((mod) => (
              <motion.button
                key={mod.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setSelectedModule(mod)}
                className="text-left bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group flex flex-col gap-4 cursor-pointer"
              >
                <div className={`w-11 h-11 rounded-xl ${accent.bg} ${accent.border} border flex items-center justify-center ${accent.text} group-hover:scale-110 transition-transform shrink-0`}>
                  {ICONS[mod.icon] ?? <BarChart3 className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className={`font-bold text-base text-slate-900 mb-1.5 group-hover:${accent.text} transition-colors`}>
                    {mod.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {mod.shortDesc}
                  </p>
                </div>
                <span className={`text-[10px] font-bold ${accent.text} uppercase tracking-wider mt-auto`}>
                  View Details →
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Module Detail Popup ── */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${accent.bg} ${accent.border} border flex items-center justify-center ${accent.text} mb-6`}>
                {ICONS[selectedModule.icon] ?? <BarChart3 className="w-6 h-6" />}
              </div>

              {/* Panel tag */}
              <span className={`text-[10px] font-bold ${accent.text} uppercase tracking-widest mb-3 block`}>
                {panel.label}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {selectedModule.name}
              </h2>

              {/* Divider */}
              <div className={`h-0.5 w-12 ${accent.bg} rounded-full mb-5`} />

              {/* Full description */}
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {selectedModule.fullDesc}
              </p>

              {/* Close button */}
              <button
                onClick={() => setSelectedModule(null)}
                className={`mt-8 w-full py-3 rounded-xl text-white text-sm font-bold uppercase tracking-widest ${accent.btnBg} hover:opacity-90 transition-opacity`}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
