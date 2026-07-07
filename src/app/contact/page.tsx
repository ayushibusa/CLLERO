"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// TO ACTIVATE: Follow the 3 steps in the README or ask Antigravity to set it up.
// 1. Go to https://www.emailjs.com and sign up free
// 2. Add Gmail Service → connect Admin@cllero.com
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Replace the three values below with your actual IDs:
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({ type: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.closest("form");
      if (form) form.requestSubmit();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
          reply_to:   formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again or email us directly at Admin@cllero.com",
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Title Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-200 text-cyan-600 text-[10px] font-mono font-bold mb-6 uppercase tracking-widest select-none"
          >
            <MessageSquare size={14} /> Get In Touch
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 text-slate-900 tracking-tight">
            Ready to <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">Power Up</span>?
          </h1>
          <p className="text-slate-550 max-w-2xl mx-auto text-lg font-medium">
            Tell us about your gym and we will craft a personalized AI solution for your business.
          </p>
        </div>

        {/* Contact Form Wrapper Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="neo-card p-8 lg:p-12 bg-white max-w-2xl mx-auto shadow-2xl"
        >
          {status.type === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mx-auto mb-2">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Inquiry Sent Successfully</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Thank you for reaching out. We have received your details and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus({ type: "idle" })}
                className="mt-6 px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-650 hover:bg-slate-50 transition-colors uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.type === "error" && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-center gap-3 text-rose-600 text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 select-none">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="John Doe"
                  disabled={status.type === "loading"}
                  className="w-full neo-inset bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all font-medium text-slate-800 disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 select-none">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="you@yourgym.com"
                  disabled={status.type === "loading"}
                  className="w-full neo-inset bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all font-medium text-slate-800 disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 select-none">
                  Tell Us About Your Gym
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Number of members, current challenges, what you are looking for..."
                  rows={4}
                  disabled={status.type === "loading"}
                  className="w-full neo-inset bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none font-medium text-slate-800 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full btn-cyan py-4 flex items-center justify-center gap-2 font-bold font-display uppercase tracking-wider shadow-lg disabled:opacity-50"
              >
                {status.type === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Zap size={18} /> Submit Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
