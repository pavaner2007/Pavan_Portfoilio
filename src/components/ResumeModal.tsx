import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, ExternalLink, FileText, X } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  resumeUrl: string
}

export default function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume Preview Modal"
            className="relative z-10 flex h-full max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/95 shadow-2xl backdrop-blur-2xl light:border-slate-300 light:bg-white/95"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 light:border-slate-200 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/15 text-sky-400 light:bg-sky-100 light:text-sky-700">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white light:text-slate-950 sm:text-lg">
                    Pavan E R - Resume
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-500">Live PDF Document Viewer</p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-sky-300/50 hover:bg-sky-400/10 hover:text-sky-300 light:border-slate-300 light:bg-slate-100 light:text-slate-700 sm:text-sm"
                  title="Open in new tab"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>

                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-1.5 text-xs font-bold text-white shadow-glow transition hover:opacity-95 sm:text-sm"
                  title="Download Resume"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-rose-400/50 hover:bg-rose-500/10 hover:text-rose-300 light:border-slate-300 light:bg-slate-100 light:text-slate-600"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body - PDF Viewer */}
            <div className="relative flex-1 bg-slate-950/60 p-2 light:bg-slate-100/70 sm:p-4">
              <iframe
                src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                className="h-full w-full rounded-xl border border-white/10 bg-white shadow-inner light:border-slate-200"
                title="Pavan E R Resume"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
