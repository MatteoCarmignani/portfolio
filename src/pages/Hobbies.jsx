import './Hobbies.css'

function Hobbies() {
  return (
    <main className="hobbies">
      <div className="hobbies-content">

        <p className="section-subtitle">Oltre il codice</p>

        <h1>Hobby e passioni</h1>

        <p className="hobbies-intro">
          Quando non sono davanti al computer mi piace dedicare il mio tempo
          alle mie passioni e continuare a scoprire nuovi interessi.
        </p>

        <div className="hobbies-list">

          <div className="hobby-card">
            <h2>🎮 Videogiochi</h2>

            <p>
              Sono appassionato di videogiochi e mi piace spaziare tra generi
              diversi, scoprendo nuove esperienze e mondi.
            </p>
          </div>

          <div className="hobby-card">
            <h2>🎲 Giochi di ruolo</h2>

            <p>
              Mi piacciono i giochi di ruolo, soprattutto Dungeons & Dragons,
              sia come giocatore che come creatore di avventure.
            </p>
          </div>

          <div className="hobby-card">
            <h2>💻 Tecnologia</h2>

            <p>
              La tecnologia è una delle mie passioni principali e mi piace
              sperimentare nuovi strumenti e imparare nuove tecnologie.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}

export default Hobbies