import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

import resumeFile from "../assets/pdf/SafiraIA_Resume.pdf";

import ProfilePict from "../assets/safira.png";
import TechComponentAbsolute from "./template/TechComponentAbsolute";
import PrimaryButton from './template/PrimaryButton';
import SectionTemp from './template/SectionTemp';

export default function About() {
    return (
        <>
            <section className="flex flex-col gap-20 md:gap-10 justify-center min-h-screen pt-[15%]">
                <div className="flex flex-col md:flex-row items-center gap-20 md:gap-10 text-white overflow-visible">
                    <div className="flex flex-col gap-3 basis-2/3 font-fira-mono font-bold text-center md:text-start">
                        <p className="text-xl md:text-4xl">
                            Hi, I’m <span className="">Safira Isma Aulia</span>
                        </p>
                        <p className="text-4xl md:text-5xl">
                            Web Development Enthusiast
                        </p>
                    </div>

                    <div className="basis-1/3 flex justify-center items-center group">
                        <div className="relative w-sm flex justify-center">
                            <img
                                src={ProfilePict}
                                alt="Safira Isma Aulia"
                                className="w-62 h-62 rounded-full transition-transform duration-500 group-hover:scale-105"
                            />
                            <TechComponentAbsolute name={"Tailwind CSS"} topPosition={220} leftPosition={20} />
                            <TechComponentAbsolute name={"Javascript"} topPosition={130} leftPosition={-10} />
                            <TechComponentAbsolute name={"NextJS"} topPosition={40} leftPosition={5} />

                            <TechComponentAbsolute name={"Bootstrap"} topPosition={165} leftPosition={250} />
                            <TechComponentAbsolute name={"NodeJS"} topPosition={-10} leftPosition={250} />
                            <TechComponentAbsolute name={"React"} topPosition={70} leftPosition={280} />
                        </div>
                    </div>
                </div>
                <div className="text-white flex flex-col-reverse md:flex-row gap-15 md:gap-8 items-center justify-center px-[10%] py-[8%]">
                    <p className="flex items-center text-base font-light font-fira-mono gap-3 animate-bounce">
                        Scroll Down
                        <FontAwesomeIcon className='text-xl' icon={faArrowDown} />
                    </p>
                    <div className="flex gap-4">
                        <PrimaryButton link="https://github.com/safira1003">
                            <FontAwesomeIcon className='text-xl' icon={faGithub} />
                        </PrimaryButton>
                        <PrimaryButton link="https://www.linkedin.com/in/safira-isma-aulia/">
                            <FontAwesomeIcon className='text-xl' icon={faLinkedinIn} />
                        </PrimaryButton>
                        <PrimaryButton link={resumeFile}>
                            <p className='text-sm font-medium font-fira-mono whitespace-nowrap'>Download Resume</p>
                            <FontAwesomeIcon className='text-xl' icon={faFile} />
                        </PrimaryButton>
                    </div>
                </div>
            </section>

            <SectionTemp id='about' >
                <div className='flex flex-col md:flex-row gap-10 items-start justify-center text-center md:text-start'>
                    <h1 className='font-bold text-4xl md:text-5xl'>
                        About Me
                    </h1>
                    <div className='basis-2/3 flex flex-col gap-8 items-end md:text-base'>
                        <p>
                            I am a fresh Computer Science graduate from Gadjah Mada University with a strong passion for web development.
                            Throughout my learning journey, I have developed skills in HTML, CSS, JavaScript, React, Next.js, and Node.js,
                            along with a solid understanding of Tailwind CSS and Bootstrap. I enjoy creating user-friendly and visually
                            appealing web interfaces, while continuously improving skills in building efficient and accessible applications.
                            Actively seeking opportunities in the web development field, I am eager to contribute, grow, and deliver
                            high-quality work with dedication and commitment.
                        </p>
                        <PrimaryButton>
                            <p className='text-base md:text-lg font-medium'>Contact Me</p>
                        </PrimaryButton>
                    </div>
                </div>

            </SectionTemp>
        </>
    )
}