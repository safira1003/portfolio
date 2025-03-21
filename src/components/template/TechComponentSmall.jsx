import { useEffect, useState } from "react";

import { loadIcon } from "../../utils/iconLoader.js";

export default function TechComponentSmall({ name }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        loadIcon(name).then(setIcon);
    }, [name]);

    return (
        <div
            className={`bg-white py-1 px-3 flex gap-2 items-center justify-center flex-nowrap rounded-full transition-transform duration-300  hover:scale-110 shadow-lg shadow-black/50`}>
            <>
                {icon && <img src={icon} alt={name} className="w-5 h-5" />}
                <p className="text-black text-xs font-medium font-fira-sans ">{name}</p>
            </>

        </div>
    );
}
