import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-4 bg-transparent">

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent">
            Ready to Scale the Stink?
          </motion.h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
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
              className="px-8 py-4 rounded-full font-bold text-lg text-white relative overflow-hidden group min-w-[200px]"
              style={{
                background: 'transparent',
                border: '2px solid #ff9933',
                color: '#ff9933',
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 153, 51, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Launch App</span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              className="px-8 py-4 rounded-full font-bold text-lg relative overflow-hidden group min-w-[200px]"
              style={{
                background: 'transparent',
                border: '2px solid #138808',
                color: '#138808',
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(19, 136, 8, 0.1)',
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
