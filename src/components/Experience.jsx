
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
    // Adding dummy education data to match the "Education / Experience Timeline" requirement
    // Since resume had education, I'll structure it here or add it to constants.
    // For now, I will use the data from constants and hardcode structure for Timeline.
    
    return (
        <section id="experience" className="py-20 bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16 text-white font-[Outfit]"
                >
                    Experience & <span className="text-cyan-400">Education</span>
                </motion.h2>

                <div className="space-y-12 relative border-l border-slate-700 ml-4 md:ml-0">
                     {/* Experience Items */}
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-5px] md:left-[-5px] w-3 h-3 bg-cyan-500 rounded-full border border-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10 md:hidden"></div>

                            <div className="md:flex items-start justify-between group">
                                <div className="hidden md:block w-[5px] h-full absolute left-1/2 bg-slate-800 -translate-x-1/2 z-0"></div>
                                <div className="hidden md:block absolute top-0 left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900 -translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
                                
                                {/* Left Content (Date for layout parity) */}
                                <div className={`w-full md:w-[45%] mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:order-2'}`}>
                                    <h4 className="text-cyan-400 font-semibold">{exp.year}</h4>
                                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                                    <p className="text-slate-400 text-sm mb-2">{exp.company}</p>
                                </div>
                                
                                {/* Right Content (Details) */}
                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto md:text-right md:order-1'}`}>
                                      <p className="text-gray-400 text-sm leading-relaxed mb-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                                        {exp.description}
                                      </p>
                                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                         {exp.technologies.map((tech, i) => (
                                              <span key={i} className="text-xs text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-900/50">
                                                  {tech}
                                              </span>
                                         ))}
                                      </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Hardcoded Education for demonstration based on Resume */}
                    <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="absolute top-0 left-[-5px] md:left-[-5px] w-3 h-3 bg-purple-500 rounded-full border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10 md:hidden"></div>
                            
                            <div className="md:flex items-start justify-between group">
                                <div className="hidden md:block absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-slate-900 -translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10"></div>
                                
                                <div className="w-full md:w-[45%] mb-4 md:mb-0 md:mr-auto md:text-right">
                                    <h4 className="text-purple-400 font-semibold">2024 - 2028</h4>
                                    <h3 className="text-xl font-bold text-white mt-1">B.Tech (Computer Science)</h3>
                                    <p className="text-slate-400 text-sm mb-2">KIET Group of Institutions, Ghaziabad</p>
                                </div>
                                
                                <div className="w-full md:w-[45%] md:ml-auto">
                                      <p className="text-gray-400 text-sm leading-relaxed mb-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all">
                                        CGPA: 9.13 (Till 3rd Sem)
                                      </p>
                                </div>
                            </div>
                        </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
