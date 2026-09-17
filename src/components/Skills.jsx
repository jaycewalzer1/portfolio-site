import './Skills.css'

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'] },
  { category: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'SQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'] },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
