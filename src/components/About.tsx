import { motion } from 'framer-motion'
import { BrainCircuit, Code2, GraduationCap, Target } from 'lucide-react'
import { personal } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Engineering Background',
    description: 'B.E. CSE (AI & ML) student at Sri Eshwar College of Engineering, focused on software development and intelligent systems.'
  },
  {
    icon: Code2,
    title: 'Full Stack Focus',
    description: 'Builds scalable web applications using React, Node.js, Express, MongoDB, PostgreSQL, and clean frontend experiences.'
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML Interest',
    description: 'Explores machine learning, LLM applications, RAG systems, LangChain workflows, and AI-powered developer tools.'
  },
  {
    icon: Target,
    title: 'Career Goal',
    description: 'Aiming for opportunities in Full Stack Development, Machine Learning Engineering, AI Engineering, and Software Development.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="A developer building practical AI-powered software"
          description="My portfolio is structured for recruiters, internship opportunities, hackathons, and professional networking."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            className="glass-card rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300 light:text-sky-600">Professional Summary</p>
            <h3 className="mt-4 font-display text-2xl font-bold text-white light:text-slate-950">{personal.role}</h3>
            <p className="muted-text mt-5 leading-8">{personal.summary}</p>
            <p className="muted-text mt-5 leading-8">
              I enjoy transforming ideas into reliable products - from full-stack educational platforms to AI-powered repository analysis tools. My current focus is strengthening software engineering fundamentals, data structures, backend systems, and machine learning workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Full Stack Development', 'AI Engineering', 'Machine Learning', 'Software Development'].map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-sky-300/40"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-sky-400/10 text-sky-300 light:bg-sky-100 light:text-sky-700">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white light:text-slate-950">{item.title}</h4>
                  <p className="muted-text mt-3 text-sm leading-7">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
