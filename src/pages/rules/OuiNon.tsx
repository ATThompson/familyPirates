import Regles from "../../components/Regles"

const OuiNon = () => {
  return (
    <Regles title="Ni Oui Ni Non">
      <>
        <div>
          Ahoy, pirates! Préparez-vous à défier votre langue et votre esprit dans un jeu où le mot "Oui" et "Non" sont bannis.
        </div>
        <ul className="ulRules">
          <li>
            Chaque pirate commence avec 2 ancres en poche. ⚓
          </li>
          <li>
            L'objectif est de tenir une conversation sans dire les mots "Oui" ou "Non".
          </li>
          <li>
            Chaque fois qu'un pirate dit l'un de ces mots, l'autre pirate qui remarque cela prend une ancre. 👀
          </li>
          <li>
            Même si un pirate n'a plus d'ancres, il peut continuer à jouer et tenter de ne pas se laisser piéger. L'esprit pirate est incorrigible!
          </li>

        </ul>
        <h3>
          ⏳ Durée du Jeu ⏳
        </h3>
        <ul className="ulRules">
          <li>
            Le jeu dure 15 minutes.
          </li>
          <li>
            À la fin de ce temps, les pirates ayant accumulé le plus d’épingles seront les vainqueurs et remporteront tout l'or des autres joueurs.💰
          </li>
        </ul>

        <h3>
          ⚔️ Les Gagnants ⚔️
        </h3>
        <ul className="ulRules">
          <li>
            Seuls les pirates classés dans la moitié supérieure du classement seront déclarés gagnants.
          </li>
          <ul className="list-disc list-inside pl-4">
            <li>
              Par exemple, si le classement comprend 7 pirates, les 3 premiers seront les gagnants.
            </li>
            <li>
              Si le classement comprend 12 pirates, les 6 premiers seront les gagnants.
            </li>
            <li>
              L'arrondi se fait toujours à l'entier inférieur pour déterminer qui fait partie de la moitié supérieure.
            </li>
          </ul>
          <li>
            Les vainqueurs se partageront l’or des autres pirates, et les autres devront se contenter de la mer! 💎
          </li>
        </ul>
      </>
    </Regles>
  )
}

export default OuiNon
