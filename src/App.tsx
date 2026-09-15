import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Extras from './components/Extras'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Projects from './components/Projects'
import ResumeModal from './components/ResumeModal'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'
import { personal } from './data/portfolio'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 900)
    return () => window.clearTimeout(timeout)
  }, [])

  const handleOpenResume = () => setIsResumeOpen(true)
  const handleCloseResume = () => setIsResumeOpen(false)

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 transition-colors duration-300 light:bg-slate-50 light:text-slate-900">
      <AnimatePresence>
        <LoadingScreen isVisible={loading} />
      </AnimatePresence>
      <ScrollProgress />
      <ParticleBackground />
      <Navbar onOpenResume={handleOpenResume} />
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Experience />
        <Extras />
        <Contact />
      </main>
      <Footer />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
        resumeUrl={personal.resume}
      />
    </div>
  )
}
