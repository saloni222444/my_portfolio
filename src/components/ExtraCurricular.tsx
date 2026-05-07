import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Award, Code, Globe, Camera, Users, Zap } from "lucide-react";
import gssoc from "../assests/Gssoc.png";
import hectoberfest from "../assests/hacktoberfest.png";
import gdg from "../assests/gdg.png";
import gdgsolution from "../assests/gdgsolution.png";
import devfest from "../assests/devfest.png";
import confrence from "../assests/internationworkshop.png";
import Django from "../assests/Django.png";
import photography from "../assests/photography.png";
import softcomputing from "../assests/softcomputing.png";
import engage from "../assests/engage.png";
import techwinter from "../assests/techwinter.png";
import serb from "../assests/serb.png";
const achievements = [
  {
    id: "01",
    title: "GSSoC '25 Contributor",
    tag: "Open Source",
    description: "Contributed to open-source projects under GirlScript Summer of Code. Successfully merged 3 PRs within a week, gaining hands-on experience in GitHub workflow and global developer collaboration.",
    icon: <Code className="w-10 h-10" />,
    color: "from-cyan-500 to-cyan-600",
    image: gssoc
  },
  {
    id: "02",
    title: "Hacktoberfest Winner",
    tag: "Hacktoberfest 2025",
    description: "Completed the 2024 challenge by contributing 6 accepted PRs. Focused on UI/UX enhancements, dark mode stability, and responsive design. Earned official Holopin badges for open-source excellence.",
    icon: <Zap className="w-10 h-10" />,
    color: "from-orange-500 to-red-500",
    image: hectoberfest
  },
  {
    id: "03",
    title: "GDG Community Member",
    tag: "Google Dev Groups",
    description: "Actively engaged in the Google Developer Group community. Shared knowledge, participated in tech talks, and stayed at the forefront of Google technologies.",
    icon: <Users className="w-10 h-10" />,
    color: "from-blue-600 to-cyan-600",
    image: gdg
  },
  {
    id: "04",
    title: "Tech Winter Break Workshop",
    tag: "GDG Organiser",
    description: "Successfully organized and led a technical workshop during the winter break. Focused on bridging the skill gap for students in emerging technologies and peer-to-peer learning.",
    icon: <Award className="w-10 h-10" />,
    color: "from-cyan-500 to-cyan-600",
    image: techwinter
  },
  {
    id: "05",
    title: "Engage and Elevate",
    tag: "GDG Event",
    description: "Participated in the 'Engage and Elevate' program, focusing on community building and professional networking within the Google Developer ecosystem.",
    icon: <Globe className="w-10 h-10" />,
    color: "from-emerald-500 to-teal-500",
    image: engage 
  },
  {
    id: "06",
    title: "Google Solution Challenge",
    tag: "Global Challenge",
    description: "Participated in the Google Solution Challenge, designing and developing innovative technological solutions to address real-world global problems defined by the UN.",
    icon: <Zap className="w-10 h-10" />,
    color: "from-yellow-500 to-orange-500",
    image: gdgsolution 
  },

  {
    id: "08",
    title: "XAI & IoT Workshop",
    tag: "SERB-DST Workshop",
    description: "Attended a National Workshop at Thapar Institute (TIET) sponsored by SERB-DST. Focused on the convergence of Explainable AI (XAI) and IoT for smart, transparent solutions.",
    icon: <Award className="w-10 h-10" />,
    color: "from-blue-600 to-cyan-600",
    image: serb
  },
  {
    id: "09",
    title: "Soft Computing Workshop",
    tag: "SMVDU Workshop",
    description: "Participated in a 5-day Skill Development Program at SMVDU. Learned about Deep Neural Networks, Cyber Security, and Responsible AI from top academic experts.",
    icon: <Zap className="w-10 h-10" />,
    color: "from-cyan-500 to-cyan-700",
    image: softcomputing
  },
  {
    id: "10",
    title: "Django Backend Workshop",
    tag: "Code Connect CUJ",
    description: "Attended a hands-on workshop on Django. Mastered backend development, Python integration, and building scalable web applications using the Django framework.",
    icon: <Code className="w-10 h-10" />,
    color: "from-green-600 to-teal-600",
    image: Django
  },
  {
    id: "11",
    title: "Devfest '24 Attendee",
    tag: "Devfest Chandigarh",
    description: "Explored the future of AI and Cloud at Devfest. Gained insights into Gemini Vision Models, RAG, and AR.js while networking with industry experts.",
    icon: <Globe className="w-10 h-10" />,
    color: "from-yellow-400 to-orange-400",
    image: devfest
  },
  {
    id: "12",
    title: "Photography Award (2nd Rank)",
    tag: "Photography Contest",
    description: "Secured 2nd Place in the Photography Contest during Engineer’s Day celebrations at the Central University of Jammu. Recognized for creative storytelling.",
    icon: <Camera className="w-10 h-10" />,
    color: "from-pink-500 to-rose-500",
    image: photography 
  },
  {
    id: "13",
    title: "Int. Conference Participant",
    tag: "Academic Conference",
    description: "Engaged with global researchers and tech leaders during an international conference. Explored emerging trends in Computer Science and professional networking.",
    icon: <Globe className="w-10 h-10" />,
    color: "from-cyan-500 to-cyan-600",
    image: confrence 
  }
];

