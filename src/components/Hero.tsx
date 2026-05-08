import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
export default function Hero({ onValidate }: { onValidate?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [narrativeIndex, setNarrativeIndex] = useState(0)

  const narratives = [
    "Liquidity pulled straight from the gutters of Banke Bihari",
    "0% Tax, 100% Smell Proprietary Stink-Tech™ inside",
    "Rickshaw Rollups Scaling the chaos of Vrindavan to L2",
    "Bovine Consensus Our nodes are literally holy cows.",
    "The first AI that can actually smell your fear (and your bags)"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setNarrativeIndex((prev) => (prev + 1) % narratives.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">

        {/* 2. Central Mascot Area (Clean & No Oval) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6"
        >
          {/* Billowing Fart Clouds Effect behind GIF */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full blur-[60px] ${
                  i % 2 === 0 ? 'bg-[#138808]/30' : 'bg-[#22c55e]/20'
                }`}
                style={{
                  width: i % 2 === 0 ? '250px' : '180px',
                  height: i % 2 === 0 ? '250px' : '180px',
                }}
                animate={{
                  x: [
                    `${(Math.sin(i) * 100)}px`,
                    `${(Math.cos(i) * 150)}px`,
                    `${(Math.sin(i + 2) * 100)}px`
                  ],
                  y: [
                    `${(Math.cos(i) * 100)}px`,
                    `${(Math.sin(i) * 150)}px`,
                    `${(Math.cos(i + 2) * 100)}px`
                  ],
                  scale: [1, 1.8, 1.2, 2.2, 1],
                  opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
                }}
                transition={{
                  duration: 8 + (i * 2),
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
            {/* Core Stink Glow */}
            <div className="absolute w-[300px] h-[300px] bg-india-green/10 rounded-full blur-[80px] animate-pulse" />
          </div>

          <div className="relative z-10">
            <motion.img
              src="/vrindachain.gif"
              alt="Vrindachain AI"
              className="w-[380px] md:w-[520px] h-auto contrast-[1.8] brightness-[1.1] mix-blend-lighten relative z-10"
              style={{ filter: 'url(#chroma-key-gray)' }}
              animate={{
                y: [0, -10, 0],
                filter: [
                  'drop-shadow(0 0 40px rgba(255,153,51,0.5)) url(#chroma-key-gray)',
                  'drop-shadow(0 0 100px rgba(255,153,51,0.9)) url(#chroma-key-gray)',
                  'drop-shadow(0 0 40px rgba(255,153,51,0.5)) url(#chroma-key-gray)'
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
          className="mb-8 w-full"
        >
          <h2 className="text-base md:text-3xl font-exclusive font-black tracking-[0.1em] md:tracking-[0.2em] text-saffron drop-shadow-[0_0_20px_rgba(255,153,51,0.6)] uppercase mb-6 flex items-center justify-center gap-2 md:gap-4">
            <span className="hidden md:block h-[1px] w-12 bg-gradient-to-r from-transparent to-saffron/40"></span>
            STINK CRITICAL™
            <span className="hidden md:block h-[1px] w-12 bg-gradient-to-l from-transparent to-saffron/40"></span>
          </h2>

          <div className="min-h-[5rem] md:min-h-[6rem] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={narrativeIndex}
                className="text-base md:text-xl font-heading tracking-tight text-india-green drop-shadow-[0_0_10px_rgba(19,136,8,0.3)] uppercase relative w-full text-center px-4"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -10 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                {narratives[narrativeIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 4. Action Buttons (Pill-shaped) */}
        <div className="flex flex-col gap-3 w-full max-w-[260px]">
          <motion.a
            href="https://jup.ag/swap/SOL-s73AxfoVSh8GTbCkbMtCdPHb3nnTxQiDbktLnLNpump"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 rounded-full bg-black border border-saffron/50 text-saffron font-bold text-sm uppercase tracking-widest transition-all hover:bg-saffron hover:text-black hover:shadow-[0_0_20px_rgba(255,153,51,0.3)] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yeah, I'm Finna Bridge
          </motion.a>

          <motion.a
            href="/stinkpaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-2.5 rounded-full border border-india-green/30 text-india-green/60 font-bold text-[10px] uppercase tracking-widest hover:border-india-green hover:text-india-green transition-all flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Stinkpaper
          </motion.a>
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
