import { motion } from 'framer-motion'

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: 3 + ((index * 7) % 8),
  delay: (index % 10) * 0.35,
  duration: 9 + (index % 7)
}))

export default function ParticleBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.10),transparent_28%)] light:bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.12),transparent_32%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.10),transparent_28%)]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-sky-300/30 blur-[1px] light:bg-sky-500/25"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ y: [-16, 22, -16], x: [0, particle.id % 2 === 0 ? 14 : -14, 0], opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
