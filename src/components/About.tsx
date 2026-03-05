import React from 'react'
import { FaGraduationCap, FaBriefcase, FaDatabase, FaJava } from 'react-icons/fa'
import {
  SiPython, SiJavascript, SiR, SiHtml5, SiCss3, SiCsharp,
  SiC, SiReact, SiFastapi, SiSpringboot, SiSnowflake, SiDbt, SiPostman,
  SiDocker, SiKubernetes, SiTerraform, SiPostgresql, SiAndroidstudio,
  SiGit, SiFlask, SiTensorflow, SiPytorch, SiJunit5, SiPandas, SiNumpy, SiLinux,
} from 'react-icons/si'
import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'
import SpotlightCard from './SpotlightCard'

const PROFILE_PIC = '/profpic.JPEG'

const TECH_STACK: { icon: React.ReactNode; label: string }[] = [
  { icon: <SiPython style={{ color: '#3776AB' }} />, label: 'Python' },
  { icon: <SiJavascript style={{ color: '#F7DF1E' }} />, label: 'JavaScript' },
  { icon: <SiR style={{ color: '#276DC3' }} />, label: 'R' },
  { icon: <FaJava style={{ color: '#007396' }} />, label: 'Java' },
  { icon: <FaDatabase style={{ color: '#336791' }} />, label: 'SQL' },
  { icon: <SiHtml5 style={{ color: '#E34F26' }} />, label: 'HTML' },
  { icon: <SiCss3 style={{ color: '#1572B6' }} />, label: 'CSS' },
  { icon: <SiCsharp style={{ color: '#239120' }} />, label: 'C#' },
  { icon: <SiC style={{ color: '#A8B9CC' }} />, label: 'C' },
  { icon: <SiReact style={{ color: '#61DAFB' }} />, label: 'React' },
  { icon: <SiFastapi style={{ color: '#009688' }} />, label: 'FastAPI' },
  { icon: <SiSpringboot style={{ color: '#6DB33F' }} />, label: 'Spring Boot' },
  { icon: <SiSnowflake style={{ color: '#29B5E8' }} />, label: 'Snowflake' },
  { icon: <SiDbt style={{ color: '#FF694B' }} />, label: 'dbt' },
  { icon: <SiPostman style={{ color: '#FF6C37' }} />, label: 'Postman' },
  { icon: <SiDocker style={{ color: '#2496ED' }} />, label: 'Docker' },
  { icon: <SiKubernetes style={{ color: '#326CE5' }} />, label: 'Kubernetes' },
  { icon: <SiTerraform style={{ color: '#7B42BC' }} />, label: 'Terraform' },
  { icon: <SiPostgresql style={{ color: '#336791' }} />, label: 'PostgreSQL' },
  { icon: <SiAndroidstudio style={{ color: '#3DDC84' }} />, label: 'Android Studio' },
  { icon: <SiGit style={{ color: '#F05032' }} />, label: 'Git' },
  { icon: <SiFlask className="text-gray-800 dark:text-gray-200" />, label: 'Flask' },
  { icon: <SiTensorflow style={{ color: '#FF6F00' }} />, label: 'TensorFlow' },
  { icon: <SiPytorch style={{ color: '#EE4C2C' }} />, label: 'PyTorch' },
  { icon: <SiJunit5 style={{ color: '#25A162' }} />, label: 'JUnit' },
  { icon: <SiPandas style={{ color: '#150458' }} />, label: 'Pandas' },
  { icon: <SiNumpy style={{ color: '#013243' }} />, label: 'NumPy' },
  { icon: <SiLinux style={{ color: '#FCC624' }} />, label: 'Linux' },
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay },
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
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

const About = () => {
  return (
    <section data-section="about" className="py-32 px-4 bg-gray-50 dark:bg-gray-950/50 transition-colors duration-500 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">

        {/* Section Header */}
        <motion.div {...inView()} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400">
            ABOUT
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Profile Card + Bio */}
        <motion.div {...inView(0.05)} className="flex flex-col lg:flex-row gap-32 items-center mb-16">
          <div className="flex-shrink-0 mx-auto lg:mx-0" style={{ width: 280 }}>
            <ProfileCard
              avatarUrl={PROFILE_PIC}
              name="Sudarshan"
              title="Software Engineer"
              handle="sudarshanr10"
              status=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              behindGlowEnabled={false}
            />
          </div>

          <div className="flex-1">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />
              <div className="pl-8 space-y-5">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hey, I'm Sudarshan, an aspiring software engineer who loves building things that actually work and solve real problems. I'm particularly interested in backend development and machine learning.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Outside of work, you'll probably find me playing soccer, gaming, experimenting in the kitchen, hitting the gym, or catching up on anime. I like keeping things balanced.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div {...inView(0.1)} className="mb-24">
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-4 text-center">Technologies</p>
          <div
            className="overflow-hidden w-full"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
          >
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 px-4 py-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm whitespace-nowrap"
                  style={{ minWidth: 64 }}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-500">{tech.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div {...inView(0.0)}>
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
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={itemVariants}>
              <SpotlightCard
                spotlightColor="rgba(99, 102, 241, 0.12)"
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Rutgers, The State University of New Jersey - New Brunswick
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                      Bachelor of Science in Computer Science
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
                    {['Principles of Information & Data Management', 'Data Structures', 'Data Management', 'Linear Algebra', 'Data Science', 'Artificial Intelligence', 'Computer Security', 'Internet Technology', 'Discrete Structures', 'Computer Architecture', 'Computer Algorithms'].map((course) => (
                      <span key={course} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SpotlightCard
                spotlightColor="rgba(99, 102, 241, 0.12)"
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      South Brunswick High School
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">High School Diploma</p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mt-2 md:mt-0">2018 - 2022</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {['Mobile App Development', 'VR & Game Development', 'Data Structures', 'AP Computer Science Principles', 'AP Computer Science A'].map((course) => (
                      <span key={course} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div {...inView(0.0)} className="mt-24">
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
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              {
                company: 'SWBC',
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
            ].map((exp) => (
              <motion.div key={exp.company} variants={itemVariants}>
                <SpotlightCard
                  spotlightColor="rgba(16, 185, 129, 0.12)"
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {exp.company}
                      </h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">{exp.position}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-mono border border-gray-200 dark:border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                      {exp.duration}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
