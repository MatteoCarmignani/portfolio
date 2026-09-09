import SkillCard from '../components/SkillCard'
import './Skills.css'

function Skills() {

  const skills = [
    {
      name: 'HTML5',
      description: 'Creazione della struttura semantica delle pagine web.'
    },
    {
      name: 'CSS3',
      description: 'Styling, layout, Flexbox e responsive design.'
    },
    {
      name: 'JavaScript',
      description: 'Logica applicativa, DOM, eventi e gestione dei dati.'
    },
    {
      name: 'React',
      description: 'Creazione di interfacce attraverso componenti riutilizzabili.'
    },
    {
      name: 'Git',
      description: 'Gestione del codice e collaborazione attraverso repository.'
    },
    {
      name: 'Responsive Design',
      description: 'Realizzazione di interfacce adattabili a diversi dispositivi.'
    }
  ]

  return (
    <main className="skills">
      <div className="skills-content">

        <p className="section-subtitle">
          Cosa so fare
        </p>

        <h1>Competenze</h1>

        <div className="skills-list">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </div>

      </div>
    </main>
  )
}

export default Skills