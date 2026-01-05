import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const LINKS = [
        { id: 1, link: "about" },
        { id: 2, link: "skills" },
        { id: 3, link: "projects" },
        { id: 4, link: "experience" },
        { id: 5, link: "contact" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-background fixed top-0 left-0 z-50 backdrop-blur-md bg-opacity-80">
            <div>
                <h1 className="text-5xl font-signature ml-2 cursor-pointer font-bold font-mono">
                    <Link to="home" smooth duration={500}>
                        DK
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {LINKS.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-accent duration-200"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-accent duration-200">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-accent px-4 py-1 rounded text-accent hover:bg-accent hover:text-background transition duration-300">
                        Resume
                    </a>
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {LINKS.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-accent"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-accent">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
