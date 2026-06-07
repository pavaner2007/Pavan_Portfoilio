import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers3, Rocket, Search } from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const filters = ['All', 'Full Stack', 'AI', 'ML']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.type === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with real-world product thinking"
          description="Project cards include descriptions, feature lists, technology badges, links, and recruiter-focused summaries."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-glow'
                  : 'border border-white/10 bg-white/[0.05] text-slate-300 hover:border-sky-300/50 light:border-slate-200 light:bg-white light:text-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              className="glass-card group overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:border-sky-300/40"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
            >
              <div className="relative min-h-56 overflow-hidden border-b border-white/10 bg-slate-950/70 p-6 light:border-slate-200 light:bg-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.28),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.24),transparent_36%)]" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10" />
                <div className="relative flex h-full min-h-44 flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl light:border-slate-200 light:bg-white/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-200 light:bg-sky-100 light:text-sky-700">{project.category}</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 light:border-slate-200 light:text-slate-600">{project.status}</span>
                  </div>
                  <div>
                    <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-white shadow-glow">
                      <Layers3 size={26} />
                    </div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Project Preview</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">{project.title}</h3>
                <p className="muted-text mt-3 leading-7">{project.description}</p>
                <p className="muted-text mt-3 text-sm leading-7">{project.longDescription}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 light:border-cyan-500/20 light:bg-cyan-50 light:text-cyan-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50">
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold text-white light:text-slate-950"><Rocket size={16} className="text-sky-300" /> Key Features</p>
                  <ul className="grid gap-2 text-sm text-slate-300 light:text-slate-700 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button flex-1">
                      <Github size={18} /> GitHub
                    </a>
                  ) : (
                    <button type="button" disabled className="secondary-button flex-1 cursor-not-allowed opacity-50">
                      <Github size={18} /> GitHub Pending
                    </button>
                  )}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="primary-button flex-1">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  ) : (
                    <button type="button" disabled className="primary-button flex-1 cursor-not-allowed opacity-50">
                      <Search size={18} /> Demo Pending
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
