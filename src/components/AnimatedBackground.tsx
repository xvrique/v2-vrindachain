import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-dark via-deep-blue to-cosmic-navy" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-saffron/10 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-peacock/10 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [particle.y, particle.y - 100, particle.y],
            x: [particle.x, particle.x + 50, particle.x],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-saffron/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 159, 28, 0.05) 25%, rgba(255, 159, 28, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 159, 28, 0.05) 75%, rgba(255, 159, 28, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 159, 28, 0.05) 25%, rgba(255, 159, 28, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 159, 28, 0.05) 75%, rgba(255, 159, 28, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Mandala pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255, 159, 28, 0.3)" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255, 159, 28, 0.3)" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255, 159, 28, 0.3)" strokeWidth="1" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(255, 159, 28, 0.3)" strokeWidth="1" />
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const x1 = 100 + Math.cos(angle) * 80;
              const y1 = 100 + Math.sin(angle) * 80;
              return (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={x1}
                  y2={y1}
                  stroke="rgba(255, 159, 28, 0.2)"
                  strokeWidth="1"
                />
              );
            })}
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="url(#mandala)" />
      </svg>
    </div>
  );
}
