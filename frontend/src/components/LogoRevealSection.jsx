import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './shared/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const LogoRevealSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="logo" ref={sectionRef} className="relative z-10 min-h-[100dvh] w-full bg-[#111] overflow-hidden">

      {/* Raw video — direct tag with no wrapper to prevent any blur/scale */}
      <LazyVideo
        src="/src/assets/videos/06-logo-reveal.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center' }}
      />

      {/* Subtle top gradient for text legibility only */}
      <div
        className="absolute top-0 left-0 w-full h-40 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)' }}
      />
    </div>
  );
};

export default LogoRevealSection;
