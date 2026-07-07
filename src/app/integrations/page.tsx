"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { integrationsData as integrations } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function IntegrationsPage() {
  const [filter, setFilter] = useState<"all" | "payments" | "access" | "marketing" | "accounting">("all");

  const filteredIntegrations = filter === "all"
    ? integrations
    : integrations.filter(item => item.category === filter);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="pt-0 pb-6">
      <PageHero
        eyebrow="EXTENSIONS"
        title="Unify Your Gym Software Stack"
        description="CLLERO syncs natively with industry-leading payment processors, smart lock systems, accounting ledgers, and marketing platforms."
      />

      {/* Categories Filter */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-12 border-b border-primary/10 pb-6"
        >
          {(["all", "payments", "access", "marketing", "accounting"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border uppercase tracking-wider ${
                filter === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "border-primary/10 text-text-body bg-white/40 hover:bg-slate-100 hover:text-text-heading"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Integrations Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter} // trigger animation on filter change
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {filteredIntegrations.map((item) => (
            <motion.div key={item.slug} variants={itemVariants} className="h-full">
              <GlassCard hoverEffect className="border border-white/50 bg-white/60 p-6 flex flex-col justify-between h-full shadow-md text-left">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center border border-slate-200/50">
                      <img src={item.logoUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-text-heading text-base mb-2">{item.name}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-1.5 text-[10px] font-bold text-primary">
                  <CheckCircle className="w-3.5 h-3.5 fill-current text-primary" /> Sync Active
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Security / API Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="border border-white/50 bg-white/60 p-8 md:p-12 shadow-xl max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-primary text-[10px] font-extrabold tracking-widest uppercase">ENTERPRISE SECURITY</span>
              <h2 className="text-2xl font-extrabold text-text-heading leading-tight">Need a Custom Webhook or API Integration?</h2>
              <p className="text-xs text-text-body leading-relaxed">
                CLLERO's Elite package provides full REST API access and webhook controls. Connect internal dashboards, private member apps, or third-party lead tracking tags (Facebook Pixel, Google Tag Manager) with ease.
              </p>
            </div>
            <div className="md:col-span-4 text-center md:text-right">
              <Link href="/contact">
                <PrimaryButton variant="solid" className="w-full justify-center gap-2">
                  Consult Our Team <ArrowRight className="w-4 h-4" />
                </PrimaryButton>
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-background-alt/30 border-t border-primary/10 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <SectionEyebrow>GET STARTED</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-text-heading mb-6">See the Ecosystem in Action</h2>
          <p className="text-text-body text-sm max-w-md mx-auto mb-8">We show you exactly how CLLERO links door scanners, Stripe processing, and your email triggers in your demo walkthrough.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <PrimaryButton variant="solid" className="gap-2">
                Schedule a Demo Walkthrough <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </Link>
            <Link href="/product">
              <PrimaryButton variant="outline">Learn About Platform</PrimaryButton>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
