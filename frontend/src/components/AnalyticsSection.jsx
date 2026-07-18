import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 4500 },
  { name: 'Wed', revenue: 4200 },
  { name: 'Thu', revenue: 5800 },
  { name: 'Fri', revenue: 6200 },
  { name: 'Sat', revenue: 8000 },
  { name: 'Sun', revenue: 8500 },
];

const Counter = ({ value, label, prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-left border-l border-white/10 pl-8">
      <div className="text-[4vw] font-serif font-bold text-accent leading-none mb-4 drop-shadow-xl">
        {prefix}{count.toLocaleString()}
      </div>
      <h4 className="text-white/70 uppercase tracking-widest text-sm">{label}</h4>
    </div>
  );
};

const AnalyticsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        x: '-20vw',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-40 bg-surface overflow-hidden relative">

      <div className="absolute top-[20%] whitespace-nowrap opacity-5 pointer-events-none" ref={titleRef}>
        <h2 className="text-[15vw] font-serif font-bold text-white tracking-tighter uppercase pl-[20vw]">
          Know Your Gym.
        </h2>
      </div>

      <div className="pl-[350px] lg:pl-[450px] pr-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
        <div className="w-full lg:w-1/2 space-y-16">
          <Counter value={42500} label="Monthly Revenue" prefix="$" />
          <Counter value={842} label="Active Members" />
        </div>

        <div className="w-full lg:w-1/2 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF6B00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="revenue" stroke="#FF6B00" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
