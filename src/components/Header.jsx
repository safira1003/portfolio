import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HEADER = ["about", "skills", "experience", "education", "projects", "contact"];

export default function Header({ onClick, activeTab }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const activeStyle = "uppercase py-2 px-4 text-black bg-white rounded-full";
    const inactiveStyle = "uppercase py-2 px-4 text-white hover:bg-white hover:text-black transition-colors rounded-full";

    return (
        <header className="px-4 py-4 font-fira-sans text-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl">
            <div className="flex justify-between items-center">
                <div className="text-white font-bold text-2xl font-fira-mono">Portfolio</div>

                <button onClick={toggleMenu} className="text-white text-2xl lg:hidden">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>

                <nav className={`lg:flex ${isOpen ? "flex" : "hidden"} flex-col lg:flex-row gap-2 lg:gap-4 bg-black lg:bg-transparent absolute lg:static top-full left-0 right-0 p-4 lg:p-0`}>
                    {HEADER.map((item, index) => (
                        <button
                            key={index}
                            className={ !isOpen && ( activeTab === item) ? activeStyle : inactiveStyle}
                            onClick={() => {
                                onClick(item);
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
