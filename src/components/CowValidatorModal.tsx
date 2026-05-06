import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface CowValidatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CowValidatorModal({
  isOpen,
  onClose
}: CowValidatorModalProps) {
  const [verificationState, setVerificationState] = useState<'idle' | 'scanning' | 'success'>('idle')
  const [scanProgress, setScanProgress] = useState(0)
  const [scanText, setScanText] = useState('INITIATING MOLECULAR SCENT SCAN')
  const [scanScore, setScanScore] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setVerificationState('idle')
      setScanProgress(0)
      setScanScore(0)
    }
  }, [isOpen])

  const startVerification = () => {
    setVerificationState('scanning')
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15
      if (progress >= 100) {
        progress = 100
        setScanProgress(100)
        clearInterval(interval)
        setTimeout(() => {
          setVerificationState('success')
          setScanScore(Math.floor(Math.random() * 15) + 85)
        }, 800)
      }
      setScanProgress(Math.floor(progress))

      const statuses = [
        'ANALYZING STINK LEVELS',
        'VERIFYING BOVINE CONSENSUS',
        'LOCATING MONKEY ASSETS',
        'CLEANING THE GUTTER...',
        'BYPASSING RICKSHAW PROTOCOLS',
        'STINK INTENSITY: CRITICAL'
      ]
      setScanText(statuses[Math.floor(progress / 15) % statuses.length])
    }, 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-6 backdrop-blur-md"
        >
          {/* Scanning Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(19,136,8,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(19,136,8,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative z-10 w-[calc(100%-2rem)] max-w-md bg-[#0a0a0f] rounded-[1.5rem] md:rounded-[2rem] border border-white/10 p-6 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Circular Logo */}
            <div className="relative w-20 h-20 mx-auto mb-8 group">
              <div className="relative w-full h-full rounded-full border-4 border-india-green/50 overflow-hidden bg-black shadow-[0_0_30px_rgba(19,136,8,0.4)] z-10">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover mix-blend-lighten contrast-125 brightness-110"
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
                  className="text-center"
                >
                  <h1 className="text-india-green font-black text-lg md:text-2xl mb-3 tracking-tighter uppercase italic leading-none mx-auto">
                    COW VALIDATOR SOFTWARE™
                  </h1>
                  <p className="text-white/60 text-sm mb-10 font-bold tracking-tight">
                    Ready to validate the current network stink index?
                  </p>

                  <button
                    onClick={startVerification}
                    className="px-8 py-2.5 bg-gradient-to-r from-saffron to-india-green text-black font-black text-sm rounded-lg transition-all shadow-[0_5px_20px_rgba(255,153,51,0.2)] active:scale-[0.98] uppercase tracking-widest border-b-2 border-black/20"
                  >
                    Begin Scan
                  </button>
                </motion.div>
              )}

              {verificationState === 'scanning' && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <h1 className="text-india-green font-black text-lg md:text-xl mb-6 tracking-tighter uppercase italic">
                    COW VALIDATOR SOFTWARE™
                  </h1>

                  <div className="relative w-full bg-white/5 h-2 rounded-full overflow-hidden mb-4 border border-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-india-green to-[#2ecc71] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${scanProgress}%` }}
                    />
                  </div>
                  <p className="text-white/40 font-mono text-[10px] mb-8 uppercase tracking-widest">Scanning: {scanProgress}%</p>

                  <div className="text-india-green font-mono text-sm md:text-base font-black uppercase tracking-widest mb-8 animate-pulse italic">
                    {scanText}
                  </div>

                  <div className="relative h-24 w-full bg-black/60 border border-india-green/20 rounded-2xl overflow-hidden mb-8">
                    <motion.div
                      className="absolute w-full h-[2px] bg-india-green shadow-[0_0_20px_#138808] z-30"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(19,136,8,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(19,136,8,0.2)_1px,transparent_1px)] bg-[size:15px_15px]" />
                  </div>
                </motion.div>
              )}

              {verificationState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h1 className="text-india-green font-black text-lg md:text-xl mb-8 tracking-tighter uppercase italic">
                    COW VALIDATOR SOFTWARE™
                  </h1>

                  <div className="w-16 h-16 bg-india-green/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-india-green/30 shadow-[0_0_20px_rgba(19,136,8,0.3)]">
                    <motion.svg
                      className="w-8 h-8 text-india-green"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                  </div>

                  <h2 className="text-india-green font-black text-2xl mb-2 uppercase tracking-tighter italic">VALIDATION COMPLETE!</h2>

                  <div className="mb-6 p-3 bg-white/5 rounded-xl border border-white/10 text-left">
                    <div className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Stink Score</div>
                    <div className="text-xl font-black text-white italic">
                      SCORE: <span className="text-india-green">{scanScore}/100</span>
                    </div>
                  </div>

                  <div className="mb-8 text-white/50 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">
                    &gt; MOLECULAR ANALYSIS COMPLETE:<br />
                    <span className="text-india-green">99% GOBAR DETECTED. THE COUNCIL OF COWS HAS SNIFFED YOUR WALLET. VERDICT: CERTIFIED STINKY.</span>
                  </div>

                  <button
                    onClick={onClose}
                    className="px-8 py-2.5 bg-gradient-to-r from-saffron to-india-green text-black font-black text-sm rounded-lg transition-all shadow-[0_5px_20px_rgba(255,153,51,0.2)] active:scale-[0.98] uppercase tracking-widest border-b-2 border-black/20"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
