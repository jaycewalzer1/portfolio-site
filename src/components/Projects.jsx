import './Projects.css'

const projects = [
  {
    title: 'Real-time Dashboard',
    description: 'Data visualization app with live WebSocket feeds, interactive charts, and role-based views. Handles 10k+ concurrent connections.',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'CMS API Platform',
    description: 'REST API for a content management system. Includes RBAC, Redis caching layer, and automated DB migrations.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    link: '#',
    github: '#',
  },
  {
    title: 'Document Analyzer',
    description: 'Extracts structured data from unstructured documents using GPT-4. Processes PDFs, images, and handwritten notes.',
    tags: ['TypeScript', 'OpenAI', 'Next.js', 'Prisma'],
    link: '#',
    github: '#',
  },
  {
    title: 'E-commerce Store',
    description: 'Full checkout flow with Stripe, inventory sync, and automated fulfillment. Mobile-first responsive design.',
    tags: ['React', 'Stripe', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">Work</h2>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <article key={i} className="card">
              <div className="card__top">
                <h3 className="card__title">{project.title}</h3>
                <p className="card__desc">{project.description}</p>
              </div>
              <div className="card__bottom">
                <div className="card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="card__tag">{tag}</span>
                  ))}
                </div>
                <div className="card__links">
                  <a href={project.github} className="card__link">Code</a>
                  <a href={project.link} className="card__link card__link--accent">Demo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
