import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { personal } from '../data/portfolio'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const dark = stored ? stored === 'dark' : true
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.classList.toggle('light', !next)
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`fixed left-0 right-0 top-0 z-[70] transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <nav className="section-container">
        <div className="glass-card flex items-center justify-between rounded-full px-4 py-3">
          <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 font-display font-bold text-white shadow-glow">PR</span>
            <span className="hidden font-display text-base font-bold text-white light:text-slate-950 sm:block">{personal.shortName}</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-sky-300/60 hover:text-sky-300 light:border-slate-200 light:bg-white light:text-slate-700"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href={personal.resume} download className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100 light:bg-slate-950 light:text-white md:inline-flex md:items-center md:gap-2">
              <Download size={16} /> Resume
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 lg:hidden light:border-slate-200 light:bg-white light:text-slate-700"
              aria-label="Open navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="section-container pt-3 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="glass-card rounded-3xl p-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/10 light:text-slate-700 light:hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <a href={personal.resume} download className="primary-button mt-3 w-full">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
