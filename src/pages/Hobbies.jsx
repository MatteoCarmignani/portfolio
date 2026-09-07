import HobbyCard from '../components/HobbyCard'
import './Hobbies.css'

function Hobbies() {
  return (
    <main className="hobbies">
      <div className="hobbies-content">

        <p className="section-subtitle">
          Oltre il codice
        </p>

        <h1>Hobby e passioni</h1>

        <p className="hobbies-intro">
          Quando non sono davanti al computer mi piace dedicare
          il mio tempo alle mie passioni.
        </p>

        <div className="hobbies-list">

          <HobbyCard
            title="🎮 Videogiochi"
            description="Sono appassionato di videogiochi e mi piace spaziare tra generi diversi, scoprendo nuove esperienze e mondi."
          />

          <HobbyCard
            title="🎲 Giochi di ruolo"
            description="Mi piacciono i giochi di ruolo, soprattutto Dungeons & Dragons, sia come giocatore che come creatore di avventure."
          />

          <HobbyCard
            title="💻 Tecnologia"
            description="La tecnologia è una delle mie passioni principali e mi piace sperimentare nuovi strumenti e imparare nuove tecnologie."
          />

        </div>

      </div>
    </main>
  )
}

export default Hobbies