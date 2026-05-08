import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const skillCategories = ["All Skills", "Frontend", "Backend", "Tools"];

const skillsData = {
  frontend: [
    { name: "React.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", level: 95, icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "GSAP", level: 85, icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
    { name: "Framer Motion", level: 80, icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", level: 85, icon: "https://skillicons.dev/icons?i=express" },
    { name: "Python", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Flask", level: 80, icon: "https://skillicons.dev/icons?i=flask" },
    { name: "MongoDB", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", level: 85, icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "SQL", level: 80, icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
    { name: "Java", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", level: 95, icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    { name: "PyTorch", level: 80, icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
    { name: "NumPy", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Scikit-Learn", level: 85, icon: "https://skillicons.dev/icons?i=sklearn" },
    { name: "VS Code", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Docker", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All Skills");

  const allSkills = [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];

  return (
    <section id="skills" className="py-20 bg-transparent relative overflow-hidden z-30">
      <div className="container mx-auto px-4 relative z-40">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            My Skills
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Technologies I've mastered and my proficiency levels
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-[60]">
          {skillCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                console.log(`Switching to tab: ${tab}`);
                setActiveTab(tab);
              }}
              className={`relative px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer pointer-events-auto active:scale-95 ${
                activeTab === tab 
                  ? "text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-[0_10px_20px_rgba(6,182,212,0.4)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 pointer-events-none">{tab}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[500px] relative z-40">
          <AnimatePresence mode="wait">
            {activeTab === "All Skills" ? (
              <motion.div
                key="all-skills"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-12"
              >
                <SkillMarquee items={allSkills.slice(0, Math.ceil(allSkills.length / 2))} direction="left" />
                <SkillMarquee items={allSkills.slice(Math.ceil(allSkills.length / 2))} direction="right" />
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {skillsData[activeTab.toLowerCase() as keyof typeof skillsData]?.map((skill, idx) => (
                  <SkillCard key={skill.name} skill={skill} index={idx} category={activeTab} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const SkillMarquee = ({ items, direction }: { items: any[]; direction: "left" | "right" }) => {
  return (
    <div className="relative flex overflow-hidden py-4">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 group">
            <div className="w-24 h-24 rounded-full bg-[#ffffff05] backdrop-blur-md flex items-center justify-center p-5 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-300 border border-white/10">
              <img src={item.icon} alt={item.name} className="w-full h-full object-contain brightness-110" referrerPolicy="no-referrer" />
            </div>
            <span className="text-white font-semibold text-lg opacity-80 group-hover:opacity-100">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillCard = ({ skill, index, category }: { skill: any; index: number; category: string }) => {
  const getBarColor = (level: number) => {
    if (level >= 85) return "bg-emerald-400";
    if (level >= 70) return "bg-orange-400";
    return "bg-blue-400";
  };

  const getBadgeColor = (level: number) => {
    if (level >= 85) return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    if (level >= 70) return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
    return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
  };

  const getShadowColor = () => {
    return "rgba(34,211,238,0.25)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-[#0300145e] backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col gap-8 shadow-2xl relative group border border-white/10"
      style={{ boxShadow: `0 20px 40px ${getShadowColor()}` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center p-4 border border-white/10 shadow-inner">
            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain brightness-125" referrerPolicy="no-referrer" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{skill.name}</h3>
        </div>
        <div className={`px-4 py-1.5 rounded-full text-xs font-bold ${getBadgeColor(skill.level)}`}>
          {skill.level}%
        </div>
      </div>

      <div className="space-y-4">
        <div className="w-full bg-white/5 h-7 rounded-full overflow-hidden p-1.5 shadow-inner border border-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className={`h-full rounded-full ${getBarColor(skill.level)} shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
          />
        </div>
        <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-2">
          <span>Basic</span>
          <span>Advanced</span>
          <span>Expert</span>
        </div>
      </div>
    </motion.div>
  );
};
