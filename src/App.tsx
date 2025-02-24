import { IGames } from './types/IGame'
import Router from './components/Router'
import Navbar from './components/Navbar'
import Header from './components/Header'
import BlindTest from './pages/rules/BlindTest'
import Enigmes from './pages/rules/Enigmes'
import MimeChaine from './pages/rules/MimeChaine'
import MotSecret from './pages/rules/MotSecret'
import Osselets from './pages/rules/Osselets'
import OuiNon from './pages/rules/OuiNon'

function App() {
  const games: IGames = [
    {
      name: 'BlindTest',
      rulesPage: <BlindTest />,
    },
    {
      name: 'Enigmes',
      rulesPage: <Enigmes />,
    },
    {
      name: 'Mime à la chaine',
      rulesPage: <MimeChaine />,
    },
    {
      name: 'Mot maudit',
      rulesPage: <MotSecret />,
    },
    {
      name: 'Osselets',
      rulesPage: <Osselets />,
    },
    {
      name: 'Ni Oui ni Non',
      rulesPage: <OuiNon />,
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
