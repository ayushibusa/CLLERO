"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { caseStudiesData as caseStudies } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState<"All" | "Strength Gym" | "Boutique Studio" | "CrossFit Box">("All");

  const filteredStudies = filter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.type === filter);

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
        eyebrow="CLIENT SUCCESS"
        title="Real Growth. Verified Metrics."
        description="See how gyms and boutique fitness studios around the country leverage CLLERO to acquire members, stabilize recurring billing, and free up hours."
      />

      {/* Filter Tabs */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-12 border-b border-primary/10 pb-6"
        >
          {(["All", "Strength Gym", "Boutique Studio", "CrossFit Box"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                filter === type
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "border-primary/10 text-text-body bg-white/40 hover:bg-slate-100 hover:text-text-heading"
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter} // Re-animate on filter change
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filteredStudies.map((study) => (
            <motion.div key={study.slug} variants={itemVariants} className="h-full">
              <GlassCard hoverEffect className="border border-white/50 bg-white/60 p-6 flex flex-col justify-between shadow-lg text-left h-full">
                <div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider mb-4 inline-block">
                    {study.type}
                  </span>
                  <h3 className="text-lg font-bold text-text-heading mb-2 leading-snug">{study.gymName}</h3>
                  <p className="text-xs text-text-body leading-relaxed mb-6">{study.headline}</p>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 mb-6">
                    <div>
                      <span className="text-lg font-extrabold text-primary block">{study.metrics.growth}</span>
                      <span className="text-[9px] text-text-body block">{study.metrics.growthLabel}</span>
                    </div>
                    <div>
                      <span className="text-lg font-extrabold text-text-heading block">{study.metrics.hoursSaved}</span>
                      <span className="text-[9px] text-text-body block">Admin Saved</span>
                    </div>
                    <div>
                      <span className="text-lg font-extrabold text-text-heading block">{study.metrics.retention}</span>
                      <span className="text-[9px] text-text-body block">Retention</span>
                    </div>
                  </div>

                  <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 mb-6 text-xs text-text-body italic">
                    "{study.quote.text}"
                    <span className="block font-bold text-text-heading text-[10px] not-italic mt-2">— {study.quote.author}, {study.quote.role}</span>
                  </div>
                </div>

                <Link href={`/case-studies/${study.slug}`} className="text-xs font-bold text-primary flex items-center gap-1 group hover:text-primary-light">
                  Read Case Study Details <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-background-alt/30 border-t border-primary/10 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <SectionEyebrow>READY TO TRANSFORM YOUR GYM?</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-text-heading mb-6">Get Similar Growth Metrics for Your Business</h2>
          <p className="text-text-body text-sm max-w-md mx-auto mb-8">We take care of data migration and onboarding. Try CLLERO risk-free today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <PrimaryButton variant="solid" className="gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
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
