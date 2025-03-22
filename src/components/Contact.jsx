import SectionTemp from "./template/SectionTemp";
import ContactComponent from "./template/ContactComponent";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <SectionTemp>
            <div className="flex flex-col gap-12 w-full text-center ">
                <h1 className="text-5xl font-bold">Connect With Me</h1>
                <div className="flex gap-5 flex-wrap justify-center font-fira-sans text-2xl text-stone-700">
                    <ContactComponent link="https://github.com/safira1003" name="Github" />
                    <ContactComponent link="https://www.linkedin.com/in/safira-isma-aulia/" name="Linkedin" />
                    <ContactComponent link="mailto:asafiraisma@gmail.com" name="asafiraisma@gmail.com" />

                </div>
                {/* <ContactForm/> */}
            </div>
        </SectionTemp>
    );
}
