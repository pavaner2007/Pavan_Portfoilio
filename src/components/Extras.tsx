import { motion } from 'framer-motion'
import { Github, Quote, Star } from 'lucide-react'
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
          eyebrow="Professional Extras"
          title="Trust-building sections for recruiters"
          description="Placeholder-ready areas for testimonials and GitHub activity so the portfolio can grow as your career progresses."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            className="glass-card rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-400/10 text-violet-300 light:bg-violet-100 light:text-violet-700"><Quote size={24} /></div>
              <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">Testimonials Placeholder</h3>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 light:border-slate-200 light:bg-white">
              <div className="mb-4 flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
              </div>
              <p className="muted-text leading-8">
                “Pavan demonstrates strong problem-solving ability, consistent learning, and practical project-building skills. Add mentor, faculty, or internship testimonials here.”
              </p>
              <p className="mt-5 font-bold text-white light:text-slate-950">Mentor / Faculty / Team Lead</p>
            </div>
          </motion.article>

          <motion.article
            className="glass-card rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-300 light:bg-emerald-100 light:text-emerald-700"><Github size={24} /></div>
              <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">GitHub Contribution Placeholder</h3>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
              <div className="flex min-w-[620px] gap-1">
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
              <p className="muted-text mt-5 text-sm">Replace with live GitHub contribution data later, or keep as a clean visual trust section.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
