import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'
import DockIcons from './DockIcons'

const PROFILE_PIC = '/profpic.JPEG'
const ROLES = ['Software Engineer', 'Rutgers CS Graduate']

// ── Name: types char-by-char, cursor fades out when done ─────────────────────
const TypewriterName = ({
  text,
  onDone,
}: {
  text: string
  onDone: () => void
}) => {
  const [displayed, setDisplayed] = useState('')
  const [cursorOn, setCursorOn] = useState(true)
  const [finished, setFinished] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  // Type out characters
  useEffect(() => {
    let i = 0
    const start = setTimeout(() => {
      const tick = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(tick)
          setTimeout(() => {
            setFinished(true)
            onDoneRef.current()
          }, 480)
        }
      }, 82)
      return () => clearInterval(tick)
    }, 320)
    return () => clearTimeout(start)
  }, [text])

  // Blink cursor while typing
  useEffect(() => {
    if (finished) return
    const b = setInterval(() => setCursorOn(v => !v), 520)
    return () => clearInterval(b)
  }, [finished])

  return (
    <>
      {displayed}
      <span
        aria-hidden
        className="inline-block w-[3px] rounded-full ml-[3px] align-middle"
        style={{
          height: '0.78em',
          background: 'linear-gradient(to bottom, #60a5fa, #a78bfa)',
          boxShadow: '0 0 10px rgba(139,92,246,0.55)',
          opacity: finished ? 0 : cursorOn ? 1 : 0,
          transition: finished ? 'opacity 0.35s ease' : 'opacity 0.12s ease',
        }}
      />
    </>
  )
}

// ── Roles: typewriter cycle — type → pause → delete → next ───────────────────
const TypewriterRoles = ({ roles, active }: { roles: string[]; active: boolean }) => {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing')
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    if (!active) return
    const role = roles[idx]
    let t: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (text.length < role.length) {
        t = setTimeout(() => setText(role.slice(0, text.length + 1)), 68)
      } else {
        t = setTimeout(() => setPhase('pause'), 2200)
      }
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('deleting'), 60)
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(s => s.slice(0, -1)), 36)
      } else {
        setIdx(i => (i + 1) % roles.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(t)
  }, [text, phase, idx, active, roles])

  useEffect(() => {
    const b = setInterval(() => setCursorOn(v => !v), 520)
    return () => clearInterval(b)
  }, [])

  return (
    <span className="font-mono text-base md:text-lg text-gray-500 dark:text-gray-400">
      {/* reserve height so the row doesn't collapse before active */}
      <span>{text || '\u00A0'}</span>
      {active && (
        <span
          aria-hidden
          className="inline-block w-[2px] rounded-full ml-[2px] align-middle bg-gray-400 dark:bg-gray-500"
          style={{
            height: '1em',
            opacity: cursorOn ? 0.75 : 0,
            transition: 'opacity 0.12s ease',
          }}
        />
      )}
    </span>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [rolesActive, setRolesActive] = useState(false)

  return (
    <section
      data-section="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative overflow-hidden bg-transparent transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-12">
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
                <TypewriterName text="Sudarshan" onDone={() => setRolesActive(true)} />
              </span>
            </motion.h1>

            {/* Fixed height so layout never shifts */}
            <div className="h-8 mb-8 flex items-center justify-center md:justify-start">
              <TypewriterRoles roles={ROLES} active={rolesActive} />
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
                    bg: 'linear-gradient(135deg, #ec4899, #f43f5e)',
                    glowColor: 'rgba(244,63,94,0.5)',
                    href: 'mailto:sudarshan86.ramesh@gmail.com',
                  },
                  {
                    icon: <FaGithub size={20} />,
                    label: 'GitHub',
                    bg: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    glowColor: 'rgba(99,102,241,0.5)',
                    href: 'https://github.com/sudarshanr10',
                    target: '_blank',
                  },
                  {
                    icon: <FaLinkedin size={20} />,
                    label: 'LinkedIn',
                    bg: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
                    glowColor: 'rgba(14,165,233,0.5)',
                    href: 'https://www.linkedin.com/in/sudarshan-ramesh-424386204/',
                    target: '_blank',
                  },
                ]}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfileCard
              avatarUrl={PROFILE_PIC}
              name=""
              title=""
              showUserInfo={false}
              behindGlowColor="rgba(99, 102, 241, 0.5)"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none z-20" />
    </section>
  )
}

export default Hero
