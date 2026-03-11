import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'

export interface DockIconItem {
  icon: React.ReactNode
  label: string
  href?: string
  target?: string
  bg: string
  glowColor?: string
}

interface DockIconsProps {
  items: DockIconItem[]
  baseSize?: number
  magnification?: number
  distance?: number
  className?: string
}

const DockItem = ({
  item,
  mouseX,
  baseSize,
  magnification,
  distance,
}: {
  item: DockIconItem
  mouseX: ReturnType<typeof useMotionValue<number>>
  baseSize: number
  magnification: number
  distance: number
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const d = useTransform(mouseX, (val: number) => {
    const el = itemRef.current
    if (!el) return 999
    const rect = el.getBoundingClientRect()
    return val - (rect.left + rect.width / 2)
  })

  const sizeSync = useTransform(d, [-distance, 0, distance], [baseSize, magnification, baseSize])
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 200, damping: 14 })

  const glow = item.glowColor ?? 'rgba(99,102,241,0.5)'
  const boxShadow = hovered
    ? `0 8px 28px ${glow}, 0 0 0 1px rgba(255,255,255,0.12) inset`
    : `0 4px 14px ${glow.replace(/[\d.]+\)$/, '0.25)')}, 0 0 0 1px rgba(255,255,255,0.08) inset`

  const content = (
    <motion.div
      ref={itemRef}
      style={{ width: size, height: size, background: item.bg, boxShadow, transition: 'box-shadow 0.25s ease' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex items-center justify-center rounded-2xl cursor-pointer select-none flex-shrink-0"
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 pointer-events-none shadow-xl"
            style={{ bottom: 'calc(100% + 10px)' }}
            initial={{ opacity: 0, y: 4, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.88 }}
            transition={{ duration: 0.13 }}
          >
            {item.label}
            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
          </motion.span>
        )}
      </AnimatePresence>
      <span className="text-white flex items-center justify-center" style={{ fontSize: baseSize * 0.42 }}>
        {item.icon}
      </span>
    </motion.div>
  )

  return item.href ? (
    <a
      href={item.href}
      target={item.target}
      rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={item.label}
    >
      {content}
    </a>
  ) : <>{content}</>
}

const DockIcons = ({
  items,
  baseSize = 48,
  magnification = 80,
  distance = 140,
  className = '',
}: DockIconsProps) => {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`flex items-end gap-3 pb-4 ${className}`}
    >
      {items.map((item, i) => (
        <DockItem
          key={i}
          item={item}
          mouseX={mouseX}
          baseSize={baseSize}
          magnification={magnification}
          distance={distance}
        />
      ))}
    </motion.div>
  )
}

export default DockIcons
