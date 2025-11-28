import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const socials = [
    { icon: FaEnvelope, href: 'mailto:sudarshan86.ramesh@gmail.com', label: 'Email', color: 'from-blue-600 to-blue-400' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sudarshan-ramesh-424386204/', label: 'LinkedIn', color: 'from-blue-700 to-blue-500' },
    { icon: FaGithub, href: 'https://github.com/sudarshanr10', label: 'GitHub', color: 'from-gray-800 to-gray-600' },
  ]

  return (
    <section id="contact" className="py-32 px-4 bg-white dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-5 group cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                    <a href="mailto:sudarshan86.ramesh@gmail.com" className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                      sudarshan86.ramesh@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-gradient-to-br ${social.color} text-white hover:scale-110 hover:shadow-xl transition-all duration-300 transform active:scale-95 group`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-blue-400 dark:hover:border-blue-600"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-blue-400 dark:hover:border-blue-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-blue-400 dark:hover:border-blue-600"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 ${
                  submitted
                    ? 'bg-green-600 dark:bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700'
                }`}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

