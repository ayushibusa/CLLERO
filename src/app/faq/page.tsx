"use client";

import React, { useState } from "react";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Search } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "pricing" | "technical" | "onboarding" | "support">("all");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "pricing", name: "Pricing & Billing" },
    { id: "technical", name: "Hardware & Tech" },
    { id: "onboarding", name: "Onboarding & Migrations" },
    { id: "support", name: "Support Services" }
  ];

  const faqs = [
    {
      category: "onboarding",
      question: "Can I migrate my existing member data to Cllero?",
      answer: "Absolutely. Our onboarding team handles the migration of active member profiles, contract terms, billing tokens, and history from platforms like Mindbody, Zen Planner, Wodify, or Excel. We ensure zero billing downtime or member disruption."
    },
    {
      category: "pricing",
      question: "Are there any hidden transaction fees or contract locks?",
      answer: "No. Cllero operates on transparent flat-rate monthly subscriptions with no lock-in contracts. Payment processing is run securely via Stripe at standard processing rates, with no additional Cllero transaction surcharges."
    },
    {
      category: "technical",
      question: "What physical access control door lock hardware do you support?",
      answer: "We support direct API integrations with leading smart lock and gate access control systems like Kisi, Brivo, and Salto. This allows member keycards or mobile App entry buttons to function only when membership billing is active."
    },
    {
      category: "support",
      question: "What support do we receive during onboarding and launch?",
      answer: "Every Cllero client is assigned a dedicated launch specialist. We guide you through your dashboard setup, help configure your memberships, build your custom website, migrate your member data, and train your staff on check-in procedures."
    },
    {
      category: "technical",
      question: "Do you build the gym website, or do I use a template editor?",
      answer: "We build it for you. We design, host, and maintain a custom, fully branded gym website featuring high-end animations, program pages, booking integrations, and SEO optimization. You simply send us your photos and logo, and we handle the rest."
    },
    {
      category: "pricing",
      question: "What happens after the 14-day free trial?",
      answer: "You will be prompted to insert your billing card details to lock in your subscription. If you choose not to subscribe, your account will be suspended, and no charges will be processed."
    },
    {
      category: "support",
      question: "Do you offer priority support for franchise chains?",
      answer: "Yes, our Enterprise and Multi-Gym accounts receive a dedicated SLA support tier with 24/7 engineer availability, video-call support lines, and custom webhook configurations."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-10 pb-20 md:pt-12 md:pb-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>OBJECTIONS FAQ</SectionEyebrow>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
            Everything you need to know about migrations, hardware integrations, custom websites, and SLA terms.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions about door locks, migration, Stripe..."
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-all shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        </div>

        {/* Categories toggles */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setOpenFAQIndex(0); // reset open item
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat.id 
                  ? "bg-cyan-500 border-cyan-500 text-slate-950 shadow-md shadow-cyan-500/10" 
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        {filteredFaqs.length > 0 ? (
          <div className="w-full flex flex-col">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === index}
                onToggle={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                className="border-slate-200 dark:border-slate-850"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-slate-250 dark:border-slate-800 rounded-2xl text-slate-450">
            No matching questions found. Try search query "billing" or "migration".
          </div>
        )}

      </div>
    </div>
  );
}
