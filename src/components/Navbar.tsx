import { useState } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-500 shadow-sm hover:shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-mono font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 tracking-wider hover:scale-105 active:scale-95"
            >
              {'<SR />'}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="relative w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center border border-gray-200 dark:border-gray-700 ml-4"
              aria-label="Toggle theme"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Moon icon - shown in light mode, clicking switches to dark */}
                <FaMoon 
                  size={18}
                  className={`absolute transition-all duration-500 ease-in-out text-gray-700 ${
                    theme === 'light' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 rotate-180 scale-0'
                  }`}
                />
                {/* Sun icon - shown in dark mode, clicking switches to light */}
                <FaSun 
                  size={18}
                  className={`absolute transition-all duration-500 ease-in-out text-yellow-500 ${
                    theme === 'dark' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 -rotate-180 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="relative w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center border border-gray-200 dark:border-gray-700"
              aria-label="Toggle theme"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Moon icon - shown in light mode, clicking switches to dark */}
                <FaMoon 
                  size={20}
                  className={`absolute transition-all duration-500 ease-in-out text-gray-700 ${
                    theme === 'light' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 rotate-180 scale-0'
                  }`}
                />
                {/* Sun icon - shown in dark mode, clicking switches to light */}
                <FaSun 
                  size={20}
                  className={`absolute transition-all duration-500 ease-in-out text-yellow-500 ${
                    theme === 'dark' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 -rotate-180 scale-0'
                  }`}
                />
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

