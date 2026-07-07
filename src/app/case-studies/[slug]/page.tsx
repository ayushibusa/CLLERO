import React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { caseStudiesData } from "@/lib/data";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const study = caseStudiesData.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
<div className="pt-0 pb-6">
      {/* Page Header */}
      <PageHero
        eyebrow={`CASE STUDY: ${study.gymName.toUpperCase()}`}
        title={study.headline}
        description={`Location: ${study.location} • Type: ${study.type}`}
      />

      <section className="py-12 max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-left">
        {/* Back Link */}
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-xs font-bold text-primary mb-8 hover:text-primary-light">
          <ArrowLeft className="w-4 h-4" /> Back to All Case Studies
        </Link>

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-12">
          <GlassCard className="border border-white/50 bg-white/60 p-5 text-center">
            <span className="text-3xl font-black text-primary block">{study.metrics.growth}</span>
            <span className="text-[10px] text-text-body font-bold uppercase tracking-wider">{study.metrics.growthLabel}</span>
          </GlassCard>
          <GlassCard className="border border-white/50 bg-white/60 p-5 text-center">
            <span className="text-3xl font-black text-text-heading block">{study.metrics.hoursSaved}</span>
            <span className="text-[10px] text-text-body font-bold uppercase tracking-wider">Weekly Admin Saved</span>
          </GlassCard>
          <GlassCard className="border border-white/50 bg-white/60 p-5 text-center">
            <span className="text-3xl font-black text-text-heading block">{study.metrics.retention}</span>
            <span className="text-[10px] text-text-body font-bold uppercase tracking-wider">Member Retention</span>
          </GlassCard>
          <GlassCard className="border border-primary/20 bg-primary/5 p-5 text-center">
            <span className="text-3xl font-black text-primary block">3 Clicks</span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Prospect Booking Path</span>
          </GlassCard>
        </div>

        {/* Core Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Challenge & Solution */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-text-heading uppercase tracking-wide border-b border-primary/10 pb-2">The Challenge</h3>
              <p className="text-xs text-text-body leading-relaxed">{study.challenge}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-text-heading uppercase tracking-wide border-b border-primary/10 pb-2">The Solution</h3>
              <p className="text-xs text-text-body leading-relaxed">{study.solution}</p>
            </div>
          </div>

          {/* Sidebar Quote */}
          <div className="lg:col-span-4">
            <GlassCard className="border border-white/50 bg-white/70 p-6 flex flex-col justify-between h-full">
              <p className="text-xs text-text-body italic leading-relaxed">
                "{study.quote.text}"
              </p>
              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="font-extrabold text-text-heading text-xs">{study.quote.author}</p>
                <p className="text-[9px] text-text-body font-medium">{study.quote.role}, {study.gymName}</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-background-alt/30 border-t border-primary/10 relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionEyebrow>GET STARTED TODAY</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-heading mb-6">Unify Your Gym Management Under One Dashboard</h2>
          <p className="text-text-body text-sm max-w-md mx-auto mb-8">We take care of data migration and onboarding. Try CLLERO risk-free today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <PrimaryButton variant="solid" className="gap-2">
                Book a Live Demo <CheckCircle className="w-4 h-4" />
              </PrimaryButton>
            </Link>
            <Link href="/pricing">
              <PrimaryButton variant="outline" className="font-semibold">View Packages</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
