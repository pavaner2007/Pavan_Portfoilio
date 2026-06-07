import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { achievements, certifications, codingProfiles } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition, certifications, and coding profiles"
          description="A timeline-style achievement section with certification cards and coding profile proof points."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass-card rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-sky-300 light:text-sky-600">Timeline</p>
            <div className="space-y-6">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="relative border-l border-sky-300/30 pl-6">
                  <span className="absolute -left-4 top-0 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-white shadow-glow">
                    <Award size={16} />
                  </span>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                    <h3 className="font-display text-xl font-bold text-white light:text-slate-950">🏆 {achievement.title}</h3>
                    <p className="mt-2 font-semibold text-sky-200 light:text-sky-700">{achievement.organizer}</p>
                    <p className="muted-text mt-3 leading-7">{achievement.description}</p>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-sm text-sky-200 light:bg-sky-100 light:text-sky-700"><Calendar size={14} /> {achievement.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              className="glass-card rounded-[2rem] p-6 sm:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">Certifications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {certifications.map((cert) => (
                  <div key={cert.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                    <p className="font-bold text-white light:text-slate-950">{cert.title}</p>
                    <p className="muted-text mt-2 text-sm">{cert.issuer} • {cert.year}</p>
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-300 light:text-sky-700">
                        View Certificate <ExternalLink size={14} />
                      </a>
                    ) : (
                      <p className="mt-4 text-sm text-slate-500">Credential link not provided</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card rounded-[2rem] p-6 sm:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.14 }}
            >
              <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">Coding Profiles</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {codingProfiles.map((profile) => (
                  <a key={profile.platform} href={profile.url} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-sky-300/40 light:border-slate-200 light:bg-white">
                    <p className="font-display text-lg font-bold text-white light:text-slate-950">{profile.platform}</p>
                    <p className="muted-text mt-2 text-sm leading-6">{profile.stats}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-300 light:text-sky-700">Open Profile <ExternalLink size={14} /></span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
