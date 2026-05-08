import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "01",
    role: "Research Trainee",
    company: "DRDO",
    period: "Jun 2024 - Jul 2024",
    location: "Onsite",
    description: "Developed an AI Assistant for Farmers using RAG architecture at DRDO. Integrated LangChain with Ollama's Llama3 LLM and mxbai-embed-large embeddings, powering semantic search over agricultural PDF datasets via Chroma DB. Built a secure Flask web app with custom UI, enabling farmers to interact conversationally with domain-specific knowledge. Fine-tuned chunking pipelines and prompt strategies to minimize hallucinations and improve contextual accuracy in agricultural responses.",
    color: "from-emerald-500/10 to-teal-500/10",
    tech: ["Python", "Flask", "AI", "UX"],
    certificate: "https://drive.google.com/file/d/1Br00aWudVRHYpeBM3cwmIs4md6ugKzdO/view?usp=sharing"
  },
  {
    id: "02",
    role: "Associate Developer",
    company: "XecoTech Private Limited",
    period: "May 2025 - Jun 2025",
    location: "Onsite",
    description: "Built and improved the frontend for Haridwar Bike Rental, a live bike booking website. Made the site responsive across all devices and enhanced the user interface for smoother navigation. Cleaned up and organized CSS code into reusable modules. Added interactive elements with JavaScript to improve the booking flow. Managed GitHub workflows including branching, code reviews, and merging. Worked with backend developers to integrate APIs and ensure proper data display.",
    color: "from-cyan-500/10 to-teal-500/10",
    tech: ["HTML5", "CSS3", "JS", "Git"],
    certificate: "https://drive.google.com/file/d/1MbiloJEw09TwqmuwI9InuRT8Ps5VpImY/view?usp=sharing"
  },
  {
    id: "03",
    role: "Frontend Developer",
    company: "Ladybird Web Solution Pvt Ltd",
    period: "May 2025 - July 2025",
    location: "Remote",
    description: "Developed a variety of frontend UI components as part of a remote internship. Built responsive navigation bars with dropdowns and mobile menus, designed blog page layouts with article cards and proper content hierarchy, and created interactive elements like accordions and modals using JavaScript. Each task tackled different HTML, CSS, and JS concepts, from flexbox layouts to DOM manipulation. Ensured all components worked across different browsers and screen sizes. Received regular feedback from senior developers and refined the code accordingly. This hands-on approach helped cover the entire frontend fundamentals spectrum through practical, real-world tasks.",
    color: "from-cyan-500/10 to-cyan-500/10",
    tech: ["JavaScript", "HTML", "CSS", "React"],
    certificate: "https://drive.google.com/file/d/1mO8RBafQAQnVyHzKHaYS-3pWZwtitVMg/view?usp=sharing"
  },
  {
    id: "04",
    role: "Associate Developer",
    company: "XecoTech Private Limited",
    period: "Sep 2025 - Present",
    location: "Onsite",
   description: "Developing zepfinn.cloud, a stock market platform, as a Associate developer. Built 15+ features in React.js including a stock screener, AI chat assistant (OpenAI & Gemini), portfolio tracker, and dual-user authentication with Google OAuth. Integrated Razorpay payments, economic calendars, news feeds, and watchlist management. Added AI stock analysis, a 200+ term financial glossary, and a natural language query builder. Built community features with posts, stories, and SEBI-gated content. Designed responsive interfaces with dark/light themes, animations, and optimized API handling with caching and auto-retry.",
    color: "from-cyan-500/10 to-cyan-600/10",
    tech: ["React.js", "Node", "APIs", "GSAP"],
    ongoing: true
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Aligned with Preloader completion (around 6s)
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".experience-card");

        cards.forEach((card, index) => {
          if (index < cards.length - 1) {
            gsap.to(card, {
              scale: 0.95, // Reduced scaling for better stability
              opacity: 0.8, // Kept higher opacity for text clarity
              scrollTrigger: {
                trigger: cards[index + 1],
                start: "top 85%",
                end: "top 15%",
                scrub: 1, // Smoothed scrub
                invalidateOnRefresh: true,
                fastScrollEnd: true, // Prevents glitches on fast scroll
                preventOverlaps: true, // Prevents overlapping with other triggers
              },
            });
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
      ref={containerRef}
      id="experience"
      className="relative bg-transparent pt-40 pb-40 z-[40]"
    >
      <div className="container mx-auto px-4 relative z-50">
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Professional record of technical roles and institutional contributions.
          </p>
        </div>

        {/* Sticky Stacking Grid */}
        <div
          className="w-full max-w-4xl mx-auto relative"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: `repeat(${experiences.length}, minmax(500px, auto))`
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card sticky top-0 w-full rounded-[2.5rem] border border-white/10 bg-[#07070a] backdrop-blur-md shadow-2xl flex flex-col justify-between overflow-hidden group cursor-default will-change-transform"
              style={{
                top: `${index * 30 + 100}px`,
                height: `calc(90vh - ${(index * 30) + 120}px)`,
                marginBottom: '80px',
                boxShadow: `0 20px 60px rgba(0,0,0,0.5)`
              }}
            >
              {/* Card Content Interior */}
              <div className="h-full w-full p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">

                {/* Visual Flair */}
                <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-400/10 opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between mb-8 gap-6">
                    <div className="flex items-center gap-6">
                      <div className="text-5xl md:text-7xl font-bold text-white/5 select-none font-mono">
                        {exp.id}
                      </div>
                      <div>
                        <h4 className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-1">{exp.location}</h4>
                        <h3 className="text-white font-bold text-2xl md:text-4xl group-hover:text-cyan-400 transition-all duration-300">
                          {exp.company}
                        </h3>
                      </div>
                    </div>
                    <div className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-gray-300 text-sm font-semibold">
                      <Calendar size={16} className="text-cyan-400" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                      <Briefcase size={12} /> {exp.role}
                    </div>
                    <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-3xl drop-shadow-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap items-center justify-between pt-6 border-t border-white/5 gap-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-cyan-400 group-hover:border-cyan-400/20 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-4 group/btn cursor-pointer"
                    onClick={() => {
                      if (exp.ongoing) return;
                      if (exp.certificate) {
                        window.open(exp.certificate, "_blank");
                      }
                    }}
                  >
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {exp.ongoing ? "Ongoing" : exp.certificate ? "Certificate" : "View details"}
                    </span>

                    <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Atmospheric Glows */}
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
