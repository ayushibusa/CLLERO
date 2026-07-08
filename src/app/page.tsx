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
import { HeroOrbitAnimation } from "@/components/home/HeroOrbitAnimation";




const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus({ type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("Contact error:", err);
      setStatus({ type: "error", message: "Failed to send your message. Please try again or email us directly at admin@cllero.com" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-6 pb-12 lg:pt-0 lg:pb-32 px-6 md:px-12 lg:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black leading-[0.9] mb-8 text-slate-900 tracking-tighter font-display uppercase">
              The Future of <br />
              <span className="text-cyan-500">Fitness</span> <br />
              Intelligence.
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
              CLLERO is a stock-terminal style SaaS engineered to bridge the accuracy gap. We are building the most advanced gym management ecosystem ever conceived.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-cyan flex items-center gap-2 text-sm font-bold font-display uppercase tracking-wider">
                Request Demo <ArrowRight size={18} />
              </Link>

            </div>
          </motion.div>

          {/* Right Column: Hero Orbit Animation with Person & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[600px] flex items-center justify-center"
          >
            <HeroOrbitAnimation />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">
              Feature <span className="text-cyan-500">Ecosystem</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              Four dedicated panels — each role gets exactly the tools they need, unified in one intelligent platform.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Gym Admin */}
            <FeatureCard
              id="gym-admin"
              icon={<BarChart3 />}
              title="Gym Admin"
              description="Full business command centre — live revenue dashboard, automated billing, staff shift management, multi-location control, lead tracking, and retention flags all in one view."
              bgImage="/gym_admin_bg.png"
            />
            {/* Trainer */}
            <FeatureCard
              id="trainer"
              icon={<Dumbbell />}
              title="Trainer"
              description="Build personalised workout plans, schedule PT sessions, track client performance week-over-week, and chat directly with members — no third-party apps needed."
              bgImage="/trainer_bg.png"
            />
            {/* Dietitian */}
            <FeatureCard
              id="dietitian"
              icon={<UtensilsCrossed />}
              title="Dietitian"
              description="Create macro-specific meal plans, assign them to individual members or cohorts, monitor nutrition adherence, and consult via in-app messaging."
              bgImage="/dietitian_bg.png"
            />
            {/* Member */}
            <FeatureCard
              id="member"
              icon={<UserCheck />}
              title="Member"
              description="Class booking, diet plan viewer, progress tracker, renewal reminders, and direct chat with their trainer — everything a member needs in one app."
              bgImage="/member_bg.png"
            />
          </motion.div>
        </div>
      </section>




      {/* 7. About Section */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-16 bg-slate-50 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-slate-100 tracking-tight">
              About <span className="text-cyan-500">Cllero</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              Our mission is simple: eliminate friction, unify operations, and empower gym businesses to scale with intelligence.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Opening Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01, boxShadow: "0 20px 40px rgba(6,182,212,0.04)", borderColor: "rgba(6,182,212,0.2)" }}
              transition={{ 
                x: { type: "spring", stiffness: 70, damping: 15 },
                y: { type: "spring", stiffness: 300, damping: 20 },
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="lg:col-span-7 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col justify-center shadow-sm cursor-default"
            >
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
            </motion.div>
 
            {/* Right Column: Why We Exist */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01, boxShadow: "0 20px 40px rgba(6,182,212,0.04)", borderColor: "rgba(6,182,212,0.2)" }}
              transition={{ 
                x: { type: "spring", stiffness: 70, damping: 15 },
                y: { type: "spring", stiffness: 300, damping: 20 },
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="lg:col-span-5 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 cursor-default"
            >
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
                  Most gyms run on borrowed tools.
                </h3>
                <motion.div 
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3 bg-slate-50 dark:bg-slate-955 p-6 rounded-2xl border border-slate-150 dark:border-slate-850"
                >
                  <motion.div variants={listItemVariants} className="flex items-center gap-2.5 text-xs font-bold text-slate-650 dark:text-slate-450">
                    <span className="text-rose-500 text-base">•</span> Spreadsheets for members
                  </motion.div>
                  <motion.div variants={listItemVariants} className="flex items-center gap-2.5 text-xs font-bold text-slate-655 dark:text-slate-450">
                    <span className="text-rose-500 text-base">•</span> WhatsApp groups for trainers
                  </motion.div>
                  <motion.div variants={listItemVariants} className="flex items-center gap-2.5 text-xs font-bold text-slate-660 dark:text-slate-450">
                    <span className="text-rose-500 text-base">•</span> Generic booking apps
                  </motion.div>
                </motion.div>
                <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                  That gap is friction. And friction is expensive: missed renewals, disconnected trainers, and plans stuck in notes apps.
                </p>
                <p className="text-slate-850 dark:text-slate-200 text-xs md:text-sm leading-relaxed font-bold border-l-2 border-cyan-500 pl-4">
                  CLLERO closed that gap — one platform, five panels, zero friction.
                </p>
              </div>
            </motion.div>
 
            {/* Row 2: Built for Scale / Our Standard (Card 3) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.005, boxShadow: "0 20px 40px rgba(6,182,212,0.03)", borderColor: "rgba(6,182,212,0.15)" }}
              transition={{ 
                y: { type: "spring", stiffness: 300, damping: 20 },
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="lg:col-span-12 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 cursor-default"
            >
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative z-10 space-y-4 max-w-3xl text-left">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
                  Engineered to scale from single gyms to multi-brand platforms.
                </h3>
                <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                  Whether you operate a boutique strength box or a nation-wide fitness chain, CLLERO's modular architecture handles the load. Get full customization, a dedicated database instance, and true white-label branding from day one.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <Link
                  href="/about"
                  className="btn-cyan py-3 px-8 rounded-xl font-bold uppercase text-[10px] tracking-wider transition-all duration-300 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 whitespace-nowrap block"
                >
                  View More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Subscription Matrix Pricing */}
      <section id="pricing" className="py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            Billing as per <span className="text-cyan-500">Demand</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
            Pay only for what you use. No lock-in contracts, no hidden fees — transparent billing that scales with your gym.
          </p>
          <div className="flex justify-center">
            <Link
              href="#contact"
              className="btn-cyan py-5 px-12 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 bg-cyan-500 text-slate-900 hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] hover:scale-[1.02] block"
            >
              Book Your Demo
            </Link>
          </div>
        </motion.div>
      </section>
 
      {/* 8. Contact Form Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-16 bg-slate-50 border-t border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            Ready to <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">Power Up</span>?
          </h2>
          <p className="text-slate-500 mb-4 text-lg font-medium">
            Tell us about your gym and we will craft a personalized AI solution for your business.
          </p>
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl mx-auto neo-card p-8 lg:p-12 bg-white"
        >
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all font-medium text-slate-800 disabled:opacity-50"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all font-medium text-slate-800 disabled:opacity-50"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none font-medium text-slate-800 disabled:opacity-50"
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
        </motion.div>
      </section>
 
 
      {/* 7.5 FAQ Section */}
      <section id="faq" className="py-24 px-6 md:px-12 lg:px-16 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Got <span className="text-cyan-500">Questions</span>? We've Got Answers
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <HomeFAQ />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ── Feature Card Component ── (links to /panels/[id])
interface FeatureCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgImage?: string;
}

function FeatureCard({ id, icon, title, description, bgImage }: FeatureCardProps) {
  return (
    <Link href={`/panels/${id}`}>
      <motion.div
        variants={cardVariants}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(6,182,212,0.08)",
          borderColor: "rgba(6,182,212,0.3)"
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="overflow-hidden group h-full flex flex-col neo-card bg-white border-slate-200 cursor-pointer relative"
      >
        {bgImage && (
          <>
            <div 
              className="absolute top-0 left-0 right-0 h-[300px] bg-cover bg-top z-0"
              style={{ 
                backgroundImage: `url(${bgImage})`,
                maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)'
              }} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-0" />
          </>
        )}
        
        <div className={`relative z-10 flex flex-col h-full px-8 pb-8 ${bgImage ? 'pt-24' : 'pt-8'}`}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all bg-white text-cyan-500 shadow-sm border border-cyan-100">
            {icon}
          </div>
          <h3 className="text-xl font-black mb-3 group-hover:text-cyan-500 transition-colors text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-500 leading-relaxed text-sm flex-1 font-medium">
            {description}
          </p>
          <span className="mt-4 text-[10px] font-bold text-cyan-500 uppercase tracking-wider group-hover:underline">
            View All Modules →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
