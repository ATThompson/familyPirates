import { useEffect, useState } from "react";

const PiratesList = () => {


  const [joueurs, setJoueurs] = useState<{
    id: number,
    nom: string,
    piecesOr: number
  }[]>([]);

  useEffect(() => {
    console.log('Fetching data from the API...')
    getJoueursSorted();
  }, [])

    const getJoueursSorted = () => {
      fetch('/api/joueurs/sorted')
      .then(response => response.json())
      .then(data => setJoueurs(data))
      .catch((error) => console.error('Error:', error));
    }
    const modifierNbPieces = (e:any,id: number, value: number) => {
      e.preventDefault();
      console.log('Ajouter une pièce pour le joueur avec l\'id', id);
      fetch('/api/joueurs/'+id,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          value
        })
      })
      .then(response => response.json())
      .then(data => setJoueurs(data))
      .catch((error) => console.error('Error:', error));
    }
    return (
    <>
    <h1>🏴‍☠️ Liste des Pirates</h1>
    <div >
      {joueurs.map(joueur => (
        <div key={joueur.id} className="grid grid-cols-3 self-center">
          <div>
            {joueur.nom}
          </div>
          <div className="self-center">
{joueur.piecesOr} pièces d'or 
            </div>
          <div className="self-center">

          <button onClick={(e)=>modifierNbPieces(e,joueur.id, 1)}>✚💰</button>
          <button onClick={(e)=>modifierNbPieces(e,joueur.id, -1)}>−💰</button>
           </div> 
        
        </div>
      ))}
    </div>
    <button onClick={getJoueursSorted}>Actualiser classement</button>
    </>
    );
  };
  
  export default PiratesList;
  