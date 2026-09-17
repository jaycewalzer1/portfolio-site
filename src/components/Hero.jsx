import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__glyph"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
            <rect x="18" y="2" width="12" height="3" fill="var(--stone)" opacity="0.5" />
            <rect x="14" y="5" width="20" height="3" fill="var(--stone)" opacity="0.4" />
            <rect x="10" y="8" width="28" height="3" fill="var(--stone)" opacity="0.3" />
            <rect x="17" y="13" width="14" height="14" rx="1" fill="none" stroke="var(--teal)" strokeWidth="1.5" opacity="0.5" />
            <circle cx="24" cy="20" r="3.5" fill="var(--gold)" opacity="0.45" />
            <rect x="10" y="31" width="28" height="3" fill="var(--stone)" opacity="0.3" />
            <rect x="14" y="34" width="20" height="3" fill="var(--stone)" opacity="0.4" />
            <rect x="18" y="37" width="12" height="3" fill="var(--stone)" opacity="0.5" />
          </svg>
        </motion.div>
        <motion.p
          className="hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Full-stack developer
        </motion.p>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Jayce Walzer
        </motion.h1>
        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I design and build clean, scalable web applications.
          Focused on craft, performance, and shipping things that matter.
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <a href="#projects" className="btn btn--primary">View work</a>
          <a href="#contact" className="btn btn--outline">Get in touch</a>
        </motion.div>
        <motion.div
          className="hero__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/Jaycewalzer" target="_blank" rel="noopener noreferrer">X</a>
        </motion.div>
      </div>
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#about" className="hero__scroll-link">
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  )
}
