import { motion } from 'framer-motion'

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Birth of Lila',
      status: 'current',
      emoji: '🌱',
      items: [
        'Website launch',
        'Meme army activation',
        'Telegram and X launch',
        'Token deployment',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Mandir Expansion',
      status: 'upcoming',
      emoji: '🏛️',
      items: [
        'Holder dashboard',
        'Meme generator',
        'Community raids',
        'Prasad points system',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Bansuri Bridge',
      status: 'upcoming',
      emoji: '🪈',
      items: [
        'Mock bridge interface',
        'Staking experience',
        'Peacock feather NFTs',
        'Bhakti leaderboard',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Ras Lila Mainnet',
      status: 'future',
      emoji: '🎭',
      items: [
        'Full meme ecosystem',
        'Community quests',
        'AI-Lila tools',
        'Global kirtan takeover',
      ],
    },
  ]

  return (
    <section id="roadmap" className="relative py-24 px-4 bg-transparent">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 153, 51, 0.1) 0%, transparent 70%)',
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
          <h2 className="text-3xl md:text-6xl font-black mb-6 bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent uppercase tracking-tighter">
            Roadmap
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From Lila to Ras Lila: The path to global kirtan takeover
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                phase.status === 'current'
                  ? 'border-saffron/50 bg-saffron/10'
                  : 'border-white/10 hover:border-saffron/30'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Phase badge */}
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="text-xs font-black uppercase tracking-widest text-saffron"
                >
                  {phase.phase}
                </span>
              </div>

              {/* Emoji and title */}
              <div className="mb-6">
                <div className="text-5xl mb-3">{phase.emoji}</div>
                <h3 
                  className="text-2xl font-black text-india-green uppercase tracking-tight"
                >
                  {phase.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <span className="text-saffron font-black mt-0.5">→</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
