import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import dashboardImg from "../assests/dashboard.jpeg";
import PosTagger from "../assests/POStagger.jpeg";
import AiAssistent from "../assests/AIAssistent.jpeg";
import zepfinnImg from "../assests/zepfinn.png";

// Tech logos mapping
const techLogos = {
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Chart.js": "https://www.chartjs.org/img/chartjs-logo.svg",
  "JWT": "https://jwt.io/img/pic_logo.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "REST API": "https://img.icons8.com/fluency/48/api.png",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "NLTK": "https://www.nltk.org/images/nltk.png",
  "spaCy": "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg",
  "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  "HMM": "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  "LangChain": "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  "ChromaDB": "https://avatars.githubusercontent.com/u/108468352?s=200&v=4",
  "Ollama": "https://ollama.com/public/ollama.png",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
};

const projects = [
  {
    id: 1,
    title: "Finance Dashboard",
    des: "Built a full-stack finance dashboard for expense tracking and visualization with user authentication, CRUD operations, and interactive charts.",
    img: dashboardImg,
    link: "https://github.com/saloni222444/Zorvyn-Assessment",
    sourceCode: "https://github.com/saloni222444/Zorvyn-Assessment",
    tech: ["MongoDB", "React.js", "Node.js", "Chart.js", "JWT"],
  },
  {
    id: 2,
    title: "Zepfinn Cloud Platform",
    des: "Contributed to a full-stack live stock analytics platform by developing scalable frontend features, intelligent search & filtering systems, analyst authentication workflows, Knowledge Hub modules, and an interactive chatbot interface for enhanced user experience.",
    img: zepfinnImg,
    link: "https://zepfinn.cloud",
    sourceCode: "https://github.com/xecotech204/zepfinn_web_ui",
    tech: ["React.js", "Node.js", "MongoDB", "REST API"],
  },
  {
    id: 3,
    title: "POS Tagger for Dogri Language",
    des: "Developed supervised ML-based POS tagging system for low-resource Dogri language with manually annotated corpus and custom tagset.",
    img: PosTagger,
    link: "https://pos-tagger-for-dogri.onrender.com/",
    sourceCode: "https://github.com/saloni222444/POS-tagger-for-Dogri",
    tech: ["Python", "NLTK", "spaCy", "Scikit-learn", "HMM"],
  },
  {
    id: 4,
    title: "AI Assistant for Farmers",
    des: "Created ResNet-50-based model detecting tomato diseases with 94% accuracy, integrated chatbot for crop health queries.",
    img: AiAssistent,
    link: "https://github.com/saloni222444/AI-Assistant-for-Farmers-",
    sourceCode: "https://github.com/saloni222444/AI-Assistant-for-Farmers-",
    tech: ["Python", "LangChain", "Ollama", "ChromaDB", "PyTorch"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10">
          A small selection of{" "}
          <span className="text-cyan-400">recent projects</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-40 justify-items-center mt-32">
          {projects.map((item) => (
            <PinContainer key={item.id} title="Visit" href={item.link}>
              <div className="relative flex items-start justify-start overflow-hidden rounded-2xl border border-white/[0.1] p-4 bg-[#0300145e] backdrop-blur-xl w-[20rem] sm:w-[30rem]">
                <div className="relative z-50 w-full">
                  {/* Image Container */}
                  <div className="relative mb-10 flex h-[15rem] sm:h-[20rem] w-full items-center justify-center overflow-hidden rounded-xl bg-[#0a0a1a]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className={
                        item.id === 1 || item.id === 4
                          ? "w-full h-full object-contain p-2"  // Finance Dashboard & AI Assistant - pehle jaisi CSS
                          : "absolute inset-0 w-full h-full object-cover"  // Baaki sab - full cover
                      }
                    />
                  </div>

                  {/* Content */}
                  <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl text-white">
                    {item.title}
                  </h1>

                  <p className="text-sm md:text-base lg:text-lg font-light text-[#bec1dd] mt-3 leading-relaxed">
                    {item.des}
                  </p>
                  {/* Footer with Tech Logos */}
                  <div className="mb-3 mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {item.tech.slice(0, 5).map((t, index) => (
                        <div
                          key={t}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black/80 lg:h-10 lg:w-10 overflow-hidden p-1"
                          style={{ transform: `translateX(-${5 * index * 2}px)` }}
                          title={t}
                        >
                          <img
                            src={techLogos[t]}
                            alt={t}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<span style="font-size:10px;color:#22d3ee;font-weight:bold">${t.substring(0, 2)}</span>`;
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center relative z-[60]">
                      <a
                        href={item.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex text-sm text-cyan-400 md:text-xs lg:text-xl hover:underline"
                      >
                        Source Code
                      </a>
                      <Send className="ms-3 w-4 h-4 text-cyan-400 -rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

const PinContainer = ({
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group/pin z-50 cursor-pointer h-[35rem] w-[20rem] sm:w-[30rem] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(href, "_blank")}
    >
      <div
        style={{
          perspective: "1000px",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: "rotateX(70deg) translateZ(0deg)",
            transformStyle: "preserve-3d",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{
              rotateX: isHovered ? [0, 10, 20, 40] : 0,
              scale: isHovered ? [1, 0.9, 0.8] : 1,
              translateZ: isHovered ? [0, 20, 40, 50] : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="relative flex items-start justify-start overflow-hidden rounded-2xl border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black transition duration-700 group-hover/pin:border-white/[0.2]"
          >
            <div className="relative z-50">{children}</div>
          </motion.div>
        </div>
      </div>
      <PinPerspective title={title} href={href} isHovered={isHovered} />
    </div>
  );
};

const PinPerspective = ({ title, href, isHovered }: { title?: string; href?: string; isHovered: boolean }) => {
  return (
    <motion.div
      animate={{
        opacity: isHovered ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="pointer-events-none w-full h-80 flex items-center justify-center z-[60] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div
            animate={{
              height: isHovered ? "160px" : "0px",
            }}
            className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px blur-[2px]"
          />
          <motion.div
            animate={{
              height: isHovered ? "160px" : "0px",
            }}
            className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px"
          />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};