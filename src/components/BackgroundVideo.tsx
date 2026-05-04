import { motion } from 'framer-motion'

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden bg-black pointer-events-none">
      {/* 1. The Video Background - Locked to Viewport */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
      >
        <source src="/bg_nomusic.mp4" type="video/mp4" />
      </video>

      {/* 2. Degen Overlays (Atmosphere) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Dark Gradients to keep content readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="absolute inset-0 bg-saffron/5 mix-blend-color" />
      </div>

    </div>
  )
}
