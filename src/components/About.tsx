import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    <section className="py-32 px-4 bg-gray-50 dark:bg-gray-950/50 transition-colors duration-500 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400">
            ABOUT
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* My Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24"
        >
          <div className="relative">
            {/* Decorative gradient line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

            <div className="pl-8 space-y-6">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Hey, I'm Sudarshan, an aspiring software engineer who loves building things that actually work and solve real problems. I'm particularly interested in backend development, data engineering, and creating reliable systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll probably find me playing soccer, gaming, experimenting in the kitchen, hitting the gym, or catching up on anime. I like keeping things balanced.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-10">
            <motion.div
              className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring' as const, stiffness: 300 }}
            >
              <FaGraduationCap className="text-white" size={28} />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Rutgers */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                    Rutgers, The State University of New Jersey - New Brunswick
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-gray-500 dark:text-gray-400 font-mono text-sm">2022 - 2026</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                    Summa Cum Laude
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {['Principles of Information & Data Management', 'Data Structures', 'Data Management', 'Linear Algebra', 'Data Science', 'Artificial Intelligence', 'Computer Security', 'Internet Technology', 'Discrete Structures', 'Computer Architecture', 'Computer Algorithms'].map((course, idx) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.03 }}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    High School Diploma
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                    South Brunswick High School
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mt-2 md:mt-0">2018 - 2022</p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {['Mobile App Development', 'VR & Game Development', 'Data Structures', 'AP Computer Science Principles', 'AP Computer Science A'].map((course, idx) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.03 }}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24"
        >
          <div className="flex items-center mb-10">
            <motion.div
              className="w-14 h-14 bg-gradient-to-br from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring' as const, stiffness: 300 }}
            >
              <FaBriefcase className="text-white" size={26} />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
          </div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                company: 'Southwest Business Corporation',
                position: 'Data Engineer Intern',
                duration: 'Jun 2025 - Present',
                description: 'EDW-Infra team: ELT pipelines & anomaly detection',
                technologies: ['SQL', 'Snowflake', 'dbt', 'SQL Server', 'Azure DevOps Server', 'Snowflake ML', 'CRON'],
              },
              {
                company: 'Ephanti',
                position: 'Software Engineer Intern',
                duration: 'Jun 2024 - Aug 2024',
                description: 'Backend service for chatbot agent: code generation, execution & RAG pipeline',
                technologies: ['Python', 'PostgreSQL', 'Docker', 'Postman', 'OpenAI API', 'PGVector', 'DBeaver', 'LlamaIndex', 'Jira'],
              },
              {
                company: 'Code Ninjas',
                position: 'Code Instructor',
                duration: 'Aug 2021 - Jan 2022',
                description: 'Tutored kids in Computer Science fundamentals',
                technologies: ['JavaScript', 'C#', 'Unity'],
              },
              {
                company: 'Traform',
                position: 'Software Engineer Intern',
                duration: 'Jul 2021 - Dec 2021',
                description: 'Mobile platform team',
                technologies: ['JavaScript', 'React Native', 'TailwindCSS'],
              },
            ].map((exp, idx) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {exp.position}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1 + techIdx * 0.03 }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-mono border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                    {exp.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
