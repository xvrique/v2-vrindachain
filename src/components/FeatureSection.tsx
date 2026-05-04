import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FeatureSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative py-32 px-4 bg-black overflow-hidden stink-haze">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Floating particles specific to this section */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '110%', 
              opacity: 0 
            }}
            animate={{ 
              y: '-10%', 
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          >
            {['🪷', '✨', '💨', '🐄'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Main Feature Card */}
        <motion.div
          className="glass-premium p-12 md:p-20 rough-border relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="absolute top-0 right-0 stamp -translate-y-1/2 translate-x-1/4 rotate-12 bg-india-green/20 border-india-green/40 text-india-green text-xs font-black">
            PATENT PENDING
          </div>

          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-saffron via-white to-india-green bg-clip-text text-transparent drop-shadow-lg"
          >
            COW PROOF-OF-STINK™
          </motion.h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Revolutionary consensus mechanism that validates transactions based on <span className="text-saffron">stink level</span> and <span className="text-india-green">cow conviction</span>. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Latency', value: '1 Cow Lick' },
              { label: 'Throughput', value: 'Infinite Moo' },
              { label: 'Security', value: 'Bovine-Grade' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="bg-white/5 p-4 rough-border border-white/10"
                whileHover={{ y: -5, borderColor: 'rgba(255,153,51,0.3)' }}
              >
                <div className="text-xs uppercase tracking-widest text-white/40 mb-1">{stat.label}</div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="px-10 py-5 rounded-2xl font-black text-xl text-white relative overflow-hidden bg-gradient-to-r from-saffron to-india-green group rough-border"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Validate with Cows <motion.span animate={{ x: isHovered ? 5 : 0 }}>→</motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-india-green to-saffron"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '0%' : '-100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Funny subtitle */}
          <div className="h-8 mt-4">
            {isHovered && (
              <motion.p
                className="text-white/50 text-base font-accent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                [WARNING: May smell like success and wet grass]
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}
