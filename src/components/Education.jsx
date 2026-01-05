import { EDUCATION } from "../constants";

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">

            <h1 className="my-20 text-center text-5xl">Education</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="mb-2 text-2xl font-bold text-accent">{edu.institution}</h3>
                        <p className="mb-1 text-xl font-semibold text-white">{edu.role}</p>
                        <p className="text-base text-neutral-400">{edu.duration}</p>
                        <p className="mt-2 text-lg font-medium text-green-400">{edu.grade}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
