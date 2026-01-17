import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  const socialLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sudarshan86.ramesh@gmail.com',
      href: 'mailto:sudarshan86.ramesh@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'sudarshan-ramesh',
      href: 'https://www.linkedin.com/in/sudarshan-ramesh-424386204/',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'sudarshanr10',
      href: 'https://github.com/sudarshanr10',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  }

  return (
    <section className="py-32 px-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400">
            CONTACT
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="flex items-center p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Icon className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{link.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{link.value}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 dark:text-gray-500 text-sm mt-12"
        >
          I typically respond within 24-48 hours.
        </motion.p>
      </div>
    </section>
  )
}

export default Contact
