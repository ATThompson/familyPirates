import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import PiratesList from './pages/PiratesList'
import GamesList from './pages/GamesList'
import { useEffect } from 'react'
import Vote from './pages/Vote'
import Resultat from './pages/Resultat'
import Dropdown from './components/Dropdown'
import {IGame, IGames} from './types/IGame'

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

      <div className="h-fit px-[10%] py-4 bg-white">
        {/* Ajouter filter-wavy */}
        <div className='h-fit shadow-[inset_0px_0px_125px_#8f5922,2px_3px_20px_#000000] bg-[#fffef0]' >
          <div className='p-4 text-sm text-black text-center'>
            <Routes>
              <Route path="/" element={<Home />} key={"home"} />
              <Route path="/pirates" element={<PiratesList />} key={"pirates"} />
              {
                games.map(game => <Route path={`/rules/${game.name}`} element={game.rulesPage} key={"rules" + game.name} />)
              }
              <Route path="/vote" element={<Vote />} key={"vote"} />
              <Route path="/resultat" element={<Resultat />} key={"resultat"} />
            </Routes>
          </div>
        </div>
      </div>

      <svg className="hidden">
        <filter id="wavy2">
          <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" />
        </filter>
      </svg>
    </div>
  )
}

export default App
