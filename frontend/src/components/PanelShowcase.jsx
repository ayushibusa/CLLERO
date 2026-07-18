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
      // ── 3D Spiral Carousel Applied Globally ──
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



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="panels" className="relative w-full bg-[#f5f5f7] overflow-visible">
      {/* Mobile viewport expansion bleed to prevent black gaps at the bottom */}
      <div className="absolute top-0 left-0 w-full h-[130vh] bg-[#f5f5f7] -z-10 pointer-events-none" />

      {/* ── GLOBALLY APPLIED LAYOUT ── */}
      <div className="flex flex-col lg:flex-row h-[100dvh] lg:h-screen w-full pt-20 lg:pt-0">

        {/* Left Side / Top: Sticky Text */}
        <div className="w-full flex-1 lg:w-[45%] lg:h-full flex flex-col justify-center px-6 md:pl-[300px] lg:pl-[380px] relative z-20 pb-4 lg:pb-0">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-2 lg:mb-4">
            V — Ecosystem
          </p>
          <h2 className="text-4xl lg:text-7xl font-serif font-bold text-black tracking-tighter leading-none mb-6 lg:mb-16">
            Cllero <span className="italic font-light text-black/60">in Action.</span>
          </h2>

          <div className="relative w-full h-32 lg:h-48">
            {panels.map((panel, i) => (
              <div key={i} ref={addToTexts} className="absolute inset-0 w-full flex flex-col will-change-transform">
                <h3 className="text-2xl lg:text-4xl font-bold text-black mb-2 lg:mb-4 flex items-center gap-2 lg:gap-4">
                  <span className="text-xs lg:text-sm font-mono" style={{ color: panel.accent }}>0{i + 1}</span>
                  {panel.role}
                </h3>
                <h4 className="text-lg lg:text-xl font-bold text-black mb-2 lg:mb-3">{panel.title}</h4>
                <p className="text-sm lg:text-lg font-serif leading-[1.5] lg:leading-relaxed text-black/70 max-w-sm pr-4 lg:pr-0">
                  {panel.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side / Bottom: 3D Spiral Carousel */}
        <div className="w-full flex-1 lg:w-[55%] lg:h-full flex items-center justify-center perspective-[2000px] z-10 px-6 lg:pl-12 pb-4 lg:pb-0">
          <div
            ref={carouselRef}
            className="relative w-[90vw] lg:w-[35vw] max-w-[500px] aspect-video transform-style-3d will-change-transform"
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



    </section>
  );
};

export default PanelShowcase;
