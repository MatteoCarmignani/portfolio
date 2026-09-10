import './HobbyCard.css'

function HobbyCard({ title, description }) {
  return (
    <article className="hobby-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default HobbyCard