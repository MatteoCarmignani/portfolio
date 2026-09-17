import { useState } from 'react'
import './Hobbies.css'

function Hobbies() {

  const [selectedHobby, setSelectedHobby] = useState(null)

  const hobbies = [
    {
      id: 1,
      title: 'Videogiochi',
      image: '/hobbies/videogames.jpg',
      description:
        'I videogiochi sono una delle mie passioni principali. Mi piace giocare a generi diversi, scoprendo ogni volta mondi, storie e meccaniche di gioco differenti.'
    },
    {
      id: 2,
      title: 'Dungeons & Dragons',
      image: '/hobbies/dnd.jpg',
      description:
        'Dungeons & Dragons mi appassiona per la possibilità di creare storie, personaggi e mondi insieme ad altre persone. Mi piace soprattutto il lato creativo e narrativo del gioco.'
    },
    {
      id: 3,
      title: 'Tecnologia',
      image: '/hobbies/technology.jpg',
      description:
        'La tecnologia è una passione che mi ha portato anche ad avvicinarmi alla programmazione. Mi interessa scoprire nuovi strumenti e capire come vengono realizzate le applicazioni che utilizziamo ogni giorno.'
    }
  ]

  return (
    <main className="hobbies">

      <div className="hobbies-content">

        <p className="section-subtitle">
          Oltre il codice
        </p>

        <h1>
          Hobby e passioni
        </h1>

        <p className="hobbies-intro">
          Alcune delle cose che mi appassionano e che fanno parte
          del mio tempo libero.
        </p>

        <div className="hobbies-grid">

          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="hobby-card"
              onClick={() => setSelectedHobby(hobby)}
            >

              <img
                src={hobby.image}
                alt={hobby.title}
              />

              <h2>
                {hobby.title}
              </h2>

            </div>
          ))}

        </div>

        {selectedHobby && (
          <div className="hobby-overlay">

            <div className="hobby-modal">

              <button
                className="hobby-close"
                onClick={() => setSelectedHobby(null)}
              >
                ×
              </button>

              <img
                src={selectedHobby.image}
                alt={selectedHobby.title}
              />

              <div className="hobby-modal-content">

                <h2>
                  {selectedHobby.title}
                </h2>

                <p>
                  {selectedHobby.description}
                </p>

              </div>

            </div>

          </div>
        )}

      </div>

    </main>
  )
}

export default Hobbies