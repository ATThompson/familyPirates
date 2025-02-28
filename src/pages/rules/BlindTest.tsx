import Regles from '../../components/Regles'
const BlindTest = () => {
  return (
    <Regles title="Blind Test">
      <>
        <div>
          Ahoy, moussaillons! Préparez-vous pour un défi musical où chaque pirate joue pour lui-même. Il y aura 16 écoutes au total, et seul le pirate le plus rusé saura prendre tout l'or du trésor!
        </div>
        <h3>
          🎶 Musique des Forbans 🎶
        </h3>
        <ul className="ulRules">
          <li>
            8 morceaux de musique seront joués.
          </li>
          <ul className="list-disc list-inside pl-4">
            <li>
              1💰 sera attribuée au pirate qui devine le chanteur de la chanson.
            </li>
            <li>
              1💰 supplémentaire pour le pirate qui devine le titre exact de la musique.
            </li>
          </ul>
        </ul>

        <h3>
          🎬 7ème art des Corsaires 🎬
        </h3>
        <ul className="ulRules">
          <li>
            8 bandes sonores de films célèbres seront jouées.
          </li>
          <ul className="list-disc list-inside pl-4 text-wrap">
            <li>
              1💰 sera attribuée au pirate qui devine correctement le titre du film.
            </li>
            <li>
              1💰 supplémentaire pour celui qui peut nommer l’acteur principal ou le réalisateur du film. 🎬
            </li>
          </ul>
        </ul>
      </>
    </Regles >
  )
}

export default BlindTest
