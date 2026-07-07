"use client";

import React from "react";
import Link from "next/link";
import {
  Users, Dumbbell, Apple, BarChart3, Globe, Calendar,
  QrCode, TrendingUp, UtensilsCrossed, CreditCard, Layers,
  Bell, MessageSquare, Shield, Star, ArrowRight, Zap,
  ClipboardList, Activity, HeartHandshake, MonitorSmartphone,
  Building2, Megaphone, Lock, Sparkles, CheckCircle, BookOpen,
  ScanLine, AlarmClock, ListChecks, UserCheck, BarChart2,
  Salad, Flame, Scale, NotebookPen, Send, Phone, Video, Smile
} from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion.config";

/* ── animation helpers ── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/* ── module data ── */
const panels = [
  {
    id:    "classes",
    label: "Classes",
    icon:  <BookOpen className="w-6 h-6" />,
    color: "from-cyan-500/10 to-sky-500/10 border-cyan-200",
    accentText: "text-cyan-600",
    count: 6,
    modules: [
      { icon: <Calendar className="w-4 h-4" />,        name: "Class Scheduling",         desc: "Create and publish class timetables across all days. Members browse and book from their app with real-time slot availability." },
      { icon: <Users className="w-4 h-4" />,           name: "Batch Enrollment",          desc: "Enroll multiple members into a class in one click. Set capacity limits and let the system auto-manage waitlists." },
      { icon: <Bell className="w-4 h-4" />,            name: "Class Reminders",           desc: "Automatic push notifications sent to enrolled members 1 hour before every class — zero no-shows." },
      { icon: <ListChecks className="w-4 h-4" />,      name: "Trainer Assignment",        desc: "Assign a trainer to each class slot. Trainers see their scheduled classes and enrolled attendees in their own panel." },
      { icon: <BarChart2 className="w-4 h-4" />,       name: "Class Analytics",          desc: "Track which classes fill fastest, peak attendance days, and drop-off trends to optimise your timetable." },
      { icon: <AlarmClock className="w-4 h-4" />,      name: "Cancellation Management",  desc: "Members cancel with one tap. Freed slots instantly open to the waitlist and the trainer is notified immediately." },
    ],
  },
  {
    id:    "attendance",
    label: "Attendance",
    icon:  <UserCheck className="w-6 h-6" />,
    color: "from-violet-500/10 to-purple-500/10 border-violet-200",
    accentText: "text-violet-600",
    count: 5,
    modules: [
      { icon: <ScanLine className="w-4 h-4" />,        name: "QR Code Check-In",          desc: "Every member gets a unique QR code. One scan at the front desk marks them present — no manual registers." },
      { icon: <Activity className="w-4 h-4" />,        name: "Live Attendance Feed",      desc: "See who checked in today, right now, in real time. Front desk and owners have full visibility from any device." },
      { icon: <BarChart2 className="w-4 h-4" />,       name: "Attendance Heat-Maps",      desc: "Daily, weekly, and monthly heat-maps reveal peak hours, slow days, and long-term visit patterns per member." },
      { icon: <HeartHandshake className="w-4 h-4" />,  name: "Absence Alerts",           desc: "Members inactive beyond a configurable threshold are automatically flagged for a trainer or owner follow-up call." },
      { icon: <ClipboardList className="w-4 h-4" />,   name: "Attendance Reports",        desc: "Export clean attendance logs by date range, branch, class, or individual member — audit-ready in seconds." },
    ],
  },
  {
    id:    "diet",
    label: "Diet",
    icon:  <Salad className="w-6 h-6" />,
    color: "from-emerald-500/10 to-green-500/10 border-emerald-200",
    accentText: "text-emerald-600",
    count: 6,
    modules: [
      { icon: <NotebookPen className="w-4 h-4" />,     name: "Meal Plan Builder",         desc: "Dietitians build structured meal plans with daily macros, meal timing, and food swaps — reusable as templates." },
      { icon: <UtensilsCrossed className="w-4 h-4" />, name: "Plan Assignment",           desc: "Assign personalised or template meal plans to individual members or entire cohorts in one action." },
      { icon: <Flame className="w-4 h-4" />,           name: "Macro & Calorie Tracking",  desc: "Auto-calculated daily calorie and macro targets displayed clearly to each member. Adjusts as goals change." },
      { icon: <Scale className="w-4 h-4" />,           name: "Progress & Adherence Log",  desc: "Track body weight, measurements, and meal compliance over time — visualised in clear progress charts." },
      { icon: <TrendingUp className="w-4 h-4" />,      name: "Nutrition Analytics",       desc: "Dietitians see at a glance which members are on track, who is struggling, and where to intervene first." },
      { icon: <Bell className="w-4 h-4" />,            name: "Diet Reminders",            desc: "Automated meal-time reminders pushed to members — keeping nutrition discipline consistent between sessions." },
    ],
  },
  {
    id:    "chat",
    label: "Chat with Members",
    icon:  <MessageSquare className="w-6 h-6" />,
    color: "from-amber-500/10 to-orange-500/10 border-amber-200",
    accentText: "text-amber-600",
    count: 5,
    modules: [
      { icon: <Send className="w-4 h-4" />,            name: "Trainer–Member Messaging",  desc: "Trainers message their assigned members directly inside the platform — no personal WhatsApp needed ever again." },
      { icon: <Salad className="w-4 h-4" />,           name: "Dietitian Consultation Chat",desc: "Members raise diet queries and receive answers from their dietitian in a dedicated in-app conversation thread." },
      { icon: <Smile className="w-4 h-4" />,           name: "Broadcast Announcements",   desc: "Owners and trainers send gym-wide announcements — schedule changes, holiday closures, promotions — to all members at once." },
      { icon: <Bell className="w-4 h-4" />,            name: "Push Notifications",        desc: "Every chat message triggers a real-time push notification so members never miss an update from their trainer." },
      { icon: <Shield className="w-4 h-4" />,          name: "Secure & Private Threads",  desc: "All messages are scoped — trainers only see their clients, dietitians only see their patients. Full data privacy." },
    ],
  },
];

