const BlindTest = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">

        <h2>📜 Blind Test 📜</h2>

        <div>
          Ahoy, moussaillons ! Préparez-vous pour un défi musical où chaque pirate joue pour lui-même. Il y aura 16 écoutes au total, et seul le pirate le plus rusé saura prendre tout l'or du trésor !
        </div>
        <h3>
          🎶Musique des Flibustiers🎶
        </h3>
        <ul className="list-disc list-inside px-4 flex flex-col gap-y-1">
          <li>
            8 morceaux de musique seront joués.
          </li>
          <ul className="list-disc list-inside pl-4">
            <li>
              1 pièce d’or sera attribuée au pirate qui devine le chanteur de la chanson. 🎤
            </li>
            <li>
              1 pièce d’or supplémentaire pour le pirate qui devine le titre exact de la musique. 🎶
            </li>
          </ul>
        </ul>

        <h3>
          🎬 Film des Corsaires🎬
        </h3>
        <ul className="list-disc list-inside px-4 flex flex-col gap-y-1">
          <li>
            8 bandes sonores de films célèbres seront jouées.
          </li>
          <ul className="list-disc list-inside pl-4">
            <li>
              1 pièce d’or sera attribuée au pirate qui devine correctement le titre du film. 🎥
            </li>
            <li>
              1 pièce d’or supplémentaire pour celui qui peut nommer l’acteur principal ou le réalisateur du film. 🎬
            </li>
          </ul>
        </ul>
        Cout de la participation au jeu : 1💰
      </div>
    </>
  )
}

export default BlindTest
