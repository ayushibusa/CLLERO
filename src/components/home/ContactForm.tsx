"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  gymName: z.string().min(2, { message: "Gym or studio name must be at least 2 characters." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  gymSize: z.string().min(1, { message: "Please select your approximate member count." }),
  currentSoftware: z.string().min(1, { message: "Please select or type your current software." }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      gymName: "",
      phone: "",
      gymSize: "",
      currentSoftware: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Lead captured successfully:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <GlassCard className="w-full border border-white/50 bg-white/60 p-8 shadow-xl relative overflow-hidden text-left">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-success-bg border border-success-text/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-text-heading mb-3">Demo Requested Successfully!</h3>
          <p className="text-text-body max-w-sm mb-6">
            Thank you for booking your CLLERO platform demo. A gym launch specialist will reach out to you within 24 hours to schedule a live walk-through.
          </p>
          <PrimaryButton variant="outline" onClick={() => setIsSubmitted(false)}>
            Request Another Demo
          </PrimaryButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Marcus Vance"
                {...register("name")}
                className={`w-full bg-white/65 border rounded-xl px-4 py-2.5 text-xs text-text-heading placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-primary/10 focus:border-primary"
                }`}
              />
              {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5 uppercase tracking-wider">Gym / Studio Name</label>
              <input
                type="text"
                placeholder="e.g. Iron Peak Strength"
                {...register("gymName")}
                className={`w-full bg-white/65 border rounded-xl px-4 py-2.5 text-xs text-text-heading placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.gymName ? "border-red-500 focus:border-red-500" : "border-primary/10 focus:border-primary"
                }`}
              />
              {errors.gymName && <p className="text-[10px] text-red-500 mt-1">{errors.gymName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                placeholder="e.g. owner@yourgym.com"
                {...register("email")}
                className={`w-full bg-white/65 border rounded-xl px-4 py-2.5 text-xs text-text-heading placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-primary/10 focus:border-primary"
                }`}
              />
              {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5 uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                placeholder="e.g. (555) 019-9942"
                {...register("phone")}
                className={`w-full bg-white/65 border rounded-xl px-4 py-2.5 text-xs text-text-heading placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.phone ? "border-red-500 focus:border-red-500" : "border-primary/10 focus:border-primary"
                }`}
              />
              {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5 uppercase tracking-wider">Gym Size (Members)</label>
              <select
                {...register("gymSize")}
                className={`w-full bg-white/65 border rounded-xl px-4 py-2.5 text-xs text-text-heading focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.gymSize ? "border-red-500 focus:border-red-500" : "border-primary/10 focus:border-primary"
                }`}
              >
                <option value="">Select current size</option>
                <option value="planning">Just Planning / Launching</option>
                <option value="1-100">1 - 100 Members</option>
                <option value="101-300">101 - 300 Members</option>
                <option value="301-800">301 - 800 Members</option>
                <option value="801+">800+ Members (Multi-location)</option>
              </select>
              {errors.gymSize && <p className="text-[10px] text-red-500 mt-1">{errors.gymSize.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-text-heading mb-1.5 uppercase tracking-wider">Current Software</label>
              <select
                {...register("currentSoftware")}
                className={`w-full bg-white/65 border rounded-xl px-4 py-2.5 text-xs text-text-heading focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.currentSoftware ? "border-red-500 focus:border-red-500" : "border-primary/10 focus:border-primary"
                }`}
              >
                <option value="">Select current tool</option>
                <option value="mindbody">Mindbody</option>
                <option value="zenplanner">Zen Planner</option>
                <option value="wodify">Wodify</option>
                <option value="glofox">Glofox</option>
                <option value="sheets">Excel / Google Sheets</option>
                <option value="none">None / New Gym</option>
                <option value="other">Other Software</option>
              </select>
              {errors.currentSoftware && <p className="text-[10px] text-red-500 mt-1">{errors.currentSoftware.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-text-heading mb-1.5 uppercase tracking-wider">Any Special Requirements / Message (Optional)</label>
            <textarea
              rows={3}
              placeholder="e.g., We have 2 locations and want to migrate Mindbody data by next month..."
              {...register("message")}
              className="w-full bg-white/65 border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-text-heading placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <PrimaryButton type="submit" disabled={isSubmitting} className="w-full justify-center gap-2 mt-2 shadow-[0_4px_20px_rgba(6,182,212,0.2)]">
            {isSubmitting ? "Submitting Request..." : "Request Live Platform Demo"}
          </PrimaryButton>
        </form>
      )}
    </GlassCard>
  );
}
