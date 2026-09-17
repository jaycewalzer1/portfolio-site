import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <span className="section-label">Selected Work</span>
        <div className="projects__list">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              className="project"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              custom={i}
            >
              <div className="project__header">
                <span className="project__number">{String(i + 1).padStart(2, '0')}</span>
                <div className="project__links">
                  <a href={project.github} className="project__link">Code</a>
                  <a href={project.link} className="project__link project__link--demo">
                    Demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__desc">{project.description}</p>
              <div className="project__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project__tag">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
