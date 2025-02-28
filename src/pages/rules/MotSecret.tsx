import Regles from "../../components/Regles"

const MotSecret = () => {
  return (
    <Regles title="Le Mot Maudit">
      <>
        <div>
          Ahoy, pirates! Parlez-vous sans langue de bois.
        </div>
        <ul className="ulRules">
          <li>
            Chaque flibustier reçoit en secret un mot maudit avant de commencer la causerie.
          </li>
          <li>
            Aucun pirate ne doit révéler son mot sous peine d'être jeté aux requins. 🦈
          </li>
          <li>
            Pendant que l'équipage discute, chaque pirate doit glisser son mot maudit dans la conversation sans éveiller les soupçons des autres forbans. Celui qui parle trop franchement risque de finir au bout d'une planche! 🌊
          </li>
          <li>
            Si un autre pirate soupçonne qu'un matelot a prononcé son mot maudit, il doit le crier bien fort devant l'équipage !
          </li>

          <ul className="list-disc list-inside pl-4">
            <li>
              S'il dit vrai, le pirate démasqué doit lui remettre une 💰 tirée de son trésor personnel.
            </li>
            <li>
              S'il se trompe, il ne reçoit rien et devra apprendre à mieux écouter les murmures du vent. 🌬️
            </li>
          </ul>
          <li>
            Si personne ne remarque le mot maudit, le filou qui l'a placé en douce sans être démasqué remporte deux 💰 pour sa ruse. 🏆
          </li>
          <li>
            Le jeu continue jusqu'à ce que tous les forbans aient tenté de placer leur mot maudit dans la conversation.
          </li>
        </ul>
      </>
    </Regles>
  )
}

export default MotSecret
