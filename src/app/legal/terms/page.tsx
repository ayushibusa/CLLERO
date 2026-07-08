"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function TermsOfServicePage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-20 pb-20 bg-background transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-heading mb-8 leading-tight">
          Terms of Service
        </h1>

        <div className="space-y-6 text-sm md:text-base text-slate-655 leading-relaxed">
          
          <h3 className="font-bold text-lg text-slate-800 mt-6 mb-2">1. Agreement to Terms</h3>
          <p>
            By accessing or using the Cllero SaaS platform, you agree to comply with and be bound by these Terms of Service. If you are registering an account on behalf of a gym facility or multi-location franchise network, you represent that you hold the legal authority to bind that entity to these conditions.
          </p>

          <h3 className="font-bold text-lg text-slate-800 mt-6 mb-2">2. Subscription Licensing & Fees</h3>
          <p>
            Subscription licenses are billed monthly or annually relative to your selected active member capacity (Starter, Professional, or Enterprise tiers). Billing accounts are subject to automatic invoice generation and processing. Failed credit card balances will trigger the automated dunning retry sequence before suspension.
          </p>

          <h3 className="font-bold text-lg text-slate-800 mt-6 mb-2">3. Service Availability & SLA</h3>
          <p>
            Cllero makes commercial efforts to maintain a 99.9% uptime metric across all active tenant databases, scheduling engines, and hardware locks APIs. We are not liable for gate lock failures or calendar conflicts arising from incorrect local configurations.
          </p>

          <h3 className="font-bold text-lg text-slate-800 mt-6 mb-2">4. White-Label Branding</h3>
          <p>
            White-labeled app customization assets uploaded to the Cllero Hub dashboard remain your proprietary intellectual property. However, you grant Cllero the commercial right to verify and compile these templates to run the mobile platforms under your name.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
