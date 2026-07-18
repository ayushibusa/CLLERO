import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBackground from './shared/VideoBackground';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ openDemoModal }) => {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const contentGroupRef = useRef(null);

  const [videoSrc, setVideoSrc] = React.useState('/src/assets/videos/01-hero-enter-gym.mp4');

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setVideoSrc('/src/assets/videos/01-hero-enter-gym-mobile.mp4');
      } else {
        setVideoSrc('/src/assets/videos/01-hero-enter-gym.mp4');
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      // Desktop: entrance + scroll-scrub to side
      mm.add('(min-width: 768px)', () => {
        // Entrance animation
        gsap.fromTo(
          [headlineRef.current, subtextRef.current],
          { opacity: 0, y: 50, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.3,
            ease: 'power3.out',
            stagger: 0.25,
            delay: 0.2,
          }
        );

        // Scroll animation: move to side and fade out
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=1000', // scroll for 1000px to complete
            pin: true,
            scrub: 1,
          },
        });

        tl.to(contentGroupRef.current, {
          x: '-25vw', // move to left side
          scale: 0.7,
          opacity: 0, // "and then gone"
          ease: 'power1.inOut',
        });
      });

      // Mobile: just entrance animation, no pinning/complex scroll
      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          [headlineRef.current, subtextRef.current],
          { opacity: 0, y: 40, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-section relative w-screen overflow-hidden m-0 p-0 h-[100dvh]"
    >
      <VideoBackground src={videoSrc} objectFit="cover">

        {/* Container is dead center initially */}
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">

          <div ref={contentGroupRef} className="flex flex-col items-center justify-center">
            <h1
              ref={headlineRef}
              className="text-[11vw] md:text-[6.5vw] font-serif font-bold text-white tracking-tighter leading-[0.92] drop-shadow-2xl mb-6"
            >
              Every Great Gym Starts<br />
              <span className="italic opacity-90">With One Vision.</span>
            </h1>

            <div ref={subtextRef} className="flex flex-col items-center gap-5">
              <p className="text-lg md:text-xl text-white/75 font-light max-w-lg drop-shadow-md">
                Managing it should be just as powerful.
              </p>
              <button
                onClick={openDemoModal}
                className="pointer-events-auto mt-2 px-9 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-xl transition-all duration-200"
              >
                Book a Demo
              </button>
            </div>
          </div>

        </div>
      </VideoBackground>
    </div>
  );
};

export default HeroSection;
