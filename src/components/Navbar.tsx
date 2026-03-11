import { useEffect, useState, useRef } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import PillNav from './PillNav'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  const glowColor = theme === 'light'
    ? '0 0 18px rgba(99,102,241,0.55), 0 0 36px rgba(99,102,241,0.2)'
    : '0 0 18px rgba(251,191,36,0.55), 0 0 36px rgba(251,191,36,0.2)'

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-[42px] h-[42px] rounded-full flex items-center justify-center overflow-hidden"
      style={{ background: theme === 'light' ? '#111827' : '#f9fafb' }}
      whileHover={{ scale: 1.14, rotate: 20, boxShadow: glowColor }}
      whileTap={{ scale: 0.9, rotate: -10 }}
      transition={{ type: 'spring', stiffness: 420, damping: 14 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'backOut' }}
            className="absolute"
          >
            <FaMoon size={16} className="text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'backOut' }}
            className="absolute"
          >
            <FaSun size={16} className="text-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
]

const Navbar = () => {
  const { theme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const prevSectionRef = useRef<string>('')
  const prevThemeRef = useRef<string>('')

  const isLight = theme === 'light'

  useEffect(() => {
    if (prevThemeRef.current === theme) return
    prevThemeRef.current = theme

    const logo = document.querySelector('.pill-logo')
    const pills = document.querySelectorAll('.pill')
    gsap.timeline()
      .fromTo(logo, { scale: 0.75, rotate: -15 }, { scale: 1, rotate: 0, duration: 0.45, ease: 'back.out(2.5)' })
      .fromTo(pills, { scale: 0.8, y: 5 }, { scale: 1, y: 0, duration: 0.4, ease: 'back.out(2)', stagger: 0.06 }, '-=0.3')
  }, [theme])

  useEffect(() => {
    if (prevSectionRef.current === activeSection) return
    prevSectionRef.current = activeSection

    const activePill = document.querySelector<HTMLElement>(`.pill[href="#${activeSection}"]`)
    if (activePill) {
      gsap.fromTo(
        activePill,
        { scale: 0.72, y: -8 },
        { scale: 1, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' }
      )
    }
  }, [activeSection])

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section') || '')
          }
        })
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      e.preventDefault()
      const sectionId = href.replace('#', '')
      const element = document.querySelector(`[data-section="${sectionId}"]`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <PillNav
      logoNode={
        <motion.span
          style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '13px', letterSpacing: '-0.5px' }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 16 }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {'<SR/>'}
          </span>
        </motion.span>
      }
      items={navItems}
      activeHref={`#${activeSection}`}
      baseColor={isLight ? '#ffffff' : '#111827'}
      pillColor={isLight ? '#111827' : '#f9fafb'}
      pillTextColor={isLight ? '#ffffff' : '#111827'}
      hoveredPillTextColor={isLight ? '#111827' : '#f9fafb'}
      rightContent={<ThemeToggle />}
    />
  )
}

export default Navbar
