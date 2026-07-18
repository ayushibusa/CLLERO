import React from 'react';
import { ArrowUpRight, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-[60] w-full bg-[#0a0a0a] text-white overflow-hidden pt-20 lg:pt-32 pb-12 px-6 md:px-12 md:pl-[300px] lg:pl-[380px] border-t border-white/5">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <h1 className="text-[25vw] font-serif font-black tracking-tighter whitespace-nowrap text-white">
          CLLERO.
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col">
        
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 lg:mb-32">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-serif font-bold tracking-tighter leading-[0.9] mb-6">
              Start your <br/>
              <span className="italic font-light text-white/50">evolution.</span>
            </h2>
            <p className="text-white/60 font-light text-lg lg:text-xl max-w-md">
              Join the hundreds of elite gyms already running on the Cllero ecosystem.
            </p>
          </div>
          <button className="group relative inline-flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 font-bold uppercase tracking-widest text-[10px] lg:text-xs">Request Demo</span>
            <div className="relative z-10 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight size={16} strokeWidth={2} />
            </div>
            {/* The hover background that slides up */}
            <div className="absolute inset-0 bg-[#FF6B35] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-6">Cllero.</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              The all-in-one platform built for how modern gyms actually run. From the front desk to the boardroom, we power your growth.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[10px] mb-8 opacity-50">Ecosystem</h4>
            <ul className="space-y-4">
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
            <h4 className="text-white font-mono uppercase tracking-widest text-[10px] mb-8 opacity-50">Company</h4>
            <ul className="space-y-4">
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
            <h4 className="text-white font-mono uppercase tracking-widest text-[10px] mb-8 opacity-50">Resources</h4>
            <ul className="space-y-4">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/10 text-white/40 text-xs font-medium">
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
