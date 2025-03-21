
const images = import.meta.glob("../assets/project-img/*.png", { eager: true });

const PROJECTS = [
    {
        title: "Sengkuni (Sistem Kelembagaan Terintegrasi)",
        type: "Work/Internship Project",
        descs: ["Designed and developed the frontend of the Sengkuni Information System, a centralized platform for managing higher education institutions and governing bodies under LLDIKTI V Yogyakarta.", " Conducted user research and created wireframes and mockups in Figma to ensure an intuitive and user-friendly interface.", " Translated UI/UX designs into a fully responsive frontend using Next.js and Tailwind CSS, optimizing performance across devices.", " Integrated dynamic components and interactive features, improving accessibility and usability.", " Iterated designs based on user feedback and mentor reviews, while debugging and refining frontend functionality to enhance system efficiency and user experience."],
        skills: ["Javascript", "HTML", "CSS", "NextJS", "Tailwind CSS", "Figma"],
        url: "https://sengkuni.lldikti5.id/",
        source: null,
        images: [images["../assets/project-img/sengkuni1.png"].default, images["../assets/project-img/sengkuni2.png"].default, images["../assets/project-img/sengkuni3.png"].default, images["../assets/project-img/sengkuni4.png"].default, images["../assets/project-img/sengkuni5.png"].default]
    },
    {
        title: "Janaka (Layanan Legalisasi Ijazah)",
        type: "Work/Internship Project",
        descs: ["Developed the frontend of the Janaka web application, an online system for diploma legalization and replacement certificate requests for alumni of closed universities in Yogyakarta.", "Implemented a responsive UI using Bootstrap, ensuring seamless adaptation across devices.", "Collaborated with the backend team utilizing Laravel to integrate API endpoints efficiently.", "Resolved UI/UX inconsistencies and fixed critical bugs through structured debugging and effective team communication, enhancing user experience and system reliability."],
        skills: ["PHP", "HTML", "CSS", "Bootstrap", "Laravel",],
        url: "https://janaka.lldikti5.id/",
        source: null,
        images: [images["../assets/project-img/janaka1.png"].default, images["../assets/project-img/janaka2.png"].default, images["../assets/project-img/janaka3.png"].default,]
    },
    {
        title: "Reverie (E-Commerce)",
        type: "Academic Project",
        descs: ["Designed and implemented the MySQL database for Reverie, a full-stack e-commerce demo for fashion, perfume, and cosmetics retail.", "Developed relational schemas, optimized queries, and created essential functions and triggers to ensure data integrity and transaction handling.", "Designed the business processes for product management, order processing, and customer transactions, aligning database structures with operational workflows.", "Generated comprehensive dummy data to simulate real-world usage scenarios.", "Additionally, assisted in frontend development by refining UI components for improved consistency and responsiveness."],
        skills: ["MySQL", "HTML", "CSS", "Javascript", "React", "NodeJS",],
        url: null,
        source: "https://github.com/nsyifa/wrpl-ecommerce",
        images: [images["../assets/project-img/reverie1.png"].default, images["../assets/project-img/reverie2.png"].default, images["../assets/project-img/reverie3.png"].default, images["../assets/project-img/reverie4.png"].default, images["../assets/project-img/reverie5.png"].default, ]
    },
    {
        title: "React Poster",
        type: "Practice Project",
        descs: ["Developed a simple web application for creating posts as a hands-on project to practice React concepts.", " Implemented component-based architecture, utilized props for dynamic content rendering, and integrated React Router for seamless navigation.", " Focused on understanding state management and reusability while building an interactive and functional interface."],
        skills: ["HTML", "CSS", "Javascript", "React", "NodeJS",],
        url: "https://react-poster-4vz5vudtu-safira-isma-aulias-projects.vercel.app/",
        source: "https://github.com/safira1003/react-poster",
        images: [images["../assets/project-img/poster1.png"].default, images["../assets/project-img/poster2.png"].default, images["../assets/project-img/poster3.png"].default,]
    },
    {
        title: "React Project Manager",
        type: "Practice Project",
        descs: ["Developed a simple project manager web app to practice React concepts, including components, state management, refs, and portals.", "Implemented dynamic task handling with interactive UI updates and used Tailwind CSS for a fully responsive design.", "Focused on improving component reusability and user experience through efficient state updates and modal interactions."],
        skills: ["HTML", "CSS", "Javascript", "React", "Tailwind CSS"],
        url: "https://project-manager-app-safira-isma-aulias-projects.vercel.app/",
        source: "https://github.com/safira1003/project-manager-app",
        images: [images["../assets/project-img/projectmanager1.png"].default, images["../assets/project-img/projectmanager2.png"].default, images["../assets/project-img/projectmanager3.png"].default,]
    },
    {
        title: "Garlicious",
        type: "Practice Project",
        descs: ["Developed Garlicious, a responsive static web page as the final project for the \"Belajar Dasar Pemrograman Web\" course on Dicoding.", "Implemented structured HTML, CSS, and basic JavaScript to create functional layout.", "Utilized Flexbox for content alignment and ensured responsiveness across various screen sizes.", "Focused on foundational web development principles."],
        skills: ["HTML", "CSS", "Javascript"],
        url: "https://safira1003.github.io/garlicious/#",
        source: "https://github.com/safira1003/garlicious",
        images: [ images["../assets/project-img/garlicious1.png"].default,]
    },
    {
        title: "Company Landing Page",
        type: "Practice Project",
        descs: ["Built a responsive static landing page using Bootstrap 5 as a practice project.", "Applied HTML, CSS, and JavaScript to create a functional layout while learning proper structuring and styling techniques.", "Used jQuery for basic interactivity and focused on making the design adapt well to different screen sizes.", "Practiced slicing mockups into a real webpage to improve front-end development skills."],
        skills: ["HTML", "CSS", "Javascript", "Bootstrap"],
        url: "https://safira1003.github.io/landing-page/",
        source: "https://github.com/safira1003/landing-page",
        images: [ images["../assets/project-img/landingpage1.png"].default, images["../assets/project-img/landingpage2.png"].default,]
    },
    {
        title: "Drum Kit",
        type: "Practice Project",
        descs: ["Developed a web-based drum application to practice JavaScript DOM manipulation, enabling users to play multiple drum sounds through both mouse clicks and keyboard inputs.", "Implemented event listeners for real-time interaction and optimized audio playback for a responsive experience. "],
        skills: ["HTML", "CSS", "Javascript"],
        url: "https://safira1003.github.io/drum-kit/",
        source: "https://github.com/safira1003/drum-kit",
        images: [ images["../assets/project-img/drumkit1.png"].default,]
    },
    {
        title: "Classic Simon Game",
        type: "Practice Project",
        descs: ["Developed a web-based Simon Game to practice memory-based game logic and JavaScript event handling.", "Implemented dynamic sequence generation and user interaction tracking to progressively increase difficulty.", "Utilized HTML, CSS, and JavaScript to create an interactive and visually engaging gameplay experience.", "Optimized event listeners for real-time responsiveness and ensured smooth animations for a seamless user experience."],
        skills: ["HTML", "CSS", "Javascript"],
        url: "https://safira1003.github.io/simon-game/",
        source: "https://github.com/safira1003/simon-game",
        images: [ images["../assets/project-img/simon1.png"].default,]
    },
];

export default PROJECTS;