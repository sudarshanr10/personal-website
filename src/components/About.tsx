import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-gray-50 dark:bg-gray-950/50 transition-colors duration-500 section-enter">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-mono text-gray-600 dark:text-gray-400">
            ABOUT
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="mb-16 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a full stack developer who enjoys creating useful and reliable applications. I like working on both the frontend and backend and I'm always looking for ways to improve the way things are built.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Outside of coding, I enjoy watching and playing soccer, gaming, cooking, working out, and watching anime. I believe in continuous learning and building solutions that make a real impact.
          </p>
        </div>

  <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
              <FaGraduationCap className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          
          <div className="space-y-8">
            <div className="pl-[72px] border-l-2 border-blue-600 dark:border-blue-500 hover:border-purple-600 dark:hover:border-purple-500 transition-colors group">
              <div className="ml-6 hover:translate-x-2 transition-transform duration-300">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-lg">
                  Rutgers, The State University of New Jersey - New Brunswick
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">2022 - Present</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Relevant Coursework: Data Management, Data Science, Artificial Intelligence, Computer Security, Internet Technology, Data 101, Discrete Structures, Computer Architecture, Computer Algorithms
                </p>
              </div>
            </div>

            <div className="pl-[72px] border-l-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 transition-colors group">
              <div className="ml-6 hover:translate-x-2 transition-transform duration-300">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  High School Diploma
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-lg">
                  South Brunswick High School
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">2018 - 2022</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Relevant Coursework: Mobile App Development, VR & Game Development, Data Structures, AP Computer Science Principles, AP Computer Science A
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

