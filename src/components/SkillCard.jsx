import './SkillCard.css'

function SkillCard({ name, description }) {
  return (
    <div className="skill-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SkillCard