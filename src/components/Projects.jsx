import './Projects.css'

const projects = [
  {
    title: 'Project Kukulkan',
    description: 'A full-stack web application with real-time data visualization and interactive dashboards. Built with React, Node.js, and WebSocket integration.',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'Xibalba Engine',
    description: 'A high-performance REST API powering a content management system with role-based access control and advanced caching strategies.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    link: '#',
    github: '#',
  },
  {
    title: 'Codex Pyramid',
    description: 'An AI-powered document analysis tool that extracts insights from unstructured data using natural language processing.',
    tags: ['TypeScript', 'OpenAI', 'Next.js', 'Prisma'],
    link: '#',
    github: '#',
  },
  {
    title: 'Temple Grid',
    description: 'A responsive e-commerce platform with Stripe integration, inventory management, and automated order fulfillment workflows.',
    tags: ['React', 'Stripe', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#',
  },
]

const cornerGlyph = '\u2736'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="projects__header">
          <span className="projects__glyph">{'\u2737'}</span>
          <h2 className="projects__title">Sacred Works</h2>
          <div className="projects__divider" />
          <p className="projects__subtitle">
            A collection of projects forged with precision and purpose
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article key={i} className="project-card">
              <div className="project-card__corner project-card__corner--tl">{cornerGlyph}</div>
              <div className="project-card__corner project-card__corner--tr">{cornerGlyph}</div>
              <div className="project-card__corner project-card__corner--bl">{cornerGlyph}</div>
              <div className="project-card__corner project-card__corner--br">{cornerGlyph}</div>

              <div className="project-card__number">
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={project.link} className="project-card__link">
                  Live Demo &rarr;
                </a>
                <a href={project.github} className="project-card__link project-card__link--ghost">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
