import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export default function MotionSection({ children, className = '', threshold = 0.12, delay = 0 }: Props) {
  const controls = useAnimation()
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible')
            obs.unobserve(node)
          }
        })
      },
      { threshold }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [controls, threshold])

  const variants = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, delay } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.35 } },
  }

  return (
    <motion.section
      ref={ref as any}
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.section>
  )
}
