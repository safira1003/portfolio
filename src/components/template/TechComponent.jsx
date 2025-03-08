import { useEffect, useState } from "react";

export default function TechComponent({ name, topPosition, leftPosition }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        switch (name) {
            case "Tailwind CSS":
                import("../../assets/icon/tailwindcss.eae27b48.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "Bootstrap":
                import("../../assets/icon/bootstrap.d998acf1.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "CSS":
                import("../../assets/icon/css.a11f82a4.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "Git":
                import("../../assets/icon/git.514e511e.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "Github":
                import("../../assets/icon/github.de5575e3.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "HTML":
                import("../../assets/icon/html.759e5fb1.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "Javascript":
                import("../../assets/icon/javascript.6a338998.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "NextJS":
                import("../../assets/icon/nextjs.a98ac74a.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "NodeJS":
                import("../../assets/icon/nodejs.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "Postman":
                import("../../assets/icon/postman.30ccfc1a.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "React":
                import("../../assets/icon/react.7c403179.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            case "Visual Studio Code":
                import("../../assets/icon/vscode.d66774fb.svg").then((module) => {
                    setIcon(module.default);
                });
                break;
            default:
                setIcon(null);
                break;
        }
    }, [name]);

    return (
        <div
            style={{ top: `${topPosition}px`, left: `${leftPosition}px` }}
            className={`bg-white py-1 px-3 flex gap-2 items-center justify-center flex-nowrap rounded-full absolute border-2 shadow-xl shadow-black transition-transform duration-500 group-hover:scale-105 hover:scale-110 cursor-default`}>
            {icon ?
                <>
                    <img src={icon} alt={name} className="w-8 h-8" />
                    <p className="text-black text-sm font-medium font-fira-sans ">{name}</p>
                </>
                :
                <p>Icon not found</p>}
        </div>
    );
}
