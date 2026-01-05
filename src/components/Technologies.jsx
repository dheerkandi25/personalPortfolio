import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiSpringboot, SiAngular, SiDocker, SiPostgresql, SiPython, SiCplusplus, SiTypescript, SiJavascript, SiHtml5, SiR } from "react-icons/si";
import { FaJava, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
    // Helper for animations
    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });

    return (
        <div name="skills" className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-5xl">Technologies & Skills</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <FaJava className="text-7xl text-red-500" title="Java" />
                    <span className="mt-2 text-base font-medium text-neutral-400">Java</span>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiPython className="text-7xl text-yellow-500" title="Python" />
                    <span className="mt-2 text-base font-medium text-neutral-400">Python</span>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiCplusplus className="text-7xl text-blue-500" title="C++" />
                    <span className="mt-2 text-base font-medium text-neutral-400">C++</span>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <RiReactjsLine className="text-7xl text-cyan-400" title="React" />
                    <span className="mt-2 text-base font-medium text-neutral-400">React</span>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <TbBrandNextjs className="text-7xl text-white" title="Next.js" />
                    <span className="mt-2 text-base font-medium text-neutral-400">Next.js</span>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiAngular className="text-7xl text-red-600" title="Angular" />
                    <span className="mt-2 text-base font-medium text-neutral-400">Angular</span>
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiSpringboot className="text-7xl text-green-500" title="Spring Boot" />
                    <span className="mt-2 text-base font-medium text-neutral-400">Spring Boot</span>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiPostgresql className="text-7xl text-sky-700" title="PostgreSQL" />
                    <span className="mt-2 text-base font-medium text-neutral-400">PostgreSQL</span>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <FaNodeJs className="text-7xl text-green-500" title="Node.js" />
                    <span className="mt-2 text-base font-medium text-neutral-400">Node.js</span>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <SiDocker className="text-7xl text-blue-400" title="Docker" />
                    <span className="mt-2 text-base font-medium text-neutral-400">Docker</span>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
                    <FaAws className="text-7xl text-orange-400" title="AWS" />
                    <span className="mt-2 text-base font-medium text-neutral-400">AWS</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
