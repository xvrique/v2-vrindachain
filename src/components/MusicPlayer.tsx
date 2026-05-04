import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showEnterScreen, setShowEnterScreen] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Entrance screen always shows on full page load for maximum atmosphere
    setShowEnterScreen(true)

    audioRef.current = new Audio('/Stink Critical.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.4

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err))
      setIsPlaying(true)
      setShowEnterScreen(false)
    }
  }

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err))
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {/* 1. Enter Overlay (Splash Screen) */}
      <AnimatePresence>
        {showEnterScreen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 text-center overflow-hidden"
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            
            {/* 1. Background Atmosphere & Dirt Texture */}
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,51,0.1)_0%,transparent_70%)]" />
            
            {/* 2. Terminal Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full max-w-2xl border border-white/5 bg-black/40 backdrop-blur-xl p-8 md:p-12 rough-border"
            >
              {/* Header: System Identity */}
              <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-6">
                <div className="text-left">
                  <h2 className="text-saffron font-black text-3xl tracking-tighter italic mb-1">VRINDACHAIN_OS_V2</h2>
                  <p className="text-white/30 font-mono text-[9px] uppercase tracking-[0.3em]">Build: Gutter_Alpha_777</p>
                </div>
                <div className="text-right">
                  <div className="text-india-green font-bold text-xs animate-pulse">● SECURED_BY_MONKEYS</div>
                  <p className="text-white/20 font-mono text-[9px] uppercase mt-1">Stink: CRITICAL</p>
                </div>
              </div>

              {/* Central Identity Verification */}
              <div className="mb-12">
                <motion.h1 
                  className="text-white font-black text-5xl md:text-7xl mb-8 tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] italic uppercase"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                >
                  Verification Required
                </motion.h1>

                {/* Terminal Log Output */}
                <div className="bg-black/60 p-4 font-mono text-[10px] md:text-xs text-left mb-8 border-l-2 border-saffron/30 space-y-1">
                  <p className="text-white/40">[\u003e] INITIALIZING_GUTTER_PROTOCOLS...</p>
                  <p className="text-white/40">[\u003e] ANALYZING_STINK_CONCENTRATION: <span className="text-india-green">OPTIMAL</span></p>
                  <p className="text-white/40">[\u003e] SCANNING_FOR_BOVINE_CONSENSUS... <span className="text-saffron">DONE</span></p>
                  <p className="text-white/60 font-bold">[\u003e] IDENTITY: <span className="text-white">UNKNOWN_DEGEN</span></p>
                  <p className="text-india-green animate-pulse">[\u003e] STATUS: READY_TO_ENTER_THE_SEWERS</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex flex-col items-start">
                  <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest mb-2 italic">Agreement:</span>
                  <p className="text-white/20 text-[9px] text-left max-w-[200px]">By entering, you accept full responsibility for bags, stink, and monkey chaos.</p>
                </div>

                <motion.button
                  onClick={startMusic}
                  className="group relative px-12 py-5 bg-saffron text-black font-black text-xl rounded-sm overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(255,153,51,0.3)]"
                  whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 uppercase tracking-[0.2em]">Verify & Enter</span>
                  <motion.div
                    className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
                  />
                </motion.button>
              </div>
              
              {/* Audio Visualizer Footer */}
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <p className="text-white/10 font-mono text-[8px] uppercase tracking-[0.4em]">Auth_Trap_Loaded.wav</p>
                <div className="flex gap-1 h-3 items-end">
                  {[...Array(8)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="w-[2px] bg-white/10" 
                      animate={{ height: [2, 12, 2] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-10 left-10 text-white/10 font-mono text-[10px] text-left uppercase tracking-widest hidden md:block border-l border-white/10 pl-4">
              Sector: 27.5851° N<br />
              Region: VRINDAVAN<br />
              Vibe: GRITTY TRAP
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Global Lyric Ticker (Bottom) - Only when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-saffron text-black h-8 z-[90] flex items-center overflow-hidden border-t border-black/20 select-none"
          >
            <div className="flex whitespace-nowrap animate-ticker font-black text-[10px] uppercase tracking-widest italic">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8">
                  STINK CRITICAL — RICKSHAW ROLLUPS — AI LAYER 2 — BOVINE CONSENSUS — NO GAS ONLY SMELL — VRINDACHAIN V2 — DEGEN OPS
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Side Visualizer Bars */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed left-6 bottom-20 z-[90] hidden lg:flex flex-col gap-1"
          >
            <div className="text-white/20 font-mono text-[8px] uppercase mb-2 vertical-text tracking-widest">Visualizer.exe</div>
            <div className="flex items-end gap-1 h-32">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] bg-saffron/40 rounded-full"
                  animate={{ height: [10, Math.random() * 80 + 20, 10] }}
                  transition={{ duration: 0.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Persistent Play/Stop Toggle (Updated Design) */}
      <div className="fixed bottom-12 right-10 z-[100] flex items-center gap-4">
        <motion.button
          onClick={toggleMusic}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center group overflow-hidden transition-all duration-500 ${
            isPlaying ? 'bg-saffron border-transparent' : 'bg-black/80 border border-white/20'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying && (
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{ scale: [1, 2, 1], opacity: [0, 0.5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}

          <div className="flex items-center justify-center relative z-10">
            {isPlaying ? (
              <div className="flex gap-1 h-4 items-end">
                {[1, 2, 3].map(i => (
                  <motion.div 
                    key={i} 
                    className="w-[3px] bg-black" 
                    animate={{ height: [4, 16, 4] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
            ) : (
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            )}
          </div>
        </motion.button>
      </div>

      {/* 5. Music-Reactive Background Pulse (Global) */}
      <AnimatePresence>
        {isPlaying && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 pointer-events-none z-[-1] bg-saffron"
              style={{ mixBlendMode: 'overlay' }}
            />
            {/* Bass Pulse Effect */}
            <motion.div
              animate={{ 
                opacity: [0, 0.02, 0],
                scale: [1, 1.01, 1]
              }}
              transition={{ duration: 0.43, repeat: Infinity, ease: "easeInOut" }} // Approx 140 BPM (0.428s per beat)
              className="fixed inset-0 border-[20px] border-saffron/10 pointer-events-none z-[1000]"
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
