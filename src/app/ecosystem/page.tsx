"use client";

import React from "react";
import Link from "next/link";
import {
  Users, Dumbbell, Apple, BarChart3, Globe, Calendar,
  QrCode, TrendingUp, UtensilsCrossed, CreditCard, Layers,
  Bell, MessageSquare, Shield, Star, ArrowRight, Zap,
  ClipboardList, Activity, HeartHandshake, MonitorSmartphone,
  Building2, Megaphone, Lock, Sparkles
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
    id:    "member",
    label: "Member Panel",
    icon:  <Users className="w-6 h-6" />,
    color: "from-cyan-500/10 to-sky-500/10 border-cyan-200",
    accentText: "text-cyan-600",
    count: 6,
    modules: [
      { icon: <QrCode className="w-4 h-4" />,         name: "QR Check-In",           desc: "Instant attendance via a single member QR scan — no front-desk queue." },
      { icon: <Activity className="w-4 h-4" />,        name: "Progress Tracker",      desc: "Visual body metric charts and milestone logs updated by trainers in real time." },
      { icon: <UtensilsCrossed className="w-4 h-4" />, name: "Diet Log Viewer",       desc: "Members view their assigned macro targets and meal compliance without leaving the app." },
      { icon: <Calendar className="w-4 h-4" />,        name: "Class Bookings",        desc: "Browse, reserve, and cancel class slots from mobile or web — capacity managed automatically." },
      { icon: <Bell className="w-4 h-4" />,            name: "Renewal Reminders",     desc: "Automated push and SMS nudges sent 7 days and 1 day before membership expiry." },
      { icon: <MessageSquare className="w-4 h-4" />,   name: "In-App Chat",           desc: "Direct messaging between member and assigned trainer — no WhatsApp dependency." },
    ],
  },
  {
    id:    "trainer",
    label: "Trainer Panel",
    icon:  <Dumbbell className="w-6 h-6" />,
    color: "from-violet-500/10 to-purple-500/10 border-violet-200",
    accentText: "text-violet-600",
    count: 5,
    modules: [
      { icon: <ClipboardList className="w-4 h-4" />,   name: "Workout Plan Builder",   desc: "Drag-and-drop exercise template builder with set/rep/rest presets per client profile." },
      { icon: <Users className="w-4 h-4" />,           name: "Client Assignment",      desc: "Link multiple members to a single trainer; view all assigned clients in one dashboard column." },
      { icon: <Calendar className="w-4 h-4" />,        name: "Session Scheduler",      desc: "Visual weekly calendar for booking and managing PT sessions, avoiding double-booking." },
      { icon: <TrendingUp className="w-4 h-4" />,      name: "Performance Reports",    desc: "Auto-generated weekly performance summaries exportable as PDF for client progress reviews." },
      { icon: <MessageSquare className="w-4 h-4" />,   name: "Client Chat",            desc: "Respond to assigned members' queries directly from the trainer dashboard." },
    ],
  },
  {
    id:    "dietitian",
    label: "Dietitian Panel",
    icon:  <Apple className="w-6 h-6" />,
    color: "from-emerald-500/10 to-green-500/10 border-emerald-200",
    accentText: "text-emerald-600",
    count: 4,
    modules: [
      { icon: <UtensilsCrossed className="w-4 h-4" />, name: "Macro Template Builder",      desc: "Build reusable macro and calorie blueprints for specific fitness goals (cut, bulk, maintain)." },
      { icon: <ClipboardList className="w-4 h-4" />,   name: "Meal Plan Assignment",         desc: "Assign tailored meal plans to individual members or bulk-assign to a cohort." },
      { icon: <TrendingUp className="w-4 h-4" />,      name: "Nutrition Progress Tracker",   desc: "Track adherence, weight fluctuation, and macro compliance across the client's timeline." },
      { icon: <MessageSquare className="w-4 h-4" />,   name: "Dietitian-Member Chat",        desc: "Direct consultation channel to answer diet queries and adjust plans without email threads." },
    ],
  },
  {
    id:    "owner",
    label: "Gym Owner Panel",
    icon:  <BarChart3 className="w-6 h-6" />,
    color: "from-amber-500/10 to-orange-500/10 border-amber-200",
    accentText: "text-amber-600",
    count: 7,
    modules: [
      { icon: <TrendingUp className="w-4 h-4" />,      name: "MRR Dashboard",                desc: "Live Monthly Recurring Revenue graph with plan-level breakdown and churn alerts." },
      { icon: <CreditCard className="w-4 h-4" />,      name: "Automated Billing Retry",      desc: "Failed payments automatically retried on a configurable schedule — no manual chasing." },
      { icon: <Calendar className="w-4 h-4" />,        name: "Staff Shift Manager",          desc: "Roster your trainers and desk staff across shifts with conflict-detection built in." },
      { icon: <Building2 className="w-4 h-4" />,       name: "Multi-Location Control",       desc: "Switch between and manage all gym branches from a single owner session." },
      { icon: <Megaphone className="w-4 h-4" />,       name: "Lead & Enquiry Tracker",       desc: "Capture walk-in and digital leads and move them through a conversion pipeline." },
      { icon: <Activity className="w-4 h-4" />,        name: "Attendance Reports",           desc: "Daily, weekly, and monthly attendance heat-maps with peak-hour analysis." },
      { icon: <HeartHandshake className="w-4 h-4" />,  name: "Retention Flags",              desc: "AI-assisted at-risk member detection — flagged before they lapse, not after." },
    ],
  },
  {
    id:    "hub",
    label: "Cllero Hub",
    icon:  <Globe className="w-6 h-6" />,
    color: "from-slate-500/10 to-slate-400/10 border-slate-200",
    accentText: "text-slate-600",
    count: 5,
    modules: [
      { icon: <Layers className="w-4 h-4" />,          name: "Global Template Manager",      desc: "Publish workout and nutrition templates from HQ — all branches receive instantly." },
      { icon: <BarChart3 className="w-4 h-4" />,       name: "Cross-Location Analytics",     desc: "Unified revenue, retention, and attendance data aggregated across your entire network." },
      { icon: <Star className="w-4 h-4" />,            name: "White-Label Branding Kit",     desc: "Deploy Cllero under your own gym brand — custom logo, colour scheme, and domain." },
      { icon: <Lock className="w-4 h-4" />,            name: "Super Admin Access",           desc: "Elevated role with override permissions spanning all tenants in a franchise group." },
      { icon: <MonitorSmartphone className="w-4 h-4" />, name: "Single Login — All Devices", desc: "One credential seamlessly spans mobile app, web dashboard, and kiosk check-in screens." },
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
