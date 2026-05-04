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
      {/* 1. Portal Background & Video */}
      <BackgroundVideo />

      {/* 2. Central Portal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-saffron/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-[15%] bg-india-green/10 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        
        {/* 3. Main Logo (GIF) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative mb-8"
        >
          <img 
            src="/vrindachain.gif" 
            alt="Vrindachain AI" 
            className="w-[300px] md:w-[450px] lg:w-[550px] h-auto drop-shadow-[0_0_60px_rgba(255,153,51,0.4)]"
          />
          
          <motion.div 
            className="absolute inset-0 pointer-events-none border-2 border-saffron/20 rounded-xl"
            animate={{ scale: [1, 1.02, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          />
        </motion.div>

        {/* 4. Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-india-green drop-shadow-[0_0_15px_rgba(19,136,8,0.5)]">
            0 Second Smell Times™
          </h2>
          
          <div className="h-12 mt-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={narrativeIndex}
                className="text-white/40 text-sm md:text-base font-mono uppercase tracking-[0.3em] absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {narratives[narrativeIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 5. Pill Buttons */}
        <div className="flex flex-col gap-6 w-full max-w-xs">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="group relative px-10 py-5 rounded-full bg-black border-2 border-saffron/50 text-white font-black text-lg uppercase tracking-widest overflow-hidden transition-all hover:border-saffron hover:shadow-[0_0_30px_rgba(255,153,51,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-saffron transition-colors">Yeah, I'm Finna Bridge</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="group px-10 py-4 rounded-full border border-india-green/30 text-india-green font-black text-sm uppercase tracking-widest hover:bg-india-green hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Stinkpaper
          </motion.button>
        </div>

      </div>

      {/* 6. Corner Data Decals */}
      <div className="absolute bottom-8 left-8 text-white/10 font-mono text-[10px] uppercase tracking-[0.3em] hidden md:block">
        Latency: 0ms<br />
        Nodes: Active
      </div>
      <div className="absolute bottom-8 right-8 text-white/10 font-mono text-[10px] text-right uppercase tracking-[0.3em] hidden md:block">
        Uptime: 99.9%<br />
        Status: Critical
      </div>
    </section>
  )
}
