import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ value, suffix = '', duration = 1200 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let frame = 0
    const totalFrames = Math.max(1, Math.round(duration / 16))

    const animate = () => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Number((value * eased).toFixed(value % 1 === 0 ? 0 : 1)))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [duration, isInView, value])

  return <span ref={ref}>{display}{suffix}</span>
}
