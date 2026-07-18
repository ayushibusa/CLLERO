import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './shared/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    role: 'Gym Owner',
    title: 'Total Control',
    description: 'Full revenue visibility, multi-branch analytics, staff payroll, and real-time performance insights — all from one powerful dashboard.',
    video: '/videos/08-panel-owner.mp4',
    accent: '#FF6B35',
  },
  {
    role: 'Trainer',
    title: 'Coach Smarter',
    description: 'Design custom workout plans, track client progress, manage attendance, and stay connected with live push notifications.',
    video: '/videos/09-panel-trainer.mp4',
    accent: '#4ECDC4',
  },
  {
    role: 'Member',
    title: 'Your Journey',
    description: 'QR-code check-ins, membership renewals, BMI and body tracking, diet plans, and personal achievement milestones.',
    video: '/videos/10-panel-member.mp4',
    accent: '#A29BFE',
  },
  {
    role: 'Dietitian',
    title: 'Fuel Results',
    description: 'Create personalised meal plans, log macros, generate progress reports, and document body transformations with photos.',
    video: '/videos/11-panel-dietitian.mp4',
    accent: '#55EFC4',
  },
];

const PanelShowcase = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const textsRef = useRef([]);
  textsRef.current = [];

  const addToTexts = (el) => {
    if (el && !textsRef.current.includes(el)) textsRef.current.push(el);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── DESKTOP: 3D Spiral Carousel ──
      mm.add('(min-width: 1024px)', () => {
        // Initial Text State
        gsap.set(textsRef.current, { opacity: 0, y: 40 });
        gsap.set(textsRef.current[0], { opacity: 1, y: 0 });

        // Set the carousel back so the front card is perfectly flush and properly sized
        gsap.set(carouselRef.current, { z: -350 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=400%',
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

        // Add a tiny pause at the start
        tl.to({}, { duration: 0.5 });

        panels.forEach((_, i) => {
          if (i === 0) return;
          const stepLabel = `step${i}`;

          // Rotate the entire carousel
          tl.to(carouselRef.current, {
            rotationY: -i * 90,
            duration: 1.5,
            ease: 'power3.inOut'
          }, stepLabel);

          // Crossfade Text
          tl.to(textsRef.current[i - 1], {
            opacity: 0,
            y: -40,
            duration: 0.7,
            ease: 'power2.inOut'
          }, `${stepLabel}`)
            .to(textsRef.current[i], {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out'
            }, `${stepLabel}+=0.5`);

          // Pause so user can read
          tl.to({}, { duration: 0.8 });
        });
      });

      // ── MOBILE: Fade up ──
      mm.add('(max-width: 1023px)', () => {
        gsap.utils.toArray('.mobile-panel').forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="panels" className="relative w-full bg-[#f5f5f7] overflow-hidden">

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden lg:flex h-screen w-full">

        {/* Left Side: Sticky Text */}
        <div className="w-[45%] h-full flex flex-col justify-center px-12 md:pl-[300px] lg:pl-[380px] relative z-20">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-4">
            V — Ecosystem
          </p>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-black tracking-tighter leading-none mb-16">
            Cllero <span className="italic font-light text-black/60">in Action.</span>
          </h2>

          <div className="relative w-full h-48">
            {panels.map((panel, i) => (
              <div key={i} ref={addToTexts} className="absolute inset-0 w-full flex flex-col will-change-transform">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-4">
                  <span className="text-sm font-mono" style={{ color: panel.accent }}>0{i + 1}</span>
                  {panel.role}
                </h3>
                <h4 className="text-xl font-bold text-black mb-3">{panel.title}</h4>
                <p className="text-base lg:text-lg font-serif leading-relaxed text-black/70 max-w-sm">
                  {panel.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 3D Spiral Carousel */}
        <div className="w-[55%] h-full flex items-center justify-center perspective-[2000px] z-10 pl-12">
          <div
            ref={carouselRef}
            className="relative w-[35vw] max-w-[500px] aspect-video transform-style-3d will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {panels.map((panel, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] bg-black border border-white/5"
                style={{
                  transform: `rotateY(${i * 90}deg) translateZ(350px)`,
                  backfaceVisibility: 'hidden', // Hides the back of cards perfectly
                }}
              >
                <LazyVideo src={panel.video} className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                {/* Subtle border glow based on accent color */}
                <div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${panel.accent}30` }} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="lg:hidden flex flex-col px-6 md:pl-[320px] md:pr-12 py-12 lg:py-24 w-full">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-4">
          V — Ecosystem
        </p>
        <h2 className="text-5xl font-serif font-bold text-black tracking-tight mb-16 leading-none">
          Cllero <br /><span className="italic font-light text-black/60">in Action.</span>
        </h2>

        <div className="flex flex-col gap-20">
          {panels.map((panel, i) => (
            <div key={i} className="mobile-panel flex flex-col gap-6">
              <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black">
                <LazyVideo src={panel.video} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-xs font-mono" style={{ color: panel.accent }}>0{i + 1}</span>
                  {panel.role}
                </h3>
                <h4 className="text-xl font-bold text-black mb-2">{panel.title}</h4>
                <p className="text-black/70 text-base font-serif leading-relaxed">
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PanelShowcase;
