import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './shared/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const LogoRevealSection = () => {
  const sectionRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState('/videos/06-logo-reveal.mp4');

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setVideoSrc('/videos/06-logo-reveal-mobile.mp4');
      } else {
        setVideoSrc('/videos/06-logo-reveal.mp4');
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        src={videoSrc}
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
