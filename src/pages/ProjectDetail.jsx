import { Link, useParams } from 'react-router-dom'
import './ProjectDetail.css'

function ProjectDetail() {

  const { slug } = useParams()

  const projects = {
    boolflix: {
      title: 'Boolflix',
      description:
        'Applicazione web ispirata alle piattaforme di streaming, sviluppata durante il percorso di formazione.',
      fullDescription:
        'Il progetto consiste nella realizzazione di una piattaforma ispirata ai principali servizi di streaming. L’applicazione permette di cercare film e serie TV e visualizzare le relative informazioni attraverso dati recuperati da API esterne.',
      image: '/projects/boolflix.jpg',
      technologies: ['React', 'JavaScript', 'API', 'CSS'],
      github: 'https://github.com/MatteoCarmignani/react-boolflix',
      demo: ''
    },

    booroad: {
      title: 'Booroad',
      description:
        'Applicazione web realizzata per la gestione dei partecipanti a viaggi organizzati.',
      fullDescription:
        'Booroad è un progetto realizzato durante il percorso di formazione. L’applicazione è pensata per il personale che deve gestire i clienti che si iscrivono ai viaggi, permettendo di organizzare e visualizzare le informazioni relative ai partecipanti.',
      image: '/projects/booroad.jpg',
      technologies: ['React', 'JavaScript', 'CSS', 'Git'],
      github: '',
      demo: ''
    },

    'team-project': {
      title: 'Team Project',
      description:
        'Progetto realizzato in gruppo durante il percorso di formazione.',
      fullDescription:
        'Questo progetto è stato sviluppato collaborando con altri studenti durante il percorso di formazione. Il lavoro ha permesso di mettere in pratica le tecnologie studiate e di confrontarsi con la gestione di un progetto sviluppato in team.',
      image: '/projects/team-project.jpg',
      technologies: ['React', 'JavaScript', 'Git'],
      github: '',
      demo: ''
    }
  }

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