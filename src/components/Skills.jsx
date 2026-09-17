import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    glyph: '\u13A0',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    glyph: '\u13A3',
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Database',
    glyph: '\u13A6',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'SQL'],
  },
  {
    title: 'Tools & DevOps',
    glyph: '\u13A9',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="skills__header">
          <span className="skills__glyph">{'\u2736'}</span>
          <h2 className="skills__title">Arsenal</h2>
          <div className="skills__divider" />
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category">
              <div className="skill-category__header">
                <span className="skill-category__glyph">{cat.glyph}</span>
                <h3 className="skill-category__title">{cat.title}</h3>
              </div>
              <ul className="skill-category__list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-category__item">
                    <span className="skill-category__dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
