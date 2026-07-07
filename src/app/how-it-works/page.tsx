"use client";

import React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import { 
  Tv, 
  RefreshCw, 
  Palette, 
  Flag, 
  ArrowRight,
  Database,
  ShieldCheck,
  CheckCircle,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Tv className="w-6 h-6 text-primary" />,
      number: "01",
      title: "Interactive Platform Demo",
      desc: "We host a live 15-minute video call to audit your current software challenges. We show you exactly how CLLERO manages members, schedules, and billing for your specific gym layout."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-primary" />,
      number: "02",
      title: "Zero-Downtime Data Migration",
      desc: "Our database migration engineers securely transfer active member profiles, contract configurations, recurring billing details, and scheduling tokens from your old system to CLLERO."
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      number: "03",
      title: "Custom Website Coding",
      desc: "We code and host a fast, custom gym website integrated directly with your CLLERO calendar. We map your domain, set up the security SSL certificate, and handle SEO adjustments."
    },
    {
      icon: <Flag className="w-6 h-6 text-primary" />,
      number: "04",
      title: "Staff Hand-off & Live Launch",
      desc: "We train your trainers on front desk check-ins, connect your door keypads, activate automated SMS retention triggers, and push your new platform setup live."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="pt-0 pb-6">
      <PageHero
        eyebrow="ONBOARDING PIPELINE"
        title="Zero-Stress Platform Launch"
        description="We handle the technical setup, data migration, and custom website design so you can stay focused on coaching your community."
      />

      {/* Timeline Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-20"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <GlassCard hoverEffect className="border border-white/50 bg-white/60 p-8 flex flex-col justify-between h-full shadow-lg relative overflow-hidden">
                <span className="absolute top-4 right-6 text-5xl font-black text-primary/10">{step.number}</span>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-3">{step.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{step.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Database Migration Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="border border-white/50 bg-white/60 p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-primary text-[10px] font-extrabold tracking-widest uppercase">MIGRATION ASSURANCE</span>
              <h2 className="text-2xl font-extrabold text-text-heading leading-tight">Migrating from Mindbody, Zen Planner, Wodify, or Excel?</h2>
              <p className="text-xs text-text-body leading-relaxed">
                We understand that migrating database software is stressful. That is why our onboarding specialists take care of the entire transfer. We guarantee zero payment double-billing and zero calendar downtime.
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50/50 rounded-2xl p-6 border border-slate-200/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <Database className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-text-heading text-xs">Members & CRM</h4>
                  <p className="text-[10px] text-text-body mt-0.5">We migrate active profiles, waivers, suspension dates, and check-in history.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-text-heading text-xs">Stripe Billing Sync</h4>
                  <p className="text-[10px] text-text-body mt-0.5">Payment tokens are migrated securely so credit card autopays continue uninterrupted.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-text-heading text-xs">Class Schedule Match</h4>
                  <p className="text-[10px] text-text-body mt-0.5">Trainer assignments, time slots, and member bookings are mapped correctly.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-text-heading text-xs">Fast 14-Day Timeline</h4>
                  <p className="text-[10px] text-text-body mt-0.5">The complete transition is completed and live within two weeks.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-alt/30 border-t border-primary/10 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <SectionEyebrow>READY TO TAKE THE FIRST STEP?</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-text-heading mb-6">See CLLERO In Action Today</h2>
          <p className="text-text-body text-sm max-w-md mx-auto mb-8">Schedule your 15-minute product walk-through and get a custom website mockup designed for your gym.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <PrimaryButton variant="solid" className="gap-2">
                Book My Free Demo <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </Link>
            <Link href="/pricing">
              <PrimaryButton variant="outline">Compare Pricing Packages</PrimaryButton>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
