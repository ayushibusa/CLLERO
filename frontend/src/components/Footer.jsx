import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-[60] w-full bg-[#0a0a0a] text-white overflow-hidden py-12 lg:py-16 px-6 md:px-12 md:pl-[300px] lg:pl-[380px] border-t border-white/5">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <h1 className="text-[25vw] font-serif font-black tracking-tighter whitespace-nowrap text-white">
          CLLERO.
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col">
        
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tighter leading-[1] mb-2 lg:mb-4">
              Start your <span className="italic font-light text-white/50">evolution.</span>
            </h2>
            <p className="text-white/60 font-light text-sm lg:text-base max-w-md">
              Join the hundreds of elite gyms already running on the Cllero ecosystem.
            </p>
          </div>
          <button className="group relative inline-flex items-center justify-center gap-3 px-5 lg:px-6 py-2.5 lg:py-3 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 font-bold uppercase tracking-widest text-[10px]">Request Demo</span>
            <div className="relative z-10 w-6 h-6 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight size={16} strokeWidth={2} />
            </div>
            {/* The hover background that slides up */}
            <div className="absolute inset-0 bg-[#FF6B35] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4">Cllero.</h3>
            <p className="text-white/50 text-xs leading-relaxed mb-6 max-w-xs">
              The all-in-one platform built for how modern gyms actually run. From the front desk to the boardroom, we power your growth.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Twitter</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[9px] mb-4 opacity-50">Ecosystem</h4>
            <ul className="space-y-2.5">
              {['Owner Panel', 'Trainer App', 'Member App', 'Dietitian Portal', 'Access Control'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#FF6B35] hover:translate-x-2 transition-all duration-300 inline-block text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[9px] mb-4 opacity-50">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Careers', 'Contact Sales', 'Press Kit', 'Partners'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#4ECDC4] hover:translate-x-2 transition-all duration-300 inline-block text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[9px] mb-4 opacity-50">Resources</h4>
            <ul className="space-y-2.5">
              {['Help Center', 'API Documentation', 'System Status', 'Privacy Policy', 'Terms of Service'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#A29BFE] hover:translate-x-2 transition-all duration-300 inline-block text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-white/10 text-white/40 text-[10px] font-medium">
          <p>© {new Date().getFullYear()} Cllero Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              All systems operational
            </div>
            <span>Designed in NY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
