import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IGames } from "../types/IGame";

const Dropdown = ({ games }:{games: IGames}) => {

    // État pour gérer l'ouverture du dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState<Boolean>(false)
    const dropdownRef = useRef<HTMLUListElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    // Fonction pour basculer l'état du dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    // Gestion du clic extérieur pour fermer le dropdown
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // Si le clic est en dehors du dropdown et du bouton, fermer le dropdown
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target)
                && buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false)
            }
        }    // Ajouter un écouteur d'événements pour le clic
        document.addEventListener('click', handleClickOutside)

        // Nettoyage de l'écouteur d'événements lors de la destruction du composant
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, []) // L'effet est exécuté une seule fois, lors du montage du composant


    return (
        <>
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="flex items-center buttonLink gap-2"
            >
                Règles des jeux
            </button>
            {/* Menu déroulant */}
            {isDropdownOpen && (
                <ul className="absolute bg-white border border-gray-200 w-full sm:w-48 shadow-lg" ref={dropdownRef}>
                    {
                        games.map(game => (
                            <Link to={`/rules/${game.name}`} className="block py-2 px-4" onClick={() => setIsDropdownOpen(false)} key={game.name}>
                                {game.name}
                            </Link>
                        ),
                        )
                    }
                </ul>
            )}
        </>
    )

}

export default Dropdown;