import { ReactElement } from 'react'
import './rules.css'
const Regles = ({ children }: { children: ReactElement }) => {
    return (
        <div className="flex flex-col gap-y-4  items-center">
            <h2>Règles</h2>

            <div className='text-lg flex flex-col gap-y-4 '>
                {children}
            </div>
        </div>
    )
}

export default Regles
