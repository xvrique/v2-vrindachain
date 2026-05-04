import { motion } from 'framer-motion'
import { useState } from 'react'
import ThreeRickshaw from './ThreeRickshaw'

export default function About() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  const advancedTech = [
    {
      title: 'Rickshaw Rollups',
      description: 'transactions packed into broken rickshaws and sent to mainnet without brakes. Fast, chaotic, occasionally arrives.',
      badge: '[ROLLUP]',
      funFact: 'Crash rate: 69%',
      icon: '🛺'
    },
    {
      title: 'Monkey MEV Protection',
      description: 'doesn\'t protect from MEV. The monkeys steal first so bots get nothing. Revolutionary anti-bot technology.',
      badge: '[MONKEY]',
      funFact: 'Bananas stolen: 420/day',
      icon: '🐒'
    },
    {
      title: 'Gutter Liquidity Engine',
      description: 'liquidity flows like sewage during monsoon season. Deep, dirty, and surprisingly efficient.',
      badge: '[GUTTER]',
      funFact: 'Flow rate: Infinite',
      icon: '🌊'
    },
  ]

  const revolutionaryFeatures = [
    {
      title: 'Rotten Lassi AI Oracle',
      description: 'predicts market movements by analyzing bubbles in spoiled lassi. 50% accurate, 100% absurd.',
      badge: '[AI]',
      funFact: 'Accuracy: Coin flip',
      icon: '🥛'
    },
    {
      title: 'Cow Validator Network',
      description: 'transactions validated by cows with VR goggles and questionable internet. Decentralized. Bovine. Unstoppable.',
      badge: '[COW]',
      funFact: 'Uptime: When awake',
      icon: '🐄'
    },
    {
      title: 'AI-Powered Stink Scaling',
      description: 'the smellier the transaction, the faster it processes. Gas fees paid in regret. Settlements final after cow stops chewing.',
      badge: '[STINK]',
      funFact: 'Smell level: MAX',
      icon: '💨'
    },
  ]

  return (
    <section id="about" className="relative py-32 px-4 bg-transparent overflow-hidden">
      {/* Decorative background mandala parallax (simplified for this section) */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="rotating-mandala w-full h-full text-saffron fill-current">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={i} d="M50 5 L55 45 L50 50 L45 45 Z" transform={`rotate(${i * 30} 50 50)`} />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Group */}
        <motion.div
          className="text-center mb-24 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Doodle Arrow Annotation */}
          <div className="absolute -top-12 left-1/4 hidden md:block">
            <div className="w-12 h-12 doodle-arrow text-india-green -rotate-90"></div>
            <p className="font-accent text-india-green text-xs mt-2 -ml-8 rotate-[-10deg]">Divine Wisdom</p>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-saffron via-white to-india-green bg-clip-text text-transparent drop-shadow-2xl">
            Vrindachain?
          </h2>

          <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
            Next-Gen Meme Infrastructure for Degens, Monkeys, Cows & Believers
          </h3>

          <div className="w-24 h-1 bg-gradient-to-r from-saffron to-india-green mx-auto mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Vrindachain AI Layer 2 is a next-gen meme infrastructure built for those who still believe AI can save their bags. It scales through <span className="text-saffron font-bold italic underline decoration-saffron/30">Rickshaw Rollups</span> and secures with <span className="text-india-green font-bold italic underline decoration-india-green/30">Monkey Security</span>.
          </p>
        </motion.div>

        {/* Feature Grids */}
        <div className="space-y-16">
          {/* Section 1: Core Tech */}
          <div>
            <h4 className="text-3xl font-black mb-12 text-saffron flex items-center gap-4">
              <span className="w-12 h-[2px] bg-saffron"></span>
              CORE TECHNOLOGIES
              <span className="text-xs font-mono opacity-50 px-2 py-1 border border-saffron/30 rounded">BETA v0.69</span>
            </h4>

            <div className="mb-20">
              <ThreeRickshaw />
              <p className="text-center text-white/30 text-xs font-mono uppercase tracking-[0.5em] -mt-8">Proprietary rickshaw tech</p>
            </div>

            <div className="asymmetric-grid">
              {advancedTech.map((tech, index) => (
                <motion.div
                  key={index}
                  className="glass-premium p-8 rough-border skew-card relative group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: index % 2 === 0 ? 8 : -8,
                    rotateX: 5,
                    scale: 1.02,
                    z: 50
                  }}
                  style={{ perspective: 1000 }}
                >
                  <div className="text-4xl mb-6">{tech.icon}</div>
                  <div className="text-saffron text-xs font-black mb-2 tracking-tighter">{tech.badge}</div>
                  <h5 className="text-2xl font-black text-white mb-4 group-hover:text-saffron transition-colors">{tech.title}</h5>
                  <p className="text-white/60 text-lg leading-snug mb-6">{tech.description}</p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-accent text-white/30 uppercase tracking-widest">Status</span>
                    <span className="text-xs font-mono text-saffron px-2 py-1 bg-saffron/10 rounded">LIVE</span>
                  </div>

                  {/* Fun Fact Stamp on Hover */}
                  <motion.div 
                    className="absolute top-4 right-4 stamp bg-white/5 border-white/10 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.5, rotate: 10 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {tech.funFact}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 2: Features */}
          <div>
            <h4 className="text-3xl font-black mb-12 text-india-green flex items-center gap-4 justify-end">
              <span className="text-xs font-mono opacity-50 px-2 py-1 border border-india-green/30 rounded">CERTIFIED COW-APPROVED</span>
              REVOLUTIONARY FEATURES
              <span className="w-12 h-[2px] bg-india-green"></span>
            </h4>

            <div className="asymmetric-grid">
              {revolutionaryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-premium p-8 rough-border skew-card relative group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: index % 2 === 0 ? -8 : 8,
                    rotateX: 5,
                    scale: 1.02,
                    z: 50
                  }}
                  style={{ perspective: 1000 }}
                >
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <div className="text-india-green text-xs font-black mb-2 tracking-tighter">{feature.badge}</div>
                  <h5 className="text-2xl font-black text-white mb-4 group-hover:text-india-green transition-colors">{feature.title}</h5>
                  <p className="text-white/60 text-lg leading-snug mb-6">{feature.description}</p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-accent text-white/30 uppercase tracking-widest">Efficiency</span>
                    <span className="text-xs font-mono text-india-green px-2 py-1 bg-india-green/10 rounded">OPTIMAL</span>
                  </div>

                  <motion.div 
                    className="absolute top-4 right-4 stamp bg-white/5 border-white/10 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.5, rotate: -10 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    {feature.funFact}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Disclaimer Block */}
        <motion.div
          className="mt-32 p-12 glass-premium rough-border text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron via-white to-india-green"></div>
          
          <p className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
            "Born from the sacred chaos of back alleys, delivering the smelliest scaling solution in crypto."
          </p>

          <motion.div 
            className="inline-block px-8 py-4 stamp bg-red-500/10 border-red-500/30 text-red-500 font-black text-xl"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            NOT FINANCIAL ADVICE. BARELY ADVICE.
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
