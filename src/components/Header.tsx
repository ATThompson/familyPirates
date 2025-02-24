import { IGames } from '../types/IGame'
import Navbar from './Navbar'

const Header = ({ games }: { games: IGames }) => {
  return (
    <header className="text-black p-2">
      <center>
        <h1>Bienvenue les pirates!</h1>
      </center>
      <Navbar games={games} />
    </header>
  )
}

export default Header
