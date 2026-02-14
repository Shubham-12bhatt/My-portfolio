import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            setScrollProgress(scrollPercent);
            setScrolled(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Experience", to: "experience" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div 
                className="scroll-progress" 
                style={{ width: `${scrollProgress}%` }}
            />
            
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled ? "glass shadow-lg py-3" : "py-5 bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-wide cursor-pointer" style={{ fontFamily: 'Sora, sans-serif' }}>
                        <span className="text-cyan-400">Shubham </span>
                        <span className="text-white">Bhatt</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium relative group"
                                >
                                    {link.name}
                                    <span className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full glass border-t border-slate-700 transition-all duration-300 ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    <ul className="flex flex-col items-center py-6 space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-cyan-400 text-lg font-medium cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
