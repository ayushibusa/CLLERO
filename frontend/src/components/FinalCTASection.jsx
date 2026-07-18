import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBackground from './shared/VideoBackground';

gsap.registerPlugin(ScrollTrigger);

const FinalCTASection = ({ openDemoModal }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // Reveal animation for the text and button on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      // Split the text manually for a line-by-line stagger effect
      const lines = textRef.current.children;

      tl.fromTo(lines,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      )
        .fromTo(buttonRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.5)'
          },
          '-=0.4'
        );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh]">
      {/* Background Videos */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <VideoBackground src="/videos/16.mp4" className="hidden lg:block w-full h-full" objectFit="cover" />
        <VideoBackground src="/videos/download (1).mp4" className="block lg:hidden w-full h-full" objectFit="cover" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center lg:items-start justify-center h-full text-center lg:text-left max-w-4xl px-6 lg:pr-12 lg:pl-[380px] mx-auto lg:mx-0">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-4 lg:mb-6">Cllero Software</p>
        <h2 ref={textRef} className="text-4xl lg:text-7xl font-serif font-bold tracking-tighter text-white mb-10 lg:mb-12 leading-[0.9]">
          <div className="overflow-hidden"><span className="block">Your Gym Deserves</span></div>
          <div className="overflow-hidden"><span className="block">More Than Software.</span></div>
          <div className="overflow-hidden mt-4"><span className="block italic text-accent">It Deserves Cllero.</span></div>
        </h2>

        <div ref={buttonRef}>
          <button
            onClick={openDemoModal}
            className="px-12 py-6 bg-white text-background text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Book Your Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
