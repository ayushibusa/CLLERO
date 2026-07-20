import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoBackground = ({ src, children, className = '', videoClassName = '', autoPlay = true, hoverPlay = false, objectFit = 'cover', objectPosition = 'center', overlayStyle }) => {
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (autoPlay && !hoverPlay && containerRef.current) {
      const vid = containerRef.current.querySelector('video');
      if (vid) {
        // Force play on mount to ensure iOS Safari doesn't just show the poster image
        vid.play().catch(e => console.warn('Forced autoplay prevented:', e));
      }
    }
  }, [src, autoPlay, hoverPlay]);

  const handleMouseEnter = () => {
    if (hoverPlay && containerRef.current && !hasError) {
      const vid = containerRef.current.querySelector('video');
      if(vid) vid.play().catch(e => console.warn('Hover play failed:', e));
    }
  };

  const handleMouseLeave = () => {
    if (hoverPlay && containerRef.current && !hasError) {
      const vid = containerRef.current.querySelector('video');
      if(vid) vid.pause();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`video-bg-wrapper relative w-full h-full overflow-hidden bg-black m-0 p-0 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!hasError && (
        <div 
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          dangerouslySetInnerHTML={{
            __html: `
              <video
                class="video-bg absolute inset-0 w-full h-full z-0 transition-opacity duration-300 ${videoClassName}"
                style="object-fit: ${objectFit}; object-position: ${objectPosition};"
                src="${src}"
                muted="muted"
                loop="loop"
                playsinline="playsinline"
                ${(autoPlay && !hoverPlay) ? 'autoplay="autoplay"' : ''}
                preload="auto"
              ></video>
            `
          }}
        />
      )}
      {hasError && (
        <div className="absolute inset-0 w-full h-full bg-surface z-0 flex items-center justify-center text-white/50 text-sm">
          Video unavailable
        </div>
      )}
      <div
        className="video-overlay absolute inset-0 z-[1] pointer-events-none"
        style={overlayStyle || {
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)'
        }}
      />
      <div className="content relative z-[2] w-full h-full pointer-events-auto">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
