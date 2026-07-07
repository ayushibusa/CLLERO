"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutGrid, Users, CreditCard, BarChart3, ChevronLeft } from "lucide-react";

// Import real dashboard screenshots
import dashboardContent from "@/assets/dashboard_content.png";
import members from "@/assets/members.png";
import payments from "@/assets/payments.png";

export function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"overview" | "members" | "payments" | "analytics">("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "members", label: "Members", icon: <Users className="w-4 h-4" /> },
    { id: "payments", label: "Payments", icon: <CreditCard className="w-4 h-4" /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
  ] as const;

  return (
    <div className="w-full rounded-2xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(6,182,212,0.15)] overflow-hidden font-sans text-left">
      {/* Browser Window Header */}
      <div className="bg-slate-50/80 border-b border-slate-200/50 px-4 py-3.5 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="w-10" />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px]">
        {/* Left Sidebar Mockup */}
        <div className="md:col-span-3 border-r border-slate-200/40 bg-white p-4 flex flex-col justify-between min-h-[400px]">
          <div className="flex flex-col gap-1">
            {/* Brand Header */}
            <div className="flex items-center justify-between px-2 py-3 mb-6 border-b border-slate-100 pb-4">
              <div>
                <span className="font-black text-xl text-primary tracking-tight">Cllero</span>
                <span className="block text-[8px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">MASTER ADMIN</span>
              </div>
              <ChevronLeft className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </div>

            {/* Navigation Links */}
            <div className="space-y-1.5">
              {tabs.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 w-full px-3.5 py-3 rounded-xl text-xs font-bold transition-all relative ${
                      isSelected
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-md" />
                    )}
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Gym Admin info at bottom */}
          <div className="border-t border-slate-100 pt-4 px-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-[10px]">
              SJ
            </div>
            <div>
              <p className="font-bold text-[10px] text-text-heading leading-none">Shyam jethva</p>
              <p className="text-[8px] text-slate-400 font-medium mt-1">gym admin</p>
            </div>
          </div>
        </div>

        {/* Dashboard Content Mockup */}
        <div className="md:col-span-9 bg-[#F8F9FA] relative flex flex-col justify-start overflow-hidden">
          
          {/* Subtle Dotted/Dashed Grid Background inside the Dashboard content area */}
          <div className="absolute inset-0 pointer-events-none opacity-20 text-primary select-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dashboard-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                  <line x1="0" y1="0" x2="30" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dashboard-grid)" />
            </svg>
          </div>

          <div className="relative w-full h-full min-h-[440px] overflow-auto z-10">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col justify-start"
              >
                <Image
                  src={dashboardContent}
                  alt="Dashboard Overview"
                  className="w-full h-auto object-contain object-top mix-blend-multiply"
                  priority
                />
              </motion.div>
            )}

            {activeTab === "members" && (
              <motion.div
                key="members"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col justify-start"
              >
                <Image
                  src={members}
                  alt="Members Directory"
                  className="w-full h-auto object-contain object-top mix-blend-multiply"
                  priority
                />
              </motion.div>
            )}

            {activeTab === "payments" && (
              <motion.div
                key="payments"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col justify-start"
              >
                <Image
                  src={payments}
                  alt="Financial Ledger"
                  className="w-full h-auto object-contain object-top mix-blend-multiply"
                  priority
                />
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-slate-500 min-h-[400px]"
              >
                <BarChart3 className="w-12 h-12 text-primary/40 mb-4 animate-pulse" />
                <h3 className="font-extrabold text-sm text-text-heading uppercase tracking-wider mb-2">Analytics Module</h3>
                <p className="text-xs text-text-body max-w-xs leading-relaxed">
                  Real-time business reports, retention curves, and financial charts are loaded dynamically on your platform dashboard.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
