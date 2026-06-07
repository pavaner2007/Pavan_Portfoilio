import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-sky-300 light:text-sky-600">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-white light:text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="muted-text mt-4 text-base leading-8 sm:text-lg">{description}</p> : null}
    </motion.div>
  )
}
