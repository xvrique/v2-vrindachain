import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function BackgroundVideo({ isEntered }: { isEntered?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isEntered && videoRef.current) {
      videoRef.current.play().catch(console.error);
    } else if (!isEntered && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isEntered]);

  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden bg-black pointer-events-none">
      {/* 1. The Video Background - Locked to Viewport */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/bg_nomusic.mp4" type="video/mp4" />
      </video>

      {/* 2. Degen Overlays (Atmosphere) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Uniform dark overlay for readability without sharp transitions */}
        <div className="absolute inset-0 bg-black/65" />
        
        {/* Subtle radial vignette to soften edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        
        <div className="absolute inset-0 bg-saffron/5 mix-blend-color" />
      </div>

    </div>
  )
}
