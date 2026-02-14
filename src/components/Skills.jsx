
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiRedux, SiFirebase, SiExpress } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900/50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16 text-white font-[Outfit]"
                >
                    Technical <span className="text-cyan-400">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col items-center gap-4 shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer group"
                        >
                            <div className="text-5xl group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">
                                {skill.icon}
                            </div>
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
