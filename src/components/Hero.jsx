import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { HERO_CONTENT } from "../constants";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import myImage from "../assets/myimage.jpeg";


const Hero = () => {
    const [isHovering, setIsHovering] = useState(false);
    const imageRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

    const handleMouseMove = (e) => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovering(false);
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume_Shubham.pdf';
        link.download = 'Shubham_Bhatt_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
                <div className="text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-cyan-400 text-sm md:text-base font-medium mb-3 tracking-wider uppercase"
                    >
                        Welcome to my portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
                        style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                        Hi, I'm <br />
                        <span className="gradient-text">Shubham Bhatt</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light h-12"
                    >
                        <span className="text-cyan-400 font-semibold">
                            <Typewriter
                                words={["Web Developer", "MERN Developer", "Software Developer"]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all cursor-pointer text-center shadow-lg shadow-cyan-500/50"
                        >
                            View My Work
                        </Link>
                        <button
                            onClick={handleDownloadResume}
                            className="btn-glow group border-2 cursor-pointer border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <FaDownload className="group-hover:animate-bounce" />
                            Download Resume
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative flex justify-center items-center"
                    style={{ perspective: "2000px" }}
                >
                    <div
                        ref={imageRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] cursor-pointer"
                    >
                        {/* Layered glow effects - behind everything */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-3xl pointer-events-none -z-10"
                            animate={{
                                scale: isHovering ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                        />

                        <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl pointer-events-none -z-10"
                            animate={{
                                scale: isHovering ? 1.15 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                        />

                        {/* 3D Container with preserve-3d */}
                        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                            {/* Floating geometric shapes */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -top-10 -left-10 w-20 h-20 border-2 border-cyan-400/30 rounded-lg"
                                style={{ transform: "translateZ(80px)" }}
                            />

                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [360, 180, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -bottom-8 -right-8 w-16 h-16 border-2 border-purple-400/30 rounded-full"
                                style={{ transform: "translateZ(60px)" }}
                            />

                            <motion.div
                                animate={{
                                    x: [0, 15, 0],
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-1/4 -right-12 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-lg rotate-45"
                                style={{ transform: "translateZ(100px)" }}
                            />

                        {/* Main 3D container with mouse tracking */}
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                                scale: isHovering ? 1.05 : 1,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-4 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
                        >
                            {/* Multiple depth layers */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl"
                                style={{ transform: "translateZ(10px)" }}
                            />

                            <motion.div
                                className="absolute inset-2 rounded-xl overflow-hidden border border-white/10"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                <img
                                    src={myImage}
                                    alt="Shubham Bhatt"
                                    className="w-full h-full object-cover"
                                    style={{ transform: "translateZ(50px)" }}
                                />

                                {/* Animated gradient overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-purple-500/20"
                                    animate={{
                                        opacity: isHovering ? 0.5 : 0.3,
                                    }}
                                    style={{ transform: "translateZ(60px)" }}
                                />
                            </motion.div>

                            {/* Outer frame with depth */}
                            <motion.div
                                className="absolute -inset-1 border-2 border-cyan-400/30 rounded-2xl pointer-events-none"
                                style={{ transform: "translateZ(80px)" }}
                                animate={{
                                    boxShadow: isHovering
                                        ? "0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(168, 85, 247, 0.4)"
                                        : "0 0 20px rgba(34, 211, 238, 0.3)",
                                }}
                            />
                        </motion.div>

                        {/* Floating particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-cyan-400/50 rounded-full"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    transform: `translateZ(${50 + i * 20}px)`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.3, 1, 0.3],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
