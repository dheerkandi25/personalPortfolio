import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const HERO_CONTENT = `Innovative Full stack Developer and AI Enthusiast passionate about creating solutions for real world problems and driven by the oppurtunity to create impact on the world with technology.`;

export const ABOUT_TEXT = `AI-focused Software Engineer with 3 years of experience building scalable full-stack applications, integrating LLM-powered automation, and optimizing backend systems. Strong foundation in Java, Angular, PostgreSQL, and cloud-based deployments. Research experience with IEEE Access publication and hands-on leadership in sustainability-focused technology projects.`;

export const EXPERIENCES = [
    {
        year: "Jan 2025 - Present",
        role: "Waterfield Sustainability Intern",
        company: "Environmental Resources Center, Purdue University Fort Wayne",
        description: `Leading development of a real-time energy and sustainability dashboard, integrating campus utility data to improve energy transparency and student engagement. Collaborating with Facilities and IT on a Smart Solar Panel System involving sensor-based tracking and actuator-driven panel positioning. Conducting feasibility analysis for an AI-supported control system adjusting panel orientation using irradiance and weather datasets.`,
        technologies: ["IoT", "Sensor Data", "AI Analysis", "Dashboarding"],
    },
    {
        year: "July 2022 - Nov 2024",
        role: "Software Development Engineer - I",
        company: "Tavant Technologies (Bengaluru, India)",
        description: `Built full-stack applications using Java, Spring, Angular, and PostgreSQL. Implemented 34+ unit/integration test cases, achieving 90% accuracy through advanced prompt engineering. Optimized data fetch time utilizing indexing and advanced database operations, reducing response times. Refactored legacy modules using OOP principles.`,
        technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "JUnit"],
    },
];

export const PROJECTS = [
    {
        title: "MastodonGpt",
        image: project1,
        description:
            "Built a two-portal system with an admin dashboard and a user-facing portal with an AI chatbot. Implemented RAG pipeline integrating a vector database. Engineered document parsing and embedding workflows. Developed an intelligent chatbot interface leveraging RAG.",
        technologies: ["Python", "Next.js", "PostgreSQL", "LLMs", "RAG", "Vector DB"],
    },
    {
        title: "AI Powered Career Management System",
        image: project2,
        description:
            "Developed an AI-powered career management platform with candidate resume ingestion. Integrated natural language search functionality for admins. Implemented LLM-driven SQL generation pipeline. Developed AI-powered Image Analysis and document classification workflows.",
        technologies: ["Python", "Next.js", "PostgreSQL", "Natural Language Search", "LLM"],
    },
    {
        title: "Texture Aware Medical Image Fusion (Research)",
        image: project3,
        description:
            "Developed a novel algorithm to calculate linear weights for fusing medical images from different modalities using VGG-19 feature maps. Achieved 15% improvement in contrast and variance-based metrics. Published in IEEE Access journal.",
        technologies: ["Deep Learning", "VGG-19", "Image Processing", "Python"],
    },
];

export const EDUCATION = [
    {
        role: "Masters in Computer Science",
        duration: "Jan 2025 - Dec 2026",
        institution: "Purdue University Indiana, United States",
        grade: "GPA: 4.0",
    },
    {
        role: "Bachelors in Electronics and Communications Engineering",
        duration: "June 2018 - May 2022",
        institution: "Vellore Institute of Technology Chennai, India",
        grade: "GPA: 9.29",
    },
];

export const SKILLS = [
    { category: "Languages", items: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "TypeScript", "HTML/CSS", "R"] },
    { category: "Frameworks", items: ["Spring Boot", "Angular", "React", "Node.js", "Next.js", "Docker", "AWS", "Git"] },
    { category: "Concepts", items: ["Data Structures", "Algorithms", "OOP", "Distributed Systems", "Debugging", "SDLC"] },
];

export const CONTACT = {
    address: "Fort Wayne, IN, USA",
    phoneNo: "+1 260-206-4757",
    email: "kandikattu.dheeraj@gmail.com",
};

export const SOCIAL_LINKS = [
    { href: "https://www.linkedin.com/in/dheeraj-kandikattu/", icon: FaLinkedin }, // Assuming URL based on name, User can update
    { href: "https://github.com/dheeraj-kandikattu", icon: FaGithub }, // Assuming URL based on name
    { href: "mailto:kandikattu.dheeraj@gmail.com", icon: FaEnvelope },
];
