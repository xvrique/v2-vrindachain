import { motion } from 'framer-motion'

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-black">
      {/* 1. The Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50"
      >
        <source src="/bg_nomusic.mp4" type="video/mp4" />
      </video>

      {/* 2. Degen Overlays (Atmosphere) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Global Tech Grid (Subtle) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Dark Gradients to keep content readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
        
        {/* Subtle color grade */}
        <div className="absolute inset-0 bg-saffron/5 mix-blend-color" />
      </div>

      {/* 3. Global Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(18,16,16,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline z-[2] pointer-events-none opacity-30" />
    </div>
  )
}
