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
      {/* 1. Enhanced Background & Video */}
      <BackgroundVideo />

      {/* 2. Tactical HUD Elements (Background Layer) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-dashed border-white/5 rounded-full animate-reverse-spin-slow" />
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,153,51,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl">
        
        {/* 3. Central Mascot Area with HUD Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative group mb-8"
        >
          {/* Intense Portal Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-saffron/20 rounded-full blur-[120px] animate-pulse" />
          
          {/* High-Tech Frame (The Podium) */}
          <div className="absolute -inset-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-saffron" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-saffron" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-india-green" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-india-green" />
            
            {/* Corner Labels */}
            <span className="absolute top-0 left-0 -translate-y-full text-[10px] font-mono text-saffron tracking-[0.5em] pb-2">SCANNING_V2</span>
            <span className="absolute bottom-0 right-0 translate-y-full text-[10px] font-mono text-india-green tracking-[0.5em] pt-2">CORE_ACTIVE</span>
          </div>

          {/* Main Logo (GIF) with filters to hide checkers */}
          <div className="relative z-10 p-4">
            <motion.img 
              src="/vrindachain.gif" 
              alt="Vrindachain AI" 
              className="w-[350px] md:w-[550px] lg:w-[650px] h-auto contrast-150 brightness-110 drop-shadow-[0_0_100px_rgba(255,153,51,0.6)]"
              animate={{ 
                y: [0, -10, 0],
                rotate: [-1, 1, -1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Blend Overlay - Trying to punch out the darks */}
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none rounded-3xl" />
          </div>

          {/* Dynamic HUD Labels */}
          <div className="absolute -right-24 top-1/4 hidden lg:flex flex-col items-start gap-4 text-left">
            <div className="p-2 border-l-2 border-saffron bg-saffron/5">
              <div className="text-[8px] font-mono text-saffron uppercase mb-1">Status</div>
              <div className="text-xs font-black text-white uppercase tracking-wider">Operational</div>
            </div>
            <div className="p-2 border-l-2 border-india-green bg-india-green/5">
              <div className="text-[8px] font-mono text-india-green uppercase mb-1">Threat</div>
              <div className="text-xs font-black text-white uppercase tracking-wider">Low_Gutter</div>
            </div>
          </div>
        </motion.div>

        {/* 4. Tagline - More Aggressive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1 bg-india-green text-black font-black text-[10px] uppercase tracking-[0.4em] mb-4">
            Proprietary Stink-Tech Protocol
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-india-green to-peacock-green drop-shadow-[0_0_30px_rgba(19,136,8,0.4)] uppercase">
            0 SECOND SMELL™
          </h2>
          
          <div className="h-8 mt-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={narrativeIndex}
                className="text-white/40 text-sm md:text-base font-mono uppercase tracking-[0.3em] absolute inset-0 flex items-center justify-center italic"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                {">"} {narratives[narrativeIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 5. Buttons - Solid & Bold */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          <motion.button
            className="group relative px-14 py-6 bg-saffron text-black font-black text-xl uppercase tracking-widest transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,153,51,0.3)]"
          >
            Yeah, I'm Finna Bridge
          </motion.button>

          <motion.button
            className="group px-14 py-6 border-2 border-white/20 text-white font-black text-sm uppercase tracking-widest hover:border-india-green hover:bg-india-green/10 transition-all hover:scale-105 active:scale-95"
          >
            Read Stinkpaper
          </motion.button>
        </div>

      </div>

      {/* 6. System Telemetry (Corners) */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="text-saffron font-black text-[10px] tracking-[0.5em] mb-4">SYSTEM_TELEMETRY</div>
        <div className="space-y-2">
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-2 items-center">
              <div className="w-20 h-[2px] bg-white/5 overflow-hidden">
                <motion.div 
                  className="h-full bg-saffron" 
                  animate={{ width: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                />
              </div>
              <span className="text-[8px] font-mono text-white/20">PROC_{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
