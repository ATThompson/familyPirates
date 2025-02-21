import { Route, Routes } from "react-router-dom";
import { IGames } from "../types/IGame";
import Home from "../pages/Home";
import PiratesList from "../pages/PiratesList";
import Vote from "../pages/Vote";
import Resultat from "../pages/Resultat";
import Admin from "../pages/Admin";

const Router = ({ games }: { games: IGames }) => {

    return (
        <div className="h-fit px-[10%] py-4 bg-white">
            {/* Ajouter filter-wavy */}
            <div className='h-fit  bg-[#fffef0] shadowParchement' >
                <div className='p-4 text-sm text-black text-center'>
                    <Routes>
                        <Route path="/" element={<Home />} key={"home"} />
                        <Route path="/pirates" element={<PiratesList />} key={"pirates"} />
                        {
                            games.map(game => <Route path={`/rules/${game.name}`} element={game.rulesPage} key={"rules" + game.name} />)
                        }
                        <Route path="/admin"  >
                            <Route index element={<Admin />} key={"admin"} />
                            <Route path="vote" element={<Vote />} key={"vote"} />
                            <Route path="resultat" element={<Resultat />} key={"resultat"} />
                        </Route>
                        <Route path="*" element={<Home />} key={"home"} />
                    </Routes>
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
};

export default Router;