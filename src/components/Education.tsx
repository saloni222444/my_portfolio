import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "10th Standard",
    institute: "Saraswati Vidya Mandir",
    performance: "83.2%",
    year: "2020",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    degree: "12th Standard",
    institute: "Saraswati Vidya Mandir",
    performance: "76.3%",
    year: "2022",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    degree: "B.Tech CSE",
    institute: "Central University of Jammu",
    performance: "CGPA: 8.2",
    year: "2022-2026",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    degree: "Code In Place Program",
    institute: "Stanford University (Virtual)",
    performance: "Completed",
    year: "2025",
    icon: <Award className="w-6 h-6" />,
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initializing at 7.7s to perfectly match the time when Preloader is gone 
    // and App.tsx transition (scale/blur) is complete.
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // 1. Central Line Animation
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { height: 0 },
            {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 20%",
                end: "bottom 80%",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        // 2. Animate each card
        educationData.forEach((_, index) => {
          const isEven = index % 2 === 0;
          gsap.fromTo(
            `.edu-card-${index}`,
            {
              opacity: 0,
              x: isEven ? -100 : 100,
              scale: 0.8,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: `.edu-card-${index}`,
                start: "top 85%",
                end: "top 50%",
                scrub: 1,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
                preventOverlaps: true,
              },
            }
          );

          // 3. Animate the center points (markers)
          gsap.fromTo(
            `.edu-marker-${index}`,
            {
              scale: 0,
              backgroundColor: "rgba(6, 182, 212, 0)",
            },
            {
              scale: 1,
              backgroundColor: "rgba(6, 182, 212, 1)",
              duration: 0.4,
              scrollTrigger: {
                trigger: `.edu-marker-${index}`,
                start: "top 85%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    }, 7700); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="education" 
      className="relative py-20 bg-transparent overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 relative">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Educational <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic path and certifications that have shaped my technical foundation.
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line (The Road) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-full bg-white/5 z-0 hidden md:block rounded-full overflow-hidden">
            {/* Road Markings */}
            <div className="absolute inset-0 flex flex-col justify-around items-center py-4 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-0.5 h-8 bg-white rounded-full"></div>
              ))}
            </div>
            <div 
              ref={lineRef}
              className="w-full bg-gradient-to-b from-cyan-500 via-cyan-300 to-cyan-500 origin-top shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            ></div>
          </div>

          {/* Education Items */}
          <div className="space-y-24 md:space-y-32">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center justify-between relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[45%] edu-card-${index}`}>
                    <div className="glass-morphism p-6 md:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                          {edu.icon}
                        </div>
                        <div>
                          <span className="text-cyan-400 font-mono text-sm font-bold">0{index + 1}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            {edu.degree}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 font-medium mb-6 flex items-center gap-2 text-sm md:text-base">
                        <MapPin className="w-4 h-4 text-cyan-500" />
                        {edu.institute}
                      </p>
                      
                      <div className="flex justify-between items-center pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs font-medium">{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                          <Award className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-xs font-bold">{edu.performance}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marker (Center Point) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <div className={`w-6 h-6 rounded-full border-4 border-[#030014] shadow-[0_0_15px_rgba(34,211,238,0.5)] edu-marker-${index}`}></div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}
