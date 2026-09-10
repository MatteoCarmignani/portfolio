import { Link, useParams } from 'react-router-dom'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()

  return (
    <main className="project-detail">
      <div className="project-detail-content">

        <h1>Dettaglio progetto</h1>

        <p>Progetto: {slug}</p>

        <Link to="/projects" className="back-button">
          ← Torna ai progetti
        </Link>

      </div>
    </main>
  )
}

export default ProjectDetail