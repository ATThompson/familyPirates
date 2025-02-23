import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
const PiratesList = () => {

  const [joueurs, setJoueurs] = useState<{
    id: number,
    nom: string,
    piecesOr: number
  }[]>([]);

  useEffect(() => {
    getJoueursSorted();
  }, [])

  const getJoueursSorted = () => {
    fetch('/api/joueurs/sorted')
      .then(response => response.json())
      .then(data => setJoueurs(data))
      .catch((error) => console.error('Error:', error));
  }

  const modifierNbPieces = (e: any, id: number, value: number) => {
    e.preventDefault();
    fetch('/api/joueurs/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value
      })
    })
      .then(response => {
        if (!response.ok) {
          // Récupérer le message d'erreur depuis le corps de la réponse
          return response.json().then(errorData => {
            toast.error(errorData.message, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            });

            throw new Error(`Erreur HTTP ${response.status}: ${errorData.message || 'Message d\'erreur inconnu'}`);
          });
        }
        return response.json(); // Réponse réussie
      })
      .then(data => setJoueurs(data))
      .catch((error) => console.error('Error:', error));
  }
  return (
    <>
      <h1>🏴‍☠️ Liste des Pirates</h1>
      <ToastContainer limit={1} />
      <div className="text-xl flex flex-col gap-y-2">
        {joueurs.map(joueur => (
          <div key={joueur.id} className="flex">
            <div className="flex w-full gap-0.5">
              <div className="flex self-center w-fit">
                  {joueur.piecesOr}<span>💰</span>
              </div>
              {/* Nom du joueur qui peut s'étendre */}
              <div className="flex-grow mx-auto ">{joueur.nom}</div>
              <div className="flex ml-auto self-center">
                <button onClick={(e) => modifierNbPieces(e, joueur.id, -1)}>➖</button>
                💰
                <button onClick={(e) => modifierNbPieces(e, joueur.id, 1)}>✚</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex gap-4 mx-auto">
        <button onClick={(e) => modifierNbPieces(e, 1)}>✚💰</button>
        <button onClick={(e) => modifierNbPieces(e, -1)}>−💰</button>
        <button onClick={(e) => modifierNbPieces(e, -4)}>✉️</button>
      </div> */}
      <button onClick={getJoueursSorted}>Actualiser classement</button>
    </>
  );
};

export default PiratesList;
