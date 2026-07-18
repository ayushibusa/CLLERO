import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LazyVideo = ({ src, className, style, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set autoplay attributes for mobile support
    video.setAttribute('autoplay', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true');

    // Use IntersectionObserver to pause off-screen videos (fixes extreme lag)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(e => console.log('Auto-play prevented:', e));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={`transition-opacity duration-300 ${className || ''}`}
      style={style}
      preload="metadata"
      muted
      loop
      playsInline
      autoPlay
      {...props}
    />
  );
};

export default LazyVideo;
