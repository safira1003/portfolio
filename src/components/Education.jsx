import SectionTemp from "./template/SectionTemp";

const educationList = [
    {
        degree: "Bachelor of Computer Science",
        institution: "Universitas Gadjah Mada",
        date: "2021 - 2025",
        description: ["GPA: 3.94/4.00", "Focused on Web Development.", "Relevant Coursework: Data Structures and Algorithms, Frontend and UI/UX Development, Software Engineering Methods, Workshop on Implementing Software Design, Database."],
    },
    {
        degree: "High School Diploma",
        institution: "SMA Negeri 1 Purworejo",
        date: "2018 - 2021",
        description: ["Majored in Science and Mathematics (MIPA) with a passion for technology."],
    },
];

export default function Education() {
    return (
        <SectionTemp>
            <div className="flex flex-col gap-12 w-full text-center">
                <h1 className="text-5xl font-bold">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationList.map((edu, index) => (
                        <div key={index} className="bg-white shadow-md p-6 rounded-2xl flex flex-col items-start text-left ">
                            <h2 className="text-2xl text-black font-medium mb-2">{edu.degree}</h2>
                            <h3 className="text-sm text-gray-700">{edu.institution}</h3>
                            <p className="text-xs text-gray-400 ">{edu.date}</p>
                            <ul className="list-disc list-outside ms-5 mt-5">
                                {edu.description.map((desc, index) => {
                                    return <li key={index} className="text-gray-700">{desc}</li>
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </SectionTemp>
    );
}
