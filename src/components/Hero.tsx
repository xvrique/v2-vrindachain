import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import BackgroundVideo from './BackgroundVideo'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [narrativeIndex, setNarrativeIndex] = useState(0)

  const narratives = [
    "Liquidity pulled straight from the gutters of Banke Bihari.",
    "0% Tax, 100% Smell. Proprietary Stink-Tech™ inside.",
    "Rickshaw Rollups: Scaling the chaos of Vrindavan to L2.",
    "Bovine Consensus: Our nodes are literally holy cows.",
    "The first AI that can actually smell your fear (and your bags)."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setNarrativeIndex((prev) => (prev + 1) % narratives.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* 1. Background Video */}
      <BackgroundVideo />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        
        {/* 2. Central Mascot Area (Proportional) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6"
        >
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-saffron/10 rounded-full blur-[60px]" />
          
          <motion.img 
            src="/vrindachain.gif" 
            alt="Vrindachain AI" 
            className="w-[220px] md:w-[300px] h-auto contrast-125 brightness-110 drop-shadow-[0_0_40px_rgba(255,153,51,0.3)]"
            style={{ filter: 'url(#chroma-key-gray)' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* 3. Main Tagline (Clean & Compact) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-india-green drop-shadow-[0_0_15px_rgba(19,136,8,0.4)] uppercase mb-4">
            0 Second Smell Times™
          </h2>
          
          <div className="h-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={narrativeIndex}
                className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {narratives[narrativeIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 4. Action Buttons (Pill-shaped like reference) */}
        <div className="flex flex-col gap-4 w-full max-w-[280px]">
          <motion.button
            className="group relative px-8 py-3 rounded-full bg-black border border-saffron/50 text-saffron font-bold text-sm uppercase tracking-widest transition-all hover:bg-saffron hover:text-black hover:shadow-[0_0_20px_rgba(255,153,51,0.3)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yeah, I'm Finna Bridge
          </motion.button>

          <motion.button
            className="group px-8 py-2.5 rounded-full border border-india-green/30 text-india-green/60 font-bold text-[11px] uppercase tracking-widest hover:border-india-green hover:text-india-green transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Stinkpaper
          </motion.button>
        </div>

      </div>

      {/* 5. Minimal Decals */}
      <div className="absolute bottom-8 left-10 text-white/5 font-mono text-[9px] uppercase tracking-[0.4em] hidden md:block">
        V2_PROTOCOL // STINK_TECH
      </div>

      {/* Magic SVG Filter for Transparency */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="chroma-key-gray">
          <feColorMatrix 
            type="matrix" 
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -3 -3 -3 6 0" 
          />
        </filter>
      </svg>
    </section>
  )
}
