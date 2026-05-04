import { motion } from 'framer-motion'

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* 1. The Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/bg_nomusic.mp4" type="video/mp4" />
      </video>

      {/* 2. Degen Overlays (Deeper & Darker for atmosphere) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Darker Gradients to keep content readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-black/60" /> {/* Extra global darkness */}
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
        
        {/* Subtle saffron tint */}
        <div className="absolute inset-0 bg-saffron/5 mix-blend-color" />
      </div>

      {/* 3. Global Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(18,16,16,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline z-[2] pointer-events-none opacity-20" />
    </div>
  )
}
