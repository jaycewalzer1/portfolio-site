import './Skills.css'

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'] },
  { category: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'SQL'] },
  { category: 'AI / ML', items: ['OpenAI API', 'Claude API', 'LangChain', 'RAG Pipelines', 'Prompt Engineering', 'Fine-tuning'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'] },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <span className="section-label">Skills</span>
        <div className="glyph-divider" aria-hidden="true">
          <span className="glyph-divider__line" />
          <span className="glyph-divider__motif">
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
          </span>
          <span className="glyph-divider__line" />
        </div>
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
