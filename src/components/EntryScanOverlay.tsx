import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

interface EntryScanOverlayProps {
  showEnterScreen: boolean;
  verificationState: 'idle' | 'scanning' | 'success';
  scanProgress: number;
  scanText: string;
  startVerification: () => void;
  isSoundOn: boolean;
  onToggleSound: () => void;
}

export default function EntryScanOverlay({
  showEnterScreen,
  verificationState,
  scanProgress,
  scanText,
  startVerification,
  isSoundOn,
  onToggleSound
}: EntryScanOverlayProps) {
  return (
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
            className="relative z-10 w-full max-w-md bg-black/80 rounded-[2.5rem] border border-white/5 p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            {/* Circular Logo with Billowing Fart Smoke Effect */}
            <div className="relative w-32 h-32 mx-auto mb-10 group">
              {/* Intense Billowing Fart Clouds */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute top-1/2 left-1/2 rounded-full blur-[40px] z-0 ${i % 3 === 0 ? 'bg-[#22c55e]/60' : 'bg-[#138808]/50'
                    }`}
                  style={{
                    width: i % 2 === 0 ? '120px' : '80px',
                    height: i % 2 === 0 ? '120px' : '80px',
                  }}
                  animate={{
                    x: ["-50%", `${-50 + (Math.sin(i) * 60)}%`, "-50%"],
                    y: ["-50%", `${-50 + (Math.cos(i) * 60)}%`, "-50%"],
                    scale: [1, 2.2, 1.2, 2.5, 1],
                    opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 5 + (i * 0.8),
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}

              {/* Extra Core Stink Glow */}
              <div className="absolute inset-[-20%] rounded-full bg-india-green/30 blur-[50px] animate-pulse z-0" />

              <div className="absolute inset-0 rounded-full bg-india-green/40 blur-xl group-hover:bg-india-green/60 transition-all duration-500 z-0" />
              <div className="relative w-full h-full rounded-full border-4 border-india-green/50 overflow-hidden bg-black shadow-[0_0_60px_rgba(19,136,8,0.6)] z-10">
                <img
                  src="/pragos.png"
                  alt="Logo"
                  className="w-full h-full object-cover mix-blend-lighten contrast-150 brightness-110"
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
                  <h1 className="text-lg md:text-3xl mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(255,153,51,0.5)]">
                    Proof of Stink Entry Scan System
                  </h1>
                  <p className="text-white/70 text-[15px] mb-10 leading-relaxed font-bold">
                    Welcome to VrindaChain AI Layer 2. Proof-of-Stink verification is required to continue.
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <button
                      onClick={onToggleSound}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all hover:text-white"
                      style={{ color: isSoundOn ? '#FF9933' : '#666' }}
                    >
                      <span className="text-sm">{isSoundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}</span>
                      <span>Sound {isSoundOn ? 'On' : 'Off'}</span>
                    </button>
                  </div>

                  <button
                    onClick={startVerification}
                    className="px-10 py-3.5 bg-gradient-to-r from-saffron to-india-green hover:brightness-110 text-black font-black text-base rounded-xl transition-all shadow-[0_10px_30px_rgba(255,153,51,0.2)] active:scale-[0.98] uppercase tracking-widest"
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
                  <h1 className="text-saffron font-black text-xl md:text-2xl mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(255,153,51,0.5)] uppercase italic">
                    <span className="text-india-green animate-pulse"></span> BIOMETRIC SMELL ANALYSIS IN PROGRESS
                  </h1>

                  <div className="relative w-full bg-white/5 h-2 rounded-full overflow-hidden mb-6 border border-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-india-green via-[#2ecc71] to-saffron rounded-full relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${scanProgress}%` }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30 blur-md"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>

                  <div className="relative h-32 w-full bg-black/60 border border-india-green/20 rounded-2xl overflow-hidden mb-8 group">
                    <motion.div
                      className="absolute w-full h-[3px] bg-india-green shadow-[0_0_20px_#138808] z-30"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(19,136,8,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(19,136,8,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="absolute inset-0 flex flex-col justify-center p-4 z-20">
                      <div className="text-india-green font-mono text-sm md:text-base font-black uppercase tracking-widest animate-pulse">
                        {scanText}
                      </div>
                    </div>
                  </div>



                  <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-black italic">
                    COWS HAVE SNIFFED THE PERIMETER // VERDICT: CERTIFIED STINKY MONKEY
                  </p>
                </motion.div>
              )}

              {verificationState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h1 className="text-xl md:text-3xl mb-12 tracking-tight drop-shadow-[0_0_10px_rgba(255,153,51,0.5)]">
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
  )
}
