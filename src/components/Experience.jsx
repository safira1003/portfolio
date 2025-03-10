import SectionTemp from "./template/SectionTemp";
import TechComponent from "./template/TechComponent";

import kemendikbudLogo from '../assets/logo/kemendikbud.png';
import bangkitLogo from '../assets/logo/bangkit.png';

const experiences = [
    {
        title: "Frontend Developer",
        company: "LLDIKTI Wilayah V",
        logoSrc: kemendikbudLogo,
        location: "Kota Yogyakarta",
        date: "Feb 2024 - Jun 2024",
        description: ["Developed a web-based application called Janaka using Laravel and Bootstrap, which facilitates online diploma legalization and the issuance of replacement diploma certificates.",
            "Built a web-based application named Sengkuni with Next.js and Tailwind CSS, designed to manage data and information related to Perguruan Tinggi and Badan Penyelenggara within the Yogyakarta region."],
        techStack: ["Javascript", "React", "NextJS", 
            "Tailwind CSS", "Bootstrap", "PostgreSQL", "PHP", "Laravel", 
        ],
    },
    {
        title: "Cloud Computing Cohort",
        company: "Bangkit Academy by Google, GOTO, & Tokopedia",
        logoSrc: bangkitLogo,
        location: "Online",
        date: "Aug 2023 - Jan 2024",
        description: ["Developed an ExpressJS backend API for a mobile app as part of a capstone project. ",
            "Earned 24 badges through Google Cloud Skill Boost (Google Cloud Computing Foundations, Google Cloud Engineering Learning Path)",
            "Completed 2 courses on Coursera (The Bits and Bytes of Computer Networking, System Administration and IT Infrastructure Services)",
            "Completed 4 courses on Dicoding (Dasar Pemrograman Web, Dasar Pemrograman JavaScript, Membuat Aplikasi Back-End untuk Pemula, Menjadi Google Cloud Engineer)"],
        techStack: ["Javascript", "NodeJS", "Express", "Google Cloud"
        ],
    },
];


export default function Experience() {
    return (
        <SectionTemp>
            <div className="flex flex-col gap-12 w-full text-center">
                <h1 className="text-5xl font-bold">Experience</h1>
                <div className="relative flex flex-col gap-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 relative">
                            <div className="w-6 h-6 bg-yellow-300 rounded-full z-10"></div>
                            <div className="flex flex-col gap-8 bg-white shadow-md p-8 rounded-2xl max-w-5xl w-full text-left">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-2xl text-black font-medium">{exp.title}</h2>
                                        <p className="text-sm text-gray-400">{exp.date}</p>
                                    </div>
                                    <div className="flex gap-1 items-center rounded-full bg-black shadow-lg shadow-black/50">
                                        <div className="flex flex-col py-0.5 pe-1 ps-5 text-end font-medium">
                                            <h3 className="text-sm text-gray-100">{exp.company}</h3>
                                            <h3 className="text-xs text-gray-300">{exp.location}</h3>
                                        </div>
                                        <img src={exp.logoSrc} alt={exp.company} className="object-contain bg-white h-15 p-2 rounded-full border-2 border-black" />
                                    </div>
                                </div>
                                <ul className="list-disc list-inside">
                                    {exp.description.map((des, index) => {
                                        return (
                                            <li key={index} className="text-gray-700">{des}</li>
                                        );
                                    })}
                                </ul>
                                <div className="flex flex-wrap gap-2 w-9/10">
                                    {exp.techStack.map((tech) => (
                                        <TechComponent key={tech} name={tech} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionTemp>
    );
}
