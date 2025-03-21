
import kemendikbudLogo from '../assets/logo/kemendikbud.png';
import bangkitLogo from '../assets/logo/bangkit.png';

const EXPERIENCES = [
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

export default EXPERIENCES;