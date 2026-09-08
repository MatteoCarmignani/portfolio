import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">
          Ciao, sono Matteo
        </p>

        <h1>
          Junior Web Developer
        </h1>

        <p className="hero-description">
          Mi piace creare applicazioni web moderne e responsive
          utilizzando React, JavaScript, HTML e CSS.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="hero-button">
            I miei progetti
          </Link>

          <Link to="/contact" className="hero-button secondary">
            Contattami
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero