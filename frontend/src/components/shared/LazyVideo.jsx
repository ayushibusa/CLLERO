import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LazyVideo = ({ src, className, style, isPlaying, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set autoplay attributes and properties for mobile support (iOS Safari strict policies)
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    if (isPlaying !== undefined) {
      if (isPlaying) {
        video.play().catch(e => console.log('Auto-play prevented:', e));
      } else {
        video.pause();
      }
      return;
    }

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
      { threshold: 0 } // Trigger immediately when entering screen
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [src, isPlaying]);

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
