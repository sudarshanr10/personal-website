import { useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import PillNav from './PillNav'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-[42px] h-[42px] rounded-full flex items-center justify-center overflow-hidden"
      style={{ background: theme === 'light' ? '#111827' : '#f9fafb' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <FaMoon size={16} className="text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <FaSun size={16} className="text-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

const Navbar = () => {
  const { theme } = useTheme()

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
  ]

  const isLight = theme === 'light'

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
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
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
      activeHref=""
      baseColor={isLight ? '#ffffff' : '#111827'}
      pillColor={isLight ? '#111827' : '#f9fafb'}
      pillTextColor={isLight ? '#ffffff' : '#111827'}
      hoveredPillTextColor={isLight ? '#111827' : '#f9fafb'}
      rightContent={<ThemeToggle />}
    />
  )
}

export default Navbar
