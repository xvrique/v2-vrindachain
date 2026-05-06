import { motion, AnimatePresence } from 'framer-motion'

export default function MusicTicker({ isPlaying }: { isPlaying: boolean }) {
  return (
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
  )
}
