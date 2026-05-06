import { motion } from 'framer-motion'

interface SmokeEffectProps {
  children: React.ReactNode
  density?: number
  scale?: number
}

export default function SmokeEffect({ children, density = 15, scale = 1 }: SmokeEffectProps) {
  return (
    <div className="relative inline-block">
      {/* Organic Fart Cloud Container (BEHIND TEXT) */}
      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#fart-filter)' }}>
        {[...Array(density)].map((_, i) => (
          <motion.div
            key={`back-${i}`}
            className="absolute"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(34, 197, 94, 0.6)' : 'rgba(19, 136, 8, 0.4)'
                } 0%, transparent 70%)`,
              width: (Math.random() * 400 + 200) * scale,
              height: (Math.random() * 150 + 80) * scale,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`,
              zIndex: 0,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              x: [0, (i % 2 === 0 ? 1 : -1) * (Math.random() * 300 + 50) * scale],
              y: [0, (Math.random() * -200 - 100) * scale],
              scale: [0.5, 1.2, 1.8],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {children}
      </div>

      {/* Organic Fart Cloud Container (IN FRONT OF TEXT) */}
      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#fart-filter)' }}>
        {[...Array(Math.floor(density / 1.5))].map((_, i) => (
          <motion.div
            key={`front-${i}`}
            className="absolute"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(144, 238, 144, 0.3)' : 'rgba(34, 197, 94, 0.2)'
                } 0%, transparent 70%)`,
              width: (Math.random() * 300 + 150) * scale,
              height: (Math.random() * 120 + 60) * scale,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`,
              zIndex: 20,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              x: [0, (i % 2 === 0 ? 1 : -1) * (Math.random() * 400 + 100) * scale],
              y: [0, (Math.random() * -250 - 150) * scale],
              scale: [0.3, 1.5, 2.2],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
    </div>
  )
}
