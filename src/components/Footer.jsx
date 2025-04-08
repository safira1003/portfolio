import TechComponentSmall from "./template/TechComponentSmall";

export default function Footer() {
    const technologies = ["React", "Tailwind CSS"];

    return (
        <>
            <div className="border-1 border-stone-200 w-full mx-auto"></div>
            <footer className="flex flex-col-reverse md:flex-row gap-3 justify-between items-center w-full py-6 bg-black text-white text-center font-fira-sans">
                <p className="text-xs md:text-sm opacity-75">
                    &copy; {new Date().getFullYear()} Built by SafiraIA.
                </p>

                <div className="mt-2 flex justify-center items-center gap-2">
                    <span className="text-xs md:text-sm opacity-75">Portfolio Made With:</span>
                    {technologies.map((skill, index) => (
                        <TechComponentSmall key={index} name={skill} />
                    ))}
                </div>
            </footer>
        </>
    );
}
