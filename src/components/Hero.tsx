import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Check, Code2, Copy, Download, Eye, Mail, MapPin, Phone, Sparkles, User, Zap } from 'lucide-react'
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
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3.5 text-center backdrop-blur-xl transition hover:border-sky-300/40 hover:shadow-glow light:border-slate-200 light:bg-white"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/0 via-transparent to-violet-500/0 opacity-0 transition duration-300 group-hover:from-sky-400/10 group-hover:to-violet-500/10 group-hover:opacity-100" />
      <p className="font-display text-2xl font-bold text-white light:text-slate-950 sm:text-3xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-1 text-[11px] font-semibold tracking-wider text-slate-400 transition group-hover:text-sky-300 light:text-slate-500 sm:text-xs">
        {label}
      </p>
    </motion.div>
  )
}

function InteractiveHeroCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'contact' | 'tech' | 'status'>('contact')
  const [copied, setCopied] = useState(false)

  // 3D Tilt Motion Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const techBadges = ['React', 'FastAPI', 'Python', 'Docker', 'PostgreSQL', 'LangChain', 'Redis', 'Ollama', 'Node.js']

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative mx-auto w-full max-w-md lg:max-w-lg"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-sky-500/25 via-cyan-400/15 to-violet-500/25 blur-3xl" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass-card relative overflow-hidden rounded-[2.4rem] p-6 shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(14,165,233,0.2)]"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 backdrop-blur-xl light:border-slate-200 light:bg-slate-50">
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-500/30 via-cyan-400/20 to-violet-500/30" />

          {/* Avatar with Glow */}
          <div className="relative mx-auto mt-5 grid h-44 w-44 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-glow light:border-slate-200 light:from-white light:via-sky-50 light:to-violet-50">
            <span className="font-display text-6xl font-black premium-gradient-text">PR</span>
            <span className="absolute -right-3 bottom-8 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300 shadow-glow light:bg-emerald-100 light:text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available
            </span>
          </div>

          <div className="mt-5 text-center">
            <p className="font-display text-xl font-bold text-white light:text-slate-950">{personal.shortName}</p>
            <p className="muted-text mt-1 text-xs sm:text-sm">B.E. CSE (AI & ML) • Sri Eshwar College</p>
          </div>

          {/* Interactive Navigation Switcher */}
          <div className="mt-5 grid grid-cols-3 gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 text-xs font-bold light:border-slate-200 light:bg-slate-200/60">
            <button
              type="button"
              onClick={() => setActiveTab('contact')}
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl py-2 transition ${
                activeTab === 'contact'
                  ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              <User size={13} /> Contact
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tech')}
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl py-2 transition ${
                activeTab === 'tech'
                  ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              <Code2 size={13} /> Stack
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('status')}
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl py-2 transition ${
                activeTab === 'status'
                  ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              <Zap size={13} /> Focus
            </button>
          </div>

          {/* Interactive Content Panels */}
          <div className="mt-4 min-h-[120px]">
            {activeTab === 'contact' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 text-xs sm:text-sm light:border-slate-200 light:bg-white"
              >
                <p className="flex items-center gap-2.5 text-slate-300 light:text-slate-700">
                  <MapPin size={15} className="text-sky-300 shrink-0" /> {personal.location}
                </p>
                <p className="flex items-center gap-2.5 text-slate-300 light:text-slate-700">
                  <Phone size={15} className="text-sky-300 shrink-0" /> {personal.phone}
                </p>
                <div className="flex items-center justify-between gap-2 text-slate-300 light:text-slate-700">
                  <span className="flex items-center gap-2.5 truncate">
                    <Mail size={15} className="text-sky-300 shrink-0" /> {personal.email}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-sky-300 transition hover:bg-sky-400/10 light:border-slate-200 light:bg-slate-100"
                    title="Copy Email"
                  >
                    {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'tech' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 light:border-slate-200 light:bg-white"
              >
                {techBadges.map((badge) => (
                  <motion.span
                    key={badge}
                    whileHover={{ scale: 1.08 }}
                    className="cursor-default rounded-full border border-sky-300/20 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/20 light:border-sky-300/40 light:bg-sky-50 light:text-sky-700"
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {activeTab === 'status' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 text-xs light:border-slate-200 light:bg-white"
              >
                <div className="flex items-center gap-2 text-emerald-300 light:text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold">Open to Developer Internships & Hackathons</span>
                </div>
                <div className="flex items-center gap-2 text-sky-300 light:text-sky-700">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span className="font-semibold">Building AI/ML & Multi-LLM Gateways</span>
                </div>
                <div className="flex items-center gap-2 text-violet-300 light:text-violet-700">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                  <span className="font-semibold">Top 6 & Top 10 Hackathon Finalist</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface HeroProps {
  onOpenResume?: () => void
}

export default function Hero({ onOpenResume }: HeroProps) {
  const typed = useTyping(roles)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section
      id="home"
      onMouseMove={handleHeroMouseMove}
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-36"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.12), transparent 75%)`
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-35" aria-hidden="true" />

      <div className="section-container relative z-10 grid min-h-[calc(100vh-9rem)] items-center gap-12 pb-28 sm:pb-32 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="pill mb-6 inline-flex cursor-default items-center gap-2 shadow-sm"
          >
            <Sparkles size={16} className="animate-spin text-sky-300" style={{ animationDuration: '8s' }} /> Open to internships, hackathons, and developer roles
          </motion.div>
          <h1 className="font-display text-4xl font-black leading-tight text-white light:text-slate-950 sm:text-5xl lg:text-7xl">
            Hi, I am <span className="premium-gradient-text">{personal.fullName}</span>
          </h1>
          <div className="mt-5 min-h-10 font-display text-2xl font-bold text-sky-200 light:text-sky-700 sm:text-3xl">
            {typed}<span className="ml-1 animate-pulse text-cyan-300">|</span>
          </div>
          <p className="muted-text mt-6 max-w-3xl text-base leading-8 sm:text-lg">{personal.objective}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a href={personal.github} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-2 transition hover:-translate-y-0.5"><FaGithub /> GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-2 transition hover:-translate-y-0.5"><FaLinkedin /> LinkedIn</a>
            <a href={`mailto:${personal.email}`} className="pill inline-flex items-center gap-2 transition hover:-translate-y-0.5"><Mail size={16} /> Email</a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
        </motion.div>

        {/* Interactive 3D Card */}
        <InteractiveHeroCard />
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur-xl transition hover:border-sky-400/50 hover:text-sky-300 light:border-slate-200 light:bg-white light:text-slate-700 sm:bottom-6">
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  )
}
