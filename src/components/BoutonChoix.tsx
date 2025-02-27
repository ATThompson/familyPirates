import { useState } from "react";

const BoutonChoix = ({ texte, items, setChoix }: {
    texte: string;
    items: string[];
    setChoix: (choix: string) => void;
}) => {
    const [itemsToUpdate, setItemsToUpdate] = useState<string[]>(items);

    const handleClick = () => {
        const chosenItem = itemsToUpdate[Math.floor(Math.random() * itemsToUpdate.length)];
        setChoix(chosenItem);
        setItemsToUpdate(itemsToUpdate.filter(item => item !== chosenItem));
    };

    const isDisabled = itemsToUpdate.length <= 0;
    const buttonClass = `p-2 rounded-lg w-full h-10 ${isDisabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-[#a40101] text-white'
        }`;

    return (
        <button onClick={handleClick} className={buttonClass} disabled={isDisabled}>
            {texte} {`(Reste ${itemsToUpdate.length})`}
        </button>
    );
};

export default BoutonChoix;
