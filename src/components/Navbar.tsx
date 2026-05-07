import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        gsap.to(navRef.current, { y: -100, duration: 0.3, ease: "power2.out" });
      } else {
        // Scrolling up
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about-me" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Exp", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
  ];

  return (
    <>
      <div 
        ref={navRef}
        className="w-full h-[65px] fixed top-0 shadow-lg shadow-cyan-500/10 bg-[#03001438] backdrop-blur-md z-50 px-4 md:px-10 border-b border-white/5"
      >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center group transition-transform duration-300 hover:scale-105"
          >
            <span className="font-bold ml-[10px] sm:block text-gray-300 group-hover:text-cyan-400 transition-colors logo-shimmer">
              SALONI
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-row items-center justify-between w-full max-w-[800px] h-full mx-4">
            <div className="flex items-center justify-between w-full h-auto border border-white/10 bg-white/5 px-[15px] py-[8px] rounded-full text-gray-200 backdrop-blur-md">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="nav-link text-[10px] lg:text-xs uppercase tracking-widest px-2 hover:text-cyan-400 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-3 md:gap-5 items-center">
            <div className="hidden sm:flex flex-row gap-3 mr-2">
              <a
                href="https://github.com/saloni222444"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/salonimoga/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <a
              href="#contact"
              className="hidden lg:block px-5 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:bg-cyan-500/10 transition-all active:scale-95 whitespace-nowrap"
            >
              Connect
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#030014] md:hidden flex flex-col items-center justify-center p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-10 p-2 text-gray-300 hover:text-cyan-400"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-gray-200 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                className="flex gap-10 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a href="https://github.com/saloni222444" target="_blank" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/salonimoga/" target="_blank" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Linkedin size={32} />
                </a>
              </motion.div>
              <motion.a
                href="#contact"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setIsOpen(false)}
                className="mt-8 px-10 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 text-xl font-bold uppercase tracking-widest hover:bg-cyan-500/10 transition-all"
              >
                Connect
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
