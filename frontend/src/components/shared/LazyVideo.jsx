import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LazyVideo = ({ src, className, style, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Explicitly set autoplay attributes for mobile support when component mounts
    if (videoRef.current) {
      videoRef.current.setAttribute('autoplay', 'true');
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('muted', 'true');
      videoRef.current.play().catch(e => console.log('Auto-play prevented:', e));
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={`transition-opacity duration-300 ${className || ''}`}
      style={style}
      preload="auto"
      muted
      loop
      playsInline
      autoPlay
      {...props}
    />
  );
};

export default LazyVideo;
