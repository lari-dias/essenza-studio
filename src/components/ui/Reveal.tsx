
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({
  children,
  className = '',
}: RevealProps) {
  const reducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')

    const updateMobile = () => {
      setIsMobile(media.matches)
    }

    updateMobile()

    media.addEventListener('change', updateMobile)

    return () => {
      media.removeEventListener('change', updateMobile)
    }
  }, [])

  const disableAnimation = reducedMotion || isMobile

  return (
    <motion.div
      className={className}
      initial={disableAnimation ? false : { opacity: 0, y: 20 }}
      animate={disableAnimation ? { opacity: 1, y: 0 } : undefined}
      whileInView={
        disableAnimation ? undefined : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
