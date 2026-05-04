import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        
        {/* 2. Central Mascot Area (Clean & No Oval) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6"
        >
          
          <div className="relative z-10">
            {/* ⚡ Mega Purple Lightning (Background) */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-80 pointer-events-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.6, 1, 0.6],
                filter: [
                  "drop-shadow(0 0 20px #a855f7)",
                  "drop-shadow(0 0 60px #d946ef)",
                  "drop-shadow(0 0 20px #a855f7)"
                ]
              }}
              transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
            >
              {/* Central Lightning Bolt Shape */}
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white/20">
                <path d="M60 10 L30 50 L50 50 L40 90 L70 50 L50 50 Z" className="fill-purple-500/40 blur-[2px]" />
                <path d="M60 10 L30 50 L50 50 L40 90 L70 50 L50 50 Z" className="fill-white blur-[1px]" />
              </svg>
            </motion.div>

            {/* Floating Glow Sphere (Purple) */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/30 rounded-full blur-[100px] z-0"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.img 
              src="/vrindachain.gif" 
              alt="Vrindachain AI" 
              className="w-[280px] md:w-[360px] h-auto contrast-[1.8] brightness-[1.1] mix-blend-lighten relative z-10"
              style={{ filter: 'url(#chroma-key-gray)' }}
              animate={{ 
                y: [0, -6, 0],
                filter: [
                  'drop-shadow(0 0 30px rgba(168,85,247,0.4)) url(#chroma-key-gray)',
                  'drop-shadow(0 0 80px rgba(217,70,239,0.8)) url(#chroma-key-gray)',
                  'drop-shadow(0 0 30px rgba(168,85,247,0.4)) url(#chroma-key-gray)'
                ]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 0.15, repeat: Infinity, repeatType: "mirror" }
              }}
            />
          </div>
        </motion.div>

        {/* 3. Main Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-india-green drop-shadow-[0_0_10px_rgba(19,136,8,0.3)] uppercase mb-4">
            0 Second Smell Times™
          </h2>
          
          <div className="h-12 md:h-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={narrativeIndex}
                className="text-lg md:text-2xl font-black tracking-tight text-india-green drop-shadow-[0_0_10px_rgba(19,136,8,0.3)] uppercase absolute inset-0 flex items-center justify-center italic"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.2, y: -10 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                {narratives[narrativeIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 4. Action Buttons (Pill-shaped) */}
        <div className="flex flex-col gap-3 w-full max-w-[260px]">
          <motion.button
            className="group relative px-8 py-3 rounded-full bg-black border border-saffron/50 text-saffron font-bold text-sm uppercase tracking-widest transition-all hover:bg-saffron hover:text-black hover:shadow-[0_0_20px_rgba(255,153,51,0.3)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yeah, I'm Finna Bridge
          </motion.button>

          <motion.button
            className="group px-8 py-2.5 rounded-full border border-india-green/30 text-india-green/60 font-bold text-[10px] uppercase tracking-widest hover:border-india-green hover:text-india-green transition-all"
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

      {/* Refined SVG Filter for Absolute Transparency */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="chroma-key-gray">
          <feColorMatrix 
            type="matrix" 
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -15 -15 -15 25 0" 
          />
        </filter>
      </svg>
    </section>
  )
}
