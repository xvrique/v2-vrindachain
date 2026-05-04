import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio
  useEffect(() => {
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

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err))
      setHasInteracted(true)
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex items-center gap-4">
      {/* Interaction Hint */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-saffron text-black font-black text-[10px] px-3 py-1 uppercase tracking-widest rounded-sm shadow-lg hidden md:block"
        >
          Enable Degen Beats
        </motion.div>
      )}

      <motion.button
        onClick={toggleMusic}
        className="relative w-14 h-14 bg-black/80 border border-white/20 rounded-full flex items-center justify-center overflow-hidden group hover:border-saffron transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Animated Background Pulse */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 bg-saffron/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        {/* Music Bars Animation */}
        <div className="flex items-end gap-[2px] h-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-[3px] bg-white group-hover:bg-saffron transition-colors"
              animate={isPlaying ? {
                height: [4, 16, 8, 12, 4]
              } : { height: 4 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[8px] font-black uppercase text-white tracking-tighter">
          {isPlaying ? 'Mute' : 'Play'}
        </div>
      </motion.button>

      {/* Visualizer Effect (Subtle Screen Tint) */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-t from-saffron via-transparent to-transparent"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
