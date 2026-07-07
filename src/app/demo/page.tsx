"use client";

import React, { useState } from "react";
import { Calendar, Clock, Video, CheckCircle, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { trackEvent } from "@/lib/utils";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gymName: "",
    membersRange: "100-300"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("demo_form_submit", formData);
    setSubmitted(true);
  };

  const field = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00D1FF] transition-all";

  return (
    <div className="py-20 md:py-32 bg-slate-50 min-h-screen text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Expectations & Form */}
        <div className="lg:col-span-6 text-left">
          <SectionEyebrow>SCHEDULE A TOUR</SectionEyebrow>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight font-display">
            Start Your Free Trial.
          </h1>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-10">
            Fill out your details to activate your 14-day trial account or schedule a personalized walkthrough with a Cllero launch engineer.
          </p>

          {/* What to Expect Bullets */}
          <div className="space-y-6 mb-12">
            <h3 className="font-bold text-lg text-slate-900 font-display">What to expect on the call:</h3>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center shrink-0 text-[#00D1FF]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1 font-display">15-Minute Audit Overview</h4>
                <p className="text-xs text-slate-500">We perform a quick analysis of your active operational flow and highlight custom modules to automate tasks.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center shrink-0 text-[#00D1FF]">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1 font-display">Live Interface Review</h4>
                <p className="text-xs text-slate-500">Step inside the Trainer and Gym Owner panels to see how scheduling and invoice retries work in real-time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center shrink-0 text-[#00D1FF]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1 font-display">Onboarding Framework Blueprint</h4>
                <p className="text-xs text-slate-500">We map out a migration strategy to securely transition your active members from your current system with zero down-hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Forms & Calendars */}
        <div className="lg:col-span-6 w-full">
          {submitted ? (
            <div className="border border-emerald-200 bg-white p-10 text-center flex flex-col items-center neo-card">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display">Registration Successful!</h2>
              <p className="text-xs text-slate-500 max-w-sm mb-6 leading-relaxed">
                Thank you, {formData.name}. A Cllero launch engineer has been assigned to your gym ({formData.gymName}) and will reach out via email within 24 hours.
              </p>
              <div className="text-[10px] text-slate-500 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Onboarding ticket active. Check your spam folder if no email arrives.</span>
              </div>
            </div>
          ) : (
            <div className="border border-slate-200/60 bg-white p-8 md:p-10 neo-card">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-display">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Marcus Sterling" 
                    className={field}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-display">Work Email</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="owner@mygym.com" 
                      className={field}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-display">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210" 
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-display">Gym Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.gymName}
                    onChange={(e) => setFormData({...formData, gymName: e.target.value})}
                    placeholder="Iron Peak Strength" 
                    className={field}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-display">Active Members Count</label>
                  <select 
                    value={formData.membersRange}
                    onChange={(e) => setFormData({...formData, membersRange: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#00D1FF] transition-all appearance-none cursor-pointer"
                  >
                    <option value="1-100">1 to 100 members</option>
                    <option value="101-300">101 to 300 members</option>
                    <option value="301-500">301 to 500 members</option>
                    <option value="500+">500+ members</option>
                  </select>
                </div>

                {/* Calendar Placeholder */}
                <div className="border border-dashed border-slate-300 rounded-xl p-4 bg-slate-50 text-center">
                  <div className="flex items-center justify-center gap-2 text-slate-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider font-display">Cal.com Scheduling Block</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Your Cal.com/Calendly iframe widget will be embedded here in production to allow instant slot choosing.</p>
                </div>

                <button type="submit" className="btn-cyan w-full py-4 text-xs uppercase tracking-widest justify-center flex items-center gap-2">
                  Start Free Trial
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
