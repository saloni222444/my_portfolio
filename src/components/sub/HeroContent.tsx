import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Initial Entrance Animation
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(taglineRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
        })
        .from(headingRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
        }, "-=0.4")
        .from(subHeadingRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6")
        .from(buttonRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
        }, "-=0.4");

        // Smoother Parallax for "SALONI"
        gsap.to(bgTextRef.current, {
          scrollTrigger: {
            trigger: "#about-me",
            start: "top top",
            end: "bottom top",
            scrub: 2, // Even smoother scrub
            invalidateOnRefresh: true,
          },
          scale: 2, // Slightly more scale for impact
          opacity: 0.06, 
          y: 250, // Deeper parallax
          letterSpacing: "0.2em",
        });

        // Scale up and Fade out main content
        gsap.to([taglineRef.current, headingRef.current, subHeadingRef.current, buttonRef.current], {
          scrollTrigger: {
            trigger: "#about-me",
            start: "top top",
            end: "60% top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
          scale: 1.2, // Scaling up name on scroll as requested
          y: -100,
          opacity: 0,
          stagger: 0.05,
        });
      }, containerRef);

      return () => ctx.revert();
    }, 6200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 container mx-auto px-6 text-center h-full flex flex-col items-center justify-center">
      {/* Background Parallax Text */}
      <div 
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03] select-none"
      >
        <span className="font-black text-white leading-[0.85] whitespace-nowrap text-[25vw] tracking-tighter mix-blend-overlay">
          SALONI
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <p 
          ref={taglineRef}
          className="text-xs md:text-sm uppercase tracking-[0.5em] text-cyan-400 mb-8 font-medium"
        >
          DYNAMIC WEB MAGIC WITH FULL-STACK & AI
        </p>

        <h1 
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-[1.1] tracking-tight"
        >
          Transforming Concepts into Seamless{" "}
          <span className="text-cyan-400">User Experiences</span>
        </h1>

        <p 
          ref={subHeadingRef}
          className="text-lg md:text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I'm Saloni, a Full-Stack & AI developer based in India.
        </p>

        <div className="flex justify-center">
          <button
            ref={buttonRef}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-transparent border border-white/20 rounded-xl hover:border-cyan-500/50 overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              Show my work
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
