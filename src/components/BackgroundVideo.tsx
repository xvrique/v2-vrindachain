import { motion } from 'framer-motion'

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-black">
      {/* 1. The Speed Lines / Zoom Effect (Simulated if no video) */}
      <div className="absolute inset-0 z-[0] opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)] z-10" />
        <div className="speed-lines-container absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
              style={{
                rotate: `${i * 18}deg`,
              }}
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. Optional Video Element (User can put bg-video.mp4 here) */}
      {/* 
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-30"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video> 
      */}

      {/* 3. Degen Overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
    </div>
  )
}
