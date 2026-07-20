import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LazyVideo = ({ src, className, style, ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const vid = containerRef.current.querySelector('video');
      if (vid) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                vid.play().catch(e => console.warn('Auto-play prevented:', e));
              } else {
                vid.pause();
              }
            });
          },
          { threshold: 0, rootMargin: '600px' } // Buffer range to start playing before visible
        );

        observer.observe(containerRef.current);

        return () => {
          observer.disconnect();
        };
      }
    }
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className || ''}`}
      style={style}
      dangerouslySetInnerHTML={{
        __html: `
          <video
            src="${src}"
            class="w-full h-full object-cover transition-opacity duration-300"
            preload="auto"
            muted="muted"
            loop="loop"
            playsinline="playsinline"
            autoplay="autoplay"
          ></video>
        `
      }}
    />
  );
};

export default LazyVideo;
