import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        {/* Placeholder for Profile Image */}
                        <div className="w-[300px] h-[350px] rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 relative overflow-hidden group backdrop-blur-sm">
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <h3 className="text-xl font-bold text-white">Shubham Bhatt</h3>
                                <p className="text-cyan-400 text-sm">Full Stack Developer</p>
                            </div>
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                                [Image Placeholder]
                            </div>
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <p className="text-gray-300 leading-8 text-base md:text-lg mb-6">
                            {ABOUT_TEXT}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 gradient-text">4+</h3>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 gradient-text">9.13</h3>
                                <p className="text-gray-400 text-sm">CGPA (Till 3rd Sem)</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
