"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users, Dumbbell, Apple, BarChart3, Globe, Star,
  Check, Calendar, ArrowRight, Info, ShieldCheck
} from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { trackEvent } from "@/lib/utils";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion.config";

/* ─────────────────────────────────────────
   MODULE DEFINITIONS
   Prices marked TODO — awaiting client sign-off.
   Replace numbers before launch.
───────────────────────────────────────── */
const BASE_PRICE = 499; // ₹ base platform fee / month

const allModules = [
  {
    id:       "member",
    icon:     <Users className="w-5 h-5" />,
    name:     "Member Panel",
    tagline:  "QR check-in, progress tracking, class bookings, renewal reminders",
    price:    500,  // TODO: confirm with client
    required: true, // always included
    color:    "border-cyan-200 bg-cyan-50",
    accentText: "text-cyan-600",
  },
  {
    id:       "trainer",
    icon:     <Dumbbell className="w-5 h-5" />,
    name:     "Trainer Panel",
    tagline:  "Workout builder, client assignment, session scheduler, performance reports",
    price:    400,  // TODO: confirm with client
    required: false,
    color:    "border-violet-200 bg-violet-50",
    accentText: "text-violet-600",
  },
  {
    id:       "dietitian",
    icon:     <Apple className="w-5 h-5" />,
    name:     "Dietitian Panel",
    tagline:  "Macro templates, meal plan assignment, nutrition progress tracking",
    price:    400,  // TODO: confirm with client
    required: false,
    color:    "border-emerald-200 bg-emerald-50",
    accentText: "text-emerald-600",
  },
  {
    id:       "owner",
    icon:     <BarChart3 className="w-5 h-5" />,
    name:     "Gym Owner Panel",
    tagline:  "MRR dashboard, billing retry, staff shifts, lead tracker, AI retention flags",
    price:    600,  // TODO: confirm with client
    required: false,
    color:    "border-amber-200 bg-amber-50",
    accentText: "text-amber-600",
  },
  {
    id:       "hub",
    icon:     <Globe className="w-5 h-5" />,
    name:     "Cllero Hub",
    tagline:  "Multi-location control, cross-location analytics, global template manager",
    price:    800,  // TODO: confirm with client
    required: false,
    color:    "border-slate-200 bg-slate-50",
    accentText: "text-slate-600",
  },
  {
    id:       "whitelabel",
    icon:     <Star className="w-5 h-5" />,
    name:     "White-Label Branding",
    tagline:  "Deploy under your own brand — custom logo, colours, and domain",
    price:    500,  // TODO: confirm with client
    required: false,
    color:    "border-pink-200 bg-pink-50",
    accentText: "text-pink-600",
  },
];

// Recommended bundle = Member + Trainer + Dietitian + Owner
const RECOMMENDED_IDS = ["member", "trainer", "dietitian", "owner"];

const faqs = [
  { question: "Are there setup or migration fees?", answer: "No. Cllero has zero setup or configuration fees. Our migration engineers handle your member list and billing token imports free of charge during onboarding." },
  { question: "Can I add or remove modules later?", answer: "Yes — you can upgrade or downgrade your module selection from the Gym Owner billing dashboard at any time. Changes take effect on the next billing cycle." },
  { question: "What happens after my 14-day free trial?", answer: "Near the end of your trial you'll be prompted to confirm your module selection and add billing details to continue without interruption. Your configuration carries over exactly." },
  { question: "Do you charge a percentage on payment transactions?", answer: "No. Cllero does not add surcharges on member payments. You pay only standard Stripe processing rates." },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
};

