import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import { FaDatabase, FaJava, FaChevronDown, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import {
  SiPython, SiJavascript, SiR, SiHtml5, SiCss3, SiCsharp,
  SiC, SiReact, SiFastapi, SiSpringboot, SiSnowflake, SiDbt, SiPostman,
  SiDocker, SiKubernetes, SiTerraform, SiPostgresql, SiAndroidstudio,
  SiGit, SiFlask, SiTensorflow, SiPytorch, SiJunit5, SiPandas, SiNumpy, SiLinux,
} from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'

const PROFILE_PIC = '/nycpic.JPG'

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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay },
})

const SectionTitle = ({ title, icon, accent }: { title: string; icon: React.ReactNode; accent: string }) => (
  <div className="mb-10 group cursor-default">
    <h3 className="flex items-center gap-3 text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
      <motion.span
        whileHover={{ rotate: 14, scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 380, damping: 12 }}
        className="flex-shrink-0"
      >
        {icon}
      </motion.span>
      <motion.span whileHover={{ x: 2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        {title}
      </motion.span>
    </h3>
    <div className={`mt-2 h-px rounded-full bg-gradient-to-r ${accent} w-10 group-hover:w-20 transition-all duration-300`} />
  </div>
)

const CourseworkToggle = ({ courses, open, onToggle }: {
  courses: string[]
  open: boolean
  onToggle: () => void
}) => (
  <div className="mt-3">
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
    >
      <span>Relevant Coursework</span>
      <motion.span
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
        style={{ display: 'flex' }}
      >
        <FaChevronDown size={9} />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {courses.map((course) => (
              <span
                key={course}
                className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 text-xs rounded-md border border-gray-200 dark:border-gray-700/60"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const EDUCATION = [
  {
    school: 'Rutgers, The State University of New Jersey — New Brunswick',
    degree: 'B.S. Computer Science',
    years: '2022 – 2026',
    badge: { label: 'Summa Cum Laude', className: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/40' },
    courses: ['Principles of Information & Data Management', 'Data Structures', 'Data Management', 'Linear Algebra', 'Data Science', 'Artificial Intelligence', 'Computer Security', 'Internet Technology', 'Discrete Structures', 'Computer Architecture', 'Computer Algorithms'],
    primary: true,
  },
  {
    school: 'South Brunswick High School',
    degree: 'High School Diploma',
    years: '2018 – 2022',
    badge: null,
    courses: ['Mobile App Development', 'VR & Game Development', 'Data Structures', 'AP Computer Science Principles', 'AP Computer Science A'],
    primary: false,
  },
]

const EXPERIENCE = [
  {
    company: 'Collins Aerospace',
    position: 'Software Engineer I',
    duration: 'May 2026 – Present',
    description: 'Solipsys Corporation: Mission Systems - Command & Control (C2)',
    technologies: ['Java', 'Maven', 'Git', 'Linux', 'Bash', 'Jira', 'Confluence', 'Crucible', 'Jenkins', 'Samba'],
    current: true,
  },
  {
    company: 'SWBC',
    position: 'Data Engineer Intern',
    duration: 'Jun 2025 – Apr 2026',
    description: 'EDW-Infra team: ELT pipelines & anomaly detection',
    technologies: ['SQL', 'Snowflake', 'dbt', 'SQL Server', 'Azure DevOps Server', 'Snowflake ML', 'CRON'],
    current: false,
  },
  {
    company: 'Ephanti',
    position: 'Software Engineer Intern',
    duration: 'Jun 2024 – Aug 2024',
    description: 'Backend service for chatbot agent: code generation, execution & RAG pipeline',
    technologies: ['Python', 'PostgreSQL', 'Docker', 'Postman', 'OpenAI API', 'PGVector', 'DBeaver', 'LlamaIndex', 'Jira'],
    current: false,
  },
  {
    company: 'Code Ninjas',
    position: 'Code Instructor',
    duration: 'Aug 2021 – Jan 2022',
    description: 'Tutored kids in Computer Science fundamentals',
    technologies: ['JavaScript', 'C#', 'Unity'],
    current: false,
  },
  {
    company: 'Traform',
    position: 'Software Engineer Intern',
    duration: 'Jul 2021 – Dec 2021',
    description: 'Mobile platform team',
    technologies: ['JavaScript', 'React Native', 'TailwindCSS'],
    current: false,
  },
]

const About = () => {
  const [rutgersOpen, setRutgersOpen] = useState(false)
  const [highSchoolOpen, setHighSchoolOpen] = useState(false)

  return (
    <section data-section="about" className="py-32 px-4 bg-transparent transition-colors duration-500 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-gray-950 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none z-20" />

      <div className="max-w-4xl mx-auto w-full relative z-10">

        {/* Title */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 dark:text-blue-400 uppercase mb-3">
            — who i am —
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div {...fadeUp(0.05)} className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <ProfileCard
              avatarUrl={PROFILE_PIC}
              miniAvatarUrl={PROFILE_PIC}
              name="Sudarshan"
              title="Software Engineer"
              handle="sudarshanr10"
              status="Collins Aerospace"
              behindGlowEnabled
              behindGlowColor="rgba(99, 102, 241, 0.45)"
              onContactClick={() => window.open('mailto:sudarshan86.ramesh@gmail.com')}
            />
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <div className="pl-8 space-y-5">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hey, I'm Sudarshan, a software engineer at Collins Aerospace who loves building things that actually work and solve real problems. I'm particularly interested in backend development and machine learning.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Outside of work, you'll probably find me playing soccer, gaming, experimenting in the kitchen, hitting the gym, or catching up on anime. I like keeping things balanced.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech carousel */}
        <motion.div {...fadeUp(0.1)} className="mb-24">
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
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Education ───────────────────────────── */}
        <motion.div {...fadeUp(0.0)}>
          <SectionTitle title="Education" icon={<FaGraduationCap size={22} className="text-blue-500 dark:text-blue-400" />} accent="from-blue-500 to-purple-500" />

          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-4 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="space-y-10">
              {EDUCATION.map((edu, i) => (
                <motion.div key={edu.school} {...fadeUp(i * 0.08)} className="relative pl-8">
                  <div className={`absolute left-0 top-[5px] w-[11px] h-[11px] rounded-full bg-white dark:bg-gray-950 border-2 ${edu.primary ? 'border-blue-400 dark:border-blue-500' : 'border-gray-300 dark:border-gray-600'}`} />
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white leading-snug">{edu.school}</h4>
                    <span className="font-mono text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap flex-shrink-0 mt-0.5">{edu.years}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.degree}</p>
                    {edu.badge && (
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-md border ${edu.badge.className}`}>
                        {edu.badge.label}
                      </span>
                    )}
                  </div>
                  <CourseworkToggle
                    courses={edu.courses}
                    open={i === 0 ? rutgersOpen : highSchoolOpen}
                    onToggle={() => i === 0 ? setRutgersOpen(v => !v) : setHighSchoolOpen(v => !v)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Experience ──────────────────────────── */}
        <motion.div {...fadeUp(0.0)} className="mt-24">
          <SectionTitle title="Experience" icon={<FaBriefcase size={20} className="text-green-500 dark:text-green-400" />} accent="from-green-500 to-teal-500" />

          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-4 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="space-y-10">
              {EXPERIENCE.map((exp, i) => (
                <motion.div key={exp.company} {...fadeUp(i * 0.07)} className="relative pl-8">
                  {/* Node */}
                  <div className="absolute left-0 top-[5px]">
                    {exp.current ? (
                      <span className="relative flex h-[11px] w-[11px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
                        <span className="relative inline-flex items-center justify-center rounded-full h-[11px] w-[11px] bg-white dark:bg-gray-950 border-2 border-green-400 dark:border-green-500">
                          <span className="w-[4px] h-[4px] rounded-full bg-green-500" />
                        </span>
                      </span>
                    ) : (
                      <div className="w-[11px] h-[11px] rounded-full bg-white dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-600" />
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{exp.company}</h4>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium rounded-md border border-green-200 dark:border-green-800/40">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap flex-shrink-0 mt-0.5">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">{exp.position}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 text-xs rounded-md font-mono border border-gray-200 dark:border-gray-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
