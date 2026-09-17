import { motion } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>About</motion.span>
        <div className="about__body">
          <motion.div className="about__text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <p>
              I got into programming by breaking things and figuring out how to
              put them back together. These days I do that professionally —
              building full-stack applications from database schemas to pixel-perfect
              interfaces.
            </p>
            <p>
              I care about writing code that other people can read, maintaining
              systems that don't page you at 3 AM, and shipping features that
              users actually want. Currently looking for a team where I can
              contribute meaningfully and keep growing.
            </p>
          </motion.div>
          <motion.aside className="about__details" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <div className="about__detail">
              <span className="about__detail-label">Focus</span>
              <span>Full-stack web development</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Location</span>
              <span>Remote / flexible</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Experience</span>
              <span>3+ years building for the web</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