export default function PricingPage() {
  const [selected, setSelected]       = useState<string[]>(RECOMMENDED_IDS);
  const [openFAQ,  setOpenFAQ]         = useState<number | null>(0);

  const toggle = (id: string) => {
    const mod = allModules.find((m) => m.id === id);
    if (mod?.required) return; // can't deselect required modules
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectRecommended = () => setSelected(RECOMMENDED_IDS);
  const selectAll         = () => setSelected(allModules.map((m) => m.id));

  const selectedModules = allModules.filter((m) => selected.includes(m.id));
  const totalPrice      = BASE_PRICE + selectedModules.reduce((sum, m) => sum + m.price, 0);

  const handleCta = (label: string) => trackEvent("cta_click", { page: "pricing", label });

  return (
    <div className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionEyebrow>CUSTOMISE YOUR PLAN</SectionEyebrow>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Build exactly what your gym needs.
          </h1>
          <p className="text-text-body text-base md:text-lg">
            Select the panels your operation actually uses. Your monthly price builds live from your selection — no fixed tiers, no bloat.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 w-max mx-auto">
            <Info className="w-3.5 h-3.5 shrink-0" />
            Prices shown are illustrative — final per-module pricing pending client sign-off.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── MODULE SELECTION GRID ── */}
          <div className="lg:col-span-7">
            {/* Quick-select buttons */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <button
                onClick={selectRecommended}
                className="text-xs font-bold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full transition-all"
              >
                ✦ Recommended Bundle
              </button>
              <button
                onClick={selectAll}
                className="text-xs font-bold text-slate-600 border border-slate-200 bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-full transition-all"
              >
                Select All Modules
              </button>
              <button
                onClick={() => setSelected(["member"])}
                className="text-xs font-bold text-slate-600 border border-slate-200 bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-full transition-all"
              >
                Start Minimal
              </button>
            </div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
              className="flex flex-col gap-4"
            >
              {allModules.map((mod) => {
                const active = selected.includes(mod.id);
                return (
                  <motion.div key={mod.id} variants={fadeUp}>
                    <button
                      onClick={() => toggle(mod.id)}
                      className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 ${
                        active
                          ? `${mod.color} border-opacity-100 shadow-sm`
                          : "bg-white border-slate-100 hover:border-slate-200"
                      } ${mod.required ? "cursor-default" : "cursor-pointer"}`}
                    >
                      {/* Checkbox */}
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                        active ? "bg-primary border-primary" : "border-slate-200 bg-white"
                      }`}>
                        {active && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>

                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        active ? `${mod.accentText} bg-white/70 border border-white` : "text-slate-400 bg-slate-50 border border-slate-100"
                      }`}>
                        {mod.icon}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`font-bold text-sm ${active ? "text-text-heading" : "text-slate-500"}`}>{mod.name}</span>
                          {mod.required && (
                            <span className="text-[9px] font-black uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full">Always included</span>
                          )}
                          {!mod.required && RECOMMENDED_IDS.includes(mod.id) && (
                            <span className="text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">Recommended</span>
                          )}
                        </div>
                        <p className={`text-xs ${active ? "text-text-body" : "text-slate-400"}`}>{mod.tagline}</p>
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0">
                        <span className={`text-sm font-black ${active ? "text-text-heading" : "text-slate-400"}`}>
                          +₹{mod.price}
                        </span>
                        <span className={`block text-[10px] ${active ? "text-text-body" : "text-slate-400"}`}>/mo</span>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ── LIVE SUMMARY SIDEBAR ── */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <GlassCard className="border border-slate-200 bg-white shadow-premium p-6">
                <h3 className="font-extrabold text-base text-text-heading mb-5">Your Package Summary</h3>

                {/* Line items */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-xs text-text-body">
                    <span>Base platform fee</span>
                    <span className="font-bold text-text-heading">₹{BASE_PRICE}/mo</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3 space-y-2">
                    {selectedModules.map((m) => (
                      <div key={m.id} className="flex justify-between text-xs text-text-body">
                        <span className="flex items-center gap-1.5">
                          <span className={m.accentText}>{m.icon}</span>
                          {m.name}
                        </span>
                        <span className="font-semibold text-text-heading">+₹{m.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-slate-100 pt-4 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-text-heading">Monthly Total</span>
                    <div className="text-right">
                      <span className="text-3xl font-black text-text-heading">₹{totalPrice}</span>
                      <span className="text-xs text-text-body ml-1">/mo</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-amber-600 mt-1 flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    Pricing indicative — confirmed on demo call
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <Link href="/demo" onClick={() => handleCta("Start Free Trial")} className="w-full">
                    <PrimaryButton variant="solid" className="w-full justify-center py-3.5 text-xs uppercase tracking-widest gap-2">
                      Start Free Trial <ArrowRight className="w-4 h-4" />
                    </PrimaryButton>
                  </Link>
                  <Link href="/demo" onClick={() => handleCta("Book a Demo")} className="w-full">
                    <PrimaryButton variant="outline" className="w-full justify-center py-3 text-xs uppercase tracking-widest gap-2 border-primary/40 text-primary">
                      <Calendar className="w-4 h-4" /> Book a Demo
                    </PrimaryButton>
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-400 justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  14-day free trial · No credit card required
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-24 max-w-3xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-center mb-8"
          >
            Billing FAQ
          </motion.h2>
          <div className="border border-text-heading/10 bg-white rounded-2xl p-6 shadow-premium">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="border-text-heading/5"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
