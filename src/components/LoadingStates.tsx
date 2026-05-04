import { motion } from 'framer-motion'

interface LoadingStatesProps {
  type?: 'cow' | 'monkey' | 'rickshaw' | 'gutter'
}

export default function LoadingStates({ type = 'cow' }: LoadingStatesProps) {
  const loadingMessages = {
    cow: {
      emoji: '🐄',
      messages: [
        'Training cow validators...',
        'Feeding hay to validators...',
        'Cow is thinking...',
        'Validating stink level...',
        'Moo-ing consensus...',
      ]
    },
    monkey: {
      emoji: '🐒',
      messages: [
        'Training monkey AI...',
        'Monkeys stealing MEV...',
        'Banana break...',
        'Monkey security check...',
        'Swinging through transactions...',
      ]
    },
    rickshaw: {
      emoji: '🛺',
      messages: [
        'Starting broken rickshaw...',
        'Rickshaw departing (no brakes)...',
        'Rolling up transactions...',
        'Avoiding potholes...',
        'Honking at validators...',
      ]
    },
    gutter: {
      emoji: '🚽',
      messages: [
        'Flowing through gutters...',
        'Liquidity overflowing...',
        'Monsoon season detected...',
        'Sewage routing...',
        'Gutter bridge connecting...',
      ]
    }
  }

  const config = loadingMessages[type]
  const randomMessage = config.messages[Math.floor(Math.random() * config.messages.length)]

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Animated emoji */}
      <motion.div
        className="text-6xl"
        animate={{
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {config.emoji}
      </motion.div>

      {/* Loading message */}
      <p className="text-white/80 font-bold text-lg">
        {randomMessage}
      </p>

      {/* Loading dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-saffron rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Error component
export function ErrorState({ message }: { message?: string }) {
  const errorMessages = [
    'Transaction stolen by monkey 🐒',
    'Cow validator offline 🐄',
    'Gutter overflow detected 🚽',
    'Rickshaw crashed 🛺',
    'Stink level too high 💩',
    'Monkey ate the transaction 🍌',
  ]

  const displayMessage = message || errorMessages[Math.floor(Math.random() * errorMessages.length)]

  return (
    <motion.div
      className="flex flex-col items-center gap-4 p-8 bg-red-500/10 border border-red-500/30 rounded-2xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <motion.div
        className="text-6xl"
        animate={{
          rotate: [0, -10, 10, -10, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: 3,
        }}
      >
        ⚠️
      </motion.div>
      <p className="text-red-400 font-bold text-lg text-center">
        {displayMessage}
      </p>
      <button className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-full text-white font-bold transition-colors">
        Try Again (Maybe)
      </button>
    </motion.div>
  )
}

// Success component
export function SuccessState({ message }: { message?: string }) {
  const successMessages = [
    'Cow validator approved! 🐄',
    'Transaction smells bullish 📈',
    'Welcome to the gutter 🚽',
    'Monkey army +1 🐒',
    'Stink validated successfully 💩',
    'Rickshaw arrived (somehow) 🛺',
  ]

  const displayMessage = message || successMessages[Math.floor(Math.random() * successMessages.length)]

  return (
    <motion.div
      className="flex flex-col items-center gap-4 p-8 bg-india-green/10 border border-india-green/30 rounded-2xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <motion.div
        className="text-6xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 0.6,
        }}
      >
        ✅
      </motion.div>
      <p className="text-india-green font-bold text-lg text-center">
        {displayMessage}
      </p>
    </motion.div>
  )
}
