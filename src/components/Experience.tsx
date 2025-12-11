import { Experience as ExperienceType } from '../types'

const Experience = () => {
  const experiences: ExperienceType[] = [
    {
      id: 4,
      company: 'Southwest Business Corporation',
      position: 'Data Engineer Intern',
      duration: 'Jun 2025 - Present',
      description: [
        'Developed anomaly detection pipelines and ELT pipelines for the Insurance data model for the company',
      ],
      technologies: ['SQL', 'Snowflake', 'dbt', 'SQL Server', 'Azure DevOps Server', 'Snowflake ML', 'CRON'],
    },
    {
      id: 1,
      company: 'Ephanti',
      position: 'Software Engineer Intern',
      duration: 'Jun 2024 - Aug 2024',
      description: [
        "Developed a coding agent for an omnichannel chatbot for the company's web platform, enhancing customer interaction and support capabilities",
      ],
      technologies: ['Python', 'PostgreSQL', 'Docker', 'Postman', 'OpenAI API', 'PGVector', 'DBeaver', 'LlamaIndex', 'Jira'],
    },
    {
      id: 2,
      company: 'Code Ninjas',
      position: 'Code Instructor',
      duration: 'Aug 2021 - Jan 2022',
      description: [
        'Guided 100+ kids ages 7-14 to learn to code through fun, interactive video game projects, fostering creativity and problem-solving skills',
      ],
      technologies: ['JavaScript', 'C#', 'Unity'],
    },
    {
      id: 3,
      company: 'Traform',
      position: 'Software Engineer Intern',
      duration: 'Jul 2021 - Dec 2021',
      description: [
        'Optimized mobile UIs for a corporate travel platform using React Native, improving user experience and application performance',
      ],
      technologies: ['JavaScript', 'React Native', 'TailwindCSS'],
    },
  ]

  return (
    <section className="py-32 px-4 bg-white dark:bg-gray-950 transition-colors duration-500 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400">
            EXPERIENCE
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-950 group-hover:scale-125 transition-transform shadow-lg"></div>
              <div className="ml-6 hover:translate-x-2 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                    <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mt-2 md:mt-0">{exp.duration}</p>
                </div>

                <div className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg space-y-3">
                  {exp.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-mono hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

