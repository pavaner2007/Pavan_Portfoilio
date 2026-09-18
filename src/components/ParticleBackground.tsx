import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const isLight = () => document.documentElement.classList.contains('light')

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Generate particles
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.5 + 0.3
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const lightMode = isLight()

      const particleColor = lightMode ? 'rgba(14, 165, 233, ' : 'rgba(56, 189, 248, '
      const lineBaseColor = lightMode ? '14, 165, 233' : '56, 189, 248'
      const lineAltColor = lightMode ? '139, 92, 246' : '168, 85, 247'

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Bounce from edges
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse interaction (gentle attraction / hover push)
        const dxMouse = mouse.x - p.x
        const dyMouse = mouse.y - p.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 1.5
          p.x -= (dxMouse / distMouse) * force
          p.y -= (dyMouse / distMouse) * force

          // Draw line to mouse
          ctx.beginPath()
          ctx.strokeStyle = `rgba(${lineAltColor}, ${(1 - distMouse / mouse.radius) * 0.45})`
          ctx.lineWidth = 1
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }

        // Draw particle node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${particleColor}${p.alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * 0.22
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${lineBaseColor}, ${lineAlpha})`
            ctx.lineWidth = 0.75
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.18),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.12),transparent_35%)] light:bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.12),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_35%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70 light:opacity-50" />
    </div>
  )
}
