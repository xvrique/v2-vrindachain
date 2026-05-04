import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FlyingMonkey() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Random monkey appearances
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsVisible(true)
        setTimeout(() => setIsVisible(false), 5000)
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed z-40 text-4xl pointer-events-none"
      initial={{ x: -100, y: Math.random() * window.innerHeight }}
      animate={{ 
        x: window.innerWidth + 100,
        y: Math.random() * window.innerHeight,
        rotate: [0, 10, -10, 0],
      }}
      transition={{ 
        duration: 8,
        ease: "linear",
        rotate: {
          duration: 1,
          repeat: Infinity,
        }
      }}
    >
      🐒
    </motion.div>
  )
}
