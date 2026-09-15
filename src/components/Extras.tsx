import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { personal } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const contributionWeeks = Array.from({ length: 52 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => ({
    id: `${week}-${day}`,
    opacity: 0.12 + (((week * 7 + day) % 5) * 0.16)
  }))
)

export default function Extras() {
  return (
    <section className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Activity & Consistency"
          title="GitHub Contributions"
          description="Consistent open-source learning, daily project commits, and software engineering activity."
        />

        <div className="mx-auto max-w-4xl">
          <motion.article
            className="glass-card rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-300 light:bg-emerald-100 light:text-emerald-700">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white light:text-slate-950 sm:text-2xl">
                    GitHub Contributions
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-500">@pavaner2007</p>
                </div>
              </div>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300 light:border-slate-300 light:bg-slate-100 light:text-slate-700"
              >
                View GitHub Profile <ExternalLink size={14} />
              </a>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
              <div className="flex min-w-[640px] justify-between gap-1">
                {contributionWeeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid gap-1">
                    {week.map((day) => (
                      <span
                        key={day.id}
                        className="h-3 w-3 rounded-[3px] bg-emerald-400"
                        style={{ opacity: day.opacity }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 light:text-slate-500">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  {[0.12, 0.28, 0.44, 0.60, 0.76].map((op, i) => (
                    <span key={i} className="h-3 w-3 rounded-[3px] bg-emerald-400" style={{ opacity: op }} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
