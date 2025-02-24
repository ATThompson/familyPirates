const MimeChaine = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>📜 Règles 📜</h2>
      <div>
        Ahoy, pirates ! Préparez vous à devenir de vrais Johnny Depp.
      </div>
      <h3>
        ☠️Le Mime à la chaîne des Pirates Perdus☠️
      </h3>
      <ul className="list-disc list-inside px-4 flex flex-col gap-y-1">
        <li>
          Les équipages sont tirés au sort à chaque nouvelle partie, pour que chaque flibustier ait sa chance de naviguer aux côtés d'autres forbans. 🎲
        </li>
        <li>
          Les pirates se rangent en file, et le premier de l'équipage reçoit un mot secret qu'il garde bien caché dans les profondeurs de son cœur. 🤫
        </li>
        <li>
          Avant de commencer à mimer, l'équipage doit décider entre un titre de film ou une expression à mimer pour la manche. 🎬💬
        </li>
        <li>
          Le premier pirate mime le mot secret sans un bruit, en utilisant juste ses gestes et son corps pour guider son camarade à la bonne réponse. 🚫🗣️
        </li>
        <li>
          Le pirate suivant observe, analyse, et doit reproduire le mime à son tour sans prononcer un mot. Cela continue ainsi de pirate en pirate jusqu'au dernier membre de l'équipage. 🔄
        </li>
        <li>
          Le dernier pirate doit alors deviner le mot secret. 🎯
        </li>
        <ul className="list-disc list-inside pl-4">
          <li>
            S'il trouve le bon mot, l'équipage gagne un point de gloire ! ✅
          </li>
          <li>
            S'il se trompe, une houle de rires secoue les voiles du navire et le jeu continue avec un nouveau mot. 😂
          </li>
        </ul>
        <li>
          ⚓ Une partie se joue au meilleur des trois manches, et l'équipage qui remporte au moins deux manches est couronné vainqueur de la traversée !
        </li>
        <li>
          🏆 L'équipage gagnant embarque tout l'or des pirates vaincus, s'emparant des pièces d'or des perdants comme un véritable flibustier ! 💰
        </li>
      </ul>
      Cout de la participation pour une partie 1💰.
    </div>
  )
}

export default MimeChaine
