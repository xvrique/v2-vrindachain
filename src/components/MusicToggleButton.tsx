import { motion } from 'framer-motion'

interface MusicToggleButtonProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export default function MusicToggleButton({ isPlaying, toggleMusic }: MusicToggleButtonProps) {
  return (
    <div className="fixed bottom-12 right-10 z-[100] flex items-center gap-4">
      <motion.button
        onClick={toggleMusic}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center group overflow-hidden transition-all duration-500 ${isPlaying ? 'bg-saffron border-transparent' : 'bg-black/80 border border-white/20'
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
        <div className={`relative z-10 font-bold transition-colors ${isPlaying ? 'text-black' : 'text-white/50 group-hover:text-white'}`}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </motion.button>
    </div>
  )
}
