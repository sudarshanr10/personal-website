import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:sudarshan86.ramesh@gmail.com',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sudarshan-ramesh-424386204/',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/sudarshanr10',
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-900 hover:to-black',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/sudarshanr10/',
      color: 'from-pink-500 to-rose-500',
      hoverColor: 'hover:from-pink-600 hover:to-rose-600',
    },
  ]

  return (
    <section className="py-32 px-4 bg-white dark:bg-gray-950 transition-colors duration-500 min-h-screen flex items-center relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400">
            LET'S CONNECT
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full"></div>
          <div className="space-y-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            <p>
              I'm always <span className="font-semibold text-gray-900 dark:text-white">open to collaboration</span> and excited to discuss new projects, innovative ideas, and creative opportunities.
            </p>
            <p className="text-base md:text-lg">
              Whether you're looking to build something amazing, solve a complex problem, or just want to connect—I'd love to hear from you.
            </p>
          </div>
        </div>

        
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
            You can find me on
          </h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${social.color} ${social.hoverColor} text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:-translate-y-1`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={24} className="md:w-7 md:h-7 group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg z-10">
                    {social.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
