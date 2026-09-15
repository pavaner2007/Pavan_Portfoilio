import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Eye, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal, roles, stats } from '../data/portfolio'
import AnimatedCounter from './AnimatedCounter'

function useTyping(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const delay = deleting ? 42 : 82
    const timeout = window.setTimeout(() => {
      if (!deleting && text === current) {
        window.setTimeout(() => setDeleting(true), 900)
        return
      }

      if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
        return
      }

      setText((value) => (deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1)))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [deleting, text, wordIndex, words])

  return text
}

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur-xl light:border-slate-200 light:bg-white">
      <p className="font-display text-2xl font-bold text-white light:text-slate-950"><AnimatedCounter value={value} suffix={suffix} /></p>
      <p className="mt-1 text-xs uppercase tracking-widest text-slate-400 light:text-slate-500">{label}</p>
    </div>
  )
}

interface HeroProps {
  onOpenResume?: () => void
}

export default function Hero({ onOpenResume }: HeroProps) {
  const typed = useTyping(roles)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-40" aria-hidden="true" />
      <div className="section-container relative z-10 grid min-h-[calc(100vh-9rem)] items-center gap-12 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="pill mb-6 inline-flex items-center gap-2">
            <Sparkles size={16} className="text-sky-300" /> Open to internships, hackathons, and developer roles
          </div>
          <h1 className="font-display text-4xl font-black leading-tight text-white light:text-slate-950 sm:text-5xl lg:text-7xl">
            Hi, I am <span className="premium-gradient-text">{personal.fullName}</span>
          </h1>
          <div className="mt-5 min-h-10 font-display text-2xl font-bold text-sky-200 light:text-sky-700 sm:text-3xl">
            {typed}<span className="ml-1 animate-pulse text-cyan-300">|</span>
          </div>
          <p className="muted-text mt-6 max-w-3xl text-base leading-8 sm:text-lg">{personal.objective}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onOpenResume}
              className="primary-button cursor-pointer"
            >
              <Eye size={18} /> View Resume
            </button>
            <a href={personal.resume} download className="secondary-button">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="secondary-button">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={personal.github} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-2"><FaGithub /> GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-2"><FaLinkedin /> LinkedIn</a>
            <a href={`mailto:${personal.email}`} className="pill inline-flex items-center gap-2"><Mail size={16} /> Email</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-md lg:max-w-lg" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-violet-500/20 blur-3xl" />
          <motion.div className="glass-card relative overflow-hidden rounded-[2.4rem] p-6" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 light:border-slate-200 light:bg-slate-50">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-500/30 via-cyan-400/20 to-violet-500/30" />
              <div className="relative mx-auto mt-5 grid h-44 w-44 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-glow light:border-slate-200 light:from-white light:via-sky-50 light:to-violet-50">
                <span className="font-display text-6xl font-black premium-gradient-text">PR</span>
                <span className="absolute -right-3 bottom-8 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200 light:bg-emerald-100 light:text-emerald-700">Available</span>
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-bold text-white light:text-slate-950">Professional Photo Placeholder</p>
                <p className="muted-text mt-2 text-sm">Replace this block with your photo when ready.</p>
              </div>
              <div className="mt-6 space-y-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm light:border-slate-200 light:bg-white">
                <p className="flex items-center gap-3 text-slate-300 light:text-slate-700"><MapPin size={16} className="text-sky-300" /> {personal.location}</p>
                <p className="flex items-center gap-3 text-slate-300 light:text-slate-700"><Phone size={16} className="text-sky-300" /> {personal.phone}</p>
                <p className="flex items-center gap-3 text-slate-300 light:text-slate-700"><Mail size={16} className="text-sky-300" /> {personal.email}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur-xl transition hover:text-sky-300 light:border-slate-200 light:bg-white light:text-slate-700">
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  )
}
