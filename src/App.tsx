import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

const orbs = [
  { w: 600, h: 600, top: '-8%', right: '-4%', color: 'rgba(99,102,241,0.13)', x: [0, 45, -25, 30, 0], y: [0, -35, 55, -20, 0], scale: [1, 1.1, 0.93, 1.06, 1], duration: 22, delay: 0 },
  { w: 520, h: 520, bottom: '2%', left: '-6%', color: 'rgba(168,85,247,0.11)', x: [0, -35, 45, -18, 0], y: [0, 45, -35, 22, 0], scale: [1, 0.94, 1.1, 0.98, 1], duration: 27, delay: 3 },
  { w: 420, h: 420, top: '38%', left: '32%', color: 'rgba(236,72,153,0.09)', x: [0, 55, -45, 22, 0], y: [0, -45, 35, -12, 0], scale: [1, 1.08, 0.96, 1.04, 1], duration: 19, delay: 6 },
  { w: 460, h: 460, top: '8%', left: '8%', color: 'rgba(56,189,248,0.08)', x: [0, -28, 38, -12, 0], y: [0, 28, -38, 16, 0], scale: [1, 1.05, 0.97, 1.03, 1], duration: 24, delay: 9 },
  { w: 360, h: 360, bottom: '18%', right: '8%', color: 'rgba(99,102,241,0.10)', x: [0, 32, -22, 12, 0], y: [0, -22, 42, -16, 0], scale: [1, 0.96, 1.07, 1.01, 1], duration: 21, delay: 13 },
]

const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {orbs.map((o, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: o.w,
          height: o.h,
          top: o.top,
          bottom: o.bottom,
          left: o.left,
          right: o.right,
          background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
          filter: 'blur(48px)',
        }}
        animate={{ x: o.x, y: o.y, scale: o.scale }}
        transition={{ duration: o.duration, repeat: Infinity, ease: 'easeInOut', delay: o.delay }}
      />
    ))}
  </div>
)

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
      <AnimatedBackground />
      <div
        className="fixed top-0 left-0 right-0 h-20 pointer-events-none z-[45]"
        style={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />
      <div
        className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none z-[45]"
        style={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App
