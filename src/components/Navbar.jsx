import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="navbar">

      <h2>Matteo</h2>

      <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end>
          Home
        </NavLink>

        <li>
          <NavLink to="/about">Chi sono</NavLink>
        </li>

        <li>
          <NavLink to="/skills">Competenze</NavLink>
        </li>

        <li>
          <NavLink to="/hobbies">Hobby</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Progetti</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contatti</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar