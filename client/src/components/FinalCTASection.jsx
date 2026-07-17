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
    <div ref={containerRef} className="w-full h-full min-h-[80vh]">
      <VideoBackground src="/src/assets/videos/16.mp4" className="min-h-[80vh]">
        <div className="flex flex-col items-center md:items-start justify-center h-full text-center md:text-left max-w-4xl px-6 md:pr-12 md:pl-[300px] lg:pl-[380px] mx-auto md:mx-0">
          <h2 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tighter text-white mb-10 md:mb-12 leading-[0.9]">
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
      </VideoBackground>
    </div>
  );
};

export default FinalCTASection;
