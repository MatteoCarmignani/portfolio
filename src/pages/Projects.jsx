import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects() {

  const projects = [
    {
      title: 'Boolflix',
      description:
        'Applicazione web ispirata alle piattaforme di streaming, realizzata con React e API esterne.',
      image: '/projects/boolflix.jpg',
      technologies: ['React', 'JavaScript', 'API', 'CSS'],
      github: 'https://github.com/MatteoCarmignani/react-boolflix',
      demo: ''
    },

    {
    title: 'Booroad',
    description:
        'Applicazione web per la gestione dei partecipanti a viaggi organizzati, realizzata come progetto di gruppo durante il percorso di formazione.',
    image: '/projects/booroad.jpg',
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
    github: '',
    demo: ''
    },

    {
      title: 'Team Project',
      description:
        'Progetto realizzato in gruppo durante il percorso di formazione.',
      image: '/projects/team-project.jpg',
      technologies: ['React', 'JavaScript', 'Git'],
      github: 'https://github.com/MatteoCarmignani/project-work-nonserveraniente',
      demo: ''
    }
  ]

  return (
    <main className="projects">

      <div className="projects-content">

        <p className="section-subtitle">
          Cosa ho realizzato
        </p>

        <h1>I miei progetti più importanti</h1>

        <div className="projects-list">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
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