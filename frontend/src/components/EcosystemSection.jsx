import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EcosystemSection = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute('autoplay', 'true');
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('muted', 'true');
    }

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=350%', // 350vh of scroll distance for the cinematic wipe
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // 1. Initial State: Video covers the entire screen, text is massive and hidden
      gsap.set(videoWrapperRef.current, { scale: 1, borderRadius: '0px' });
      gsap.set(textRef.current, { opacity: 0, scale: 1.2, y: 50 });
      gsap.set(subtextRef.current, { opacity: 0, y: 40 });

      // 2. Timeline sequence
      tl.to(textRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      })
        .to(textRef.current, {
          opacity: 0,
          y: -40,
          scale: 0.95,
          duration: 0.8,
          ease: 'power2.inOut'
        }, "+=0.6") // Hold the massive text for a moment before fading it out

        // 3. Shrink the full-screen video into a cinematic, shadowed frame using scale (hardware accelerated)
        .to(videoWrapperRef.current, {
          scale: window.innerWidth < 768 ? 0.85 : 0.65, // Dynamic scale based on device
          borderRadius: '32px', // In scaled context, border-radius applies nicely
          duration: 1.5,
          ease: 'power3.inOut'
        }, "-=0.2") // Start shrinking slightly before text completely vanishes

        // 4. Fade in the subtext underneath the newly framed video
        .to(subtextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        }, "-=0.4")

        // 5. Hold for a moment to let the user read before unpinning
        .to({}, { duration: 0.6 });

      // Tie video currentTime to the timeline for buttery smooth scrub inertia
      if (videoRef.current) {
        videoRef.current.onloadedmetadata = function () {
          tl.to(videoRef.current, {
            currentTime: videoRef.current.duration,
            duration: tl.duration(),
            ease: 'none'
          }, 0);
        };
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="ecosystem" className="relative w-full h-screen bg-[#f5f5f7] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Cinematic Video Canvas ── 
          Anchored to the exact center. Starts full screen, shrinks to a card via scale. */}
      <div
        ref={videoWrapperRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.25)] bg-black"
        style={{ willChange: 'transform, border-radius' }}
      >
        <video
          ref={videoRef}
          src="/videos/12-ecosystem-merge.mp4"
          className="w-full h-full object-cover opacity-90"
          preload="auto"
          muted
          playsInline
        />
        {/* Subtle dark overlay for premium contrast */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* ── Massive Reveal Typography ── */}
      <div ref={textRef} className="relative z-20 pointer-events-none text-center px-4 w-full lg:pl-[380px]">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase text-white/70 mb-6 drop-shadow-md">
          VI — Unification
        </p>
        <h2 className="text-6xl md:text-8xl lg:text-[11rem] leading-[0.95] font-serif font-bold text-white tracking-tighter drop-shadow-2xl">
          Complete <br />
          <span className="italic font-light text-white/90">Unification.</span>
        </h2>
      </div>

      {/* ── Descriptive Subtext (Appears below the shrunk video) ── */}
      <div
        ref={subtextRef}
        className="absolute z-0 bottom-[6%] lg:bottom-[10%] text-center max-w-3xl px-6 lg:pl-[400px] flex flex-col items-center"
      >
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/40 mb-4">
          VI — Unification
        </p>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-black/80 leading-[1.6]">
          No more disjointed apps. Every role in your gym operates from the exact same source of truth.
        </h3>
      </div>

    </div>
  );
};

export default EcosystemSection;
