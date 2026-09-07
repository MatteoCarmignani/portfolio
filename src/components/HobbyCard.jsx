import './HobbyCard.css'

function HobbyCard({ title, description }) {
  return (
    <div className="hobby-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default HobbyCard