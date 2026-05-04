import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import ThreeCanvas from './ThreeCanvas'

export default function Hero() {
  const containerRef = useRef(null)
  const [narrativeIndex, setNarrativeIndex] = useState(0)

  const narratives = [
    "The first AI Layer 2 born from gutter liquidity, cow validators, and monkey security.",
    "Scaling so hard it makes a crowded Vrindavan rickshaw look like a private jet. No brakes, only bhakti.",
    "Liquidity pulled straight from the gutters of Banke Bihari. Smells like success and questionable street food.",
    "Our AI was trained on 5000 years of spiritual sarcasm and rickshaw driver insults. Enter at your own risk.",
    "Validator nodes powered by cows who only accept hay and your dignity as gas fees. 100% organic waste."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setNarrativeIndex((prev) => (prev + 1) % narratives.length)
    }, 4000) // Change every 4 seconds
    return () => clearInterval(interval)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 md:px-12 overflow-hidden bg-black">
      {/* Interactive 3D Background - Subtle */}
      <ThreeCanvas />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 bg-saffron rounded-full animate-pulse"></span>
              <span className="text-white/60 font-mono text-[10px] uppercase tracking-[0.2em]">Layer 2 Protocol</span>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
              <span className="text-white">VRINDA</span><br />
              <span className="bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent">CHAIN AI</span>
            </h1>

            <div className="h-20 mb-12 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={narrativeIndex}
                  className="text-xl md:text-2xl text-white/50 max-w-xl leading-snug font-medium absolute inset-0 flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  {narratives[narrativeIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.button
                className="px-10 py-5 rounded-xl font-black text-lg text-white bg-white/5 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enter Gutter
              </motion.button>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-peacock-green text-[10px] font-black uppercase tracking-widest">System Status</span>
                  <div className="w-1.5 h-1.5 bg-peacock-green rounded-full animate-ping"></div>
                </div>
                <span className="text-white/30 font-mono text-xs italic">"Smell-test passed"</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Visual Mascot */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px]"
          >
            {/* Geometric accents */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-8 border border-dashed border-white/5 rounded-full animate-reverse-spin-slow"></div>
            
            {/* The Glass Shield */}
            <div className="absolute inset-0 glass-premium rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-india-green/5"></div>
              
              <motion.div
                className="text-[140px] md:text-[180px] font-accent text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                animate={{ 
                  y: [0, -10, 0],
                  filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                V2
              </motion.div>

              {/* Status Indicators */}
              <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                <span className="text-[10px] font-black text-saffron uppercase">Verified</span>
                <div className="h-[2px] w-8 bg-saffron"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 flex flex-col items-start gap-1">
                <span className="text-[10px] font-black text-india-green uppercase">AI Core</span>
                <div className="h-[2px] w-8 bg-india-green"></div>
              </div>
            </div>

            {/* Flying Annotations */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 doodle-arrow text-saffron opacity-40 rotate-[140deg]"
              animate={{ rotate: [140, 150, 140] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>

      </div>

      {/* Footer-like text */}
      <div className="absolute bottom-10 left-0 w-full px-12 flex justify-between items-end opacity-20">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">Coordinate</span>
          <span className="text-xs font-mono">27.5851° N, 77.7081° E</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">Protocol</span>
          <span className="text-xs font-mono">STINK_V2.0.4</span>
        </div>
      </div>
    </section>
  )
}
