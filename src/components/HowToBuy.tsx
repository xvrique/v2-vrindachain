import { motion } from 'framer-motion'
import SmokeEffect from './SmokeEffect'

export default function HowToBuy() {
  const steps = [
    {
      badge: '/htb-section1.png',
      title: 'Get a Wallet',
      description: 'Download any Solana wallet. Phantom, Solflare, or whatever the cows recommend. Make sure it can handle the stink.',
      button: 'Get Wallet',
      link: 'Guide',
      color: 'from-saffron to-saffron-dark',
    },
    {
      badge: '/htb-section2.png',
      title: 'Buy Some SOL',
      description: 'You need SOL to pay gas fees (in regret). Buy from an exchange, bridge from another chain, or borrow from a monkey.',
      note: 'Minimum 0.1 SOL recommended for gutter entry',
      color: 'from-india-green to-india-green-light',
    },
    {
      badge: '/htb-section3.png',
      title: 'Swap for $V2',
      description: 'Head to Jupiter, Raydium, or any DEX that accepts gutter liquidity. Paste the $V2 token address and swap your SOL.',
      contractNote: 'Token Address: Bb3TNUHP6btcG2QV5Aft83rnUt1ACGAD7CWPQLmnpump',
      color: 'from-saffron-dark to-india-green',
    },
    {
      badge: '/htb-section4.png',
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
    <section id="how-to-buy" className="relative py-16 md:py-20 px-4 bg-transparent overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SmokeEffect density={15}>
            <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-saffron via-white to-india-green bg-clip-text text-transparent uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              How to Buy
            </h2>
          </SmokeEffect>

          {/* Tabs */}
          <div className="flex gap-3 justify-center mb-10">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                className={`px-5 py-2.5 rounded-full font-bold text-xs ${
                  tab.active
                    ? 'bg-gradient-to-r from-saffron to-india-green text-white shadow-[0_0_20px_rgba(255,153,51,0.2)]'
                    : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'
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
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-5 items-start p-6 bg-white/[0.02] rough-border border-white/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Badge Image */}
              <motion.div
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
              >
                <img 
                  src={step.badge} 
                  alt={step.title} 
                  className="w-full h-full object-cover mix-blend-lighten"
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Button */}
                {step.button && (
                  <div className="flex gap-3 items-center">
                    <motion.button
                      className="px-6 py-2 rounded-full font-bold text-xs bg-gradient-to-r from-saffron to-india-green text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {step.button}
                    </motion.button>
                    {step.link && (
                      <motion.button
                        className="px-6 py-2 rounded-full font-bold text-xs bg-white/5 text-saffron border border-orange-500/20"
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
                  <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 rough-border">
                    <p className="text-white/40 text-[10px] md:text-xs">
                      💡 {step.note}
                    </p>
                  </div>
                )}

                {/* Contract Note */}
                {step.contractNote && (
                  <div className="mt-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 rough-border">
                    <p className="text-orange-300/80 text-[10px] md:text-xs font-mono">
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
