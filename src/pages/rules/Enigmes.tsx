const Enigmes = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>📜 Règles 📜</h2>
      <div>
        Ahoy, pirates ! Préparez-vous à défier vos esprits avec des énigmes.
      </div>
      <h3>
        🏺 Le Pot des Énigmes 🏺
      </h3>
      <ul className="list-disc list-inside px-4 flex flex-col gap-y-1">
        <li>
          Un pot est rempli d'énigmes, prêtes à être dévoilées à ceux assez audacieux pour y plonger.
        </li>
        <li>
          Pour prendre une énigme, le pirate doit déposer une pièce d’or dans le pot. 💰
        </li>
        <ul className="list-disc list-inside pl-4">
          <li>
            Une seule réponse est autorisée. Si le pirate donne la bonne réponse, il remporte une pièce d’or en récompense.
          </li>
          <li>
            Si le pirate donne la mauvaise réponse, il perd une pièce d’or. 🏴‍☠️
          </li>
        </ul>

      </ul>
      Cout de la participation 1💰par enigme.
    </div>
  )
}

export default Enigmes
