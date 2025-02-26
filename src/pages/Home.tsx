const Home = () => {
  const content = [
    "Ahoy, moussaillons ! Aujourd’hui, vous embarquez pour une journée pleine d’aventures et de défis ! Chaque pirate commencera le voyage avec 6💰, mais attention… les richesses peuvent vite fondre comme un navire en pleine tempête !",
    "🎲 Des jeux vous attendent, mais chaque participation vous coûtera quelques pièces… Saurez-vous en gagner plus que vous n’en perdez ? Retrouvez les détails des épreuves dans la section “Règles des jeux” !",
    "🍹 Concours de déguisement à l’apéritif ! Avant de lever l’ancre, tous les pirates devront voter pour le plus beau déguisement. Le flibustier le plus impressionnant remportera 2💰!",
    "🏴‍☠️ Une chasse au trésor est lancée dans la maison ! Un indice crucial est dissimulé dans cette page… À vous de le dénicher pour mettre la main sur le fabuleux butin !",
    "🎁Les trésors mystérieux sont à vendre ! Pour 2💰 vous recevrez une enveloppe renfermant un lot, une malédiction… ou rien du tout. Oserez-vous tenter votre chance ?",
    "⚓ La grande enchère finale marquera la fin de ce grand jeu ! Avec les pièces qu’il vous reste, vous pourrez remporter de précieux trésors ! Serez-vous le pirate le plus rusé ou le plus démuni ?",
    "Que la piraterie commence, et que le meilleur moussaillon l’emporte ! 🦜💀"
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-y-4">
        <h2>Bienvenue à bord!⚔️</h2>
        {content.map((text, index) => (
          <div key={index} className="text-base">{text}</div>
        ))}
      </div>
      <div className="w-[65%] pt-4">
        <img className="cachet" src="https://i.postimg.cc/4NBYNqCR/22.png"/>
      </div>
      <p className="ml-auto signature">Capitaine Antoine "Barbe Rousse" Thompson</p>
    </div>
  );
};

export default Home;