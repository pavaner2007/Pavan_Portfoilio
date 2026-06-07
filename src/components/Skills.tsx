import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Database, Globe2, LucideIcon, Network, Wrench } from 'lucide-react'
import { skillCategories } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe2,
  Database,
  BrainCircuit,
  Network,
  Wrench
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200 light:text-slate-700">{name}</span>
        <span className="text-sky-300 light:text-sky-700">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800 light:bg-slate-200">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Technical Skills"
          title="A recruiter-friendly skill map"
          description="Categorized skill cards with proficiency bars across programming, web development, databases, AI/ML, core concepts, and tools."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Code2
            return (
              <motion.article
                key={category.title}
                className="glass-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-300/40"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 text-sky-300 ring-1 ring-white/10 light:text-sky-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white light:text-slate-950">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={skillIndex * 0.05} />
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
