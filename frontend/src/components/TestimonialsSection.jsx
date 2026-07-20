import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './shared/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    role: 'Gym Owner',
    name: 'Sarah Jenkins',
    quote: 'Cllero completely transformed how we operate. Everything is just in one place now. It saves us countless hours every single week.',
    video: '/videos/13.mp4',
    accent: '#FF6B35'
  },
  {
    role: 'Head Trainer',
    name: 'Marcus Thorne',
    quote: 'I spend less time doing paperwork and more time actually training clients. The progress tracking is the best I have ever used.',
    video: '/videos/14.mp4',
    accent: '#4ECDC4'
  },
  {
    role: 'Member',
    name: 'Elena Rodriguez',
    quote: 'Booking classes and tracking my progress is so seamless. I love the app, it makes going to the gym an absolute pleasure.',
    video: '/videos/15.mp4',
    accent: '#A29BFE'
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeIndexRef = useRef(0);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '200px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      // Apply the stacking animation to all screen sizes
      // Desktop Stacking Animation
      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 10,
          y: i === 0 ? 0 : '100%',
          scale: 1,
          opacity: i === 0 ? 1 : 0
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2000', // scroll distance
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            let newIndex = 0;
            if (progress < 0.33) newIndex = 0;
            else if (progress < 0.66) newIndex = 1;
            else newIndex = 2;
            
            if (activeIndexRef.current !== newIndex) {
              activeIndexRef.current = newIndex;
              setActiveIndex(newIndex);
            }
          }
        },
      });

      for (let i = 0; i < cards.length - 1; i++) {
        const current = cards[i];
        const next = cards[i + 1];

        // Push current card back and dim it
        tl.to(current, {
          scale: 0.92 - (i * 0.02),
          y: -30 - (i * 15),
          opacity: 0.4,
          duration: 1,
          ease: 'power2.inOut'
        }, `step${i}`)

          // Slide next card up from bottom
          .to(next, {
            y: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          }, `step${i}`);
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-40 w-full bg-[#f5f5f7] overflow-hidden min-h-[100dvh] flex items-center">
      <div className="w-full flex flex-col lg:pl-[380px] px-6 py-12 lg:py-20">

        {/* Header */}
        <div className="max-w-3xl mb-12 relative z-20">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50 mb-4">
            VI — Real Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-[1.05]">
            Don't just take <br className="hidden lg:block" />
            <span className="italic text-black/70">our word for it.</span>
          </h2>
        </div>

        {/* Testimonial Cards Container */}
        {/* Significantly reduced height and max-width for a sleeker, tighter UI */}
        <div className="relative w-full max-w-4xl h-[450px] md:h-[400px] lg:h-[380px]">

          <div className="block w-full h-full perspective-[1200px]">
            {testimonials.map((test, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row items-stretch"
                style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              >
                {/* Left: Video Area (Compact 35% width) */}
                <div className="w-full lg:w-[35%] h-[240px] lg:h-full relative overflow-hidden bg-black flex-shrink-0">
                  <LazyVideo
                    src={test.video}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    isPlaying={isVisible && activeIndex === i}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span
                      className="inline-block px-3 py-1.5 rounded-full text-[0.6rem] font-bold tracking-[0.18em] uppercase mb-2 text-white/90 backdrop-blur-md"
                      style={{ backgroundColor: `${test.accent}40`, border: `1px solid ${test.accent}80` }}
                    >
                      {test.role}
                    </span>
                    <h4 className="text-lg lg:text-xl font-bold text-white tracking-wide">{test.name}</h4>
                  </div>
                </div>

                {/* Right: Quote Area (65% width) */}
                <div className="w-full lg:w-[65%] p-6 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white h-[210px] lg:h-full">
                  <span className="absolute top-4 left-6 lg:top-8 lg:left-10 text-[4rem] md:text-[5rem] lg:text-[7rem] font-serif leading-none text-black/5 select-none pointer-events-none">
                    "
                  </span>
                  <h3 className="text-base md:text-xl lg:text-2xl font-serif font-light leading-[1.4] md:leading-[1.6] text-black/80 relative z-10 mt-2">
                    "{test.quote}"
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
