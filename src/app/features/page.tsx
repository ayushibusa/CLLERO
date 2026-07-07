"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories, features } from "@/lib/featuresData";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export default function FeaturesPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-12 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-8"
          >
            The Future of <span className="text-cyan-500">Gym Intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-3xl mx-auto font-medium"
          >
            A cohesive suite of AI-driven modules designed to automate retention, ensure safety, and maximize profitability for elite fitness facilities.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="px-6 md:px-12 lg:px-16 space-y-32">
        {categories.map((category, catIdx) => (
          <div key={category.name} className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="text-[10px] font-mono font-black uppercase tracking-widest text-cyan-500 mb-4 select-none">
                  Category {catIdx + 1}
                </div>
                <h2 className="text-4xl font-display font-black text-slate-900 mb-4">
                  {category.name}
                </h2>
              </div>
            </div>

            {/* Features Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.features.map((featureId, featIdx) => {
                const feat = features[featureId];
                if (!feat) return null;

                return (
                  <motion.div
                    key={featureId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featIdx * 0.1 }}
                  >
                    <Link
                      href={`/feature/${featureId}`}
                      className="group block h-full neo-card p-8 bg-white hover:border-cyan-500/30 transition-all hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="w-14 h-14 neo-inset rounded-2xl flex items-center justify-center text-cyan-500 bg-white mb-8 group-hover:scale-110 transition-transform">
                        <DynamicIcon name={feat.icon} size={28} />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-cyan-500 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                        {feat.description}
                      </p>
                      <div className="flex items-center gap-2 text-cyan-500 font-mono font-black text-[10px] uppercase tracking-widest">
                        Explore Module{" "}
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
