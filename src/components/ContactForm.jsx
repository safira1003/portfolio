import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, subject, message } = formData;

        // Construct mailto link
        const mailtoLink = `mailto:asafiraisma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Full Name: ${fullName}%0AEmail: ${email}%0A%0A${message}`
        )}`;

        // Open email client
        window.location.href = mailtoLink;
    };

    return (
        <div className="w-[90%] mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-400 ">
                <div className="flex items-center border border-gray-300 rounded-2xl pe-5 ">
                    <FontAwesomeIcon className='text-lg ps-5 pe-2' icon={faUser} />
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 focus:outline-0"
                    />
                </div>
                <div className="flex items-center border border-gray-300 rounded-2xl pe-5 ">
                    <FontAwesomeIcon className='text-lg ps-5 pe-2' icon={faEnvelope} />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 focus:outline-0"
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full ps-5 pe-3 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full ps-5 pe-3 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="flex gap-3 w-fit text-xs items-center cursor-pointer bg-black text-white p-5 rounded-2xl font-semibold hover:bg-stone-600 transition duration-300"
                >
                    <FontAwesomeIcon className='' icon={faPaperPlane} />
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
