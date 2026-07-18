import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoBackground = ({ src, children, className = '', videoClassName = '', autoPlay = true, hoverPlay = false, objectFit = 'cover', objectPosition = 'center', overlayStyle, isPlaying }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    // Rely purely on the scroll enter/leave to play/pause.
    // preload="none" will prevent network choking.
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = (e) => {
      console.warn(`Video 404 or failed to load: ${src}`, e);
      setHasError(true);
    };

    video.addEventListener('error', handleError);

    if (autoPlay && !hoverPlay) {
      video.setAttribute('autoplay', 'true');
      video.setAttribute('playsinline', 'true');
      video.setAttribute('muted', 'true');

      if (isPlaying !== undefined) {
        if (isPlaying) {
          video.play().catch(e => console.warn('Auto-play prevented:', e));
        } else {
          video.pause();
        }
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(e => console.warn('Auto-play prevented:', e));
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0 } // Pause as soon as it's fully out, play as soon as it enters
      );

      observer.observe(video);

      return () => {
        video.removeEventListener('error', handleError);
        observer.disconnect();
      };
    }

    return () => {
      video.removeEventListener('error', handleError);
    };
  }, [autoPlay, hoverPlay, src, isPlaying]);

  const handleMouseEnter = () => {
    if (hoverPlay && videoRef.current && !hasError) {
      videoRef.current.play().catch(e => console.warn('Hover play failed:', e));
    }
  };

  const handleMouseLeave = () => {
    if (hoverPlay && videoRef.current && !hasError) {
      videoRef.current.pause();
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
        <video
          ref={videoRef}
          className={`video-bg absolute inset-0 w-full h-full z-0 transition-opacity duration-300 ${videoClassName}`}
          style={{ objectFit, objectPosition }}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay={autoPlay && !hoverPlay}
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
      <div className="content relative z-[2] w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
