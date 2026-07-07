"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Users,
  Eye,
  AlertTriangle,
  TrendingUp,
  Shield,
  Mail,
  Star,
  Activity,
  UserCheck,
  Check,
  X,
  HelpCircle,
  Dumbbell,
  ShieldCheck,
  Loader2,
  CheckCircle,
  AlertCircle,
  Calendar,
  MessageSquare,
  UtensilsCrossed,
  ScanLine,
  BarChart3
} from "lucide-react";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import emailjs from "@emailjs/browser";

// ─── EmailJS Configuration ────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

// 2D Hero Animation components will be rendered inline



interface ModalState {
  isOpen: boolean;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function Home() {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    title: "",
    description: "",
    icon: <Activity />,
    color: "#00F2FF",
  });

  const openModal = (title: string, description: string, icon: React.ReactNode, color: string) => {
    setModal({ isOpen: true, title, description, icon, color });
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({ type: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.closest("form");
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
          reply_to:   formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setStatus({ type: "error", message: "Failed to send your message. Please try again or email us directly at Admin@cllero.com" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-20 pb-32 px-6 md:px-12 lg:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black leading-[0.9] mb-8 text-slate-900 tracking-tighter font-display uppercase">
              The Future of <br />
              <span className="text-cyan-500">Fitness</span> <br />
              Intelligence.
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
              CLLERO FIT AI is a stock-terminal style SaaS engineered to bridge the accuracy gap. We are building the most advanced gym management ecosystem ever conceived.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-cyan flex items-center gap-2 text-sm font-bold font-display uppercase tracking-wider">
                Request Demo <ArrowRight size={18} />
              </Link>
              <button
                onClick={() =>
                  openModal(
                    "Neural Core V2",
                    "Our proprietary neural engine processing 33-point skeletal data at sub-millisecond latency. Engineered for zero-error form analysis.",
                    <Activity />,
                    "#00F2FF"
                  )
                }
                className="px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-100 transition-all font-bold text-slate-600 flex items-center gap-2"
              >
                Explore Neural Tech <Zap size={18} className="text-cyan-500" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Flat Concentric Orbit Animation (2D) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Premium Soft Glow */}
              <div className="absolute w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full" />

              {/* Inner Circle Track (200px) */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-cyan-500/10" />

              {/* Middle Circle Track (350px) with Orbiting Orange Dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] rounded-full border border-cyan-500/10 flex items-center justify-center"
              >
                <div className="absolute top-0 w-3.5 h-3.5 bg-orange-500 rounded-full shadow-[0_0_15px_#F97316]" />
              </motion.div>

              {/* Outer Circle Track (500px) with Orbiting Cyan Dot */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 flex items-center justify-center"
              >
                <div className="absolute bottom-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00F2FF]" />
              </motion.div>

              {/* Orbiting blurred ambient cyan background blobs */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="absolute w-[580px] h-[580px] flex items-center justify-center pointer-events-none"
              >
                <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/12 blur-[65px] rounded-full" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
                className="absolute w-[580px] h-[580px] flex items-center justify-center pointer-events-none"
              >
                <div className="absolute bottom-10 right-10 w-36 h-36 bg-blue-500/8 blur-[75px] rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Info Modal */}
      <AnimatePresence>
        {modal.isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,242,255,0.2)] flex flex-col md:flex-row h-auto md:h-[600px] border border-white/20"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-[110] w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all"
              >
                <X size={20} />
              </button>

              {/* Modal Visualizer Backdrop */}
              <div
                className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden flex items-center justify-center perspective-1000"
                style={{ backgroundColor: `${modal.color}08` }}
              >
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                      rotateX: [0, 360],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative w-48 h-48 preserve-3d"
                  >
                    {[...Array(3)].map((_, c) => (
                      <div
                        key={`modal-ring-${c}`}
                        className="absolute inset-0 border-2 rounded-full"
                        style={{
                          borderColor: modal.color,
                          opacity: 0.3 - c * 0.1,
                          transform: `rotateX(${c * 60}deg) rotateY(${c * 30}deg)`,
                        }}
                      />
                    ))}
                    <div
                      className="absolute inset-4 rounded-full blur-xl opacity-30"
                      style={{ backgroundColor: modal.color }}
                    />
                    <div
                      className="absolute inset-8 rounded-full border border-white/50 shadow-inner flex items-center justify-center bg-white/10"
                      style={{ boxShadow: `0 0 30px ${modal.color}30` }}
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-white"
                        style={{ color: modal.color }}
                      >
                        {React.cloneElement(modal.icon as React.ReactElement, { size: 48 })}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6 w-fit select-none">
                  Neural Module Active
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                  {modal.title}
                </h2>
                <p className="text-base text-slate-500 mb-8 leading-relaxed font-medium">
                  {modal.description}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyan-500">
                      <Zap size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest font-mono">Latency</span>
                    </div>
                    <div className="text-xl font-black text-slate-900">0.4ms</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-orange-500">
                      <Shield size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest font-mono">Security</span>
                    </div>
                    <div className="text-xl font-black text-slate-900">SOC2-Ready</div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                >
                  Close Module
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Features Preview Section */}
      <section id="features" className="py-24 px-6 md:px-12 lg:px-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 text-slate-900 tracking-tight">
              Feature <span className="text-cyan-500">Ecosystem</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              Four dedicated panels — each role gets exactly the tools they need, unified in one intelligent platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gym Admin */}
            <FeatureCard
              id="gym-admin"
              icon={<BarChart3 />}
              title="Gym Admin"
              description="Full business command centre — live revenue dashboard, automated billing, staff shift management, multi-location control, lead tracking, and retention flags all in one view."
            />
            {/* Trainer */}
            <FeatureCard
              id="trainer"
              icon={<Dumbbell />}
              title="Trainer"
              description="Build personalised workout plans, schedule PT sessions, track client performance week-over-week, and chat directly with members — no third-party apps needed."
            />
            {/* Dietitian */}
            <FeatureCard
              id="dietitian"
              icon={<UtensilsCrossed />}
              title="Dietitian"
              description="Create macro-specific meal plans, assign them to individual members or cohorts, monitor nutrition adherence, and consult via in-app messaging."
            />
            {/* Member */}
            <FeatureCard
              id="member"
              icon={<UserCheck />}
              title="Member"
              description="QR check-in, class booking, diet plan viewer, progress tracker, renewal reminders, and direct chat with their trainer — everything a member needs in one app."
            />
          </div>
        </div>
      </section>

      {/* 3. Superiority of Precision Section */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-slate-900">
                The <span className="text-cyan-500">Superiority</span> of Precision.
              </h2>
              <p className="text-slate-500 text-lg mb-12 leading-relaxed font-medium">
                Traditional gym management is reactive. CLLERO FIT AI is predictive. We don't just manage your gym; we engineer its growth through 21 specialized AI modules that work in perfect harmony.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 shrink-0">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">21 Specialized Modules</h4>
                    <p className="text-slate-500 text-sm font-medium">
                      From skeletal tracking to financial leakage detection, every aspect of your business is covered by dedicated AI intelligence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 shrink-0">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">Guaranteed Retention</h4>
                    <p className="text-slate-500 text-sm font-medium">
                      Our behavioral AI identifies churn risks 14 days in advance, allowing you to rescue members before they even think of quitting.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Neural Stats Dashboard Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="neo-card p-8 bg-white border-slate-200 relative z-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] font-mono">
                      AI Accuracy
                    </span>
                    <span className="text-cyan-600 font-mono font-bold">99.2%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] font-mono">
                      Processing Speed
                    </span>
                    <span className="text-cyan-600 font-mono font-bold">&lt; 50ms</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] font-mono">
                      Data Points / Sec
                    </span>
                    <span className="text-cyan-600 font-mono font-bold">12,400</span>
                  </div>
                  <div className="pt-4">
                    <div className="text-[10px] text-slate-400 uppercase mb-2 font-bold font-mono">
                      Neural Network Load
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        animate={{
                          width: ["20%", "80%", "40%", "90%", "30%"],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-full bg-cyan-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3.5. Dashboard Panels Section */}
      <section id="panels" className="py-24 px-6 md:px-12 lg:px-16 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Unified <span className="text-cyan-500">Dashboard</span> Ecosystem
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              Tailored interfaces built for every role in your gym ecosystem, ensuring seamless cooperation and zero admin friction.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Member Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="neo-card p-8 bg-white border-slate-200 flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div>
                <span className="text-xs font-mono font-black text-cyan-600 uppercase tracking-[0.2em] block mb-3">
                  Member Panel
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4 font-display">
                  "Everything a member needs, in their pocket."
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Class schedule viewer",
                    "QR check-in",
                    "Diet/workout plan viewer",
                    "Payment history & renewal alerts",
                    "Online trial booking",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-cyan-500 font-black text-[11px] uppercase tracking-[0.2em] hover:text-cyan-600 transition-colors"
              >
                See Member App →
              </Link>
            </motion.div>

            {/* Trainer Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="neo-card p-8 bg-white border-slate-200 flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div>
                <span className="text-xs font-mono font-black text-cyan-600 uppercase tracking-[0.2em] block mb-3">
                  Trainer Panel
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4 font-display">
                  "Coaching, without the admin work."
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Attendance marking",
                    "Diet/workout assignment",
                    "Member progress tracking",
                    "In-app chat",
                    "Salary & fee tracking",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-cyan-500 font-black text-[11px] uppercase tracking-[0.2em] hover:text-cyan-600 transition-colors"
              >
                See Trainer App →
              </Link>
            </motion.div>

            {/* Dietitian Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="neo-card p-8 bg-white border-slate-200 flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div>
                <span className="text-xs font-mono font-black text-cyan-600 uppercase tracking-[0.2em] block mb-3">
                  Dietitian Panel
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4 font-display">
                  "Diet plans that build themselves."
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Calorie/macro calculator",
                    "Drag-build diet plans",
                    "Template library (weight loss, keto, diabetic, muscle gain)",
                    "Progress charts",
                    "Adherence reports",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-cyan-500 font-black text-[11px] uppercase tracking-[0.2em] hover:text-cyan-600 transition-colors"
              >
                See Dietitian App →
              </Link>
            </motion.div>

            {/* Gym Owner Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="neo-card p-8 bg-white border-slate-200 flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div>
                <span className="text-xs font-mono font-black text-cyan-600 uppercase tracking-[0.2em] block mb-3">
                  Gym Owner Panel
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4 font-display">
                  "Complete control over your gym's growth and operations."
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "MRR & revenue dashboards",
                    "Automated billing retry",
                    "Staff shift scheduling",
                    "Lead & enquiry tracking",
                    "AI retention flagging",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-cyan-500 font-black text-[11px] uppercase tracking-[0.2em] hover:text-cyan-600 transition-colors"
              >
                See Owner Panel →
              </Link>
            </motion.div>

            {/* Cllero Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="neo-card p-8 bg-white border-slate-200 flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div>
                <span className="text-xs font-mono font-black text-cyan-600 uppercase tracking-[0.2em] block mb-3">
                  Cllero Hub
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4 font-display">
                  "The central operating system for multi-location brands."
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Global template manager (workout/diet)",
                    "Cross-location unified analytics",
                    "White-label branding kit",
                    "Multi-tenant Super Admin access",
                    "Single login across all devices",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-cyan-500 font-black text-[11px] uppercase tracking-[0.2em] hover:text-cyan-600 transition-colors"
              >
                See Cllero Hub →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 6. Subscription Matrix Pricing */}
      <section id="pricing" className="py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl lg:text-7xl font-black mb-6 text-slate-900 tracking-tight">
            Elite <span className="text-cyan-500">Modular</span> Pricing
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
            No fixed packages or high overheads. Choose only the modules your gym requires and scale on your own terms.
          </p>
          <div className="flex justify-center">
            <Link
              href="#contact"
              className="btn-cyan py-5 px-12 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 bg-cyan-500 text-slate-900 hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] hover:scale-[1.02] block"
            >
              Book Your Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 7. About Section */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-16 bg-slate-50 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Opening Statement */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col justify-center shadow-sm">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase font-display text-slate-900 dark:text-slate-100">
                  EVERY REP COUNTED.<br />
                  EVERY SECOND RECOVERED.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                    EVERY OUNCE OF FRICTION ENGINEERED OUT.
                  </span>
                </h2>
                <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm font-bold tracking-wider pt-6 uppercase border-t border-slate-100 dark:border-slate-850">
                  CLLERO exists for operators who refuse to accept friction as the cost of scale.
                </p>
              </div>
            </div>

            {/* Right Column: Why We Exist */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
                  Most gyms run on borrowed tools.
                </h3>
                <div className="space-y-3 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-850">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-650 dark:text-slate-450">
                    <span className="text-rose-500 text-base">•</span> Spreadsheets for members
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-655 dark:text-slate-450">
                    <span className="text-rose-500 text-base">•</span> WhatsApp groups for trainers
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-660 dark:text-slate-450">
                    <span className="text-rose-500 text-base">•</span> Generic booking apps
                  </div>
                </div>
                <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                  That gap is friction. And friction is expensive: missed renewals, disconnected trainers, and plans stuck in notes apps.
                </p>
                <p className="text-slate-850 dark:text-slate-200 text-xs md:text-sm leading-relaxed font-bold border-l-2 border-cyan-500 pl-4">
                  CLLERO closed that gap — one platform, five panels, zero friction.
                </p>
              </div>
              
              <div className="pt-4 flex justify-start">
                <Link
                  href="/about"
                  target="_blank"
                  className="btn-cyan py-3 px-8 rounded-xl font-bold uppercase text-[10px] tracking-wider transition-all duration-300 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 FAQ Section */}
      <section id="faq" className="py-24 px-6 md:px-12 lg:px-16 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Got <span className="text-cyan-500">Questions</span>? We've Got Answers
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Everything you need to know about Cllero modules, billing, setup times, and hardware compatibility.
            </p>
          </div>
          <HomeFAQ />
        </div>
      </section>


      {/* 8. Contact Form Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            Ready to <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">Power Up</span>?
          </h2>
          <p className="text-slate-500 mb-4 text-lg font-medium">
            Tell us about your gym and we will craft a personalized AI solution for your business.
          </p>
        </div>

        <div className="max-w-2xl mx-auto neo-card p-8 lg:p-12 bg-white">
          {status.type === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-500 mx-auto mb-2">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Inquiry Sent Successfully</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Thank you for reaching out. We have received your details and will get back to you shortly at the email address provided.
              </p>
              <button
                type="button"
                onClick={() => setStatus({ type: "idle" })}
                className="mt-6 px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-650 hover:bg-slate-50 transition-colors uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.type === "error" && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-center gap-3 text-rose-600 text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="John Doe"
                  disabled={status.type === "loading"}
                  className="w-full neo-inset bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all font-medium text-slate-800 disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="you@yourgym.com"
                  disabled={status.type === "loading"}
                  className="w-full neo-inset bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all font-medium text-slate-800 disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Tell Us About Your Gym
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Number of members, current challenges, what you are looking for..."
                  rows={4}
                  disabled={status.type === "loading"}
                  className="w-full neo-inset bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none font-medium text-slate-800 disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full btn-cyan py-4 flex items-center justify-center gap-2 font-bold font-display uppercase tracking-wider shadow-lg disabled:opacity-50"
              >
                {status.type === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Zap size={18} /> Submit Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

// ── Feature Card Component ──
interface FeatureCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ id, icon, title, description }: FeatureCardProps) {
  // Original routing overrides
  const path =
    id === "cctv"
      ? "/feature/cctv"
      : id === "meal-scanner"
      ? "/feature/meal-scanner"
      : id === "trainer"
      ? "/feature/trainer"
      : `/feature/${id}`;

  return (
    <Link href={path}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }}
        viewport={{ once: true }}
        className="overflow-hidden group hover:border-cyan-500/30 transition-all h-full flex flex-col neo-card p-8 bg-white border-slate-200 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all bg-cyan-500/10 text-cyan-500">
          {icon}
        </div>
        <h3 className="text-xl font-black mb-3 group-hover:text-cyan-500 transition-colors text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed text-sm flex-1 font-medium">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}




