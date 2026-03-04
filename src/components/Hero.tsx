import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import ProfileCard from './ProfileCard'
import DockIcons from './DockIcons'

const PROFILE_PIC = '/profpic.JPEG'
const ROLES = ['Software Engineer', 'Data Engineer']

const Hero = () => {
  const name = 'Sudarshan'
  const [displayedName, setDisplayedName] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const blurFilter = useTransform(scrollYProgress, [0.15, 0.7], ['blur(0px)', 'blur(10px)'])
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0])

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedName(name.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 150)
    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    if (isTypingComplete) {
      const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 530)
      return () => clearInterval(cursorInterval)
    }
  }, [isTypingComplete])

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(roleInterval)
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content — blurs + fades as you scroll out */}
      <motion.div
        className="max-w-5xl mx-auto w-full relative z-10"
        style={{ filter: blurFilter, opacity: contentOpacity }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-12">
          {/* Left: name + social */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-3 font-mono"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                {displayedName}
                <span
                  className={`inline-block w-1 md:w-1.5 h-[0.85em] bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 ml-1 align-middle ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-100`}
                />
              </span>
            </motion.h1>

            {/* Cycling role */}
            <div className="h-8 mb-8 overflow-hidden flex items-center justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-mono"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <DockIcons
                baseSize={48}
                magnification={72}
                distance={120}
                items={[
                  {
                    icon: <FaEnvelope size={20} />,
                    label: 'Email',
                    bg: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    href: 'mailto:sudarshan86.ramesh@gmail.com',
                  },
                  {
                    icon: <FaGithub size={20} />,
                    label: 'GitHub',
                    bg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                    href: 'https://github.com/sudarshanr10',
                    target: '_blank',
                  },
                  {
                    icon: <FaLinkedin size={20} />,
                    label: 'LinkedIn',
                    bg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    href: 'https://www.linkedin.com/in/sudarshan-ramesh-424386204/',
                    target: '_blank',
                  },
                ]}
              />
            </motion.div>
          </motion.div>

          {/* Right: ProfileCard */}
          <motion.div
            className="flex-shrink-0 hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfileCard
              avatarUrl={PROFILE_PIC}
              name="Sudarshan"
              title="Software Engineer"
              handle="sudarshanr10"
              status=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              behindGlowEnabled={false}
              className=""
              onContactClick={() => window.open('/resume.pdf', '_blank')}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent pointer-events-none z-20" />
    </section>
  )
}

export default Hero
