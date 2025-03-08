import ProfilePict from "../assets/safira.png";
import TechComponent from "./template/TechComponent";

export default function About() {
    return (
        <section className="flex flex-col min-h-screen pt-48">
            <div className="flex items-center gap-8 text-white overflow-visible">
                <div className="flex flex-col gap-3 basis-2/3  font-fira-mono font-bold">
                    <p className=" text-4xl">
                        Hi, I’m <span className="">Safira Isma Aulia.</span>
                    </p>
                    <p className="text-5xl">
                        A Junior Web Developer.
                    </p>
                </div>

                <div className="basis-1/3 flex justify-center items-center group">
                    <div className="relative w-sm flex justify-center">
                        <img
                            src={ProfilePict}
                            alt="Safira Isma Aulia"
                            className="w-62 h-62 rounded-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <TechComponent name={"Tailwind CSS"} topPosition={220} leftPosition={-10} />
                        <TechComponent name={"Javascript"} topPosition={130} leftPosition={-40} />
                        <TechComponent name={"NextJS"} topPosition={40} leftPosition={5} />

                        <TechComponent name={"Bootstrap"} topPosition={165} leftPosition={250} />
                        <TechComponent name={"NodeJS"} topPosition={-10} leftPosition={250} />
                        <TechComponent name={"React"} topPosition={70} leftPosition={280} />
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    )
}