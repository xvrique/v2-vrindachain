import { motion } from 'framer-motion'

export default function HowToBuy() {
  const steps = [
    {
      badge: '[WALLET]',
      title: 'Get a Wallet',
      description: 'Download any Solana wallet. Phantom, Solflare, or whatever the cows recommend. Make sure it can handle the stink.',
      button: 'Get Wallet',
      link: 'Guide',
      color: 'from-saffron to-saffron-dark',
    },
    {
      badge: '[FUND]',
      title: 'Buy Some SOL',
      description: 'You need SOL to pay gas fees (in regret). Buy from an exchange, bridge from another chain, or borrow from a monkey.',
      note: 'Minimum 0.1 SOL recommended for gutter entry',
      color: 'from-india-green to-india-green-light',
    },
    {
      badge: '[SWAP]',
      title: 'Swap for $V2',
      description: 'Head to Jupiter, Raydium, or any DEX that accepts gutter liquidity. Paste the $V2 contract address and swap your SOL.',
      contractNote: 'Contract Address: Coming soon from the sewers...',
      color: 'from-saffron-dark to-india-green',
    },
    {
      badge: '[JOIN]',
      title: 'Join the Chaos',
      description: 'Congratulations! You\'re now part of the monkey army. Hold your $V2, validate with cows, and watch the chaos unfold.',
      note: 'Join our Telegram for monkey memes, cow updates, and gutter news',
      color: 'from-saffron to-yellow-500',
    },
  ]

  const tabs = [
    { label: 'DEX (Recommended)', active: true },
    { label: 'Gutter Bridge', active: false },
  ]

  return (
    <section id="how-to-buy" className="relative py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent">
            How to Buy
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 justify-center mb-12">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full font-bold text-sm ${
                  tab.active
                    ? 'bg-gradient-to-r from-saffron to-india-green text-white'
                    : 'bg-white/5 text-white/60 border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-sm md:text-base font-mono font-bold border-4"
                style={{
                  background: `linear-gradient(135deg, ${step.color.split(' ')[1]} 0%, ${step.color.split(' ')[3]} 100%)`,
                  boxShadow: '0 0 30px rgba(255, 153, 51, 0.3)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {step.badge}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-base mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Button */}
                {step.button && (
                  <div className="flex gap-3 items-center">
                    <motion.button
                      className="px-6 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-saffron to-india-green text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {step.button}
                    </motion.button>
                    {step.link && (
                      <motion.button
                        className="px-6 py-2 rounded-full font-bold text-sm bg-white/5 text-saffron border border-orange-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {step.link}
                      </motion.button>
                    )}
                  </div>
                )}

                {/* Note */}
                {step.note && (
                  <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm">
                      💡 {step.note}
                    </p>
                  </div>
                )}

                {/* Contract Note */}
                {step.contractNote && (
                  <div className="mt-4 p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                    <p className="text-orange-300 text-sm font-mono">
                      {step.contractNote}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
