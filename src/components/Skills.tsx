import { 
  FaCode, FaTools, FaPuzzlePiece, 
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase,
  FaGitAlt, FaDocker, FaTerminal, FaPaperPlane, FaJenkins, FaAndroid,
  FaReact, FaBrain, FaCheckCircle, FaCheckDouble, FaBook, FaDharmachakra
} from 'react-icons/fa'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: { name: string; icon: React.ReactNode }[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'C#', icon: <FaCode /> },
        { name: 'C++', icon: <FaCode /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'R', icon: <FaCode /> },
      ],
    },
    {
      title: 'DevOps & Developer Tools',
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <FaDharmachakra /> },
        { name: 'Linux', icon: <FaTerminal /> },
        { name: 'Postman', icon: <FaPaperPlane /> },
        { name: 'PostgreSQL', icon: <FaDatabase /> },
        { name: 'Jenkins', icon: <FaJenkins /> },
        { name: 'Android Studio', icon: <FaAndroid /> },
        { name: 'Jupyter Notebook', icon: <FaBook /> },
      ],
    },
    {
      title: 'Libraries & Frameworks',
      icon: <FaPuzzlePiece />,
      skills: [
        { name: 'React Native', icon: <FaReact /> },
        { name: 'Flask', icon: <FaCode /> },
        { name: 'NumPy', icon: <FaCode /> },
        { name: 'Pandas', icon: <FaCode /> },
        { name: 'TensorFlow', icon: <FaBrain /> },
        { name: 'Keras', icon: <FaBrain /> },
        { name: 'scikit-learn', icon: <FaBrain /> },
        { name: 'JUnit', icon: <FaCheckCircle /> },
        { name: 'Selenium', icon: <FaCheckDouble /> },
      ],
    },
  ]

  return (
    <section id="technical-skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <div className="text-blue-600 dark:text-blue-400 text-xl">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mb-2 text-2xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

