import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects() {

  const projects = [
    {
      title: 'Boolflix',
      slug: 'boolflix',
      description:
        'Applicazione web ispirata alle piattaforme di streaming, realizzata con React e API esterne.',
      image: '/projects/boolflix.jpg',
      technologies: ['React', 'JavaScript', 'API', 'CSS'],
      github: 'https://github.com/MatteoCarmignani/react-boolflix',
      demo: ''
    },

    {
      title: 'Booroad',
      slug: 'booroad',
      description:
        'Applicazione web per la gestione dei partecipanti a viaggi organizzati, realizzata come progetto di gruppo durante il percorso di formazione.',
      image: '/projects/booroad.jpg',
      technologies: ['React', 'JavaScript', 'CSS', 'Git'],
      github: '',
      demo: ''
    },

    {
      title: 'Team Project',
      slug: 'team-project',
      description:
        'Progetto realizzato in gruppo durante il percorso di formazione.',
      image: '/projects/team-project.jpg',
      technologies: ['React', 'JavaScript', 'Git'],
      github: '',
      demo: ''
    }
  ]

  return (
    <main className="projects">

      <div className="projects-content">

        <p className="section-subtitle">
          Cosa ho realizzato
        </p>

        <h1>I miei progetti</h1>

        <div className="projects-list">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              slug={project.slug}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </div>

    </main>
  )
}

export default Projects