import Regles from "../../components/Regles"

const Enigmes = () => {
  return (
    <Regles title="Le Pot des Énigmes">
      <>
        <div>
          Ahoy, pirates! Préparez-vous à défier vos esprits avec des énigmes.
        </div>
        <ul className="ulRules">
          <li>
            Un pot est rempli d'énigmes, prêtes à être dévoilées à ceux assez audacieux pour y plonger.
          </li>
          <li>
            Pour prendre une énigme, le pirate doit déposer 1💰 dans le pot.
          </li>
          <ul className="list-disc list-inside pl-4">
            <li>
              Une seule réponse est autorisée.
            </li>
            <li>
              Si le pirate donne la bonne réponse, il remporte 2💰.
            </li>
            <li>
              Si le pirate donne la mauvaise réponse, il a perdu. 🏴‍☠️
            </li>
          </ul>

        </ul>
        Cout de la participation 1💰par enigme.
      </>
    </Regles>
  )
}

export default Enigmes
