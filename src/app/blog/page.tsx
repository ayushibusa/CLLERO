"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { blogData } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ChevronRight } from "lucide-react";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const breadcrumbs = [{ name: "Blog" }];
  const filters = ["All", "Marketing", "Operations", "Retention", "Finance"];

  const filteredArticles = activeFilter === "All"
    ? blogData
    : blogData.filter((article) => article.category === activeFilter);

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
    <div>
      <PageHero
        title="Gym Operator Insights & Blog"
        description="Expert advice, marketing automation playbooks, and operations tactics compiled by CLLERO to help you scale your gym business."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2.5 justify-center mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-300 ${
                activeFilter === f
                  ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                  : "bg-white/50 border border-primary/10 text-text-body hover:bg-white/80"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter} // Re-animate on filter change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article) => (
            <motion.div key={article.slug} variants={itemVariants} className="h-full">
              <GlassCard hoverEffect className="p-0 overflow-hidden flex flex-col h-full border border-white/50 bg-white/60 group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta details */}
                  <div className="flex items-center gap-4 text-[10px] text-text-body/60 font-bold uppercase tracking-wider mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-text-heading mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  
                  <p className="text-xs text-text-body leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-primary/10 mt-auto">
                    <div className="flex items-center gap-1 text-[10px] text-text-body/60">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <Link href={`/blog/${article.slug}`} className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                      Read Article <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
