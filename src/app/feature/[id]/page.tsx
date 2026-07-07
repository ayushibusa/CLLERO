"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Check,
  XCircle,
  HelpCircle,
  Cpu,
  Layers,
  Zap,
  Activity,
  Shield,
  FileText
} from "lucide-react";
import { categories, features } from "@/lib/featuresData";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import dynamic from "next/dynamic";

// Dynamically load R3F-based widgets to prevent SSR WebGL errors
const BioTwinVisualizer = dynamic(
  () => import("@/components/ui/widgets/BioTwinVisualizer").then((mod) => mod.BioTwinVisualizer),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-3xl animate-pulse text-cyan-500 font-mono font-bold text-xs uppercase tracking-widest">
        Loading 3D Bio-Twin Visualizer...
      </div>
    ),
  }
);

const RetentionVelocityChart = dynamic(
  () => import("@/components/ui/widgets/RetentionVelocityChart").then((mod) => mod.RetentionVelocityChart),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-3xl animate-pulse text-cyan-500 font-mono font-bold text-xs uppercase tracking-widest">
        Loading 3D Retention Velocity...
      </div>
    ),
  }
);

const RevenueExpenseChart = dynamic(
  () => import("@/components/ui/widgets/RevenueExpenseChart").then((mod) => mod.RevenueExpenseChart),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-3xl animate-pulse text-cyan-500 font-mono font-bold text-xs uppercase tracking-widest">
        Loading 3D Financial Chart...
      </div>
    ),
  }
);


