import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LazyVideo = ({ src, className, style, isPlaying, ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const vid = containerRef.current.querySelector('video');
      if (vid) {
        // If the parent explicitly controls playback, override the observer
        if (isPlaying !== undefined) {
          if (isPlaying) {
            vid.play().catch(e => console.warn('Forced play prevented:', e));
          } else {
            vid.pause();
          }
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                vid.dataset.isVisible = "true";
                vid.play().catch(e => console.warn('Auto-play prevented:', e));
              } else {
                vid.dataset.isVisible = "false";
                // VERY IMPORTANT: iOS Safari bug fix.
                // Do NOT call pause() if the video hasn't loaded any data (readyState === 0).
                // Doing so causes iOS to permanently abort the network request!
                if (vid.readyState >= 2) {
                  vid.pause();
                } else {
                  // If it hasn't loaded yet, attach a one-time listener to pause it once it's safe
                  vid.addEventListener('canplay', () => {
                    // Re-check if it's still off-screen before pausing
                    if (vid.dataset.isVisible === "false") {
                       vid.pause();
                    }
                  }, { once: true });
                }
              }
            });
          },
          { threshold: 0, rootMargin: '200px' } // Reduced rootMargin to save decoders
        );

        observer.observe(containerRef.current);

        return () => {
          observer.disconnect();
        };
      }
    }
  }, [src, isPlaying]);

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
