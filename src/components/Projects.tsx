import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  color: string
  hexColor: string
}

interface Category {
  name: string
  folderColor: string
  projects: Project[]
}

const categories: Category[] = [
  {
    name: 'Frontend',
    folderColor: '#3b82f6',
    projects: [
      {
        id: 1,
        title: 'Personal Website',
        description: 'A responsive personal portfolio website built with modern web technologies featuring dark mode, smooth animations, and an intuitive design.',
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'GitHub'],
        githubUrl: 'https://github.com/sudarshanr10/personal-website',
        color: 'from-blue-500 to-cyan-500',
        hexColor: '#3b82f6',
      },
      {
        id: 5,
        title: 'Insta Analyzer',
        description: 'A privacy-focused Chrome extension that analyzes Instagram follower relationships locally, identifying mutual connections, devoted fans, and non-reciprocal followers with a React dashboard.',
        technologies: ['React', 'JavaScript', 'Chrome Extension', 'GraphQL', 'CSS'],
        githubUrl: 'https://github.com/sudarshanr10/instaanalyzer',
        color: 'from-pink-500 to-rose-500',
        hexColor: '#ec4899',
      },
    ],
  },
  {
    name: 'Full Stack',
    folderColor: '#10b981',
    projects: [
      {
        id: 2,
        title: 'VINT',
        description: 'A full-stack application for managing personal finances, including expense tracking, budgeting, and multi-account syncing.',
        technologies: ['React', 'TailwindCSS', 'FastAPI', 'PostgreSQL', 'Plaid API', 'Twilio', 'Redis', 'Docker'],
        githubUrl: 'https://github.com/sudarshanr10/vint',
        color: 'from-emerald-500 to-teal-500',
        hexColor: '#10b981',
      },
      {
        id: 3,
        title: 'EZSlides',
        description: 'A full-stack AI-powered Speech-to-Slides Presentation application that converts spoken content into professional presentations using cutting-edge AI.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS', 'Google Slides API', 'OpenAI API'],
        githubUrl: 'https://github.com/sidhegde8/ezSlides',
        color: 'from-purple-500 to-pink-500',
        hexColor: '#a855f7',
      },
    ],
  },
  {
    name: 'Data Science',
    folderColor: '#f97316',
    projects: [
      {
        id: 4,
        title: 'Crime Forecasting System',
        description: 'A data-driven crime forecaster using the Denver Open Data API to process data for hotspot analysis and trend predictions with machine learning.',
        technologies: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'folium', 'statsmodels', 'SQLite'],
        githubUrl: 'https://github.com/sudarshanr10/Crime-Forcasting-System',
        color: 'from-orange-500 to-red-500',
        hexColor: '#f97316',
      },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 120, damping: 15, delay: i * 0.08 },
  }),
  exit: { opacity: 0, y: -10, scale: 0.96, transition: { duration: 0.2 } },
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend')

  const activeData = categories.find(c => c.name === activeCategory)!

  return (
    <section data-section="projects" className="py-32 px-4 bg-gray-50 dark:bg-gray-900/30 transition-colors duration-500 min-h-screen flex items-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400 hover:scale-105 transition-transform">
            PROJECTS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work and side projects
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold font-mono transition-all duration-300 border-2 ${
                activeCategory === cat.name
                  ? 'text-white border-transparent scale-105'
                  : 'text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-105'
              }`}
              style={activeCategory === cat.name ? {
                background: cat.folderColor,
                boxShadow: `0 4px 20px ${cat.folderColor}50`,
              } : {}}
            >
              {cat.name}
              <span className={`ml-2 text-xs ${activeCategory === cat.name ? 'opacity-80' : 'opacity-50'}`}>
                {cat.projects.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project cards for active category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -6, transition: { type: 'spring' as const, stiffness: 300 } }}
                className="group relative"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 rounded-2xl blur-xl transition-all duration-500`}
                />

                {/* Card */}
                <SpotlightCard
                  spotlightColor={`${project.hexColor}30`}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col"
                >
                  <div className={`h-1 bg-gradient-to-r ${project.color}`} />

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}>
                        {activeCategory}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-mono hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex justify-between items-center">
                      <div className="flex gap-1">
                        {project.technologies.slice(0, 2).map((_, idx) => (
                          <div key={idx} className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        ))}
                      </div>
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white hover:shadow-lg transition-all duration-300"
                          aria-label="View on GitHub"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-20" />
    </section>
  )
}

export default Projects
