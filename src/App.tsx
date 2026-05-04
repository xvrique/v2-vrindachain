import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import HowToBuy from './components/HowToBuy'
import About from './components/About'
import BackedBy from './components/BackedBy'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import KonamiCode from './components/KonamiCode'
import CursorTrail from './components/CursorTrail'
import InteractiveCow from './components/InteractiveCow'
import FlyingMonkey from './components/FlyingMonkey'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <ParticleBackground />
      
      {/* Interactive Elements */}
      <KonamiCode />
      {/* <CursorTrail /> */}
      <InteractiveCow />
      <FlyingMonkey />
      
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-peacock-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-peacock-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero />
        <FeatureSection />
        <HowToBuy />
        <About />
        <BackedBy />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
