import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Matteo</h2>

      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">Chi sono</Link>
        </li>

        <li>
          <Link to="/skills">Competenze</Link>
        </li>

        <li>
          <Link to="/hobbies">Hobby</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar