import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Terminal from './Terminal'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500 section-enter">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Section - Name and Title */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            &lt;developer /&gt;
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-gray-900 dark:text-white tracking-tighter animate-slide-up">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500">Sudarshan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-mono text-gray-500 dark:text-gray-400 mb-8 tracking-wider animate-fade-in" style={{ animationDelay: '0.2s' }}>
            SOFTWARE_DEVELOPER
          </h2>
        </div>

        {/* Contact Buttons Section */}
        <div className="flex flex-col items-center space-y-8 mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:sudarshan86.ramesh@gmail.com"
              className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:-translate-y-1"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope size={24} className="group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Email
              </div>
            </a>
            <a
              href="https://github.com/sudarshanr10"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:-translate-y-1"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={24} className="group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                GitHub
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sudarshan-ramesh-424386204/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:-translate-y-1"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={24} className="group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                LinkedIn
              </div>
            </a>
            <a
              href="https://www.instagram.com/sudarshanr10/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:-translate-y-1"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram size={24} className="group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Instagram
              </div>
            </a>
          </div>
        </div>

        {/* Terminal Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Terminal />
        </div>
      </div>
    </section>
  )
}

export default Hero

