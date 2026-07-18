import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './shared/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { video: '/videos/02-problem-manual-entry.mp4', label: 'Manual Entry', desc: 'Wasting countless hours typing data into disconnected spreadsheets instead of growing your business.' },
  { video: '/videos/03-problem-phone-calls.mp4', label: 'Endless Calls', desc: 'Constantly interrupting training sessions to answer basic questions that should be automated.' },
  { video: '/videos/04-problem-messages.mp4', label: 'Unanswered Messages', desc: 'Losing high-value leads simply because nobody is actively managing the main inbox.' },
  { video: '/videos/05-problem-confused.mp4', label: 'Fragmented Tools', desc: 'Juggling 5 different expensive subscriptions just to run your daily operations.' },
];

const ProblemSection = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const videosRef = useRef([]);
  const textsRef = useRef([]);
  const indexRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Desktop Layout Animation applied everywhere
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%', // 400vh of scrolling for 4 steps
          pin: stickyRef.current,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Initial setup for the crossfade layers
      gsap.set(videosRef.current, { opacity: 0, scale: 1.05 });
      gsap.set(videosRef.current[0], { opacity: 1, scale: 1 });

      gsap.set(textsRef.current, { opacity: 0, y: 30 });
      gsap.set(textsRef.current[0], { opacity: 1, y: 0 });

      gsap.set(indexRefs.current, { opacity: 0.25, x: 0 });
      gsap.set(indexRefs.current[0], { opacity: 1, x: 12 });

      // Build the timeline sequence
      problems.forEach((_, i) => {
        if (i === 0) {
          // Just add a tiny pause at the start
          tl.to({}, { duration: 0.5 });
          return;
        }

        const stepLabel = `step${i}`;

        tl.to(videosRef.current[i - 1], { opacity: 0, scale: 0.95, duration: 1, ease: 'power2.inOut' }, stepLabel)
          .to(videosRef.current[i], { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, stepLabel)

          .to(textsRef.current[i - 1], { opacity: 0, y: -30, duration: 1, ease: 'power2.inOut' }, stepLabel)
          .to(textsRef.current[i], { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, stepLabel)

          .to(indexRefs.current[i - 1], { opacity: 0.25, x: 0, duration: 1, ease: 'power2.inOut' }, stepLabel)
          .to(indexRefs.current[i], { opacity: 1, x: 12, duration: 1, ease: 'power2.out' }, stepLabel);

        // Add a pause where the step sits comfortably before moving to the next
        tl.to({}, { duration: 0.8 });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#f5f5f7] overflow-visible">
      {/* Mobile viewport expansion bleed to prevent black gaps at the bottom */}
      <div className="absolute top-0 left-0 w-full h-[130vh] bg-[#f5f5f7] -z-10 pointer-events-none" />

      {/* ── SHOPIFY EDITIONS STYLE LAYOUT APPLIED GLOBALLY ── */}
      <div ref={stickyRef} className="flex h-[100dvh] w-full flex-col justify-start lg:justify-center px-6 lg:px-12 lg:pl-[380px] overflow-hidden pt-24 pb-8 lg:pt-0 lg:pb-0">

        {/* Editorial Header */}
        <div className="relative lg:absolute top-0 lg:top-16 left-0 lg:left-[380px] w-full mb-4 lg:mb-0 z-10">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-2 lg:mb-4">
            II — The Problem
          </p>
          <h2 className="text-4xl lg:text-7xl font-serif font-bold text-black tracking-tighter leading-none">
            Managing <span className="italic font-light text-black/60">Chaos.</span>
          </h2>
        </div>

        {/* Central Stage */}
        <div className="flex flex-col lg:flex-row w-full flex-1 lg:h-[60%] mt-4 lg:mt-20 items-center justify-start lg:justify-between gap-4 lg:gap-10 lg:pr-12">

          {/* 1. Sticky Index */}
          <div className="w-full lg:w-[18%] flex flex-row lg:flex-col justify-center lg:justify-start gap-8 lg:gap-8 border-b lg:border-b-0 lg:border-l border-black/10 pb-4 lg:pb-0 lg:pl-6 order-1 shrink-0">
            {problems.map((prob, i) => (
              <div key={i} ref={el => indexRefs.current[i] = el} className="flex flex-col items-center lg:items-start gap-1 will-change-transform">
                <span className="text-[12px] lg:text-[10px] font-mono text-[#FF6B35]">0{i + 1}</span>
                <span className="hidden lg:block text-xs lg:text-sm font-semibold tracking-wide uppercase text-black">
                  {prob.label}
                </span>
              </div>
            ))}
          </div>

          {/* 2. Central 3D Canvas (Videos) */}
          <div className="w-full lg:flex-1 max-w-[700px] h-[35vh] lg:h-full relative rounded-2xl lg:rounded-[2rem] overflow-hidden bg-black shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-black/5 order-2 shrink-0">
            {problems.map((prob, i) => (
              <div key={i} ref={el => videosRef.current[i] = el} className="absolute inset-0 w-full h-full will-change-transform">
                <LazyVideo src={prob.video} className="w-full h-full object-cover opacity-90" />
                {/* Subtle gradient overlay to make it look premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>

          {/* 3. Right Description Text */}
          <div className="w-full lg:w-[28%] relative flex-1 lg:h-40 flex items-center justify-center lg:justify-start order-3 overflow-hidden lg:overflow-visible shrink-0 min-h-[80px]">
            {problems.map((prob, i) => (
              <div key={i} ref={el => textsRef.current[i] = el} className="absolute inset-0 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left will-change-transform">
                <p className="text-[15px] md:text-lg lg:text-2xl font-serif font-light leading-[1.5] lg:leading-[1.6] text-black/85 px-4 lg:px-0">
                  "{prob.desc}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>



    </section>
  );
};

export default ProblemSection;
