import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
    // Animation variants
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay },
        },
    });

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["I build things for the web", "Iam a Full Stack Developer", "Iam an AI Enthusiast", "I solve problems"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause at end
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    return (
        <div name="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-col items-center mt-28 lg:mt-36">
                <div className="w-full lg:w-2/3 flex flex-col items-center text-center">
                    <motion.h2
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl lg:text-4xl text-accent font-light tracking-wide mb-4">
                        Hi, my name is
                    </motion.h2>
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl">
                        Dheeraj Kandikattu
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent h-10 block">
                        {text}
                        <span className="text-purple-500 animate-pulse">|</span>
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        href="/resume.pdf" download className="bg-white text-black p-4 rounded-full font-bold hover:bg-accent hover:text-white transition duration-300">
                        Download Resume
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
