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
    <section className="relative py-16 md:py-20 px-4 bg-transparent">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 153, 51, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-10 bg-gradient-to-r from-saffron via-white to-india-green bg-clip-text text-transparent uppercase tracking-tighter">
            Chainomics
          </h2>
        </motion.div>

        {/* Chainomics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
          {chainomics.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rough-border p-5 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer relative overflow-hidden skew-card noise-texture"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Badge background */}
              <motion.div
                className="absolute -right-1 -top-1 px-2 py-0.5 bg-saffron/20 border border-saffron/40 font-mono text-[8px] font-black text-saffron uppercase"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})`,
                }}
              >
                {item.badge}
              </motion.div>

              <div className="relative z-10">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent mb-1">
                  {item.label}
                </div>
                <p className="text-white font-black text-sm uppercase tracking-tight">
                  {item.name}
                </p>
                
                {/* Tooltip on hover */}
                {hoveredIndex === index && (
                  <motion.p
                    className="text-white/40 text-[10px] mt-2 font-accent italic"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {item.tooltip}
                  </motion.p>
                )}
              </div>
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
          <p className="text-white/40 text-sm max-w-2xl mx-auto mb-2 italic">
            Gas fees are paid in regret. Settlements are final after the cow stops chewing.
          </p>
          <p className="text-white/30 text-xs">
            No VC puja. No hidden asura allocation. Just gutter, cows, and chaos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
