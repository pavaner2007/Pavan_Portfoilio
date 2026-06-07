import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

type LoadingScreenProps = {
  isVisible: boolean
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-slate-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-3xl border border-sky-300/30 bg-white/10 shadow-glow backdrop-blur-2xl"
          animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-display text-3xl font-bold premium-gradient-text">PR</span>
        </motion.div>
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Loading Portfolio</p>
        <h1 className="mt-3 font-display text-2xl font-bold">{personal.shortName}</h1>
      </div>
    </motion.div>
  )
}
