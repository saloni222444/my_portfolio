import React, { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import { Microscope, Radio, Binary, Sprout, Satellite } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const researchProjects = [
  {
    title: "Hybrid Polynomial Regression-Based Signal Reconstruction",
    status: "Ongoing",
    institution: "CU Jammu | Vikram Sarabhai Space Centre (ISRO)",
    description: "Built a hybrid signal reconstruction framework combining polynomial regression and GMM-EM, identifying optimal polynomial range (4-6) under 1%-30% noise conditions.",
    icon: <Radio className="w-8 h-8 text-cyan-400" />,
    tech: ["Python", "NumPy", "Scikit-learn", "GMM", "EM"],
    color: "cyan"
  },
  {
    title: "Computational Framework for L-system Parameter Estimation",
    status: "Ongoing",
    institution: "CU Jammu | Vikram Sarabhai Space Centre (ISRO)",
    description: "Developed framework using L-system modeling and image processing to analyze plant morphology and estimate growth parameters of space-grown plants.",
    icon: <Sprout className="w-8 h-8 text-cyan-400" />,
    tech: ["Python", "NumPy", "Scikit-image", "PCA"],
    color: "cyan"
  }
];

export default function Research() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Aligned with Preloader completion (around 6s)
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Header Animation
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        });

        // Cards Stagger Animation
        gsap.to(".research-card", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".research-grid",
            start: "top 85%",
            scrub: 1, // Added scrub for smoother transition
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          }
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    }, 7700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="research" 
      ref={containerRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef} 
          className="flex flex-col items-center mb-16 opacity-0 translate-y-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Satellite className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Research <span className="text-cyan-400">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 text-center max-w-2xl text-lg">
            Investigating the frontiers of signal processing and computational biology in collaboration with ISRO.
          </p>
        </div>

        <div className="research-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="research-card group relative p-8 rounded-3xl bg-[#030014]/60 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 opacity-0 translate-y-20"
            >
              {/* Nebula/Satellite Glow Effect */}
              <div className={`absolute -top-10 -right-10 w-48 h-48 bg-cyan-500 opacity-5 blur-[100px] group-hover:opacity-15 transition-opacity duration-500`}></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl">
                  {project.icon}
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.5, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                  />
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium tracking-wide">
                  {project.institution}
                </p>
                <p className="text-gray-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-[11px] font-mono text-gray-400 bg-white/5 border border-white/10 rounded-md hover:border-cyan-400/30 hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Binary className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
