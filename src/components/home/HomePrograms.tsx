"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Flame, ChevronRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { programsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function HomePrograms() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Strength", "Hypertrophy", "Fat Loss", "Athletic", "Functional", "Recovery"];

  const filteredPrograms = activeTab === "All" 
    ? programsData 
    : programsData.filter((prog) => prog.tag === activeTab);

  const tagColors: Record<string, string> = {
    Strength: "bg-primary/10 text-primary border-primary/20",
    Hypertrophy: "bg-cyan-50 text-cyan-600 border-cyan-100",
    "Fat Loss": "bg-orange-50 text-orange-500 border-orange-100",
    Athletic: "bg-purple-50 text-purple-600 border-purple-100",
    Functional: "bg-cyan-50 text-cyan-600 border-cyan-100",
    Recovery: "bg-pink-50 text-pink-500 border-pink-100",
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
              activeTab === cat
                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                : "bg-white/50 border border-primary/10 text-text-body hover:bg-white/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Program Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((prog) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={prog.slug}
            >
              <GlassCard hoverEffect className="flex flex-col h-full border border-white/50 bg-white/60 p-7 group">
                <div className="flex justify-between items-center mb-5">
                  <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border ${tagColors[prog.tag]}`}>
                    {prog.tag}
                  </span>
                  <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-text-heading mb-3 group-hover:text-primary transition-colors">
                  {prog.title}
                </h3>
                
                <p className="text-sm text-text-body leading-relaxed mb-6 flex-grow">
                  {prog.desc}
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-primary/10">
                  <div className="flex items-center gap-1.5 text-text-body/70 text-xs">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{prog.duration}</span>
                  </div>
                  <span className="ml-auto text-[10px] font-bold text-primary font-mono bg-primary/5 px-2.5 py-1 rounded">
                    {prog.level}
                  </span>
                </div>
                
                <Link href={`/programs/${prog.slug}`} className="mt-5 text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 text-center">
        <Link href="/programs">
          <PrimaryButton variant="outline" className="px-8 py-3.5 text-sm">
            View All Programs
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
