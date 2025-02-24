import { IGames } from '../types/IGame'
import Navbar from './Navbar'

const Header = ({ games }: { games: IGames }) => {
  return (
    <header className="p-2">
      <center>
        <h1>A l'abordage!</h1>
      </center>
      <Navbar games={games} />
    </header>
  )
}

export default Header
