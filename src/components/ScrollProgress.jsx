import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScroll'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  )
}
