import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import MotionSection from './components/MotionSection'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects']
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') || 'home'
            setActiveSection(id)
          }
        })
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar activeSection={activeSection} />
      <main>
        <MotionSection>
          <Hero />
        </MotionSection>
        <MotionSection>
          <About />
        </MotionSection>
        <MotionSection>
          <Experience />
        </MotionSection>
        <MotionSection>
          <Projects />
        </MotionSection>
      </main>
    </div>
  )
}

export default App

