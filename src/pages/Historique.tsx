import { useEffect, useState } from "react";

const Historique = () => {

    const [data, setData] = useState<string[]>([])

    useEffect(() => {
        fetch('/api/historique')
            .then(response => response.json())
            .then(setData)
    }, []);

    return (
        <div className="font-serif">
            {
                data.slice().reverse().map((historique, index) => <div key={index}>{historique}</div>)
            }
        </div>
    )

}

export default Historique;