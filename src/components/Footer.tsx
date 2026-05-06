import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = [
    { label: 'HOW TO BUY', href: '#how-to-buy' },
    { label: 'SWAP', href: 'https://jup.ag', external: true },
    { label: 'Vrindachain?', href: '#about' },
    { label: 'CHART', href: 'https://dexscreener.com', external: true },
    { label: 'JOIN', href: '#final-cta' },
    { label: 'SOCIALS', href: 'https://x.com/xvrique', external: true },
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
            <h3 className="text-3xl font-exclusive font-black text-saffron mb-4 uppercase tracking-tighter">
              Vrindachain
            </h3>
            <p className="text-white/50 leading-relaxed text-sm">
              The first AI-powered Layer 2 born from gutter liquidity, cow validators, and monkey security. Scale the stink.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-black text-white mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/40 hover:text-saffron transition-colors text-xs font-black uppercase tracking-tight"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-sm font-black text-white mb-6 uppercase tracking-widest">Network Stats</h4>
            <div className="space-y-3 text-white/40 text-xs font-black uppercase tracking-tight">
              <p>TPS: <span className="text-saffron">10,000</span></p>
              <p>Hygiene: <span className="text-saffron">ABSOULTELY ZER0</span></p>
              <p>Chaos: <span className="text-saffron">Infinite</span></p>
              <p>Status: <span className="text-india-green">True Smelly</span></p>
            </div>
          </div>
        </motion.div>


        {/* Bottom bar */}
        <motion.div
          className="flex flex-col items-center pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/30 text-[10px] font-black uppercase tracking-widest text-center">
            © 2026 Vrindachain. Built different. Stinks More. Smells worse.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
