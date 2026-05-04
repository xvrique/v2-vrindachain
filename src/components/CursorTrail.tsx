import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let particleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) return

      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      }

      setParticles(prev => [...prev, newParticle])

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id))
      }, 1000)
    }

    // Activate trail on scroll or click
    const handleInteraction = () => {
      setIsActive(true)
      setTimeout(() => setIsActive(false), 3000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleInteraction)
    window.addEventListener('scroll', handleInteraction)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
    }
  }, [isActive])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute text-xl"
            initial={{ 
              x: particle.x, 
              y: particle.y, 
              opacity: 1,
              scale: 1,
            }}
            animate={{ 
              y: particle.y + 50,
              opacity: 0,
              scale: 0.5,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            💩
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
