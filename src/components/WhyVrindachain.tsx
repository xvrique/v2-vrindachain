import { motion } from 'framer-motion'
import { Zap, Heart, Shield } from 'lucide-react'

export default function WhyVrindachain() {
  const features = [
    {
      title: 'Sacred Speed',
      description: 'Crypto has lost its dharma. Gas fees are high. Bots are everywhere. Vrindachain restores balance with AI-Lila infrastructure.',
      icon: Zap,
      emoji: '⚡',
    },
    {
      title: 'Divine Liquidity',
      description: 'Liquidity has no bhakti. Routes sacred swaps through the Yamuna Pool with divine efficiency. No cursed slippage.',
      icon: Heart,
      emoji: '💧',
    },
    {
      title: 'Anti-Asura Protection',
      description: 'Proof of Bhakti consensus protects traders from sandwich attacks using sacred cow-level transaction defense.',
      icon: Shield,
      emoji: '🛡️',
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-transparent">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Vrindachain?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Crypto has lost its dharma. Gas fees are high. Bots are everywhere. Liquidity has no bhakti. Vrindachain restores balance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-6">{feature.emoji}</div>
              
              <h3 
                className="text-2xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {feature.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
