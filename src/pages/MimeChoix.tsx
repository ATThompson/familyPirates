import { useState } from "react"
import BoutonChoix from "../components/BoutonChoix"

const MimeChoix = () => {
    const [choix, setChoix] = useState<string>("Pierre qui roule n'ammasse pas mousse");
    const listExpressions = ["Expression", "Expression1", "Expression2", "Expression3"];
    const listFilms = ["Film", "Film1", "Film2"];
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