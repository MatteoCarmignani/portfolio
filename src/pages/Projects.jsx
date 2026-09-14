import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'
import projects from '../data/projects'

function Projects() {

  const [currentPage, setCurrentPage] = useState(0)

  const projectsPerPage = 2

  const startIndex = currentPage * projectsPerPage

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  )

  const totalPages = Math.ceil(projects.length / projectsPerPage)

  function nextPage() {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  function previousPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <main className="projects">

      <div className="projects-content">

        <p className="section-subtitle">
          Cosa ho realizzato
        </p>

        <h1>I miei progetti</h1>

        <div className="projects-carousel">

          <button
            className="carousel-button"
            onClick={previousPage}
            disabled={currentPage === 0}
          >
            ←
          </button>

          <div className="projects-list">

            {visibleProjects.map((project) => (
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

          <button
            className="carousel-button"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            →
          </button>

        </div>

        <p className="carousel-counter">
          {currentPage + 1} / {totalPages}
        </p>

      </div>

    </main>
  )
}

export default Projects