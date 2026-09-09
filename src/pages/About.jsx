import './About.css'

function About() {
  return (
    <main className="about">
      <div className="about-content">

        <div className="about-text">
          <p className="section-subtitle">
            Conosciamoci
          </p>

          <h1>Chi sono</h1>

          <p>
            Sono Matteo Carmignani, un Junior Web Developer di Firenze.
            Ho completato un percorso intensivo di formazione nello sviluppo
            web e continuo a migliorare le mie competenze attraverso nuovi
            progetti e nuove tecnologie.
          </p>

          <p>
            Mi interessa soprattutto lo sviluppo frontend e mi piace
            trasformare idee e concetti in interfacce web funzionali,
            responsive e curate.
          </p>
        </div>

        <div className="about-info">

          <div className="about-info-item">
            <h2>Formazione</h2>
            <p>
              Boolean Careers
            </p>
            <span>
              Corso intensivo Full Stack Web Development
            </span>
          </div>

          <div className="about-info-item">
            <h2>Focus</h2>
            <p>
              Frontend Development
            </p>
            <span>
              React, JavaScript, HTML e CSS
            </span>
          </div>

        </div>

      </div>
    </main>
  )
}

export default About