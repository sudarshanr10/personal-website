import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false })

  // Spring-driven values for 3D photo tilt
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-400, 400], [8, -8]), { stiffness: 120, damping: 22 })
  const rotateY = useSpring(useTransform(rawX, [-400, 400], [-8, 8]), { stiffness: 120, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set(e.clientX - rect.left - rect.width / 2)
    rawY.set(e.clientY - rect.top - rect.height / 2)
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true })
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
    setMousePos(m => ({ ...m, active: false }))
  }

  return (
    <section
      ref={heroRef}
      data-section="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes name-gradient {
          0%, 100% { background-position: 0% center; }
          50%       { background-position: 100% center; }
        }
        @keyframes ring-cw  { to { transform: rotate(360deg);  } }
        @keyframes ring-ccw { to { transform: rotate(-360deg); } }
        .ring-cw  { animation: ring-cw  22s linear infinite; }
        .ring-ccw { animation: ring-ccw 14s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ring-cw, .ring-ccw { animation-play-state: paused; }
        }
      `}</style>

      {/* Centered aurora */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: '110%', height: '80%',
          background: 'radial-gradient(ellipse at 50% 45%, rgba(99,102,241,0.13) 0%, rgba(139,92,246,0.07) 40%, transparent 68%)',
          filter: 'blur(72px)',
        }} />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.09) 1px, transparent 0)',
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(ellipse 68% 68% at 50% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 68% 68% at 50% 50%, black 20%, transparent 100%)',
      }} />

      {/* Cursor spotlight */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: mousePos.active ? 1 : 0,
        transition: 'opacity 0.55s ease',
        background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.08), transparent 55%)`,
      }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto w-full">

        {/* Photo: entrance scale → 3D tilt + dual spinning rings */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ perspective: '900px' }}
        >
          <motion.div
            className="relative"
            style={{ rotateX, rotateY }}
          >
            {/* Outer CW dashed ring */}
            <div
              className="ring-cw absolute rounded-full pointer-events-none"
              style={{ inset: -26, border: '1px dashed rgba(99,102,241,0.38)' }}
            />

            {/* Inner CCW solid ring */}
            <div
              className="ring-ccw absolute rounded-full pointer-events-none"
              style={{ inset: -12, border: '1px solid rgba(168,85,247,0.32)' }}
            />

            {/* Pulsing glow */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: '-16px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(167,139,250,0.15) 55%, transparent 75%)',
                filter: 'blur(16px)',
              }}
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            />

            {/* Gradient ring border + photo */}
            <div
              className="relative rounded-full p-[2.5px]"
              style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 55%, #f472b6 100%)' }}
            >
              <img
                src="/profpic.JPEG"
                alt="Sudarshan"
                className="w-28 h-28 rounded-full object-cover object-top block"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="font-mono text-xs text-indigo-400 dark:text-indigo-500 tracking-widest uppercase mb-3 select-none"
        >
          software engineer
        </motion.p>

        {/* Name — slide-up reveal + flowing gradient */}
        <div style={{ overflow: 'hidden' }} className="mb-5">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
            className="text-[2.8rem] sm:text-[4.2rem] md:text-[5.8rem] lg:text-[7rem] font-black tracking-tighter leading-[0.88] select-none"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
              backgroundSize: '300% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'name-gradient 7s ease infinite',
            }}
          >
            Sudarshan
          </motion.h1>
        </div>

        {/* Gradient rule */}
        <motion.div
          className="rounded-full mb-10"
          style={{
            height: '1px',
            width: '96px',
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.55), rgba(99,102,241,0.55), transparent)',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.55, delay: 0.3 }}
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.42 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <motion.a
            href="mailto:sudarshan86.ramesh@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-2 px-7 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl overflow-hidden transition-colors duration-200 hover:border-transparent hover:text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="relative flex items-center gap-2">
              <FaEnvelope size={13} />
              Email Me
            </span>
          </motion.a>

          <motion.a
            href="https://github.com/sudarshanr10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-2 px-7 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl overflow-hidden transition-colors duration-200 hover:border-transparent"
          >
            <span className="absolute inset-0 bg-gray-900 dark:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="relative flex items-center gap-2 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-200">
              <FaGithub size={14} />
              GitHub
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sudarshan-ramesh-424386204/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-2 px-7 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl overflow-hidden transition-colors duration-200 hover:border-transparent hover:text-white"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: '#0077b5' }} />
            <span className="relative flex items-center gap-2">
              <FaLinkedin size={14} />
              LinkedIn
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.62 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-300 dark:text-gray-700">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="w-px h-8 rounded-full"
            style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), transparent)' }}
          />
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none z-20" />
    </section>
  )
}

export default Hero
