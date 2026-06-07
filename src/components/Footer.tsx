import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 light:border-slate-200">
      <div className="section-container relative z-10 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-bold text-white light:text-slate-950">{personal.shortName}</p>
          <p className="muted-text mt-1 text-sm">© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-sky-300/50 hover:text-sky-300 light:border-slate-200 light:bg-white light:text-slate-700"><Github size={18} /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-sky-300/50 hover:text-sky-300 light:border-slate-200 light:bg-white light:text-slate-700"><Linkedin size={18} /></a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-sky-300/50 hover:text-sky-300 light:border-slate-200 light:bg-white light:text-slate-700"><Mail size={18} /></a>
          <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-glow transition hover:-translate-y-1"><ArrowUp size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
