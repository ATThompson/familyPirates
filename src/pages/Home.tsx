import { useState } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const content = [
    "Ahoy, moussaillons ! Samedi, vous embarquerez pour une journée pleine d’aventures et de défis ! Chaque pirate commencera le voyage avec 6💰, mais attention… les richesses peuvent vite fondre comme un navire en pleine tempête !",
    "🎲 Des jeux vous attendent 🎲",
    "Mais chaque participation vous coûtera quelques pièces… Saurez-vous en gagner plus que vous n’en perdez ? Retrouvez les détails des épreuves dans la section “Règles des jeux” !",
    "🎭 Concours de déguisement 🎭",
    "Avant de lever l’ancre pour l'apéritif, tous les pirates devront voter pour le plus beau déguisement. Le marin d'eau douce le plus impressionnant remportera 2💰!",
    "🏴‍☠️ Chasse au trésor 🏴‍☠️",
    <div><button onClick={() => setShowPopup(true)} className="underline decoration-[#a40101]">Le premier indice </button> est dissimulé dans cette page… À vous de le dénicher pour mettre la main sur le fabuleux butin!🔍</div>,
    "🎁 Des trésors mystérieux! 🎁",
    "Pour 2💰 vous recevrez une enveloppe renfermant un lot, une malédiction… ou rien du tout. Oserez-vous tenter votre chance ?",
    "🤑 La grande enchère finale 🤑",
    "Cela marquera la fin de ce grand jeu ! Avec les 💰 qu’il vous restera, vous pourrez enchérir et remporter de précieux trésors ! Serez-vous le pirate le plus rusé ou le plus démuni ?",
    "Que la piraterie commence, et que le meilleur moussaillon l’emporte ! 🦜💀"
  ];

  return (
    <>
      {showPopup && (
        <div className="fixed top-0 right-0 left-0 w-full h-full z-40 flex items-center justify-center">
          {/* Fond noir semi-transparent */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Contenu du popup (sans opacité) */}
          <div className="relative z-50 bg-white p-4 lg:max-w-52 rounded-lg flex flex-col gap-y-2">
            <h2>🎉 Indice 🎉</h2>
            <p>Un lieu caché, mais pourtant banal.</p>
            <p>Quand la mer est agitée, on y fait escale.🤮</p>
            <p>Cherche où les souvenirs sont gardés avec égard… 📸</p>
            <br />
            <p> PS : Aucun placard ni armoire n'a besoin d'être ouvert pour résoudre cette chase au trésor.</p>
            <button onClick={() => setShowPopup(false)} className="text-[#a40101]">Fermer l'indice</button>
          </div>
        </div >
      )}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-4">

          <h2>Bienvenue à bord!</h2>
          {content.map((text, index) => (
            <div key={index} className="text-lg">{text}</div>
          ))}
        </div>
        <div className="w-[65%] pt-4">
          <img className="cachet" src="https://i.postimg.cc/4NBYNqCR/22.png" />
        </div>
        <p className="ml-auto signature">Capitaine Antoine "Barbe Rousse" Thompson</p>
      </div>
    </>
  );
};

export default Home;