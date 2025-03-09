const iconPaths = {
    "Tailwind CSS": () => import("../assets/icon/tailwindcss.svg"),
    "Bootstrap": () => import("../assets/icon/bootstrap.svg"),
    "CSS": () => import("../assets/icon/css.svg"),
    "Git": () => import("../assets/icon/git.svg"),
    "Github": () => import("../assets/icon/github.svg"),
    "HTML": () => import("../assets/icon/html.svg"),
    "Javascript": () => import("../assets/icon/javascript.svg"),
    "NextJS": () => import("../assets/icon/nextjs.svg"),
    "NodeJS": () => import("../assets/icon/nodejs.svg"),
    "Postman": () => import("../assets/icon/postman.svg"),
    "React": () => import("../assets/icon/react.svg"),
    "Visual Studio Code": () => import("../assets/icon/vscode.svg"),
    "Express": () => import("../assets/icon/express-js.svg"),
    "Python": () => import("../assets/icon/python.svg"),
    "C++": () => import("../assets/icon/cpp.svg"),
    "MySQL": () => import("../assets/icon/mysql.svg"),
    "Notion": () => import("../assets/icon/notion.svg"),
    "Figma": () => import("../assets/icon/figma.svg"),
    "Google Cloud": () => import("../assets/icon/google-cloud.svg"),
    "Vercel": () => import("../assets/icon/vercel.svg"),
};

// Function to dynamically import the icon based on the name
export const loadIcon = async (name) => {
    if (iconPaths[name]) {
        try {
            const module = await iconPaths[name]();
            return module.default;
        } catch (error) {
            console.error(`Failed to load icon for ${name}`, error);
            return null;
        }
    } else {
        console.warn(`Icon not found for ${name}`);
        return null;
    }
};
