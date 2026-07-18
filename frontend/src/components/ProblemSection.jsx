import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './shared/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { video: '/src/assets/videos/02-problem-manual-entry.mp4', label: 'Manual Entry', desc: 'Wasting countless hours typing data into disconnected spreadsheets instead of growing your business.' },
  { video: '/src/assets/videos/03-problem-phone-calls.mp4', label: 'Endless Calls', desc: 'Constantly interrupting training sessions to answer basic questions that should be automated.' },
  { video: '/src/assets/videos/04-problem-messages.mp4', label: 'Unanswered Messages', desc: 'Losing high-value leads simply because nobody is actively managing the main inbox.' },
  { video: '/src/assets/videos/05-problem-confused.mp4', label: 'Fragmented Tools', desc: 'Juggling 5 different expensive subscriptions just to run your daily operations.' },
];

const ProblemSection = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const videosRef = useRef([]);
  const textsRef = useRef([]);
  const indexRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
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
      });

      mm.add('(max-width: 1023px)', () => {
        // Mobile layout simple fade
        gsap.utils.toArray('.mobile-prob').forEach((el) => {
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
    <section ref={containerRef} className="relative w-full bg-[#f5f5f7]">

      {/* ── DESKTOP SHOPIFY EDITIONS STYLE LAYOUT ── */}
      <div ref={stickyRef} className="hidden lg:flex h-screen w-full flex-col justify-center px-12 lg:pl-[380px] overflow-hidden">

        {/* Editorial Header */}
        <div className="absolute top-16 left-12 lg:left-[380px]">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-4">
            II — The Problem
          </p>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-black tracking-tighter leading-none">
            Managing <span className="italic font-light text-black/60">Chaos.</span>
          </h2>
        </div>

        {/* Central Stage */}
        <div className="flex w-full h-[55%] lg:h-[60%] mt-20 items-center justify-between gap-10 pr-12">

          {/* 1. Left Sticky Index */}
          <div className="w-[18%] flex flex-col gap-8 border-l border-black/10 pl-6">
            {problems.map((prob, i) => (
              <div key={i} ref={el => indexRefs.current[i] = el} className="flex flex-col gap-1 will-change-transform">
                <span className="text-[10px] font-mono text-[#FF6B35]">0{i + 1}</span>
                <span className="text-xs lg:text-sm font-semibold tracking-wide uppercase text-black">
                  {prob.label}
                </span>
              </div>
            ))}
          </div>

          {/* 2. Central 3D Canvas (Videos) */}
          <div className="flex-1 max-w-[700px] h-full relative rounded-[2rem] overflow-hidden bg-black shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-black/5">
            {problems.map((prob, i) => (
              <div key={i} ref={el => videosRef.current[i] = el} className="absolute inset-0 w-full h-full will-change-transform">
                <LazyVideo src={prob.video} className="w-full h-full object-cover opacity-90" />
                {/* Subtle gradient overlay to make it look premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>

          {/* 3. Right Description Text */}
          <div className="w-[28%] relative h-40">
            {problems.map((prob, i) => (
              <div key={i} ref={el => textsRef.current[i] = el} className="absolute inset-0 w-full flex flex-col justify-center will-change-transform">
                <p className="text-lg lg:text-2xl font-serif font-light leading-[1.6] text-black/85">
                  "{prob.desc}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="lg:hidden flex flex-col px-6 md:pl-[320px] md:pr-12 py-12 lg:py-24 w-full">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-4">
          II — The Problem
        </p>
        <h2 className="text-5xl font-serif font-bold text-black tracking-tight mb-16 leading-none">
          Managing <br /><span className="italic font-light text-black/60">Chaos.</span>
        </h2>

        <div className="flex flex-col gap-20">
          {problems.map((prob, i) => (
            <div key={i} className="mobile-prob flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-black">
                <LazyVideo src={prob.video} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3 flex items-center gap-3">
                  <span className="text-xs font-mono text-[#FF6B35]">0{i + 1}</span>
                  {prob.label}
                </h3>
                <p className="text-black/70 text-lg font-serif font-light leading-relaxed">
                  "{prob.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProblemSection;
