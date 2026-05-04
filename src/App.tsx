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
import BackgroundVideo from './components/BackgroundVideo'
import MusicPlayer from './components/MusicPlayer'

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
    <div className="relative w-full min-h-screen">
      <BackgroundVideo />
      <ParticleBackground />
      
      {/* Interactive Elements */}
      <KonamiCode />
      {/* <CursorTrail /> */}
      <InteractiveCow />
      <FlyingMonkey />
      
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
        <MusicPlayer />
      </div>
    </div>
  )
}

export default App
