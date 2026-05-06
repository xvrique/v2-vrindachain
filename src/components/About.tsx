import { motion } from 'framer-motion'
import SmokeEffect from './SmokeEffect'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-24 px-4 bg-transparent overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Title Group */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Doodle Arrow Annotation */}
          <div className="absolute -top-10 left-1/4 hidden md:block">
            <div className="w-10 h-10 doodle-arrow text-india-green -rotate-90"></div>
            <p className="font-accent text-india-green text-[10px] mt-1 -ml-6 rotate-[-10deg]">Divine Wisdom</p>
          </div>

          <SmokeEffect density={15}>
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-saffron via-white to-india-green bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] uppercase tracking-tighter">
              Vrindachain?
            </h2>
          </SmokeEffect>

          <h3 className="text-lg md:text-xl font-bold text-white/90 mb-6 leading-tight max-w-2xl mx-auto uppercase tracking-wide">
            Next-Gen Meme Infrastructure for Degens, Monkeys, Cows & Believers
          </h3>

          <div className="w-16 h-1 bg-gradient-to-r from-saffron to-india-green mx-auto mb-6 rounded-full"></div>

          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Vrindachain AI Layer 2 is a next-gen meme infrastructure built for those who still believe AI can save their bags. It scales through <span className="text-saffron font-bold italic underline decoration-saffron/30">Rickshaw Rollups</span> and secures with <span className="text-india-green font-bold italic underline decoration-india-green/30">Monkey Security</span>.
          </p>
        </motion.div>

        {/* Final Disclaimer Block - Dirty Stink Version */}
        <motion.div
          className="mt-12 p-6 md:p-8 bg-black/40 rough-border noise-texture skew-card text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Subtle green haze background */}
          <div className="absolute inset-0 bg-india-green/5 blur-3xl -z-10" />

          <p className="text-lg md:text-xl font-black text-white/90 mb-6 tracking-tight italic">
            "Born from the sacred chaos of back alleys, delivering the smelliest scaling solution in crypto."
          </p>

          <motion.div 
            className="stamp inline-block bg-red-900/20 border-red-500/40 text-red-500 font-black text-xs md:text-sm uppercase tracking-widest"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            NOT FINANCIAL ADVICE. BARELY ADVICE.
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
