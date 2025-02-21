import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import PiratesList from './pages/PiratesList'
import GamesList from './pages/GamesList'
import { useEffect, useRef, useState } from 'react'
import Vote from './pages/Vote'
import Resultat from './pages/Resultat'

function App() {
  
  
  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []) 

    
  // État pour gérer l'ouverture du dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<any>(null)



  const buttonRef = useRef<any>(null)
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
    const handleClickOutside = (event:any) => {
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

      <div className="h-fit px-[10%] py-4 bg-white">
        {/* Ajouter filter-wavy */}
        <div className='h-fit shadow-[inset_0px_0px_125px_#8f5922,2px_3px_20px_#000000] bg-[#fffef0]' >
          <div className='p-4 text-sm text-black text-center'>
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
