import { FaGithub } from 'react-icons/fa'
import { Project } from '../types'

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Personal Website',
      description: 'A responsive personal portfolio website built with modern web technologies featuring dark mode, smooth animations, and an intuitive design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub'],
      githubUrl: 'https://github.com/sudarshanr10/personal-website',
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'EZSlides',
      description: 'A full-stack AI-powered Speech-to-Slides Presentation application that converts spoken content into professional presentations using cutting-edge AI.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS', 'Google Slides API', 'OpenAI API'],
      githubUrl: 'https://github.com/sidhegde8/ezSlides',
      category: 'Full Stack',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Crime Forecasting System',
      description: 'A data-driven crime forecaster using the Denver Open Data API to process data for hotspot analysis and trend predictions with machine learning.',
      technologies: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'folium', 'statsmodels', 'SQLite'],
      githubUrl: 'https://github.com/sudarshanr10/Crime-Forcasting-System',
      category: 'Data Science',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 bg-white dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400 hover:scale-105 transition-transform">
            PROJECTS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 rounded-2xl blur-xl transition-all duration-500`}></div>
              
              {/* Main card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 h-full flex flex-col">
                {/* Category badge */}
                <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-mono hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((_tech, idx) => (
                        <div key={idx} className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
                        aria-label="View on GitHub"
                        title="View on GitHub"
                      >
                        <FaGithub className="group-hover:scale-125 transition-transform duration-300" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

