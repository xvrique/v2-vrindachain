import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showEnterScreen, setShowEnterScreen] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Check if user already entered in this session
    const entered = sessionStorage.getItem('vrindachain-entered')
    if (entered) {
      setShowEnterScreen(false)
    }

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
      sessionStorage.setItem('vrindachain-entered', 'true')
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
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Background Atmosphere */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #ff9933 0%, transparent 70%)'
              }}
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-10"
            >
              <motion.h2 
                className="text-white font-accent text-7xl md:text-9xl mb-6 tracking-tighter drop-shadow-[0_0_50px_rgba(255,153,51,0.5)]"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,153,51,0.5)",
                    "0 0 50px rgba(255,153,51,0.8)",
                    "0 0 20px rgba(255,153,51,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                VRINDACHAIN AI
              </motion.h2>

              <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-[1px] w-12 bg-saffron/50"></div>
                <p className="text-saffron font-black text-xs md:text-sm uppercase tracking-[0.5em] animate-pulse">System Status: Stink Critical</p>
                <div className="h-[1px] w-12 bg-saffron/50"></div>
              </div>
              
              <motion.button
                onClick={startMusic}
                className="group relative px-20 py-8 bg-white text-black font-black text-2xl rounded-sm overflow-hidden transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-saffron translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                />
                <span className="relative z-10 uppercase tracking-widest group-hover:text-black">Enter the Gutter</span>
              </motion.button>
              
              <div className="mt-12 flex flex-col items-center gap-2">
                <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">Authentic Indian Trap Loaded</p>
                <div className="flex gap-1 h-4 items-end">
                  {[1, 2, 3, 4, 5, 6, 7].map(i => (
                    <motion.div 
                      key={i} 
                      className="w-[2px] bg-saffron/30" 
                      animate={{ height: [4, 16, 4] }}
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
