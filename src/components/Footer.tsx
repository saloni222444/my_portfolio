import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Code, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative w-full py-20 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tighter">
              SALONI<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Building modern, high-performance web experiences and exploring the boundaries of signal processing and engineering.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/saloni222444" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/salonimoga/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:salonimoga@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase text-xs tracking-[0.3em]">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#about-me" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">About</a></li>
              <li><a href="#education" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Education</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Projects</a></li>
              <li><a href="#skills" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Skills</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase text-xs tracking-[0.3em]">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:salonimoga@gmail.com" className="group flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-all">
                  <span className="text-sm">Email Me</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li className="text-gray-500 text-sm cursor-default">
                Available for Freelance
              </li>
              <li className="text-gray-500 text-sm cursor-default">
                Based in India
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="md:col-span-4 lg:col-span-1 flex flex-col justify-center items-start lg:items-end">
            <div className="p-6 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 text-left lg:text-right space-y-3">
              <h4 className="text-white font-bold text-lg">Let's build together</h4>
              <p className="text-gray-400 text-xs">Interested in collaboration?</p>
              <a 
                href="mailto:salonimoga@gmail.com"
                className="inline-block px-5 py-2 bg-cyan-400 text-black font-bold text-xs rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                Hire Me
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Code size={14} className="text-cyan-400" />
            <span>Built with React & GSAP</span>
          </div>
          
          <p className="text-gray-500 text-[11px] font-mono tracking-widest uppercase">
            &copy; {currentYear} SALONI  • ALL RIGHTS RESERVED
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by Saloni</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
