import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showEnterScreen, setShowEnterScreen] = useState(true)
  const [verificationState, setVerificationState] = useState<'idle' | 'scanning' | 'success'>('idle')
  const [scanProgress, setScanProgress] = useState(0)
  const [scanText, setScanText] = useState('PROCESSING SOLANA BALANCE')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
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

  const startVerification = () => {
    setVerificationState('scanning')
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 12
      if (progress >= 100) {
        progress = 100
        setScanProgress(100)
        clearInterval(interval)
        setTimeout(() => {
          setVerificationState('success')
          setTimeout(() => {
            startMusic()
          }, 2500)
        }, 800)
      }
      setScanProgress(Math.floor(progress))
      
      const statuses = [
        'PROCESSING SOLANA BALANCE', 
        'ANALYZING STINK LEVELS', 
        'VERIFYING BOVINE CONSENSUS', 
        'LOCATING MONKEY ASSETS',
        'CLEANING THE GUTTER...',
        'BYPASSING RICKSHAW PROTOCOLS'
      ]
      setScanText(statuses[Math.floor(progress / 18) % statuses.length])
    }, 400)
  }

  return (
    <>
      <AnimatePresence>
        {showEnterScreen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex flex-col items-center justify-center p-6 text-center overflow-hidden font-sans"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,51,0.05)_0%,transparent_70%)]" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 w-full max-w-md bg-black/80 rounded-[2.5rem] border border-white/5 p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            >
              {/* Circular Logo with Saffron Lightning Effect */}
              <div className="relative w-32 h-32 mx-auto mb-10 group">
                <div className="absolute inset-0 rounded-full bg-saffron/20 blur-xl group-hover:bg-saffron/40 transition-all duration-500" />
                <div className="relative w-full h-full rounded-full border border-saffron/30 overflow-hidden bg-black shadow-[0_0_30px_rgba(255,153,51,0.2)]">
                  <motion.div 
                    className="absolute inset-0 z-10 opacity-60"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                      <path d="M60 10 L30 50 L50 50 L40 90 L70 50 L50 50 Z" />
                    </svg>
                  </motion.div>
                  <img 
                    src="/vrindachain.gif" 
                    alt="Logo" 
                    className="w-full h-full object-cover mix-blend-lighten contrast-125" 
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {verificationState === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h1 className="text-saffron font-black text-2xl md:text-3xl mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(255,153,51,0.5)]">
                      Proof of Stink Entry Scan System
                    </h1>
                    <p className="text-white/70 text-[15px] mb-10 leading-relaxed font-bold">
                      Welcome to VrindaChain AI Layer 2. Proof-of-Stink verification is required to continue.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-white/40 text-[11px] uppercase tracking-widest mb-10">
                      <span className="text-base">🔊</span> Sound On
                    </div>
                    <button
                      onClick={startVerification}
                      className="w-full py-5 bg-saffron hover:bg-white text-black font-black text-xl rounded-2xl transition-all shadow-[0_10px_30px_rgba(255,153,51,0.3)] active:scale-[0.98] uppercase tracking-widest"
                    >
                      Start Verification
                    </button>
                  </motion.div>
                )}

                {verificationState === 'scanning' && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h1 className="text-saffron font-black text-2xl md:text-3xl mb-10 tracking-tight drop-shadow-[0_0_10px_rgba(255,153,51,0.5)]">
                      Proof of Stink Entry Scan System
                    </h1>
                    
                    <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden mb-4 p-[3px] border border-white/5">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-india-green to-[#2ecc71] rounded-full shadow-[0_0_15px_rgba(19,136,8,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${scanProgress}%` }}
                      />
                    </div>
                    <p className="text-white font-bold text-sm mb-12">Scanning: {scanProgress}%</p>

                    <div className="text-india-green font-black text-lg md:text-xl uppercase tracking-widest mb-12 drop-shadow-[0_0_8px_rgba(19,136,8,0.3)]">
                      {scanText}
                    </div>

                    <div className="relative h-24 w-full bg-black/40 border border-white/5 rounded-2xl overflow-hidden">
                      <motion.div 
                        className="absolute w-full h-[2px] bg-saffron/50 shadow-[0_0_15px_#ff9933] z-10"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex flex-col gap-3 p-6 opacity-20">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="h-2 w-full bg-india-green/20 rounded-full" />
                        ))}
                      </div>
                    </div>

                    <p className="text-white/40 text-[10px] uppercase mt-10 tracking-widest font-bold">Do not close this window during verification</p>
                  </motion.div>
                )}

                {verificationState === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <h1 className="text-saffron font-black text-2xl md:text-3xl mb-12 tracking-tight drop-shadow-[0_0_10px_rgba(255,153,51,0.5)]">
                      Proof of Stink Entry Scan System
                    </h1>

                    <div className="w-24 h-24 bg-india-green/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-india-green/30 shadow-[0_0_30px_rgba(19,136,8,0.2)]">
                      <motion.svg 
                        className="w-12 h-12 text-india-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 12 }}
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </motion.svg>
                    </div>

                    <h2 className="text-india-green font-black text-3xl mb-4 italic tracking-tight">REAL DEGEN DETECTED!</h2>
                    <p className="text-white/60 text-[15px] leading-relaxed max-w-[300px] mx-auto font-bold">
                      Proof-of-Stink Verification successful. Unlocking V2 Molecular Hyperbridge™...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Control Bar */}
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
                  <motion.div key={i} className="w-[3px] bg-black" animate={{ height: [4, 16, 4] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }} />
                ))}
              </div>
            ) : (
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            )}
          </div>
        </motion.button>
      </div>
    </>
  )
}
