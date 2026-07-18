import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LazyVideo = ({ src, className, style, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Use ScrollTrigger just to pause/play the video to save CPU/GPU,
      // Rely on native preload="none" to prevent network choking.
      ScrollTrigger.create({
        trigger: videoRef.current,
        start: 'top bottom+=1500',
        end: 'bottom top-=1500',
        onEnter: () => {
          if (videoRef.current) {
            videoRef.current.setAttribute('autoplay', 'true');
            videoRef.current.setAttribute('playsinline', 'true');
            videoRef.current.play().catch(e => console.log('Auto-play prevented:', e));
          }
        },
        onLeave: () => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        },
        onEnterBack: () => {
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.log('Auto-play prevented:', e));
          }
        },
        onLeaveBack: () => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    }, videoRef);

    return () => ctx.revert();
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
