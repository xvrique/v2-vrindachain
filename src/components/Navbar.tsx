import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  scrollY: number
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'HOW TO BUY', href: '#how-to-buy' },
    { label: 'SWAP', href: 'https://jup.ag', external: true },
    { label: 'Vrindachain?', href: '#about' },
    { label: 'CHART', href: 'https://dexscreener.com', external: true },
    { label: 'JOIN', href: '#final-cta' },
    { label: 'SOCIALS', href: 'https://x.com/vrindachainL2', external: true },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrollY > 50 ? 'bg-black/95 backdrop-blur-xl' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        {/* Ticker Bar - Compact */}
        <div className="bg-saffron h-6 flex items-center overflow-hidden">
          <div className="flex whitespace-nowrap animate-ticker items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[9px] font-black uppercase text-black mx-10 tracking-[0.1em]">
                — STINK: <span className="text-white">CRITICAL</span> — CA: s73AxfoVSh8GTbCkbMtCdPHb3nnTxQiDbktLnLNpump
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between relative">
          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-8 w-1/3">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white/30 hover:text-saffron transition-all font-bold text-[10px] uppercase tracking-[0.2em]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Center Branding (Absolutely Centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group cursor-pointer z-10">
            <span className="text-saffron font-exclusive font-black text-3xl tracking-[0.1em] drop-shadow-[0_0_15px_rgba(255,153,51,0.4)] transition-all group-hover:scale-110">$V2</span>
          </div>

          {/* Right Links & Mobile Toggle */}
          <div className="flex-1 lg:flex-none lg:w-1/3 flex justify-end items-center gap-8">
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-white/30 hover:text-india-green transition-all font-bold text-[10px] uppercase tracking-[0.2em]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-saffron font-exclusive font-black text-base uppercase tracking-widest transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
