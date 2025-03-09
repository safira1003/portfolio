import SectionTemp from "./template/SectionTemp";
import TechComponent from "./template/TechComponent";

const techStack = [
    "HTML", "CSS", "Javascript", "React", "NextJS",
    "Tailwind CSS", "Bootstrap", "NodeJS", "Express",
    "REST.API", "MySQL", "Python", "C++", "Git",
];

const toolStack = [
    "Github", "Visual Studio Code", "Postman", "Figma", "Notion", "Google Cloud", "Vercel"
];

export default function Skills() {
    return (
        <SectionTemp>
            <div className="flex flex-col gap-12 w-full text-center">
                <h1 className="text-5xl font-bold">Skills</h1>
                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-semibold">Languages & Frameworks I Use</h2>
                    <div className="flex flex-wrap gap-3 justify-center px-[5%] ">
                        {techStack.map((tech) => (
                            <TechComponent key={tech} name={tech} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-semibold">Development & Productivity Tools I Use</h2>
                    <div className="flex flex-wrap gap-3 justify-center px-[5%] ">
                        {toolStack.map((tool) => (
                            <TechComponent key={tool} name={tool} />
                        ))}
                    </div>
                </div>
            </div>
        </SectionTemp>
    )
}