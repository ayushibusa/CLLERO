"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clleroLogoSide from "@/assets/cllero_logo_side.png";
import clleroLogo from "@/assets/cllero_logo.png";

export function Footer() {
  const pathname = usePathname();

  const handleLinkClick = (path: string) => {
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
    <footer className="py-16 px-6 border-t border-slate-200 bg-white select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
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
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            SaaS engineered to bridge the accuracy gap. The advanced gym management ecosystem.
          </p>
        </div>

        {/* Pages Column */}
        <div className="space-y-4 md:col-span-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pages</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link 
                href="/#features" 
                onClick={() => handleLinkClick("/#features")}
                className="text-slate-500 hover:text-cyan-500 transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                href="/#pricing" 
                onClick={() => handleLinkClick("/#pricing")}
                className="text-slate-500 hover:text-cyan-500 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                href="/#about" 
                onClick={() => handleLinkClick("/#about")}
                className="text-slate-500 hover:text-cyan-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/#faq" 
                onClick={() => handleLinkClick("/#faq")}
                className="text-slate-500 hover:text-cyan-500 transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                href="/#contact" 
                onClick={() => handleLinkClick("/#contact")}
                className="text-slate-500 hover:text-cyan-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-4 md:col-span-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Legal & Support</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/legal/privacy" className="text-slate-500 hover:text-cyan-500 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="text-slate-500 hover:text-cyan-500 transition-colors">
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
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/cllero.official?igsh=MTY0aGVudWRibmdnbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@cllero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition-colors"
            aria-label="Email us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
