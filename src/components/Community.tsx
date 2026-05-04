import { motion } from 'framer-motion'
import { MessageCircle, Twitter, TrendingUp, ShoppingCart } from 'lucide-react'

export default function Community() {
  const communityLinks = [
    {
      title: 'Telegram',
      description: 'Join the kirtan',
      icon: MessageCircle,
      emoji: '💬',
      href: '#',
    },
    {
      title: 'X / Twitter',
      description: 'Follow the lila',
      icon: Twitter,
      emoji: '𝕏',
      href: '#',
    },
    {
      title: 'Dexscreener',
      description: 'Chart the mandir',
      icon: TrendingUp,
      emoji: '📈',
      href: '#',
    },
    {
      title: 'Buy $V2',
      description: 'Enter the ecosystem',
      icon: ShoppingCart,
      emoji: '💰',
      href: '#',
    },
  ]

  return (
    <section id="community" className="relative py-24 px-4 bg-black">
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
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Join the Kirtan
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enter the Mandir
          </h3>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Connect with the community and become part of the lila
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-6">{link.emoji}</div>

              <h3 
                className="text-2xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {link.title}
              </h3>

              <p className="text-white/70 text-sm mb-6">
                {link.description}
              </p>

              <div className="mt-auto text-purple-400 font-bold text-lg">
                →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