/* ── differentiators ── */
const diffs = [
  {
    icon: <Shield className="w-6 h-6 text-[#00D1FF]" />,
    title: "AI-Assisted Retention Flagging",
    desc: "Cllero tracks attendance patterns and billing behaviour to surface at-risk members before they cancel — not after. Gym owners get a prioritised follow-up list each morning.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-[#00D1FF]" />,
    title: "One Login Across All Devices",
    desc: "A single set of credentials works on iOS, Android, and web — no separate app logins per role. Trainers move from phone to desktop mid-session without re-authentication.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#00D1FF]" />,
    title: "Built-In Gym-to-Client Communication",
    desc: "Every member–trainer and member–dietitian interaction happens inside Cllero. No WhatsApp dependency, no message history scattered across personal devices.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#00D1FF]" />,
    title: "48-Hour Full Deployment",
    desc: "From signup to a fully live, data-migrated Cllero instance: 48 hours. Our onboarding engineers handle import, configuration, and staff training — no IT team required.",
  },
];

export default function EcosystemPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.12),transparent_75%)]">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,196,0.05)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] font-display">
              Master Feature Ecosystem
            </h1>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-10 max-w-2xl">
              Explore our 27 cutting-edge tools in active deployment, engineered to bridge the accuracy gap and guarantee 20% retention growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link href="/demo">
                <button className="btn-cyan py-4 px-8 text-xs uppercase tracking-widest">
                  Book a Free Demo
                </button>
              </Link>
              <Link href="/pricing">
                <PrimaryButton variant="outline" className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest border-slate-200 text-slate-700 hover:bg-slate-100/50">
                  Build Your Package <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </PrimaryButton>
              </Link>
            </div>
          </motion.div>

          {/* Module count anchor strip */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl"
          >
            {panels.map((p) => (
              <motion.a
                key={p.id}
                href={`#${p.id}`}
                variants={fadeUp}
                className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-full transition-all shadow-sm font-display uppercase tracking-wider"
              >
                <span className="text-[#00D1FF]">{p.icon}</span>
                {p.label}
                <span className="text-[10px] font-black text-[#00D1FF] bg-[#00D1FF]/10 rounded-full px-2 py-0.5 ml-1">{p.count}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MODULE PANELS ── */}
      {panels.map((panel) => (
        <section key={panel.id} id={panel.id} className="py-20 border-t border-slate-100 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center text-[#00D1FF]">
                {panel.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">{panel.label}</h2>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#00D1FF] mt-1">{panel.count} active modules</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {panel.modules.map((mod, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="h-full p-6 rounded-2xl border border-slate-200/60 bg-white neo-card transition-all duration-300 group flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center mb-4 text-[#00D1FF] shadow-sm group-hover:scale-105 transition-transform">
                        {mod.icon}
                      </div>
                      <h3 className="font-bold text-base text-slate-900 mb-2 font-display">{mod.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{mod.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── DIFFERENTIATION SECTION ── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <SectionEyebrow>THE SUPERIORITY OF PRECISION</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 font-display">
              Why Cllero
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Legacy gym software was built for admin clerks, not gym operators. Cllero is engineered around the actual decisions a gym owner, trainer, and dietitian make every day.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {diffs.map((d, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="flex gap-5 p-6 bg-white border border-slate-200/60 rounded-2xl hover:border-[#00D1FF]/20 shadow-sm transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center shrink-0 text-[#00D1FF]">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 mb-2 font-display">{d.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Demo CTA */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 text-center"
          >
            <Link href="/demo">
              <button className="btn-cyan py-4 px-8 text-xs uppercase tracking-widest inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                See Every Module Live — Book a Demo
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
