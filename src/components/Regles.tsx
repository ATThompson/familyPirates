import { ReactElement } from 'react'
import './rules.css'
const Regles = ({ title, children }: { title: string, children: ReactElement }) => {
    return (
        <div className="flex flex-col gap-y-4  items-center">
            <h2>{title}</h2>

            <div className='text-lg flex flex-col gap-y-4 lg:w-3xl'>
                {children}
                Cout de la participation au jeu 1💰.
            </div>
        </div>
    )
}

export default Regles
