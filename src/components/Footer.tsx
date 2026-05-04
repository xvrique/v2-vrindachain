import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = [
    { label: 'Technology', href: '#technology' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Community', href: '#community' },
  ]

  return (
    <footer className="relative py-20 px-4 bg-black border-t border-white/10 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black gradient-text mb-4">
              🐄 Vrindachain
            </h3>
            <p className="text-cream/70 leading-relaxed">
              The first AI-powered Layer 2 born from gutter liquidity, cow validators, and monkey security. Scale the stink.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-cream mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-saffron transition-colors font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-lg font-bold text-cream mb-6">Network Stats</h4>
            <div className="space-y-3 text-cream/70">
              <p className="font-semibold">TPS: <span className="text-saffron">10,000</span></p>
              <p className="font-semibold">Hygiene: <span className="text-saffron">0</span></p>
              <p className="font-semibold">Chaos: <span className="text-saffron">Infinite</span></p>
              <p className="font-semibold">Status: <span className="text-peacock-green">🟢 Smelly</span></p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="glass-strong rounded-2xl p-8 border border-white/10 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-cream/70 leading-relaxed">
            <span className="font-bold text-saffron">⚠️ Disclaimer:</span> Vrindachain is a meme project. Nothing on this website is financial advice, technical advice, or a guaranteed path to riches. This is a parody. Emotionally, yes it's real. Technically, please don't ask. Trade responsibly. Validate with cows. Avoid monkeys. Gas fees paid in regret.
          </p>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cream/50 text-sm font-semibold">
            © 2024 Vrindachain. Built different. Smells worse. 🐄
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-cream/50 hover:text-saffron transition-colors text-sm font-semibold">
              Privacy
            </a>
            <a href="#" className="text-cream/50 hover:text-saffron transition-colors text-sm font-semibold">
              Terms
            </a>
            <a href="#" className="text-cream/50 hover:text-saffron transition-colors text-sm font-semibold">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
