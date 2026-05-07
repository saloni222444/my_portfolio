/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import ExtraCurricular from "./components/ExtraCurricular";
import Footer from "./components/Footer";
import StarsCanvas from "./components/sub/StarBackground";
import Preloader from "./components/Preloader";
import { motion } from "motion/react";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      // Wait for the exit blur/scale animation to finish before refreshing
      setTimeout(() => {
        ScrollTrigger.refresh();
        window.scrollTo(0, 0); // Ensure we start at top
      }, 1600); 
    }, 6000); // Match Preloader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <main className="h-full w-full">
        <Preloader />
        <StarsCanvas />
        <motion.div 
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ 
            opacity: isReady ? 1 : 0,
            scale: isReady ? 1 : 1.1,
            filter: isReady ? "blur(0px)" : "blur(10px)"
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col gap-20 relative z-30"
        >
          <Navbar />
          <Hero />
          <Education />
          <Projects />
          <Skills />
          <Research />
          <Experience />
          <ExtraCurricular />
          <Footer />
        </motion.div>
      </main>
    </SmoothScroll>
  );
}





