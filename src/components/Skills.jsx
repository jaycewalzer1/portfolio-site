import { motion } from 'framer-motion'
import './Skills.css'

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'] },
  { category: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'SQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.08 }
  })
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <span className="section-label">Skills</span>
        <div className="skills__grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skills__group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
