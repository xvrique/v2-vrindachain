import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BackedBy() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const chainomics = [
    { label: '35%', name: 'Gutter Liquidity', badge: 'GUTTER', tooltip: 'Flows like monsoon sewage' },
    { label: '20%', name: 'Cow Validator Rewards', badge: 'COW', tooltip: 'Paid in hay and respect' },
    { label: '15%', name: 'Monkey Security Budget', badge: 'MONKEY', tooltip: 'They steal first, bots get nothing' },
    { label: '15%', name: 'Rotten Lassi AI Research', badge: 'AI', tooltip: 'Predicting via spoiled bubbles' },
    { label: '10%', name: 'Rickshaw Rollup Fuel', badge: 'ROLLUP', tooltip: 'No brakes, full speed' },
    { label: '5%', name: 'Emergency Toilet Treasury', badge: 'EMERGENCY', tooltip: 'For when things get messy' },
  ]

  return (
    <section className="relative py-24 px-4 bg-black">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 153, 51, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent">
            Chainomics
          </h2>
        </motion.div>

        {/* Chainomics Grid */}
        <div className="asymmetric-grid max-w-5xl mx-auto mb-16">
          {chainomics.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rough-border p-8 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden skew-card noise-texture"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Badge background */}
              <motion.div
                className="absolute -right-2 -top-2 px-3 py-1 bg-saffron/20 border-2 border-saffron/40 font-mono text-xs font-bold text-saffron"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})`,
                }}
                animate={{
                  rotate: hoveredIndex === index ? [3, -3, 3] : (index % 2 === 0 ? 3 : -3),
                }}
                transition={{ duration: 0.5 }}
              >
                {item.badge}
              </motion.div>

              <div className="relative z-10">
                <div className="text-5xl font-black bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent mb-3">
                  {item.label}
                </div>
                <p className="text-white font-bold text-lg mb-2">
                  {item.name}
                </p>
                
                {/* Tooltip on hover */}
                {hoveredIndex === index && (
                  <motion.p
                    className="text-white/60 text-sm mt-2 font-accent"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {item.tooltip}
                  </motion.p>
                )}
              </div>

              {/* Random stamp on some cards */}
              {index % 2 === 0 && (
                <div className="absolute top-2 right-2 text-xs font-bold text-saffron/50 rotate-12">
                  ✓
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-4">
            Gas fees are paid in regret. Settlements are final after the cow stops chewing.
          </p>
          <p className="text-white/60 text-base">
            No VC puja. No hidden asura allocation. Just gutter, cows, and chaos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
