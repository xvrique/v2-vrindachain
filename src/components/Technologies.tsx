import { motion } from 'framer-motion'

export default function Technologies() {
  const technologies = [
    {
      title: 'LLM — Lila Liquidity Model',
      description: 'Routes sacred swaps through the Yamuna Pool with divine efficiency. No cursed slippage. No asura bots. Just pure on-chain lila.',
      emoji: '💧',
    },
    {
      title: 'Proof of Bhakti',
      description: 'Validators propose blocks based on devotion, conviction, kirtan energy, and diamond-hand karma.',
      emoji: '🙏',
    },
    {
      title: 'Bansuri Bridge',
      description: 'A cross-chain bridge that blows liquidity from Solana into every loka with flute-powered compression.',
      emoji: '🪈',
    },
    {
      title: 'Gau Mata MEV Shield',
      description: 'Protects traders from sandwich attacks using sacred cow-level transaction defense.',
      emoji: '🐄',
    },
    {
      title: 'Prasad Rewards Engine',
      description: 'Transforms community activity into prasad points, holder badges, and on-chain blessings.',
      emoji: '🎁',
    },
    {
      title: 'Asura Detection Software',
      description: 'Scans wallets for paper hands, cursed bots, and low-vibration liquidity behavior before they enter the mandir.',
      emoji: '🔍',
    },
  ]

  return (
    <section id="technology" className="relative py-24 px-4 bg-black">
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
            Advanced Technologies
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Powered by sacred innovation and divine engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-4xl mb-4">{tech.emoji}</div>

              <h3 
                className="text-xl font-bold mb-3"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {tech.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
