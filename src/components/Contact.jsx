
import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16 text-white font-[Outfit]"
                >
                    Get In <span className="text-cyan-400">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 shadow-lg border border-slate-700">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email Me</p>
                                <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-cyan-400 transition-colors">
                                    {CONTACT.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                             <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 shadow-lg border border-slate-700">
                                <FaPhoneAlt />
                             </div>
                             <div>
                                 <p className="text-sm text-gray-400">Call Me</p>
                                 <p className="text-white">{CONTACT.phoneNo}</p>
                             </div>
                        </div>

                         <div className="flex gap-4 mt-8">
                            <a href="https://linkedin.com/in/shubhambhatt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="https://github.com/Shubham-12bhatt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all">
                                <FaGithub size={18} />
                            </a>
                            <a href="https://leetcode.com/u/shubham_23/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all">
                                <SiLeetcode size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea 
                                    rows="4"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button 
                                type="button"
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
