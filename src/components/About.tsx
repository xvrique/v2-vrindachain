import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 bg-transparent overflow-hidden">
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

        {/* Final Disclaimer Block */}
        <motion.div
          className="mt-32 p-12 bg-black border border-white/20 text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          
          <p className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
            "Born from the sacred chaos of back alleys, delivering the smelliest scaling solution in crypto."
          </p>

          <motion.div 
            className="inline-block px-8 py-4 bg-black border border-red-500/50 text-red-500 font-black text-xl"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            NOT FINANCIAL ADVICE. BARELY ADVICE.
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
