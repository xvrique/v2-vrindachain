import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EntryScanOverlay from './EntryScanOverlay'
import MusicTicker from './MusicTicker'
import MusicToggleButton from './MusicToggleButton'

export default function MusicPlayer({
  onEnter
}: {
  onEnter?: () => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showEnterScreen, setShowEnterScreen] = useState(true)
  const [verificationState, setVerificationState] = useState<'idle' | 'scanning' | 'success'>('idle')
  const [scanProgress, setScanProgress] = useState(0)
  const [scanText, setScanText] = useState('PROCESSING SOLANA BALANCE')
  const [isSoundOn, setIsSoundOn] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const scannerAudioRef = useRef<HTMLAudioElement | null>(null)
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setShowEnterScreen(true)
    audioRef.current = new Audio('/Stink Critical.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 1.0

    scannerAudioRef.current = new Audio('/loadingsound.mp3')
    scannerAudioRef.current.loop = true
    scannerAudioRef.current.volume = 1.0

    welcomeAudioRef.current = new Audio('/sounds.mp3')
    welcomeAudioRef.current.loop = false
    welcomeAudioRef.current.volume = 1.0

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      if (scannerAudioRef.current) {
        scannerAudioRef.current.pause()
        scannerAudioRef.current = null
      }
      if (welcomeAudioRef.current) {
        welcomeAudioRef.current.pause()
        welcomeAudioRef.current = null
      }
    }
  }, [])

  // Handle Sound Toggle
  useEffect(() => {
    const volume = isSoundOn ? 1.0 : 0
    if (audioRef.current) audioRef.current.muted = !isSoundOn
    if (scannerAudioRef.current) scannerAudioRef.current.muted = !isSoundOn
    if (welcomeAudioRef.current) welcomeAudioRef.current.muted = !isSoundOn
  }, [isSoundOn])

  const startMusic = () => {
    // Instantly stop the welcome audio when the screen disappears
    if (welcomeAudioRef.current) {
      welcomeAudioRef.current.pause()
      welcomeAudioRef.current.currentTime = 0
    }

    if (audioRef.current) {
      // Only start music if not already playing
      if (!isPlaying) {
        audioRef.current.volume = 0
        audioRef.current.play().catch(err => console.log("Audio play failed:", err))

        let progress = 0
        const fadeInterval = setInterval(() => {
          progress += 0.05
          if (audioRef.current) {
            audioRef.current.volume = Math.min(0.4, progress * 0.4)
          }
          if (progress >= 1) clearInterval(fadeInterval)
        }, 100)
        setIsPlaying(true)
      }

      setShowEnterScreen(false)
      if (onEnter) onEnter()
    }
  }

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err))
    }
    setIsPlaying(!isPlaying)
  }

  const startVerification = () => {
    if (scannerAudioRef.current) {
      scannerAudioRef.current.currentTime = 0;
      scannerAudioRef.current.play().catch(err => console.log("Scanner audio play failed:", err));
    }
    setVerificationState('scanning')
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 12
      if (progress >= 100) {
        progress = 100
        setScanProgress(100)
        clearInterval(interval)
        if (scannerAudioRef.current) {
          scannerAudioRef.current.pause()
        }
        setTimeout(() => {
          setVerificationState('success')
          if (welcomeAudioRef.current) {
            welcomeAudioRef.current.currentTime = 0;
            welcomeAudioRef.current.play().catch(err => console.log("Welcome audio play failed:", err));
          }
          setTimeout(() => {
            startMusic()
          }, 3000)
        }, 800)
      }
      setScanProgress(Math.floor(progress))

      const statuses = [
        'PROCESSING SOLANA BALANCE',
        'ANALYZING STINK LEVELS',
        'VERIFYING BOVINE CONSENSUS',
        'LOCATING MONKEY ASSETS',
        'CLEANING THE GUTTER...',
        'BYPASSING RICKSHAW PROTOCOLS',
        'MANUAL OVERRIDE DETECTED',
        'STINK INTENSITY: CRITICAL'
      ]
      setScanText(statuses[Math.floor(progress / 12) % statuses.length])
    }, 400)
  }

  return (
    <>
      <EntryScanOverlay
        showEnterScreen={showEnterScreen}
        verificationState={verificationState}
        scanProgress={scanProgress}
        scanText={scanText}
        startVerification={startVerification}
        isSoundOn={isSoundOn}
        onToggleSound={() => setIsSoundOn(!isSoundOn)}
      />

      <MusicTicker isPlaying={isPlaying} />

      <MusicToggleButton
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
      />
    </>
  )
}
