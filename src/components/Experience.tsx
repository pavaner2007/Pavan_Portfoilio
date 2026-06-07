import { motion } from 'framer-motion'
import { CodeXml, Lightbulb, Rocket, Users } from 'lucide-react'
import { activities } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const icons = [Rocket, CodeXml, Users, Lightbulb]

export default function Experience() {
  return (
    <section id="activities" className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Experience & Activities"
          title="Learning by building, competing, and exploring"
          description="A concise activity section that highlights hackathons, technical project work, open-source learning, and AI/ML exploration."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity, index) => {
            const Icon = icons[index] ?? Rocket
            return (
              <motion.article
                key={activity.title}
                className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-sky-300/40"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-sky-400/10 text-sky-300 light:bg-sky-100 light:text-sky-700">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-white light:text-slate-950">{activity.title}</h3>
                <p className="muted-text mt-3 leading-7">{activity.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
