import { motion } from 'framer-motion'
import { useState } from 'react'
import SmokeEffect from './SmokeEffect'

export default function FeatureSection({ onValidate }: { onValidate?: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative py-16 md:py-20 px-4 bg-transparent overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-20">
        {/* Main Feature Content (No Frame) */}
        <motion.div
          className="relative py-8 md:py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="absolute -top-4 right-0 stamp -translate-y-1/2 translate-x-1/4 rotate-12 bg-india-green/20 border-india-green/40 text-india-green text-[10px] font-black">
            PATENT PENDING
          </div>

          <SmokeEffect density={20}>
            <motion.h2
              className="text-2xl md:text-4xl font-black mb-6 bg-gradient-to-r from-saffron via-white to-india-green bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] uppercase tracking-tighter"
            >
              COW PROOF-OF-STINK™
            </motion.h2>
          </SmokeEffect>

          <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Revolutionary consensus mechanism that validates transactions based on <span className="text-saffron font-bold">stink level</span> and <span className="text-india-green font-bold">cow conviction</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10">
            {[
              { label: 'Latency', value: '1 Cow Lick' },
              { label: 'Throughput', value: 'Infinite Moo' },
              { label: 'Security', value: 'Bovine-Grade' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/5 p-2 rough-border border-white/10"
                whileHover={{ y: -3, borderColor: 'rgba(255,153,51,0.2)' }}
              >
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-0.5">{stat.label}</div>
                <div className="text-[11px] md:text-xs font-black text-white uppercase">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="px-6 py-2.5 rounded-full font-black text-sm text-white relative overflow-hidden bg-gradient-to-r from-saffron to-india-green group rough-border shadow-[0_0_30px_rgba(255,153,51,0.2)]"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onValidate}
          >
            <span className="relative z-10 flex items-center gap-3">
              Validate with Cows <motion.span animate={{ x: isHovered ? 5 : 0 }}></motion.span>
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
    </section>
  )
}
