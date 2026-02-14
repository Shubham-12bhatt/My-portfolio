import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <Navbar />
      
      <div className="fade-in-up">
        <Hero />
      </div>
      
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Shubham Bhatt. All rights reserved.</p>
        {/* <p className="mt-2 flex justify-center items-center gap-1">
          Made with <span className="text-red-500 animate-pulse">♥</span> using React & Tailwind
        </p> */}
      </footer>
    </div>
  );
}

export default App;