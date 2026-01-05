import { CONTACT, SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div name="contact" className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href={`mailto:${CONTACT.email}`} className="border-b hover:text-accent duration-200">
                    {CONTACT.email}
                </a>
            </div>
            <div className="mt-8 flex justify-center gap-6 text-3xl">
                {SOCIAL_LINKS.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent duration-200">
                            <Icon />
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

export default Contact;
