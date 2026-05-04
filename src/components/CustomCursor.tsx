import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('.glass-premium')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveMouse)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveMouse)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        background: isHovering 
          ? 'radial-gradient(circle, rgba(19, 136, 8, 0.8) 0%, transparent 70%)' 
          : 'radial-gradient(circle, rgba(255, 153, 51, 0.6) 0%, transparent 70%)',
        scale: isHovering ? 2.5 : 1,
        boxShadow: isHovering ? '0 0 40px rgba(19, 136, 8, 0.5)' : '0 0 20px rgba(255, 153, 51, 0.3)',
      }}
    >
      <div className="absolute inset-0 border border-white/20 rounded-full animate-ping opacity-20"></div>
    </motion.div>
  )
}
