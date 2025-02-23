import Home from './pages/Home'
import GamesList from './pages/GamesList'
import { IGames } from './types/IGame'
import Router from './components/Router'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {

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
