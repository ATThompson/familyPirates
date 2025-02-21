import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import PiratesList from './pages/PiratesList'
import GamesList from './pages/GamesList'
import { useEffect, useRef, useState } from 'react'
import Vote from './pages/Vote'
import Resultat from './pages/Resultat'

function App() {
  // État pour gérer l'ouverture du dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const buttonRef = useRef(null)
  // Fonction pour basculer l'état du dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const games = [
    {
      name: 'uno',
      rulesPage: <Home />,
    },
    {
      name: 'poker',
      rulesPage: <GamesList />,
    },
  ]
  // Gestion du clic extérieur pour fermer le dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si le clic est en dehors du dropdown et du bouton, fermer le dropdown
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target)
        && buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false)
      }
    }

    // Ajouter un écouteur d'événements pour le clic
    document.addEventListener('click', handleClickOutside)

    // Nettoyage de l'écouteur d'événements lors de la destruction du composant
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, []) // L'effet est exécuté une seule fois, lors du montage du composant

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
              <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="flex items-center buttonLink gap-2"
              >
                Règles des jeux
              </button>
              {/* Menu déroulant */}
              {isDropdownOpen && (
                <ul className="absolute bg-white border border-gray-200 w-full sm:w-48 shadow-lg" ref={dropdownRef}>
                  {
                    games.map(game => (
                      <Link to={`/rules/${game.name}`} className="block py-2 px-4" onClick={() => setIsDropdownOpen(false)}>
                        {game.name}
                      </Link>
                    ),
                    )
                  }
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-red-600 h-full p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pirates" element={<PiratesList />} />
          <Route path="/rules" element={<GamesList />} />
          {
            games.map(game => <Route path={`/rules/${game.name}`} element={game.rulesPage} />)
          }
          <Route path="/vote" element={<Vote />} />
          <Route path="/resultat" element={<Resultat />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
