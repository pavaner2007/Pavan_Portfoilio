import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send, XCircle } from 'lucide-react'
import { personal } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/moevjnjk', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await response.json()
        if (data && data.errors) {
          setErrorMessage(data.errors.map((error: { message: string }) => error.message).join(', '))
        } else {
          setErrorMessage('Unable to send message. Please try again or email me directly.')
        }
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something valuable"
          description="Reach out for internships, full-stack roles, AI/ML projects, hackathon collaborations, or software development opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="glass-card rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">Contact Details</h3>
            <p className="muted-text mt-4 leading-8">
              I am open to recruiter conversations, internship opportunities, AI/ML projects, and full-stack development work.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-300/40 light:border-slate-200 light:bg-white"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-400/10 text-sky-300 light:bg-sky-100 light:text-sky-700">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-sm text-slate-400 light:text-slate-500">Email</span>
                  <span className="break-all font-semibold text-white light:text-slate-950">{personal.email}</span>
                </span>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-300/40 light:border-slate-200 light:bg-white"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-400/10 text-sky-300 light:bg-sky-100 light:text-sky-700">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-sm text-slate-400 light:text-slate-500">Phone</span>
                  <span className="font-semibold text-white light:text-slate-950">{personal.phone}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-white">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-400/10 text-sky-300 light:bg-sky-100 light:text-sky-700">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-sm text-slate-400 light:text-slate-500">Location</span>
                  <span className="font-semibold text-white light:text-slate-950">{personal.location}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="pill inline-flex items-center gap-2"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="pill inline-flex items-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">Send a Message</h3>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center light:border-emerald-300 light:bg-emerald-50"
              >
                <CheckCircle2 size={48} className="mx-auto text-emerald-400 light:text-emerald-600" />
                <h4 className="mt-4 font-display text-xl font-bold text-white light:text-slate-950">Message Sent!</h4>
                <p className="muted-text mt-2 text-sm leading-relaxed">
                  Thank you for reaching out. Your message has been sent directly to my inbox, and I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="primary-button mt-6 text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                {status === 'error' && (
                  <div className="mb-4 flex items-center gap-2 rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-300 light:border-rose-200 light:bg-rose-50 light:text-rose-700">
                    <XCircle size={16} className="shrink-0" />
                    <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Name</span>
                    <input
                      name="name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300 light:border-slate-200 light:bg-white light:text-slate-950"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300 light:border-slate-200 light:bg-white light:text-slate-950"
                      placeholder="your@email.com"
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Subject</span>
                  <input
                    name="subject"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300 light:border-slate-200 light:bg-white light:text-slate-950"
                    placeholder="Opportunity / collaboration"
                  />
                </label>

                <label className="mt-4 block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300 light:border-slate-200 light:bg-white light:text-slate-950"
                    placeholder="Tell me about the role, project, or collaboration."
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="primary-button mt-6 w-full cursor-pointer disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>

                <p className="muted-text mt-4 text-center text-xs">
                  Your message will be delivered directly to my inbox.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
