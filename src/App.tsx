import Home from './pages/Home'
import GamesList from './pages/GamesList'
import { useEffect } from 'react'
import { IGames } from './types/IGame'
import Router from './components/Router'
import Navbar from './components/Navbar'
import Header from './components/Header'

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
      <Header />
      <Navbar games={games} />
      <Router games={games} />
    </div>
  )
}

export default App
