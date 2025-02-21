import { Route, Routes } from "react-router-dom";
import { IGames } from "../types/IGame";
import Home from "../pages/Home";
import PiratesList from "../pages/PiratesList";
import Vote from "../pages/Vote";
import Resultat from "../pages/Resultat";

const Router = ({ games }: { games: IGames }) => {

    return (
        <div className="h-fit px-[10%] py-4 bg-white">
            {/* Ajouter filter-wavy */}
            <div className='h-fit shadow-[inset_0px_0px_125px_#8f5922,2px_3px_20px_#000000] bg-[#fffef0]' >
                <div className='p-4 text-sm text-black text-center'>
                    <Routes>
                        <Route path="/" element={<Home />} key={"home"} />
                        <Route path="/pirates" element={<PiratesList />} key={"pirates"} />
                        {
                            games.map(game => <Route path={`/rules/${game.name}`} element={game.rulesPage} key={"rules" + game.name} />)
                        }
                        <Route path="/vote" element={<Vote />} key={"vote"} />
                        <Route path="/resultat" element={<Resultat />} key={"resultat"} />
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