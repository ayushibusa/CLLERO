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
        // Force play on mount to ensure iOS Safari doesn't just show the poster image
        vid.play().catch(e => console.warn('Forced autoplay prevented:', e));
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
