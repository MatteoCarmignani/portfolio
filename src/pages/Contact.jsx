import './Contact.css'

function Contact() {
  return (
    <main className="contact">
      <div className="contact-content">

        <p className="section-subtitle">
          Parliamo
        </p>

        <h1>Contattami</h1>

        <p className="contact-description">
          Sei interessato al mio profilo o vuoi parlare di un progetto?
          Puoi contattarmi attraverso uno dei seguenti canali.
        </p>

        <div className="contact-links">

          <a href="matteo.carmignani01@gmail.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/MatteoCarmignani"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>
    </main>
  )
}

export default Contact