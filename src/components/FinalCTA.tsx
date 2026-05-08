import { motion } from 'framer-motion'
import SmokeEffect from './SmokeEffect'

export default function FinalCTA({ onValidate }: { onValidate?: () => void }) {
  return (
    <section id="final-cta" className="relative pt-4 pb-20 px-4 bg-transparent overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <SmokeEffect density={15}>
            <motion.h2 className="text-2xl md:text-4xl font-black mb-6 bg-gradient-to-r from-saffron via-white to-india-green bg-clip-text text-transparent uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              Ready to Scale the Stink?
            </motion.h2>
          </SmokeEffect>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Join the monkey army. Validate with cows. Enter the gutter.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Primary Button */}
            <motion.button
              className="px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest text-white relative overflow-hidden group min-w-[180px] rough-border border-saffron/50 text-saffron"
              style={{
                background: 'transparent',
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 153, 51, 0.1)',
                borderColor: '#ff9933',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onValidate}
            >
              <span className="relative z-10">Buy $V2 now →</span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              className="px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest text-white relative overflow-hidden group min-w-[180px] rough-border border-india-green/50 text-india-green"
              style={{
                background: 'transparent',
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(19, 136, 8, 0.1)',
                borderColor: '#138808',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Join the Monkey Army</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
