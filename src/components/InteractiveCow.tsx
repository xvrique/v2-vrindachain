import { motion } from 'framer-motion'
import { useState } from 'react'

export default function InteractiveCow() {
  const [clicks, setClicks] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const messages = [
    "Moo! Validating...",
    "Cow approves! 🐄",
    "Stink level: HIGH",
    "Transaction smells bullish",
    "Stop clicking me!",
    "I'm working here!",
    "Gas fees: 1 hay bale",
    "Consensus achieved! 🎉",
    "Need more grass...",
    "Validator tired. Come back later.",
  ]

  const handleClick = () => {
    setClicks(prev => prev + 1)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Message bubble */}
      {showMessage && (
        <motion.div
          className="absolute bottom-full right-0 mb-4 bg-white/10 backdrop-blur-md border border-saffron/30 rounded-2xl px-4 py-2 whitespace-nowrap"
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
        >
          <p className="text-white font-bold text-sm">
            {messages[clicks % messages.length]}
          </p>
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white/10 border-r border-b border-saffron/30"></div>
        </motion.div>
      )}

      {/* Cow */}
      <motion.button
        className="text-6xl cursor-pointer hover:scale-110 transition-transform"
        onClick={handleClick}
        animate={{
          rotate: showMessage ? [0, -10, 10, -10, 10, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        title="Click the validator cow!"
      >
        🐄
      </motion.button>

      {/* Click counter */}
      {clicks > 0 && (
        <motion.div
          className="absolute -top-2 -right-2 bg-saffron text-black rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          {clicks}
        </motion.div>
      )}
    </div>
  )
}
