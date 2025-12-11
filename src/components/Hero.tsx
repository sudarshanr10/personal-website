import { useState, useEffect } from 'react'
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
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            &lt;developer /&gt;
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-gray-900 dark:text-white tracking-tighter">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500">
              {displayedName}
              {isTypingComplete && (
                <span className={`inline-block w-1 md:w-1.5 lg:w-2 h-[0.85em] bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 ml-2 md:ml-3 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} style={{ marginLeft: '0.1em' }}></span>
              )}
              {!isTypingComplete && (
                <span className="inline-block w-1 md:w-1.5 lg:w-2 h-[0.85em] bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 ml-2 md:ml-3 align-middle opacity-100" style={{ marginLeft: '0.1em' }}></span>
              )}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-mono text-gray-500 dark:text-gray-400 mb-8 tracking-wider animate-fade-in" style={{ animationDelay: '0.2s' }}>
            SOFTWARE_DEVELOPER
          </h2>
        </div>

        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Terminal />
        </div>
      </div>
    </section>
  )
}

export default Hero

