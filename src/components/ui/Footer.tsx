"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import clleroLogoSide from "@/assets/cllero_logo_side.png";
import clleroLogo from "@/assets/cllero_logo.png";

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-200 bg-white select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src={clleroLogoSide}
              alt="Cllero Logo"
              className="w-10 h-10 object-contain"
            />
            <Image
              src={clleroLogo}
              alt="Cllero"
              className="h-5 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            SaaS engineered to bridge the accuracy gap. The advanced gym management ecosystem.
          </p>
        </div>

        {/* Product Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Product</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/features" className="text-slate-500 hover:text-cyan-500 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="text-slate-500 hover:text-cyan-500 transition-colors">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="text-slate-500 hover:text-cyan-500 transition-colors font-medium text-cyan-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-slate-500 hover:text-cyan-500 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-500 hover:text-cyan-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Legal & Support</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="#" className="text-slate-500 hover:text-cyan-500 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-slate-500 hover:text-cyan-500 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href="mailto:admin@cllero.com"
                className="text-slate-500 hover:text-cyan-500 transition-colors font-medium"
              >
                admin@cllero.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <div>© 2026 Cllero. All rights reserved.</div>
      </div>
    </footer>
  );
}
