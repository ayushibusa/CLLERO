import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Salad, Smartphone, Building2, CreditCard, Lock, LineChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  { name: 'Dietitian Panel', desc: 'Custom meal plans and macro tracking for your members.', icon: <Salad size={32} strokeWidth={1.5} className="text-[#FF6B35]" /> },
  { name: 'Custom Branded App', desc: 'Your gym\'s logo in the App Store and Google Play.', icon: <Smartphone size={32} strokeWidth={1.5} className="text-[#4ECDC4]" /> },
  { name: 'Multi-Branch CRM', desc: 'Manage multiple locations from one centralized dashboard.', icon: <Building2 size={32} strokeWidth={1.5} className="text-[#A29BFE]" /> },
  { name: 'Automated Billing', desc: 'Set up recurring payments, failed payment retries, and invoices.', icon: <CreditCard size={32} strokeWidth={1.5} className="text-[#FF6B35]" /> },
  { name: 'Access Control Integration', desc: 'Sync with biometric scanners or QR code turnstiles.', icon: <Lock size={32} strokeWidth={1.5} className="text-[#55EFC4]" /> },
  { name: 'Advanced Analytics', desc: 'Deep dive into retention, churn, and revenue forecasting.', icon: <LineChart size={32} strokeWidth={1.5} className="text-[#4ECDC4]" /> }
];

const PricingSection = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} id="pricing" className="py-12 lg:py-32 px-6 md:px-12 lg:pl-[380px] max-w-[1800px] mx-auto min-h-screen bg-[#f5f5f7]">

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative w-full items-start">

        {/* ── Left: Core Platform (Sticky Native) ── */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-32 flex flex-col gap-10 z-10">

          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-6">
              VII — Pricing
            </p>
            <h2 className="text-5xl lg:text-[5.5rem] font-serif font-bold tracking-tighter text-black leading-[0.9] mb-8">
              Build Your <br />
              <span className="italic font-light text-black/60">Ecosystem.</span>
            </h2>
            <p className="text-lg lg:text-xl text-black/70 max-w-md font-serif font-light leading-relaxed">
              Stop paying for generic packages. Start with the powerful core platform and snap on only the modules your gym actually needs.
            </p>
          </div>

          <div className="p-6 lg:p-8 rounded-[2rem] bg-black text-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative overflow-hidden group">
            {/* Subtle premium glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-[#FF6B35] font-mono uppercase tracking-widest text-[10px] mb-3">The Foundation</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Core Platform</h3>
              <p className="text-white/60 font-light mb-6 text-sm leading-relaxed">
                Everything you need to run your gym today. Includes the Owner Panel, Trainer App, basic Member App, and robust reporting.
              </p>

              <ul className="space-y-2 mb-6 w-full text-left">
                {['Unlimited Members', 'Class Scheduling', 'Basic Analytics', '24/7 Priority Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] flex-shrink-0"></span>
                    <span className="text-xs font-medium tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#FF6B35] hover:text-white transition-colors duration-300">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>

        {/* ── Right: Add-on Modules (Scrollable Stacker) ── */}
        <div className="w-full lg:w-[55%] flex flex-col lg:pt-[250px] pb-12 lg:pb-32">

          <div className="mb-8">
            <div className="text-black/40 font-bold uppercase tracking-widest text-xs">Add-on Modules</div>
          </div>

          <div className="flex flex-col gap-6">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="module-card p-8 lg:p-10 rounded-[2rem] bg-white border border-black/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer flex items-start gap-6 group"
              >
                <div className="bg-[#f5f5f7] w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                  {mod.icon}
                </div>
                <div className="flex flex-col justify-center h-full">
                  <h4 className="text-xl font-bold text-black mb-2 tracking-tight group-hover:text-[#FF6B35] transition-colors duration-300">
                    {mod.name}
                  </h4>
                  <p className="text-black/60 font-serif text-base leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default PricingSection;
