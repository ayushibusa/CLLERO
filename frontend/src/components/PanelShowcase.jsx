import React, { useEffect, useRef, useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observe the main container to play/pause videos safely
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const addToTexts = (el) => {
    if (el && !textsRef.current.includes(el)) textsRef.current.push(el);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // ── 3D Spiral Carousel Applied Globally ──
      // Initial Text State
      gsap.set(textsRef.current, { autoAlpha: 0, y: 40 });
      gsap.set(textsRef.current[0], { autoAlpha: 1, y: 0 });

      // Set the carousel back so the front card is perfectly flush and properly sized
      gsap.set(carouselRef.current, { z: -350 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1200%', // Significantly increased scroll distance to prevent skipping cards on fast scroll
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            let newIndex = 0;
            if (progress < 0.25) newIndex = 0;
            else if (progress < 0.5) newIndex = 1;
            else if (progress < 0.75) newIndex = 2;
            else newIndex = 3;
            
            if (activeIndexRef.current !== newIndex) {
              activeIndexRef.current = newIndex;
              setActiveIndex(newIndex);
            }
          }
        }
      });

      // Label for the first card
      tl.addLabel('card0');
      // Add a tiny pause at the start
      tl.to({}, { duration: 0.5 });

      // Build a mathematically perfect timeline for exact fraction snapping
      for (let i = 1; i < panels.length; i++) {
        const stepLabel = `step${i}`;

        // Rotate the entire carousel
        tl.to(carouselRef.current, {
          rotationY: -i * 90,
          duration: 1,
          ease: 'power2.inOut'
        }, stepLabel);

        // Crossfade Text
        tl.to(textsRef.current[i - 1], {
          autoAlpha: 0,
          y: -40,
          duration: 1,
          ease: 'power2.inOut'
        }, stepLabel)
          .to(textsRef.current[i], {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          }, stepLabel);

        // Even pause duration to create perfect fractions in timeline
        tl.to({}, { duration: 0.5 });
      }



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="panels" className="relative w-full bg-[#f5f5f7] overflow-visible">
      {/* Mobile viewport expansion bleed to prevent black gaps at the bottom */}
      <div className="absolute top-0 left-0 w-full h-[130vh] bg-[#f5f5f7] -z-10 pointer-events-none" />

      {/* ── GLOBALLY APPLIED LAYOUT ── */}
      <div className="flex flex-col lg:flex-row h-[100dvh] lg:h-screen w-full justify-center md:justify-evenly lg:justify-start pt-[120px] pb-[40px] md:pt-0 md:pb-0 lg:pt-0 lg:pb-0 md:gap-0 lg:gap-0 overflow-hidden">

        {/* Left Side / Top: Sticky Text */}
        <div className="w-full flex-none lg:flex-1 lg:w-[45%] lg:h-full flex flex-col justify-center items-start md:items-center lg:items-start text-left md:text-center lg:text-left px-6 lg:pl-[380px] relative z-20 pb-12 md:pb-0 lg:pb-0">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-2 lg:mb-4">
            V — Ecosystem
          </p>
          <h2 className="text-4xl lg:text-7xl font-serif font-bold text-black tracking-tighter leading-none mb-6 lg:mb-16">
            Cllero <span className="italic font-light text-black/60">in Action.</span>
          </h2>

          <div className="relative w-full h-32 lg:h-48">
            {panels.map((panel, i) => (
              <div key={i} ref={addToTexts} className="absolute inset-0 w-full flex flex-col items-start md:items-center lg:items-start" style={{ willChange: 'transform, opacity, visibility' }}>
                <h3 className="text-2xl lg:text-4xl font-bold text-black mb-2 lg:mb-4 flex items-center gap-2 lg:gap-4">
                  <span className="text-xs lg:text-sm font-mono" style={{ color: panel.accent }}>0{i + 1}</span>
                  {panel.role}
                </h3>
                <h4 className="text-lg lg:text-xl font-bold text-black mb-2 lg:mb-3">{panel.title}</h4>
                <p className="text-sm lg:text-lg font-serif leading-[1.5] lg:leading-relaxed text-black/70 max-w-sm md:max-w-md pr-4 md:pr-0 lg:pr-0">
                  {panel.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side / Bottom: 3D Spiral Carousel */}
        <div className="w-full flex-none lg:flex-1 lg:w-[55%] lg:h-full flex items-center justify-center perspective-[2000px] z-10 px-6 lg:pl-12 pb-4 lg:pb-0">
          <div
            ref={carouselRef}
            className="relative w-[90vw] md:w-[70vw] lg:w-[35vw] max-w-[500px] md:max-w-[600px] lg:max-w-[500px] aspect-video transform-style-3d will-change-transform"
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
                <LazyVideo src={panel.video} className="w-full h-full object-cover opacity-90" isPlaying={isVisible && activeIndex === i} />
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
