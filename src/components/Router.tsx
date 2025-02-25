import { Route, Routes } from 'react-router-dom'
import { IGames } from '../types/IGame'
import Home from '../pages/Home'
import PiratesList from '../pages/PiratesList'
import Vote from '../pages/Vote'
import Resultat from '../pages/Resultat'
import Admin from '../pages/Admin'

const Router = ({ games }: { games: IGames }) => {
  return (
    <div className="h-fit p-4 parent">
      {/* Ajouter filter-wavy */}
      <div className="h-fit">
        <div className="text-sm text-black text-center">
          <Routes>
            <Route path="/" element={<Home />} key="home" />
            <Route path="/pirates" element={<PiratesList />} key="pirates" />
            {
              games.map(game => <Route path={`/rules/${game.name}`} element={game.rulesPage} key={'rules' + game.name} />)
            }
            <Route path="/admin">
              <Route index element={<Admin />} key="admin" />
              <Route path="vote" element={<Vote />} key="vote" />
              <Route path="resultat" element={<Resultat />} key="resultat" />
            </Route>
            <Route path="*" element={<Home />} key="home" />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router
