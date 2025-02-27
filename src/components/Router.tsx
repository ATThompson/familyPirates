import { Route, Routes } from 'react-router-dom'
import { IGames } from '../types/IGame'
import Home from '../pages/Home'
import PiratesList from '../pages/PiratesList'
import MimeChoix from '../pages/MimeChoix'
const Router = ({ games }: { games: IGames }) => {
  return (
    <div className="h-fit p-4">
      {/* Ajouter filter-wavy */}
      <div className="h-fit">
        <div className="text-sm text-black text-center">
          <Routes>
            <Route path="/" element={<Home />} key="home" />
            <Route path="/pirates" element={<PiratesList />} key="pirates" />
            {
              games.map(game => <Route path={`/rules/${game.name}`} element={game.rulesPage} key={'rules' + game.name} />)
            }
            <Route path='mime' element={<MimeChoix />} key="mime" />
            <Route path="*" element={<Home />} key="home" />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router
