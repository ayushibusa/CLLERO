"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clleroLogoSide from "@/assets/cllero_logo_side.png";
import clleroLogo from "@/assets/cllero_logo.png";

export function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Features", path: "/#features" },
    { name: "Pricing", path: "/#pricing" },
    { name: "About", path: "/#about" },
    { name: "FAQ", path: "/#faq" },
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    // Handle smooth scrolling for hash links on the same page
    if (path.startsWith("/#") && pathname === "/") {
      const id = path.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/50 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 py-3 flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center lg:flex-1">
            <Link
              href="/"
              onClick={() => handleLinkClick("/")}
              className="flex items-center gap-3 group"
            >
              <Image
                src={clleroLogoSide}
                alt="Cllero Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-115 transition-transform"
              />
              <Image
                src={clleroLogo}
                alt="Cllero"
                className="h-5 md:h-6 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8 text-sm font-medium text-slate-600 lg:flex-none">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => handleLinkClick(link.path)}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1">
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("/#contact")}
              className="btn-cyan py-2 px-5 text-xs font-bold font-display uppercase tracking-wider"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-cyan-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 overflow-hidden bg-white/95 backdrop-blur-md rounded-b-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="text-lg font-bold text-slate-900 flex items-center justify-between group hover:text-cyan-500 transition-colors"
                  >
                    {link.name}
                    <ChevronRight
                      size={18}
                      className="text-slate-300 group-hover:text-cyan-500 transition-colors"
                    />
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => handleLinkClick("/#contact")}
                  className="btn-cyan py-4 text-center text-sm font-bold font-display uppercase tracking-wider block"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
