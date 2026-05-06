import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import HowToBuy from './components/HowToBuy'
import About from './components/About'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import KonamiCode from './components/KonamiCode'
import BackgroundVideo from './components/BackgroundVideo'
import MusicPlayer from './components/MusicPlayer'

import CowValidatorModal from './components/CowValidatorModal'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isEntered, setIsEntered] = useState(false)
  const [isCowValidatorOpen, setIsCowValidatorOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Global SVG Filter for Organic Smoke (Gooey/Warp Effect) */}
      <svg className="absolute w-0 h-0 invisible">
        <defs>
          <filter id="fart-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>
      </svg>
      <BackgroundVideo isEntered={isEntered} />
      
      {/* Interactive Elements */}
      <KonamiCode />
      <CowValidatorModal 
        isOpen={isCowValidatorOpen} 
        onClose={() => setIsCowValidatorOpen(false)} 
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero onValidate={() => setIsCowValidatorOpen(true)} />
        <FeatureSection onValidate={() => setIsCowValidatorOpen(true)} />
        <HowToBuy />
        <About />
        <FinalCTA onValidate={() => setIsCowValidatorOpen(true)} />
        <Footer />
        <MusicPlayer 
          onEnter={() => setIsEntered(true)} 
        />
      </div>
    </div>
  )
}

export default App
