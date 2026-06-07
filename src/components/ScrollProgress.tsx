import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 24, restDelta: 0.001 })

  return <motion.div className="fixed left-0 right-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400" style={{ scaleX }} />
}
