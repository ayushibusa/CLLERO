import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LazyVideo = ({ src, className, style, isPlaying, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set properties to guarantee mobile autoplay
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    // We rely entirely on the browser's native autoplay policy.
    // Modern mobile browsers will natively pause off-screen videos to save battery.
    // Manual IntersectionObservers calling .play() often get rejected by iOS Safari.
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
