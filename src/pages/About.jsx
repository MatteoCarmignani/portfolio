import './About.css'

function About() {
  return (
    <main className="about">

      <div className="about-content">

        <div className="about-text">

          <p className="section-subtitle">
            Conosciamoci
          </p>

          <h1>
            Chi sono
          </h1>

          <p>
            Sono Matteo Carmignani, Junior Web Developer con una
            forte passione per la tecnologia e per il mondo dello
            sviluppo web.
          </p>

          <p>
            Ho scelto di intraprendere questo percorso perché mi
            piace l'idea di poter trasformare un'idea in qualcosa
            di concreto e interattivo. Durante il mio percorso ho
            avuto modo di lavorare su diversi progetti, sia
            individualmente che in gruppo.
          </p>

          <p>
            Mi interessa soprattutto lo sviluppo frontend, dove
            posso unire la parte tecnica alla cura dell'interfaccia
            e dell'esperienza dell'utente.
          </p>

          <p>
            Sono una persona curiosa e mi piace continuare a
            imparare, sperimentando nuove tecnologie e cercando
            di migliorare il modo in cui scrivo e organizzo il
            codice.
          </p>

        </div>

        <div className="about-info">

          <div className="about-info-item">

            <h2>
              Formazione
            </h2>

            <p>
              Boolean Careers
            </p>

            <span>
              Corso intensivo Full Stack Web Development
              di 600 ore, con lezioni teoriche e pratiche
              e sviluppo di progetti individuali e di gruppo.
            </span>

          </div>

          <div className="about-info-item">

            <h2>
              Competenze
            </h2>

            <p>
              Frontend Development
            </p>

            <span>
              HTML5, CSS3, JavaScript, React, Vite,
              responsive design, API e Git.
            </span>

          </div>

          <div className="about-info-item">

            <h2>
              Obiettivo
            </h2>

            <p>
              Crescere come Web Developer
            </p>

            <span>
              Sto cercando un'opportunità che mi permetta
              di iniziare il mio percorso professionale,
              continuare a imparare e confrontarmi con
              progetti reali.
            </span>

          </div>

        </div>

      </div>

    </main>
  )
}

export default About