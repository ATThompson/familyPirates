import Regles from "../../components/Regles"

const Osselets = () => {
  return (
    <Regles title="Osselets">
      <>
        <div>
          Ahoy moussaillons ! Aujourd’hui, vous allez prouver votre agilité au Capitaine en jouant aux osselets. Et ainsi pouvoir remporter son trésor.
        </div>
        <h3>Premier défi</h3>
        <ul className="ulRules">
          <li>
            Prenez-en un et lancez-le en l’air.
          </li>
          <li>
            Avant qu’il ne retombe, ramassez un autre osselet, puis attrapez celui en l’air.
          </li>
          <li>
            Répétez jusqu’à ce que vous ayez tout récupéré un par un.
          </li>
        </ul>
        <h3>Second défi</h3>
        <ul className="ulRules">
          <li>
            Même principe, mais cette fois, ramassez les osselets deux par deux.
          </li>
        </ul>
        <h3>Troisième défi</h3>
        <ul className="ulRules">
          <li>
            Ramassez les osselets en groupes de trois, puis le dernier tout seul.
          </li>
        </ul>
        <h3>Ultime défi</h3>
        <ul className="ulRules">
          <li>
            Ramassez les quatres ossselets en une seule fois.
          </li>
        </ul>
        <h3>🏆 Gloire 🏆</h3>
        <ul className="ulRules">
          <li>
            Le moussaillon qui participe à le droit un tour d'entraînement avant de commencer le jeu.
          </li>
          <li>
            Le pirate qui réussit toutes les épreuves sans faute gagne la moitié du trésor du Capitaine!
          </li>
          <li>
            Le trésor ne contiendra jamais moins de 6💰.
          </li>
          <li>
            Le Capitaine renflouera avec sa cagnotte personnelle, si besoin.
          </li>
          <li>
            Si le trésor contient un nombre impair de pièces, le pirate gagne la moitié supérieur du trésor.
          </li>
        </ul>
      </>
    </Regles>)
}

export default Osselets
