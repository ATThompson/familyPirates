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
      <ToastContainer limit={1}/>
      <div >
        {joueurs.map(joueur => (
          <div key={joueur.id} className="grid grid-cols-5 self-center">
            <div className="col-span-3 flex gap-1">
              <div>
                {joueur.piecesOr}💰
              </div>
              {joueur.nom}
            </div>
            <div className="flex col-span-2 gap-4 mx-auto">
              <button onClick={(e) => modifierNbPieces(e, joueur.id, 1)}>✚💰</button>
              <button onClick={(e) => modifierNbPieces(e, joueur.id, -1)}>−💰</button>
              <button onClick={(e) => modifierNbPieces(e, joueur.id, -4)}>✉️</button>
            </div>

          </div>
        ))}
      </div>
      <button onClick={getJoueursSorted}>Actualiser classement</button>
    </>
  );
};

export default PiratesList;
