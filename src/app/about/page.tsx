"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-955 transition-colors duration-300">

      {/* SECTION 01 — Opening Statement */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center relative z-10 space-y-6"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase font-display text-slate-900 dark:text-slate-100">
            EVERY REP COUNTED.<br />
            EVERY SECOND RECOVERED.<br />
            EVERY OUNCE OF<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              FRICTION ENGINEERED OUT.
            </span>
          </h2>
          <p className="text-slate-550 dark:text-slate-400 text-sm md:text-base font-bold tracking-wider max-w-2xl mx-auto pt-4 uppercase">
            CLLERO exists for operators who refuse to accept friction as the cost of scale.
          </p>
        </motion.div>
      </section>

      {/* SECTION 02 — Why We Exist */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
            Why We Exist
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 font-display">
            Most gyms run on borrowed tools.
          </h3>
          <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed font-medium">
            A spreadsheet for members. A WhatsApp group for trainers. A generic booking app that was never built for how a fitness business actually operates — five different roles, one shared truth, updated in real time.
          </p>
          <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed font-medium">
            That gap is friction. And friction is expensive: missed renewals, disconnected trainers, diet plans stuck in someone's notes app, owners who can't see their own business from their phone.
          </p>
          <p className="text-slate-850 dark:text-slate-250 text-sm md:text-base leading-relaxed font-bold">
            CLLERO was engineered to close that gap — one platform, five panels, zero friction between them.
          </p>
        </motion.div>
      </section>

      {/* SECTION 03 — What We Believe */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-slate-50 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
            What We Believe
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 font-display">
            We sell the removal of everything standing between ambition and scale.
          </h3>
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-3">
              <h4 className="font-extrabold text-cyan-600 dark:text-cyan-400 text-sm uppercase tracking-wider">
                Real-time over batch
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                A member checks in, a trainer sees it, an admin's dashboard updates — instantly, not eventually.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-extrabold text-cyan-600 dark:text-cyan-400 text-sm uppercase tracking-wider">
                One login over five tools
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                Every role — member, trainer, dietitian, admin, platform owner — works inside one architecture, not five bolted-together apps.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-extrabold text-cyan-600 dark:text-cyan-400 text-sm uppercase tracking-wider">
                Ownership over lock-in
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                Your data, your source code, your brand. CLLERO is infrastructure you own, not a subscription you're trapped in.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 04 — The Platform, In One Paragraph */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
            The Platform, In One Paragraph
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
            A Single Engineered System
          </h3>
          <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed font-medium">
            CLLERO is a single engineered system built around five role-based panels — Member, Trainer, Dietitian, Gym Admin, and Super Admin — running on one real-time backend. A member's check-in, a trainer's diet assignment, and an admin's revenue dashboard all draw from the same live data, whether accessed from a phone or a browser. It's designed to scale from a single gym to a fully white-labeled, multi-tenant SaaS platform without re-architecting anything.
          </p>
        </motion.div>
      </section>

      {/* SECTION 05 — Why CLLERO Is Built Differently */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-slate-50 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="space-y-4 max-w-4xl">
            <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
              Why CLLERO Is Built Differently
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 font-display">
              One architecture, built together from the start.
            </h3>
            <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed font-medium">
              Most gym software wasn't built as one system. It was built as a core product, with everything else added later as a plugin or workaround. CLLERO was engineered the other way around.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {/* Legacy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">
                  Industry Pattern
                </h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Diet and nutrition handled outside the platform, or not at all",
                  "Admin tools built mobile-first, with web access limited or absent",
                  "Multi-location or multi-brand management bolted on with workarounds",
                  "Features scattered across separate apps and logins as the business grows",
                  "Pricing and feature access that only becomes clear deep into a sales process",
                  "Branding and customization treated as a limited, premium add-on"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="text-red-500 font-bold select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Cllero */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">
                  The CLLERO Approach
                </h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Dedicated Dietitian Panel — full plan builder, templates, and reporting built-in",
                  "Admin Web Panel, fully synced in real time with mobile — any screen, same login",
                  "Native Super Admin console for running multiple gyms or a white-labeled SaaS",
                  "One backend, one login per role — all drawing from the same real-time database",
                  "Transparent, module-based scoping — see exactly what's built before committing",
                  "White-label by default — configure logo, colors, and branding from day one"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-650 dark:text-slate-300 font-medium">
                    <span className="text-cyan-500 font-bold select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs italic font-medium text-center pt-4">
            We didn't set out to build "another gym app." We set out to close the gaps every operator eventually runs into.
          </p>
        </motion.div>
      </section>

      {/* SECTION 06 — Who We Build For */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
            Who We Build For
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
            Gym owners, studio chains, and platform operators
          </h3>
          <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed font-medium">
            CLLERO is built for gym owners, fitness studio chains, and platform operators who intend to run — or eventually license — a serious, multi-role gym management system. Whether that's a single premium facility or a multi-gym SaaS brand of your own, the underlying architecture doesn't change. It scales with you.
          </p>
        </motion.div>
      </section>

      {/* SECTION 07 — Who's Behind CLLERO */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-slate-50 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 p-1 mb-4 shadow-md">
                <div className="w-full h-full rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-2xl font-black text-cyan-600 dark:text-cyan-400 font-display">
                  AS
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">Aryan B. Satapara</h3>
              <p className="text-cyan-600 dark:text-cyan-455 text-[10px] uppercase tracking-wider font-bold mt-1">Founder & Builder</p>
            </div>
            <div className="md:col-span-9 space-y-4">
              <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
                Who's Behind CLLERO
              </div>
              <div className="relative pl-4 border-l-3 border-cyan-500">
                <p className="text-slate-700 dark:text-slate-350 text-sm md:text-base italic font-bold">
                  Aryan is a 16-year-old builder who started this project not to follow a template, but to remove one.
                </p>
              </div>
              <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                Most software this scoped comes from teams with a decade of enterprise baggage behind them. CLLERO didn't have that baggage to unlearn — just a clear-eyed read on what a gym platform should have looked like from day one, and the discipline to build it that way.
              </p>
              <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                That's not a footnote. It's the reason the architecture is this clean: no legacy code to work around, no old assumptions to defend. Just five panels, one backend, and a standard we intend to hold as this scales.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 08 — Where We Are Right Now */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
            Where We Are Right Now
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
            Demo and Evaluation Phase
          </h3>
          <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed font-medium">
            CLLERO is currently in its <strong>demo and evaluation phase.</strong> The platform — all five panels — is built and fully demonstrable, but has not yet been publicly launched or deployed to a live gym environment. We're deliberately showing the product before naming a date, because we'd rather you see exactly what you're evaluating than take our word for it.
          </p>
        </motion.div>
      </section>

      {/* SECTION 09 — How We Work */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-slate-50 dark:bg-slate-955 border-t border-slate-100 dark:border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="text-xs md:text-sm font-mono font-black uppercase tracking-widest text-cyan-550 dark:text-cyan-400">
            How We Work
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
            Dedicated backend and full data ownership
          </h3>
          <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed font-medium">
            Every deployment runs on a dedicated real-time backend, with white-label customization available per gym or per tenant. Security and ownership are non-negotiable: you retain full rights to your source code and your data, on every plan, at every scale.
          </p>
        </motion.div>
      </section>

      {/* SECTION 10 — Closing Statement */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center relative z-10 space-y-8"
        >
          <div className="text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Closing Statement
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase font-display text-slate-900 dark:text-slate-100">
            FRICTIONLESS VELOCITY.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              ABSOLUTE CLARITY. THIS IS THE STANDARD.
            </span>
          </h2>
          
          <div className="pt-4 flex justify-center">
            <Link
              href="/#contact"
              className="btn-cyan py-4 px-10 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20"
            >
              <Zap size={14} /> Request a Demo
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
