import { useEffect, useState } from "react";

import { loadIcon } from "../../utils/iconLoader.js";

export default function TechComponent({ name }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        loadIcon(name).then(setIcon);
    }, [name]);

    return (
        <div
            className={`bg-white py-1 px-3 flex gap-2 items-center justify-center flex-nowrap rounded-full border-2 transition-transform duration-300 group-hover:scale-105 hover:scale-110 cursor-default`}>

            <>
                {icon && <img src={icon} alt={name} className="w-8 h-8" />}
                <p className="text-black text-sm font-medium font-fira-sans ">{name}</p>
            </>

        </div>
    );
}
