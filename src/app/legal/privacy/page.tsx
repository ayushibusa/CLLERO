"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 md:py-32 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
        
        {/* Banner Badge */}
        <div className="mb-8 inline-block bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
          Draft - Requires legal review before go-live
        </div>

        <SectionEyebrow>LEGAL POLICY</SectionEyebrow>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-heading mb-8 leading-tight">
          Privacy Policy
        </h1>

        <GlassCard className="border border-text-heading/10 bg-background p-8 md:p-10 space-y-6 text-xs text-text-body leading-relaxed">
          <p>
            <strong>Last Updated: July 6, 2026</strong>
          </p>
          
          <h3 className="font-bold text-sm text-text-heading mt-6 mb-2">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us when registering accounts, completing demo requests, submitting support messages, or processing gym membership tokens. This information includes personal details (e.g. name, work email, phone number, and gym branding logos) and active financial billing identifiers handled securely via Stripe.
          </p>

          <h3 className="font-bold text-sm text-text-heading mt-6 mb-2">2. How We Use Information</h3>
          <p>
            We utilize your collected metrics to run your Cllero tenant portal, process automatic invoice payments, coordinate member access locks synchronizations (via Kisi/Brivo), send attendance warning SMS reminders, and distribute the Cllero Operator newsletter update digests.
          </p>

          <h3 className="font-bold text-sm text-text-heading mt-6 mb-2">3. Data Protection</h3>
          <p>
            All communications are encrypted using standard SSL/TLS protocols. Member profiles, check-in histories, and payment identifiers are processed in compliance with PCI-DSS guidelines. We never distribute or sell operational metrics datasets to third-party advertising companies.
          </p>

          <h3 className="font-bold text-sm text-text-heading mt-6 mb-2">4. Contact Information</h3>
          <p>
            For questions regarding data records suspension or accounts frozen status, please contact support@cllero.com.
          </p>
        </GlassCard>

      </div>
    </div>
  );
}
