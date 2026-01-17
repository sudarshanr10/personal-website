import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import PageTransition from './components/PageTransition'

function AppRoutes() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <div className="min-h-screen">
                  <Hero />
                </div>
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <div className="min-h-screen pt-20">
                  <About />
                </div>
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <div className="min-h-screen pt-20">
                  <Projects />
                </div>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App

