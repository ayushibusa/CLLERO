import React, { useEffect, useState, useCallback } from 'react';

const sections = [
  { roman: 'I', id: 'hero', label: 'Vision', theme: 'dark' },
  { roman: 'II', id: 'problem', label: 'Problem', theme: 'light' },
  { roman: 'III', id: 'logo', label: 'Identity', theme: 'dark' },
  { roman: 'IV', id: 'partnership', label: 'Partnership', theme: 'light' },
  { roman: 'V', id: 'panels', label: 'Ecosystem', theme: 'light' },
  { roman: 'VI', id: 'testimonials', label: 'Testimonials', theme: 'light' },
  { roman: 'VII', id: 'pricing', label: 'Pricing', theme: 'light' },
  { roman: 'VIII', id: 'contact', label: 'Demo', theme: 'dark' },
];

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Derive whether the current section has a light or dark background
  const currentSection = sections.find(s => s.id === activeSection) || sections[0];
  const isLight = currentSection.theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollTo = useCallback((id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }, 100);
  }, []);

  // Dynamic colour tokens based on current section theme
  const textColor = isLight ? 'text-black' : 'text-white';
  const dotActive = isLight ? 'bg-black' : 'bg-white';
  const dotInactive = isLight ? 'bg-black/30' : 'bg-white/40';
  const opacityActive = 'opacity-100';
  const opacityInact = isLight ? 'opacity-40 hover:opacity-70' : 'opacity-35 hover:opacity-75';

  return (
    <>
      {/* ── Mobile: top bar with hamburger ── */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full px-5 py-4 flex items-center justify-between z-50 transition-colors duration-300 backdrop-blur-lg border-b ${isLight ? 'bg-[#f5f5f7]/85 border-black/5' : 'bg-black/50 border-white/5'
          }`}
      >
        <div
          className="pointer-events-auto transition-colors duration-300"
          style={{ color: isLight ? '#000' : '#fff' }}
        >
          <p className="text-base font-bold tracking-tight leading-none">Cllero</p>
          <p className="text-[9px] uppercase tracking-[0.18em] opacity-60 mt-0.5">Management Edition</p>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="pointer-events-auto p-2 z-[60] transition-colors duration-300"
          style={{ color: isLight ? '#000' : '#fff' }}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
              style={{ backgroundColor: isLight ? '#000' : '#fff' }}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`}
              style={{ backgroundColor: isLight ? '#000' : '#fff' }}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
              style={{ backgroundColor: isLight ? '#000' : '#fff' }}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile: full-screen overlay menu ── */}
      <div className={`md:hidden fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl transition-all duration-300 flex flex-col ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex-1 flex flex-col justify-center px-8 py-20">
          <nav>
            <ul className="space-y-5">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollTo(sec.id)}
                      className={`flex items-center gap-4 w-full text-left transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'}`}
                    >
                      <span className={`shrink-0 rounded-full transition-all duration-300 ${isActive ? 'w-2 h-2 bg-accent' : 'w-1.5 h-1.5 bg-white/40'}`} />
                      <span className="w-8 shrink-0 text-xs font-serif italic opacity-70 text-white">{sec.roman}</span>
                      <span className={`text-lg tracking-wide text-white ${isActive ? 'font-semibold' : 'font-normal'}`}>{sec.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="px-8 pb-8">
          <p className="text-[9px] uppercase tracking-widest opacity-30 text-white">Admin@cllero.com</p>
        </div>
      </div>

      {/* ── Desktop: permanent left sidebar ── */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] lg:w-[340px] flex-col px-10 lg:px-12 py-10 z-50 pointer-events-none transition-colors duration-500">

        {/* Brand */}
        <div className={`pointer-events-auto transition-colors duration-500 ${textColor}`}>
          <h2 className="text-2xl font-bold tracking-tight leading-none">Cllero</h2>
          <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 mt-1.5">Management Edition</p>
        </div>

        {/* Navigation — vertically centered */}
        <nav className={`pointer-events-auto flex-1 flex flex-col justify-center transition-colors duration-500 ${textColor}`}>
          <ul className="space-y-3.5">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollTo(sec.id)}
                    className={`group flex items-center gap-3 w-full text-left transition-all duration-300 ${isActive ? opacityActive : opacityInact
                      }`}
                  >
                    {/* Active indicator dot */}
                    <span className={`shrink-0 rounded-full transition-all duration-300 ${isActive ? `w-1.5 h-1.5 ${dotActive}` : `w-1 h-1 ${dotInactive}`
                      }`} />
                    {/* Roman numeral */}
                    <span className="w-7 shrink-0 text-[10px] font-serif italic opacity-70">
                      {sec.roman}
                    </span>
                    {/* Label */}
                    <span className={`text-sm tracking-wide ${isActive ? 'font-semibold' : 'font-normal'}`}>
                      {sec.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Copyright */}
        <div className={`pointer-events-auto transition-colors duration-500 ${textColor}`}>
          <p className="text-[9px] uppercase tracking-widest opacity-40">Admin@cllero.com</p>
        </div>
      </aside>
    </>
  );
};

export default StickyNav;
