import SectionTemp from "./template/SectionTemp";

import EDUCATIONS from "../constants/educations";

export default function Education() {
    return (
        <SectionTemp>
            <div className="flex flex-col gap-12 w-full text-center">
                <h1 className="text-5xl font-bold">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EDUCATIONS.map((edu, index) => (
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
