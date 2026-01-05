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
            <h1 className="my-20 text-center text-4xl">Technologies & Skills</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-500" title="Java" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl text-yellow-500" title="Python" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-blue-500" title="C++" />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" title="React" />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl text-white" title="Next.js" />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiAngular className="text-7xl text-red-600" title="Angular" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-500" title="Spring Boot" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostgresql className="text-7xl text-sky-700" title="PostgreSQL" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" title="Node.js" />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDocker className="text-7xl text-blue-400" title="Docker" />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-orange-400" title="AWS" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
