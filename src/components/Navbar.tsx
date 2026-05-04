import { useState, useEffect } from 'react'
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

  const tickerData = [
    { label: 'CA:', value: '$f4ju...pump', color: 'text-white' },
    { label: 'PRICE:', value: '$0.00001840', color: 'text-white/60' },
    { label: 'MC:', value: '$97,226', color: 'text-white/60' },
    { label: 'STINK:', value: 'CRITICAL', color: 'text-saffron' },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        {/* Ticker Bar - Top */}
        <div className="bg-black/40 border-b border-white/5 overflow-hidden backdrop-blur-sm">
          <motion.div
            className="flex items-center gap-12 py-1.5"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 whitespace-nowrap">
                {tickerData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                    <span className={`text-[10px] font-mono font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left - Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-saffron transition-all duration-300 font-black text-[11px] uppercase tracking-[0.2em]"
                  whileHover={{ y: -2, letterSpacing: '0.25em' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Center - Logo */}
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-saffron/20 blur-xl rounded-full group-hover:bg-india-green/20 transition-colors duration-500"></div>
              <div className="relative text-4xl font-accent text-white flex items-center gap-1">
                <span className="text-saffron group-hover:text-white transition-colors">$</span>
                V2
                <motion.span 
                  className="absolute -top-1 -right-4 text-[10px] font-mono text-india-green"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIVE
                </motion.span>
              </div>
            </motion.div>

            {/* Right - Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-india-green transition-all duration-300 font-black text-[11px] uppercase tracking-[0.2em]"
                  whileHover={{ y: -2, letterSpacing: '0.25em' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden fixed inset-x-0 top-[108px] bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <div className="px-6 py-8 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block text-2xl font-black text-white hover:text-saffron transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <div className="pt-8 border-t border-white/5">
                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-saffron to-india-green font-black text-white">
                    BUY $V2 NOW
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
