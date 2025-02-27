import Regles from "../../components/Regles"

const Enigmes = () => {
  return (
    <Regles>
      <>
        <div>
          Ahoy, pirates! Préparez-vous à défier vos esprits avec des énigmes.
        </div>
        <h3>
          🏺 Le Pot des Énigmes 🏺
        </h3>
        <ul className="ulRules">
          <li>
            Un pot est rempli d'énigmes, prêtes à être dévoilées à ceux assez audacieux pour y plonger.
          </li>
          <li>
            Pour prendre une énigme, le pirate doit déposer 1💰 dans le pot.
          </li>
          <ul className="list-disc list-inside pl-4">
            <li>
              Une seule réponse est autorisée. Si le pirate donne la bonne réponse, il remporte sa mise plus 1💰 supplémentaire.
            </li>
            <li>
              Si le pirate donne la mauvaise réponse, il perd une pièce d’or. 🏴‍☠️
            </li>
          </ul>

        </ul>
        Cout de la participation 1💰par enigme.
      </>
    </Regles>
  )
}

export default Enigmes
