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
    { label: 'SWAP', href: '#swap' },
    { label: 'MOONSHOT', href: '#moonshot' },
    { label: 'CHART', href: '#chart' },
    { label: 'MERCH', href: '#merch' },
    { label: 'SOCIALS', href: '#socials' },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrollY > 50
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        {/* Ticker Bar - Extreme Contrast */}
        <div className="bg-saffron py-1 overflow-hidden border-b border-black">
          <div className="flex whitespace-nowrap animate-ticker items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[10px] font-black uppercase text-black mx-12 tracking-[0.2em]">
                PRICE: $0.00001840 — MC: $97,226 — STINK: <span className="text-white">CRITICAL</span> — CA: $f4ju...pump
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 3).map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-white/40 hover:text-saffron transition-all font-black text-[11px] uppercase tracking-[0.3em]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Center Branding */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:border-saffron transition-colors">
              <span className="text-saffron font-black text-xl">$</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xs tracking-widest">VRINDACHAIN</span>
              <span className="text-india-green font-black text-[8px] tracking-[0.4em] uppercase">V2_CORE</span>
            </div>
          </div>

          {/* Right Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.slice(3).map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-white/40 hover:text-india-green transition-all font-black text-[11px] uppercase tracking-[0.3em]"
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

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-8 flex flex-col gap-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-white font-black text-xl uppercase tracking-widest">{link.label}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
