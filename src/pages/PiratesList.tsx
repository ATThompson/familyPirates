import { useEffect, useState } from 'react'

import { ToastOptions, toast } from 'react-toastify'
const PiratesList = () => {
  const [joueurs, setJoueurs] = useState<{
    id: number
    nom: string
    piecesOr: number
  }[]>([])

  useEffect(() => {
    getJoueursSorted()
  }, [])

  const getJoueursSorted = () => {
    fetch('/api/joueurs/sorted')
      .then(response => response.json())
      .then(data => setJoueurs(data))
      .catch(error => console.error('Error:', error))
  }
  const modifierNbPieces = async (e: React.MouseEvent<HTMLButtonElement>, id: number, value: number) => {
    e.preventDefault()
    toast.dismiss()
    const toastParam: ToastOptions = {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    }

    try {
      const response = await fetch(`/api/joueurs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        toast.error(errorData.message, toastParam)
        throw new Error(`Erreur HTTP ${response.status}: ${errorData.message || 'Message d\'erreur inconnu'}`)
      }

      const data = await response.json()
      const joueur = joueurs.find(joueur => joueur.id === id)
      const joueurNom = joueur ? joueur.nom : 'Joueur inconnu'

      if (value > 0) {
        toast.success(`1💰 ajouté pour ${joueurNom}`, toastParam)
      }
      else {
        toast.warning(`1💰 supprimé pour ${joueurNom}`, toastParam)
      }

      setJoueurs(data)
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <h2 className="pb-6 mx-auto">Liste des Pirates</h2>

      <div className="text-lg flex flex-col gap-y-2">

        {joueurs.map(joueur => (
          <div key={joueur.id} className="flex">
            <div className="flex w-full gap-0.5">
              <div className="flex self-center w-fit">
                {joueur.piecesOr}
                <span>💰</span>
              </div>
              {/* Nom du joueur qui peut s'étendre */}
              <div className="flex-grow mx-auto ">{joueur.nom}</div>
              <div className="flex ml-auto self-center">
                <button onClick={e => modifierNbPieces(e, joueur.id, -1)}>➖</button>
                💰
                <button onClick={e => modifierNbPieces(e, joueur.id, 1)}>✚</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex pt-4 text-xl">
        <button className="ml-auto" onClick={getJoueursSorted}>🔄️ Actualiser classement</button>
      </div>
    </>
  )
}

export default PiratesList
