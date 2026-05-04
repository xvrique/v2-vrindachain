import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export default function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([])
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => [...prev, e.key].slice(-10))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (keys.join(',') === KONAMI_CODE.join(',')) {
      setActivated(true)
      setTimeout(() => setActivated(false), 5000)
    }
  }, [keys])

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
          >
            <div className="text-9xl mb-8 animate-bounce">🐄🐒💩</div>
            <h2 className="text-5xl font-heading bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent mb-4">
              ULTRA STINK MODE ACTIVATED!
            </h2>
            <p className="text-2xl text-white/80 font-accent">
              You found the secret cow level!
            </p>
            <p className="text-lg text-white/60 mt-4">
              Gas fees: FREE (for the next 5 seconds)
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
