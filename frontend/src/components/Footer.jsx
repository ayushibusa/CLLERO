import React from 'react';

const sections = [
  { id: 'hero', label: 'Vision' },
  { id: 'problem', label: 'Problem' },
  { id: 'logo', label: 'Identity' },
  { id: 'partnership', label: 'Partnership' },
  { id: 'panels', label: 'Ecosystem' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Demo' },
];

const Footer = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-[60] w-full bg-[#0a0a0a] text-white py-12 px-6 lg:px-12 lg:pl-[380px] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between items-center gap-8">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center xl:justify-start gap-x-8 gap-y-4">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="text-white/60 hover:text-white transition-colors text-xs lg:text-sm font-medium tracking-widest uppercase"
            >
              {sec.label}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-white/30 text-[10px] uppercase tracking-widest text-center xl:text-right shrink-0">
          Admin@cllero.com
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
