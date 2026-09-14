import { Link, useParams } from 'react-router-dom'
import './ProjectDetail.css'
import projects from '../data/projects'

function ProjectDetail() {

  const { slug } = useParams()

  const project = projects[slug]

if (!project) {
  return (
    <main className="project-detail">
      <div className="project-detail-content">

        <h1>Progetto non trovato</h1>

        <Link to="/projects" className="back-button">
          ← Torna ai progetti
        </Link>

      </div>
    </main>
  )
}

return (
  <main className="project-detail">

    <div className="project-detail-content">

      <Link to="/projects" className="back-button">
        ← Torna ai progetti
      </Link>

      <div className="project-detail-image">
        <img src={project.image} alt={project.title} />
      </div>

      <p className="section-subtitle">
        Progetto
      </p>

      <h1>{project.title}</h1>

      <p className="project-detail-description">
        {project.description}
      </p>

      <p className="project-detail-full-description">
        {project.fullDescription}
      </p>

      <div className="project-detail-section">

        <h2>Obiettivo</h2>

        <p>
          {project.objective}
        </p>

      </div>

      <div className="project-detail-section">

        <h2>Funzionalità principali</h2>

        <ul className="project-features">

          {project.features.map((feature) => (
            <li key={feature}>
              {feature}
            </li>
          ))}

        </ul>

      </div>

      <div className="project-detail-technologies">

        <h2>Tecnologie utilizzate</h2>

        <div className="technology-list">

          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>

      </div>

      <div className="project-detail-links">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}

      </div>

    </div>

  </main>
)

}

export default ProjectDetail