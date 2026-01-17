import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Terminal from './Terminal'

const Hero = () => {
  const name = 'Sudarshan'
  const [displayedName, setDisplayedName] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

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
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 530)
      return () => clearInterval(cursorInterval)
    }
  }, [isTypingComplete])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Main Content */}
        <div className="text-center mb-8">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-4 font-mono"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
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
              ></span>
            </span>
          </motion.h1>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-6 mt-6"
          >
            <a
              href="mailto:sudarshan86.ramesh@gmail.com"
              className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:shadow-xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://github.com/sudarshanr10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudarshan-ramesh-424386204/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
