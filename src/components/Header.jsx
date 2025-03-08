
const HEADER = ["about", "skills", "experience", "education", "projects", "contact"]

export default function Header({ onClick, activeTab }) {
    const header = HEADER;

    const activeStyle = "uppercase py-3 px-4 text-black transition-colors duration-800 cursor-pointer bg-white rounded-full ";
    const inactiveStyle = "uppercase py-3 px-4 text-white transition-colors duration-800 cursor-pointer rounded-full ";

    return (
        <header className="px-[25%] py-8 font-fira-sans text-sm z-50 fixed top-0 right-0 left-0">
            <nav className="flex justify-between backdrop-blur-2xl rounded-full">
                {header.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={activeTab === item ? activeStyle : inactiveStyle}
                            onClick={()=>onClick(item)}
                        >
                            {item}
                        </button>
                    );
                })}
            </nav>
        </header>
    )
}