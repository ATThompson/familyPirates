import Home from './pages/Home'
import GamesList from './pages/GamesList'
import { IGames } from './types/IGame'
import Router from './components/Router'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { useState } from 'react'

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

 const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <Navbar games={games} />
      <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox">I agree to Terms of Service </label>
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
      <Router games={games} />
    </div>
  )
}

export default App
