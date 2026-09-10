import HobbyCard from '../components/HobbyCard'
import './Hobbies.css'

function Hobbies() {

  const hobbies = [
    {
      title: 'Videogiochi',
      description:
        'Mi piacciono videogiochi di generi diversi e mi interessa soprattutto scoprire nuovi mondi, meccaniche e modi di raccontare una storia.'
    },

    {
      title: 'Tecnologia',
      description:
        'Sono curioso delle nuove tecnologie e mi piace capire come funzionano gli strumenti che utilizzo ogni giorno.'
    },

    {
      title: 'Dungeons & Dragons',
      description:
        'Mi piace giocare a D&D e creare personaggi, avventure e mondi insieme agli altri giocatori.'
    },

    {
      title: 'Fantasy',
      description:
        'Il fantasy è uno dei generi che preferisco, soprattutto per la possibilità di esplorare mondi e storie completamente diversi dalla realtà.'
    }
  ]

  return (
    <main className="hobbies">

      <div className="hobbies-content">

        <p className="section-subtitle">
          Oltre il codice
        </p>

        <h1>Hobby e passioni</h1>

        <div className="hobbies-list">

          {hobbies.map((hobby) => (
            <HobbyCard
              key={hobby.title}
              title={hobby.title}
              description={hobby.description}
            />
          ))}

        </div>

      </div>

    </main>
  )
}

export default Hobbies