function SilentQuitSimulator() {
  const [attendance, setAttendance] = useState(60); // % attendance drop
  const [duration, setDuration] = useState(45); // average workout duration in mins
  const [messages, setMessages] = useState(2); // trainer message response latency in days
  const [calculating, setCalculating] = useState(false);
  const [riskScore, setRiskScore] = useState(48);
  const [logs, setLogs] = useState<string[]>([
    "Initialized CLLERO-Retention Core engine...",
    "Scanning member activity matrices..."
  ]);

  // Recalculate risk score dynamically based on sliders
  useEffect(() => {
    setCalculating(true);
    const timer = setTimeout(() => {
      const baseRisk = (attendance * 0.7) + ((90 - duration) * 0.4) + (messages * 8);
      const finalRisk = Math.min(Math.max(Math.round(baseRisk), 5), 98);
      setRiskScore(finalRisk);
      setCalculating(false);

      const newLog = `Telemetry: Attendance Drop ${attendance}%, Avg Duration ${duration}m, Trainer Delay ${messages}d. Churn probability: ${finalRisk}%`;
      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    }, 400);

    return () => clearTimeout(timer);
  }, [attendance, duration, messages]);

  const getRiskStatus = (score: number) => {
    if (score < 30) return { label: "SAFE", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", nudge: "No immediate intervention required. Maintain standard automated engagement weekly." };
    if (score < 65) return { label: "ELEVATED RISK", color: "text-amber-500 bg-amber-500/10 border-amber-500/20", nudge: "Action: Auto-send low-pressure re-engagement message ('Hey, noticed you changed up your workout times - need to swap classes?') and trigger trainer check-in nudge." };
    return { label: "CRITICAL DANGER", color: "text-rose-500 bg-rose-500/10 border-rose-500/20 animate-pulse", nudge: "URGENT Action Required: Flagged to trainer mobile dashboard. Prompt immediate face-to-face check-in next session. Pre-schedule custom motivation email." };
  };

  const status = getRiskStatus(riskScore);

  return (
    <div className="p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl relative overflow-hidden shadow-sm">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-slate-100 dark:border-slate-850 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
            <Cpu size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-black text-slate-900 dark:text-slate-100">
              Retention Sandbox
            </h2>
            <p className="text-slate-400 text-xs font-mono">CLLERO-Retention-Engine Simulator</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest bg-cyan-50 dark:bg-slate-950 border-cyan-200 dark:border-cyan-800/30 text-cyan-500 select-none">
          <Activity size={12} className="animate-pulse" /> Live Prediction Sandbox
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Controls Column */}
        <div className="space-y-8">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">
            Behavioral Metrics Simulator
          </h3>
          
          {/* Slider 1: Attendance Drop */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700 dark:text-slate-300">Attendance Drop (Last 14 Days)</span>
              <span className="font-mono font-black text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded text-xs">
                {attendance}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={attendance}
              onChange={(e) => setAttendance(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>Consistent</span>
              <span>Total Drop</span>
            </div>
          </div>

          {/* Slider 2: Average Workout Duration */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700 dark:text-slate-300">Avg Workout Duration</span>
              <span className="font-mono font-black text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded text-xs">
                {duration} mins
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="120"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>Short Session</span>
              <span>Full Routine</span>
            </div>
          </div>

          {/* Slider 3: Trainer Response Latency */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700 dark:text-slate-300">Trainer Response Delay</span>
              <span className="font-mono font-black text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded text-xs">
                {messages} {messages === 1 ? "day" : "days"}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="7"
              value={messages}
              onChange={(e) => setMessages(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>Instant response</span>
              <span>7 days delay</span>
            </div>
          </div>
        </div>

        {/* Output Column */}
        <div className="space-y-8 flex flex-col justify-between">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex flex-col items-center justify-center text-center py-10 relative">
            <div className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 mb-2">
              Predicted Churn Probability
            </div>

            {/* Glowing Big Score Display */}
            <div className="relative my-4">
              <div className={`text-6xl md:text-7xl font-mono font-black tracking-tighter ${
                riskScore < 30 ? "text-emerald-500" : riskScore < 65 ? "text-amber-500" : "text-rose-500"
              }`}>
                {calculating ? (
                  <span className="animate-pulse">--%</span>
                ) : (
                  <span>{riskScore}%</span>
                )}
              </div>
              <div className={`absolute -inset-4 rounded-full blur-xl opacity-20 -z-10 ${
                riskScore < 30 ? "bg-emerald-500" : riskScore < 65 ? "bg-amber-500" : "bg-rose-500"
              }`} />
            </div>

            {/* Status pill */}
            <div className={`px-4 py-1.5 rounded-full border text-xs font-black tracking-widest uppercase mb-4 ${status.color}`}>
              {status.label}
            </div>

            {/* Description of nudge */}
            <p className="text-xs text-slate-500 max-w-sm font-medium leading-relaxed">
              {status.nudge}
            </p>
          </div>

          {/* Terminal Logs */}
          <div className="bg-slate-100 dark:bg-slate-950 rounded-xl p-4 font-mono text-[10px] text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-850 space-y-1 select-none">
            <div className="flex items-center justify-between text-slate-500 border-b border-slate-200 dark:border-slate-850 pb-2 mb-2">
              <span>ENGINE LOGS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            {logs.map((log, idx) => (
              <div key={idx} className="truncate text-left">
                <span className="text-cyan-650 dark:text-cyan-400 font-bold">&gt;</span> {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PageProps {
  params: { id: string };
}

export default function FeatureDetailPage({ params }: PageProps) {
  const router = useRouter();
  const id = params.id;

  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "specs">("overview");

  // Client-side compatibility redirects
  useEffect(() => {
    if (id === "cctv-injury-alert") {
      router.replace("/feature/cctv");
    } else if (id === "meal-scanner") {
      router.replace("/feature/meal-scanner");
    } else if (id === "trainer-management") {
      router.replace("/feature/trainer");
    }
  }, [id, router]);

  const feat = features[id];

  if (!feat) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50 dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="neo-card p-12 bg-white dark:bg-slate-900 max-w-md"
        >
          <XCircle size={64} className="text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl font-black mb-4 text-slate-900 dark:text-slate-100">
            Feature Not Found
          </h1>
          <p className="text-slate-500 mb-8">
            The intelligence module you're looking for doesn't exist or has been relocated.
          </p>
          <Link href="/features" className="btn-cyan w-full inline-block text-center py-4 rounded-xl text-sm font-bold uppercase tracking-wider">
            Explore Ecosystem
          </Link>
        </motion.div>
      </div>
    );
  }

  // Prev/Next calculation loops
  const allFeatureKeys = Object.keys(features);
  const currentIdx = allFeatureKeys.indexOf(id);
  const prevKey = allFeatureKeys[(currentIdx - 1 + allFeatureKeys.length) % allFeatureKeys.length];
  const nextKey = allFeatureKeys[(currentIdx + 1) % allFeatureKeys.length];

  const prevFeat = features[prevKey];
  const nextFeat = features[nextKey];

  return (
    <div className="bg-slate-50 dark:bg-slate-955 min-h-screen pb-24">
      {/* Dynamic Header Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-955 text-slate-900 dark:text-slate-100 pt-28 pb-16 px-6 border-b border-slate-200 dark:border-slate-900">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider mb-6 hover:text-cyan-505 transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Features
            </Link>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 shrink-0 shadow-lg shadow-cyan-500/5">
              <DynamicIcon name={feat.icon} size={32} />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-slate-100">
                {feat.title}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed">
                {feat.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Tab controls */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl flex gap-2 overflow-x-auto no-scrollbar shadow-sm">
            {(["overview", "architecture", "specs"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] py-2.5 px-4 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "text-slate-500 dark:text-slate-400 hover:text-cyan-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Panels */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${id}-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {activeTab === "overview" && (
                <>
                  {/* Intelligence Brief Card */}
                  <div className="p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full pointer-events-none" />
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                        <DynamicIcon name="Zap" size={20} />
                      </div>
                      <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display">
                        Intelligence Brief
                      </h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed font-medium">
                      {feat.details}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      {feat.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850"
                        >
                          <Check size={16} className="text-cyan-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {id === "silent-quit" && (
                    <SilentQuitSimulator />
                  )}

                  {/* Specific Dynamic WebGL Visualizers */}
                  {id === "analytics" && (
                    <div className="space-y-8">
                      <RetentionVelocityChart />
                      <RevenueExpenseChart />
                    </div>
                  )}

                  {id === "bio-twin" && (
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                      <BioTwinVisualizer />
                    </div>
                  )}

                  {/* Tech stats grids */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {feat.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center group hover:border-cyan-500/30 transition-all shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 text-cyan-500 group-hover:scale-110 transition-transform">
                          <DynamicIcon name={stat.icon} size={20} />
                        </div>
                        <div className="text-[9px] uppercase text-slate-400 dark:text-slate-500 font-mono font-bold tracking-widest mb-1 select-none">
                          {stat.label}
                        </div>
                        <div className="text-lg font-mono font-black text-slate-900 dark:text-slate-100">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Superiority Gap Comparison */}
                  <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[60px] rounded-full pointer-events-none" />
                    <h2 className="text-xl font-bold font-display tracking-tight mb-8 flex items-center gap-3 text-cyan-600 dark:text-cyan-400">
                      <DynamicIcon name="Shield" size={20} /> The Superiority Gap
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Traditional */}
                      <div className="space-y-4 opacity-75">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-2">
                          Traditional Systems
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-xs leading-relaxed italic text-slate-650 dark:text-slate-300 animate-fade">
                            <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                            Reactive models that only identify issues after they impact revenue.
                          </li>
                          <li className="flex items-start gap-3 text-xs leading-relaxed italic text-slate-655 dark:text-slate-300 animate-fade">
                            <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                            Manual data entry prone to human error and integrity gaps.
                          </li>
                        </ul>
                      </div>

                      {/* CLLERO */}
                      <div className="space-y-4">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 border-b border-slate-200 dark:border-slate-800 pb-2">
                          Cllero Ecosystem
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-xs leading-relaxed font-bold text-slate-700 dark:text-slate-200">
                            <Check size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                            Predictive intelligence that flags risks 14 days in advance.
                          </li>
                          <li className="flex items-start gap-3 text-xs leading-relaxed font-bold text-slate-700 dark:text-slate-200">
                            <Check size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                            Automated real-time tracking for 100% data integrity.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "architecture" && (
                <div className="p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                      <DynamicIcon name="Layers" size={20} />
                    </div>
                    <h2 className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-slate-100">
                      System Architecture
                    </h2>
                  </div>
                  <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 dark:before:bg-slate-800">
                    {feat.architecture.map((item, idx) => (
                      <div key={idx} className="flex gap-6 relative">
                        <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-cyan-500 bg-white dark:bg-slate-950 shrink-0 z-10 shadow-sm">
                          <span className="font-mono font-black text-xs">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="pt-2">
                          <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-sm md:text-base">
                            {item.title}
                          </h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                      <DynamicIcon name="Cpu" size={20} />
                    </div>
                    <h2 className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-slate-100">
                      Technical Specifications
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {feat.technicalSpecs.map((spec, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
                        <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 select-none">
                          {spec.label}
                        </div>
                        <div className="text-sm font-mono font-bold text-slate-800 dark:text-slate-250">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Call to Action */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-cyan-500/10">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-black tracking-tight font-display mb-1">Ready to upgrade?</h3>
              <p className="text-slate-900/80 text-xs font-semibold">
                Experience the power of {feat.title} in your gym today.
              </p>
            </div>
            <Link href="/#contact" className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-cyan-600 hover:text-cyan-700 font-bold uppercase text-[10px] tracking-wider transition-all shadow-md">
              Request Demo
            </Link>
          </div>

          {/* Prev/Next buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/feature/${prevKey}`}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex-1 flex items-center gap-4 hover:border-cyan-500/30 transition-all group shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-center justify-center text-cyan-500 group-hover:-translate-x-1 transition-transform">
                <ChevronLeft size={16} />
              </div>
              <div>
                <div className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 select-none">
                  Previous
                </div>
                <div className="font-bold text-slate-900 dark:text-slate-100 text-xs md:text-sm">
                  {prevFeat?.title || prevKey}
                </div>
              </div>
            </Link>

            <Link
              href={`/feature/${nextKey}`}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex-1 flex items-center justify-between gap-4 hover:border-cyan-500/30 transition-all group shadow-sm"
            >
              <div className="text-left sm:text-right pl-4 sm:pl-0">
                <div className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 select-none">
                  Next
                </div>
                <div className="font-bold text-slate-900 dark:text-slate-100 text-xs md:text-sm">
                  {nextFeat?.title || nextKey}
                </div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-center justify-center text-cyan-500 group-hover:translate-x-1 transition-transform">
                <ChevronRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
