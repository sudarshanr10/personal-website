import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      {/* Continuous scroll sections */}
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App

