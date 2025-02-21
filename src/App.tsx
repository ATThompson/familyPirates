import { Link } from 'react-router-dom'
import Home from './pages/Home'
import GamesList from './pages/GamesList'
import { useEffect } from 'react'
import Dropdown from './components/Dropdown'
import {IGames} from './types/IGame'
import Router from './components/Router'

function App() {


  useEffect(() => {
    console.log('Fetching data from the API...')
    fetch('/api')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
  }, [])


  const games: IGames = [
    {
      name: 'uno',
      rulesPage: <Home />,
    },
    {
      name: 'poker',
      rulesPage: <GamesList />,
    },
  ]


  return (
    <div className="flex flex-col h-dvh">
      <header>
        <center>
          <h1>Bienvenue les pirates!</h1>
        </center>
      </header>
      <nav>
        <div className="w-full bg-amber-50 mx-auto">
          <ul className="flex gap-4 justify-center">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/pirates">Liste des Pirates</Link></li>
            <li className="relative">
              <Dropdown games={games} />
            </li>
          </ul>
        </div>
      </nav>
      <Router games={games} />
    </div>
  )
}

export default App
