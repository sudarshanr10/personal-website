import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from '../types'

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Personal Website',
      description: 'A responsive personal portfolio website built with HTML, CSS, and JavaScript.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub'],
      githubUrl: 'https://github.com/sudarshanr10/personal-website',
    },
    {
      id: 2,
      title: 'EZSlides',
      description: 'A full-stack AI-powered Speech-to-Slides Presentation application that converts spoken content into professional presentations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS', 'Google Slides API', 'OpenAI API'],
      githubUrl: 'https://github.com/sidhegde8/ezSlides',
    },
    {
      id: 3,
      title: 'Crime Forecasting System',
      description: 'A data-driven crime forecaster using the Denver Open Data API to process data for hotspot analysis and trend predictions.',
      technologies: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'folium', 'statsmodels', 'SQLite'],
      githubUrl: 'https://github.com/sudarshanr10/Crime-Forcasting-System',
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 bg-gray-50 dark:bg-gray-900/30 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400">
            PROJECTS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-mono hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium group/link"
                    >
                      <FaGithub className="group-hover/link:scale-110 transition-transform" />
                      <span>View Code</span>
                    </a>
                  )}
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

