import { motion } from 'framer-motion'
import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Education details, scores, current degree, and relevant coursework from the resume."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-sky-400 via-cyan-300 to-violet-400 sm:left-1/2" />
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.article
                key={item.institution}
                className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 === 0 ? '' : 'sm:[&>div:first-child]:col-start-2'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <div className={`glass-card ml-12 rounded-[2rem] p-6 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}`}>
                  <span className="absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-full border border-sky-300/40 bg-slate-950 text-sky-300 shadow-glow sm:left-1/2 sm:-translate-x-1/2 light:bg-white light:text-sky-700">
                    <GraduationCap size={20} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-white light:text-slate-950">{item.institution}</h3>
                  <p className="mt-2 font-semibold text-sky-200 light:text-sky-700">{item.degree}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300 light:text-slate-700">
                    <span className="inline-flex items-center gap-2"><CalendarDays size={15} /> {item.duration}</span>
                    <span className="inline-flex items-center gap-2"><BookOpen size={15} /> {item.score}</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span key={course} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300 light:bg-slate-100 light:text-slate-700">{course}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
