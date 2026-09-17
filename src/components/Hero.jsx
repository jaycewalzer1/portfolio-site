import { useEffect, useRef } from 'react'
import './Hero.css'

const mayanGlyphs = [
  '\u13A0', '\u13A1', '\u13A2', '\u13A3', '\u13A4',
  '\u13A5', '\u13A6', '\u13A7', '\u13A8', '\u13A9',
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Floating glyphs
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      glyph: mayanGlyphs[Math.floor(Math.random() * mayanGlyphs.length)],
      size: 12 + Math.random() * 20,
      speed: 0.15 + Math.random() * 0.4,
      opacity: 0.03 + Math.random() * 0.08,
      drift: (Math.random() - 0.5) * 0.3,
    }))

    // Grid lines
    const gridLines = Array.from({ length: 12 }, (_, i) => ({
      y: (canvas.height / 12) * i,
      opacity: 0.03 + Math.random() * 0.04,
      speed: 0.2 + Math.random() * 0.3,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw horizontal scan lines
      gridLines.forEach(line => {
        ctx.strokeStyle = `rgba(0, 212, 170, ${line.opacity})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(0, line.y)
        ctx.lineTo(canvas.width, line.y)
        ctx.stroke()
        line.y += line.speed
        if (line.y > canvas.height) line.y = 0
      })

      // Draw floating glyphs
      particles.forEach(p => {
        ctx.font = `${p.size}px serif`
        ctx.fillStyle = `rgba(0, 212, 170, ${p.opacity})`
        ctx.fillText(p.glyph, p.x, p.y)
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -30) {
          p.y = canvas.height + 30
          p.x = Math.random() * canvas.width
        }
        if (p.x < -30) p.x = canvas.width + 30
        if (p.x > canvas.width + 30) p.x = -30
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__glyph-ring">
          {mayanGlyphs.slice(0, 6).map((g, i) => (
            <span
              key={i}
              className="hero__orbiting-glyph"
              style={{ '--i': i, '--total': 6 }}
            >
              {g}
            </span>
          ))}
        </div>

        <p className="hero__subtitle">
          <span className="hero__line" />
          Hello, I'm
          <span className="hero__line" />
        </p>
        <h1 className="hero__title">
          Jayce <span className="hero__title-accent">Walzer</span>
        </h1>
        <p className="hero__role">Full Stack Developer</p>
        <p className="hero__tagline">
          Building digital temples at the intersection of ancient wisdom and future technology
        </p>

        <div className="hero__cta-group">
          <a href="#projects" className="hero__cta hero__cta--primary">
            View My Work
          </a>
          <a href="#contact" className="hero__cta hero__cta--secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-glyph">{mayanGlyphs[2]}</div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
