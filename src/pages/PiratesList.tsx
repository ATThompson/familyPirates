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

  const modifierNbPieces = (e: any, value: number) => {
    e.preventDefault();
    fetch('/api/joueurs/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ids: joueursChecked,
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

  const [joueursChecked, setJoueursChecked] = useState<number[]>([]);

  const handleOnChangeCheckbox = (e: any, id: number) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      setJoueursChecked([...joueursChecked, id]);
    } else {
      setJoueursChecked(joueursChecked.filter(joueurId => joueurId !== id));
    }
  }

  console.log(joueursChecked);
  return (
    <>
      <h1>🏴‍☠️ Liste des Pirates</h1>
      <ToastContainer limit={1} />
      <div className="text-xl">
        {joueurs.map(joueur => (
          <div key={joueur.id} className="flex">
            <div className="flex w-full gap-1">
              <div>
                {joueur.piecesOr}💰
              </div>
              {joueur.nom}
            </div>
              <input
                type="checkbox"
                checked={joueursChecked.includes(joueur.id)}
                onChange={(e) => handleOnChangeCheckbox(e, joueur.id)}
                className="w-8 h-8 self-center"
              />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mx-auto">
        <button onClick={(e) => modifierNbPieces(e, 1)}>✚💰</button>
        <button onClick={(e) => modifierNbPieces(e, -1)}>−💰</button>
        <button onClick={(e) => modifierNbPieces(e, -4)}>✉️</button>
      </div>
      <button onClick={getJoueursSorted}>Actualiser classement</button>
    </>
  );
};

export default PiratesList;
