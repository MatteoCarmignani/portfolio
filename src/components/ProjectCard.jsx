import './ProjectCard.css'

function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo
}) {
  return (
    <article className="project-card">

      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-info">

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}

        </div>

      </div>

    </article>
  )
}

export default ProjectCard