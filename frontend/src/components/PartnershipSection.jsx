import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBackground from './shared/VideoBackground';

gsap.registerPlugin(ScrollTrigger);

const PartnershipSection = () => {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: true,
          pinSpacing: true,
        }
      });

      // Initial state: small pill on the right side
      gsap.set(videoWrapperRef.current, {
        clipPath: 'inset(40% 10% 40% 60% round 100px)',
      });

      // Expand clip-path to reveal the full video and fade out text
      tl.to(videoWrapperRef.current, {
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        ease: 'power2.inOut',
        duration: 1,
      }, 0)
        .to(textRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5,
        }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 w-full min-h-[100dvh] bg-[#f5f5f7] overflow-hidden flex flex-col justify-center">

      {/* Expanding Video Layer */}
      <div ref={videoWrapperRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <VideoBackground src="/videos/07-handshake.mp4" />
      </div>

      {/* Text Layer — visible before video expands */}
      <div ref={textRef} className="relative z-0 w-full px-6 md:px-12 md:pl-[300px] lg:pl-[380px] text-center md:text-left">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/60 mb-6">
          VII — Unification
        </p>
        <h2 className="text-5xl md:text-[6vw] leading-[0.9] font-serif font-bold text-black tracking-tighter mb-8">
          The Power of <br />
          <span className="italic opacity-90">Unification.</span>
        </h2>
        <p className="text-xl md:text-2xl font-light text-black/80 max-w-xl mx-auto md:mx-0">
          Bring your trainers, members, and management together into a single, cohesive ecosystem.
        </p>
      </div>

    </section>
  );
};

export default PartnershipSection;
