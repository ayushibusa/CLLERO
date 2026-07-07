"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { programsData as modules } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  Sliders, 
  BarChart3, 
  Megaphone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <Users className="w-5 h-5" />,
    <Calendar className="w-5 h-5" />,
    <CreditCard className="w-5 h-5" />,
    <Sliders className="w-5 h-5" />,
    <BarChart3 className="w-5 h-5" />,
    <Megaphone className="w-5 h-5 text-primary" />
  ];

  return (
    <div className="pt-0 pb-6">
      <PageHero
        eyebrow="CLLERO DASHBOARD"
        title="Engineered for Gym Growth"
        description="Replace multiple clunky subscription tools with one unified, blazing-fast gym management dashboard."
      />

      {/* Interactive Tabs Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Tab Selection Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 justify-center mb-12 border-b border-primary/10 pb-6"
        >
          {modules.map((mod, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={mod.slug}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all border ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                    : "border-primary/10 text-text-body hover:bg-slate-100 hover:text-text-heading bg-white/40"
                }`}
              >
                {icons[idx]}
                <span>{mod.title.split(" ").slice(0, 2).join(" ")}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content Panel */}
        <div className="min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Feature Details */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <span className="text-primary text-[10px] font-extrabold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                    {modules[activeTab].tag}
                  </span>
                  <h2 className="text-3xl font-extrabold text-text-heading leading-tight">
                    {modules[activeTab].title}
                  </h2>
                  <p className="text-text-body text-sm leading-relaxed">
                    {modules[activeTab].overview}
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-bold text-text-heading uppercase tracking-wider mb-4">Core Capabilities Included:</h4>
                    <ul className="space-y-3">
                      {modules[activeTab].featuresList.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-text-body leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-xs text-text-heading font-medium flex items-center gap-3">
                    <span className="font-extrabold text-primary shrink-0 uppercase tracking-widest text-[9px] bg-white border border-primary/10 px-2 py-1 rounded">Impact</span>
                    <span>{modules[activeTab].benefits}</span>
                  </div>
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="lg:col-span-6">
                  <GlassCard className="border border-white/50 bg-white/70 p-6 shadow-xl relative overflow-hidden">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 mb-6">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">CLLERO Dashboard Mockup</span>
                      <div className="w-8" />
                    </div>

                    {/* Stylized Screen renders based on active tab */}
                    {activeTab === 0 && (
                      <div className="space-y-4 text-xs">
                        <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">MS</div>
                            <div className="text-left">
                              <p className="font-bold text-text-heading">Marcus Sterling</p>
                              <p className="text-[10px] text-text-body">Active Since Aug 2024</p>
                            </div>
                          </div>
                          <span className="bg-green-50 text-green-700 font-bold px-2.5 py-0.5 rounded-full text-[10px]">Active Member</span>
                        </div>
                        <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">SM</div>
                            <div className="text-left">
                              <p className="font-bold text-text-heading">Sophia Martinez</p>
                              <p className="text-[10px] text-text-body">Active Since Oct 2023</p>
                            </div>
                          </div>
                          <span className="bg-green-50 text-green-700 font-bold px-2.5 py-0.5 rounded-full text-[10px]">Active Member</span>
                        </div>
                        <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">JD</div>
                            <div className="text-left">
                              <p className="font-bold text-text-heading">John Davis</p>
                              <p className="text-[10px] text-text-body">Suspended Dec 2025</p>
                            </div>
                          </div>
                          <span className="bg-amber-50 text-amber-700 font-bold px-2.5 py-0.5 rounded-full text-[10px]">Frozen</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="space-y-3 text-xs">
                        {[
                          { time: "06:30 AM", name: "Metabolic Conditioning", slots: "18/20 Booked", trainer: "Coach Sarah" },
                          { time: "08:00 AM", name: "Olympic Lifting Basic", slots: "12/15 Booked", trainer: "Coach Marcus" },
                          { time: "12:00 PM", name: "Powerlifting Periodization", slots: "15/15 Full", trainer: "Coach Alex" }
                        ].map((c, i) => (
                          <div key={i} className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-left">
                            <div>
                              <span className="text-[9px] font-extrabold text-primary uppercase block">{c.time}</span>
                              <p className="font-bold text-text-heading">{c.name}</p>
                              <p className="text-[9px] text-text-body">{c.trainer}</p>
                            </div>
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${c.slots.includes("Full") ? "bg-red-50 text-red-600" : "bg-primary/10 text-primary"}`}>
                              {c.slots}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="space-y-4 text-xs">
                        <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 text-left">
                          <p className="text-[10px] text-text-body mb-1">Total Active Invoice Value</p>
                          <p className="text-2xl font-black text-text-heading">$34,850.00</p>
                          <p className="text-[9px] text-green-500 font-bold mt-1">98.5% Autopay Success Rate</p>
                        </div>
                        <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 space-y-2 text-left">
                          <p className="font-bold text-[10px] text-text-heading uppercase">Recent Transactions</p>
                          <div className="flex justify-between border-b border-slate-100 pb-2">
                            <span>Autobill #2949 (Cleared)</span>
                            <span className="font-bold text-green-600">+$179.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>POS Purchase #8821 (Cleared)</span>
                            <span className="font-bold text-green-600">+$45.00</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="space-y-4 text-xs text-left">
                        <p className="font-bold text-[10px] text-text-heading uppercase mb-2">Staff Availability & Timesheets</p>
                        <div className="space-y-2">
                          <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                            <div>
                              <p className="font-bold text-text-heading">Coach Sarah Jenkins</p>
                              <p className="text-[9px] text-text-body">14 Classes Coached This Month</p>
                            </div>
                            <span className="font-extrabold text-text-heading">$630.00 Due</span>
                          </div>
                          <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                            <div>
                              <p className="font-bold text-text-heading">Coach Marcus Vance</p>
                              <p className="text-[9px] text-text-body">24 Classes Coached This Month</p>
                            </div>
                            <span className="font-extrabold text-text-heading">$1,080.00 Due</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 4 && (
                      <div className="space-y-4 text-xs text-left">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                            <span className="text-[9px] text-text-body">Member Retention</span>
                            <span className="text-xl font-bold text-text-heading block mt-1">98.2%</span>
                          </div>
                          <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                            <span className="text-[9px] text-text-body">Class Capacity Avg</span>
                            <span className="text-xl font-bold text-text-heading block mt-1">84.5%</span>
                          </div>
                        </div>
                        <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 h-24 flex items-end justify-between">
                          {[30, 45, 60, 50, 70, 90, 85].map((val, i) => (
                            <div key={i} className="w-4 bg-primary/25 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${val}%` }} />
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 5 && (
                      <div className="space-y-3 text-xs text-left">
                        <p className="font-bold text-[10px] text-text-heading uppercase mb-2">Automated Funnel Triggers</p>
                        <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="text-[9px] font-extrabold text-primary uppercase">Trigger</span>
                          <p className="font-bold text-text-heading">New Trial Lead Capture Form Submitted</p>
                          <p className="text-[9px] text-text-body">Action: Send SMS confirmation + Scheduling link immediately</p>
                        </div>
                        <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="text-[9px] font-extrabold text-primary uppercase">Trigger</span>
                          <p className="font-bold text-text-heading">Member Absent 10 Consecutive Days</p>
                          <p className="text-[9px] text-text-body">Action: Trigger checking-in email sequence</p>
                        </div>
                      </div>
                    )}

                  </GlassCard>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background-alt/30 border-t border-primary/10 relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionEyebrow>READY TO SEE IT IN ACTION?</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-heading mb-6">
            Get a Custom Screen-Share Walkthrough
          </h2>
          <p className="text-text-body text-sm max-w-lg mx-auto mb-8">
            Speak to a launch specialist to walk through how CLLERO fits your gym's specific calendar and membership configurations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <PrimaryButton variant="solid" className="gap-2">
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </Link>
            <Link href="/pricing">
              <PrimaryButton variant="outline">View Package Pricing</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
