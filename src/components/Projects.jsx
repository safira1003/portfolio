import { useRef, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faInfo, faCode } from '@fortawesome/free-solid-svg-icons';

import SectionTemp from "./template/SectionTemp";
import TechComponentSmall from "./template/TechComponentSmall";
import Modal from "./template/Modal";

import PROJECTS from "../constants/projects";

const groupedProjects = PROJECTS.reduce((acc, project) => {
    acc[project.type] = acc[project.type] || [];
    acc[project.type].push(project);
    return acc;
}, {});


export default function Projects() {
    const modal = useRef();
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        modal.current.open();
    };


    return (
        <SectionTemp id="projects">
            <div className="flex flex-col gap-15 w-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Projects I’ve Worked on</h1>
                {Object.entries(groupedProjects).map(([type, projects]) => (
                    <div key={type} className="text-left flex flex-col gap-1">
                        <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold mb-4">{type}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project) => (
                                <div key={project.title} className="flex flex-col relative bg-white rounded-lg shadow-lg overflow-hidden group">
                                    <button className='absolute top-3 right-3 h-8 w-8 md:h-10 md:w-10 text-center text-lg md:text-xl rounded-full cursor-pointer hover:bg-white hover:text-black shadow-xl border-b-2 border-white bg-black shadow-black group-hover:animate-wiggle '
                                        onClick={() => openModal(project)}><FontAwesomeIcon icon={faInfo} />
                                    </button>
                                    <img src={project.images[0]} alt={project.title} className="w-full min-h-fit md:min-h-64 object-cover border-black shadow-lg shadow-black-50/2" />
                                    <div className="h-full flex flex-col justify-between gap-3 p-4">
                                        <div>
                                            <div className='flex justify-between'>
                                                <h3 className="text-black text-xl md:text-2xl font-bold w-full md:w-3/4">{project.title}</h3>

                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.skills.map((skill, index) => (
                                                    <TechComponentSmall key={index} name={skill} />
                                                ))}
                                            </div>
                                        </div>
                                        {project.url &&
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-2 justify-end text-[0.65rem] md:text-xs font-fira-sans text-blue-600 flex gap-2 hover:text-gray-700"><span><FontAwesomeIcon icon={faLink} /></span>Go To {project.title}</a>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Modal ref={modal}>
                {selectedProject && (
                    <div className="flex flex-col gap-2 md:gap-5 font-fira-mono">
                        <div className="flex flex-col md:flex-row justify-end gap-1 md:gap-8">
                            {selectedProject.source && (
                                <a href={selectedProject.source} target="_blank" rel="noopener noreferrer" className="font-fira-sans flex gap-2 items-center text-xs md:text-sm text-blue-600 hover:text-stone-700">
                                    <FontAwesomeIcon icon={faCode} /> View Source Code
                                </a>
                            )}
                            {selectedProject.url && (
                                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="font-fira-sans flex gap-2 items-center text-xs md:text-sm text-blue-600 hover:text-stone-700">
                                    <FontAwesomeIcon icon={faLink} /> Visit Project
                                </a>
                            )}
                        </div>
                        <h2 className="text-sm md:text-md font-base text-stone-700 text-center md:text-start">{selectedProject.type}</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start">{selectedProject.title}</h2>
                        <ul className="list-disc ms-5">
                            {selectedProject.descs.map((sentence, index) => (
                                <li key={index} className="font-light text-sm">{sentence}</li>
                            ))}
                        </ul>
                        <div className="flex flex-col">
                            <h3 className="text-base md:text-lg font-semibold">Technologies Used:</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedProject.skills.map((skill, index) => (
                                    <TechComponentSmall key={index} name={skill} />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-base md:text-lg font-semibold">Snapshots:</h3>
                            <div className="flex flex-wrap gap-4 mt-2 items-center justify-center">
                                {selectedProject.images.map((image, index) => (
                                    <img key={index} src={image} alt={selectedProject.title} className="w-full md:w-[90%] h-fit object-cover shadow-lg shadow-black-50/90" />
                                ))}
                            </div>
                        </div>

                    </div>
                )}
            </Modal>
        </SectionTemp>
    )

}