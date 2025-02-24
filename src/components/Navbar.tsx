import { Link } from 'react-router-dom'
import { IGames } from '../types/IGame'
import Dropdown from './Dropdown'

const Navbar = ({ games }: { games: IGames }) => {
  return (
    <nav>
      <div className="mx-auto">
        <ul className="flex gap-4 justify-center">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/pirates">Liste des Pirates</Link></li>
          <li className="relative">
            <Dropdown games={games} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
