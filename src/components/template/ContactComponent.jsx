import linkedinImage from "../../assets/logo/linkedin.svg"
import gmailImage from "../../assets/logo/gmail.svg"
import githubImage from "../../assets/icon/github.svg"


export default function ContactComponents({ link, name }) {
    var style = "flex gap-3 items-center px-8 py-3 bg-white font-semibold rounded-full shadow-md transition duration-300 hover:shadow-xl hover:shadow-yellow-500/20";
    var image = null;

    if (name == "Github") {
        style += " text-black";
        image = githubImage;
    }
    else if (name == "Linkedin") {
        style += " text-blue-600";
        image = linkedinImage;
    }
    else if (name == "asafiraisma@gmail.com") {
        style += " text-red-700";
        image = gmailImage;
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={style}
        >
            <img src={image} alt={name} className="w-12 h-12 object-contain" />
            {name}
        </a>
    )
}