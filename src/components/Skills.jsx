import SectionTemp from "./template/SectionTemp";
import TechComponent from "./template/TechComponent";

import TECHSTACK from "../constants/techStack";
import TOOLSTACK from "../constants/toolStack";

export default function Skills() {
    return (
        <SectionTemp id="skills">
            <div className="flex flex-col gap-8 md:gap-12 w-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Skills</h1>
                <div className="flex items-center flex-col gap-8">
                    <h2 className="text-xl md:text-3xl w-2/3 font-semibold">Languages & Frameworks I Use</h2>
                    <div className="flex flex-wrap gap-3 justify-center px-[5%] ">
                        {TECHSTACK.map((tech) => (
                            <TechComponent key={tech} name={tech} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center flex-col gap-8">
                    <h2 className="text-xl md:text-3xl w-2/3  font-semibold">Development & Productivity Tools I Use</h2>
                    <div className="flex flex-wrap gap-3 justify-center px-[5%] ">
                        {TOOLSTACK.map((tool) => (
                            <TechComponent key={tool} name={tool} />
                        ))}
                    </div>
                </div>
            </div>
        </SectionTemp>
    )
}