import { useState } from "react"
import BoutonChoix from "../components/BoutonChoix"

const MimeChoix = () => {
    const [choix, setChoix] = useState<string>("Pierre qui roule n'ammasse pas mousse");
    const listFilms = ["Star wars", "Fast and Furious", "Harry potter", "La soupe aux choux", "Astérix & Obélix", "E.T", "Titanic", "Ratatouille", "Jurassic park"];
    const listExpressions = ["L'habit ne fait pas le moine", "Les murs ont des oreilles", "Hisser la grande voile", "C'est pas la mer à boire", "Donner un coup de pouce", "Brasser du vent", "Se creuser la tête", "Etre bête comme ses pieds", "Vouloir le beurre et l'argent du beurre"];
    const isChoixFilm = listFilms.includes(choix);
    return (
        <div>
            <div className="flex justify-center gap-4">
                <BoutonChoix texte="Expression" items={listExpressions} setChoix={setChoix} />
                <BoutonChoix texte="Film" items={listFilms} setChoix={setChoix} />
            </div>
            <div className="p-6 flex flex-col items-center gap-y-3 text-2xl">
                <p>Vous avez choisi {isChoixFilm ? "un Film" : "une Expression"}</p>
                <p className="p-3 border-2 text-5xl ">{choix}</p>
            </div>
        </div>
    )
}

export default MimeChoix