export default function ExtraCurricular() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the horizontal movement of the track
  // -85% ensures we scroll through all 13 cards correctly
  const x = useTransform(springScroll, [0, 1], ["0%", "-85%"]);

  return (
    <section 
      ref={containerRef}
      id="achievements"
      className="relative h-[600vh] bg-transparent"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Section Heading */}
        <div className="absolute top-20 text-center z-50">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Extra <span className="text-cyan-400">Curricular</span> & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
            A journey of <span className="text-cyan-400">growth</span>, <span className="text-cyan-400">innovation</span>, and community excellence.
          </p>
        </div>

        {/* 3D Carousel Track */}
        <div className="w-full h-full flex items-center justify-start perspective-1200 overflow-visible pt-20">
          <motion.div 
            style={{ x }}
            className="flex items-center gap-[10vw] px-[10vw] sm:pl-[calc(50%-225px)] h-full"
          >
            {achievements.map((item, index) => (
              <CarouselCard 
                key={item.id} 
                item={item} 
                index={index} 
                progress={springScroll} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CarouselCard({ item, index, progress }: { item: any; index: number; progress: any }) {
  // Use scroll progress to calculate local displacement for 3D effects
  // The card is "centered" when scroll progress aligns with its relative index
  const start = index / achievements.length;
  const end = (index + 1) / achievements.length;
  
  // Transform values based on progress
  const range = [start - 0.2, start, start + 0.2];
  
  const scale = useTransform(progress, range, [0.8, 1.1, 0.8]);
  const opacity = useTransform(progress, range, [0.4, 1, 0.4]);
  const rotateY = useTransform(progress, range, [45, 0, -45]);
  const zIndex = useTransform(progress, range, [10, 50, 10]);

  return (
    <motion.div
      style={{ 
        scale, 
        opacity, 
        rotateY,
        zIndex,
        transformStyle: "preserve-3d"
      }}
      className="flex-shrink-0 w-[85vw] sm:w-[450px] h-[380px] sm:h-[450px] flex items-center justify-center translate-z-0"
    >
      <div className="flip-card w-full h-full cursor-pointer perspective-1200 group">
        <div className="flip-card-inner relative w-full h-full preserve-3d transition-transform duration-700 md:group-hover:rotate-y-180">
          
          {/* FRONT SIDE */}
          <div className="flip-card-front absolute inset-0 w-full h-full bg-[#030014]/90 backdrop-blur-3xl border border-white/20 p-6 sm:p-10 flex flex-col justify-between shadow-2xl overflow-hidden backface-hidden">
            {/* Background Image if available */}
            {item.image && (
             <img 
  src={item.image} 
  alt={item.title} 
  className="absolute inset-0 w-full h-full object-cover opacity-25"
  referrerPolicy="no-referrer"
/>
            )}
            
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-cyan-300/20 blur-[80px]`}></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-white`}>
                {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
              </div>
              <span className="text-5xl sm:text-7xl font-bold text-white/5 font-mono tracking-tighter">
                {item.id}
              </span>
            </div>

            <div className="relative z-10">
              <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-4`}>
                {item.tag}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                {item.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-8 sm:w-12 bg-cyan-400"></div>
                <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest sm:block hidden">Flip to reveal</span>
                <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest sm:hidden">Tap to flip</span>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="flip-card-back absolute inset-0 w-full h-full bg-[#000319]/95 backdrop-blur-3xl border border-cyan-400/50 p-6 sm:p-10 flex flex-col justify-center items-center shadow-2xl text-center rotate-y-180 backface-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/5 to-transparent opacity-50"></div>
            
            <Award className="w-10 h-10 text-cyan-400 mb-6 relative z-10" />
            <h4 className="text-lg font-bold text-cyan-400 mb-4 uppercase tracking-[0.2em] relative z-10">
              Achievement
            </h4>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light relative z-10">
              {item.description}
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

