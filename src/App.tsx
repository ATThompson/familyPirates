import { IGames } from './types/IGame'
import Router from './components/Router'
import Header from './components/Header'
import BlindTest from './pages/rules/BlindTest'
import Enigmes from './pages/rules/Enigmes'
import MimeChaine from './pages/rules/MimeChaine'
import MotSecret from './pages/rules/MotSecret'
import Osselets from './pages/rules/Osselets'
import OuiNon from './pages/rules/OuiNon'
import Parchment from './components/Parchment'

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
    <div className="flex flex-col min-h-dvh bg-[url(../public/bg.jpg)] bg-fixed bg-cover px-[4%] gap-4">
      <Parchment>
        <Header games={games} />
      </Parchment>
      <Parchment>
        <Router games={games} />
      </Parchment>
    </div>
  )
}

export default App
