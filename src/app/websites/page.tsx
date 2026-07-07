"use client";

import React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Search, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  PenTool, 
  Code, 
  Rocket, 
  CheckCircle,
  Eye
} from "lucide-react";
import Link from "next/link";

export default function WebsitesPage() {
  const processSteps = [
    { icon: <PenTool className="w-5 h-5" />, step: "01", title: "Brand Assets & Copy", desc: "You provide your gym logo, color preferences, and photography. We help refine your copy and membership offerings." },
    { icon: <Code className="w-5 h-5" />, step: "02", title: "Custom Web Development", desc: "Our creative engineering team codes your premium custom website with smooth transitions and high-fidelity aesthetics." },
    { icon: <Smartphone className="w-5 h-5" />, step: "03", title: "Scheduling & Booking Integration", desc: "We connect your class schedules and member portal forms directly, allowing prospects to register in 3 clicks." },
    { icon: <Rocket className="w-5 h-5" />, step: "04", title: "Fast Hosting Launch", desc: "We map your custom domain, set up the SSL certificate, optimize page speed rankings, and push your site live." }
  ];

  const galleryItems = [
    { name: "Titan Gym SF", type: "Strength & Powerlifting Facility", metrics: "+34% Lead Conversion Growth", color: "from-cyan-500 to-blue-600" },
    { name: "Vanguard CrossFit", type: "Group Strength & Conditioning Box", metrics: "2.4x Drop-in Registrations", color: "from-purple-500 to-indigo-600" },
    { name: "Apex Pilates & Yoga", type: "Boutique Pilates Studio", metrics: "-85% Drop in Failed Bookings", color: "from-emerald-400 to-teal-500" }
  ];

  // Stagger animation variants
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
        eyebrow="DONE-FOR-YOU WEBSITES"
        title="We Build Your Website. You Run Your Gym."
        description="Stop fighting WordPress themes. We design, host, and maintain a custom, high-performance website fully integrated with your booking engine."
      />

      {/* Why Custom Design Matters */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionEyebrow>CONVERSION FOCUSED</SectionEyebrow>
            <h2 className="text-3xl font-extrabold text-text-heading leading-tight">
              A Website Built to Turn Visitors into Active Members
            </h2>
            <p className="text-text-body text-sm leading-relaxed">
              Most gym websites are slow, difficult to navigate on mobile, and hide booking links. CLLERO websites are engineered specifically to eliminate friction. We place booking hooks and schedules upfront, converting visitors into trial sign-ups before they bounce.
            </p>
            <div className="space-y-3.5 text-xs text-text-body">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Blazing-Fast Loading:</strong> Fully static builds that load in under 1 second to improve Google search visibility.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Local SEO Optimization:</strong> Setup matching search crawler requirements so local members find you first.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Responsive mobile booking:</strong> Sized and styled perfectly to facilitate quick thumb registrations.</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants}>
              <GlassCard className="border border-white/50 bg-white/60 p-6 h-full">
                <Laptop className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-text-heading text-sm mb-2">Modern Visuals</h4>
                <p className="text-xs text-text-body">Beautiful transitions, clean layouts, and polished glassmorphic styling.</p>
              </GlassCard>
            </motion.div>
            <motion.div variants={itemVariants}>
              <GlassCard className="border border-white/50 bg-white/60 p-6 h-full">
                <Search className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-text-heading text-sm mb-2">SEO Blueprint</h4>
                <p className="text-xs text-text-body">Meta descriptions, heading tags, and microdata optimized for your city.</p>
              </GlassCard>
            </motion.div>
            <motion.div variants={itemVariants}>
              <GlassCard className="border border-white/50 bg-white/60 p-6 h-full">
                <Smartphone className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-text-heading text-sm mb-2">Mobile Booking</h4>
                <p className="text-xs text-text-body">Members book classes and pay memberships seamlessly from their phone.</p>
              </GlassCard>
            </motion.div>
            <motion.div variants={itemVariants}>
              <GlassCard className="border border-white/50 bg-white/60 p-6 h-full">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-text-heading text-sm mb-2">Zero Maintenance</h4>
                <p className="text-xs text-text-body">We handle hosting updates, domain configurations, and edits at no extra cost.</p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Design Process Timeline */}
      <section className="py-20 bg-background-alt/30 border-y border-primary/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <SectionEyebrow>OUR METHOD</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-text-heading">The 4-Step Site Build Blueprint</h2>
          <p className="text-text-body text-sm mt-3 max-w-md mx-auto">We take care of the entire design and engineering, getting your gym launched in under 14 days.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <GlassCard hoverEffect className="border border-white/50 bg-white/60 p-6 text-left relative flex flex-col justify-between h-full">
                <div>
                  <span className="absolute top-4 right-4 text-3xl font-black text-primary/15">{step.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-text-heading text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-text-body leading-relaxed">{step.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Website Template Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <SectionEyebrow>LIVE GALLERY</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-text-heading">Designed to Perform</h2>
          <p className="text-text-body text-sm mt-3 max-w-md mx-auto">Click through examples of websites we design and maintain for our growth plan clients.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {galleryItems.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <GlassCard hoverEffect className="border border-white/50 bg-white/60 overflow-hidden flex flex-col shadow-lg text-left h-full">
                <div className={`h-40 bg-gradient-to-br ${item.color} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                  <span className="text-white font-extrabold text-lg relative z-10 tracking-wide uppercase">{item.name}</span>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-primary text-[9px] font-bold px-2 py-1 rounded shadow flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Live Preview
                  </div>
                </div>
                <div className="p-5 space-y-3.5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-text-heading text-sm">{item.name}</h4>
                    <p className="text-[10px] text-text-body mt-0.5">{item.type}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-text-body">Primary Impact</span>
                    <span className="text-[10px] font-extrabold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{item.metrics}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background-alt/30 border-t border-primary/10 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <SectionEyebrow>WANT A SITE LIKE THIS?</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-text-heading mb-6">Let Us Build Your Custom Website</h2>
          <p className="text-text-body text-sm max-w-md mx-auto mb-8">Get a custom mock-up of your gym's brand website when you request your live CLLERO trial walk-through.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <PrimaryButton variant="solid" className="gap-2">
                Request a Custom Mock <ArrowRight className="w-4 h-4" />
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
