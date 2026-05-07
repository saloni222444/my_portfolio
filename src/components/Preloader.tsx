import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFinalLine, setShowFinalLine] = useState(false);

  useEffect(() => {
    // Phase 1: Show initial animations
    const timer1 = setTimeout(() => {
      setShowFinalLine(true);
    }, 3500);

    // Phase 2: Complete preloader
    const timer2 = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader-container"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5 }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!showFinalLine ? (
              <motion.div
                key="initial-content"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col items-center"
              >
                {/* Animated Name & Info */}
                <div className="text-center flex flex-col items-center">
                  <div className="flex space-x-2 overflow-hidden">
                    {"SALONI".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          delay: 0.5 + (index * 0.1),
                          duration: 0.5,
                          ease: "backOut"
                        }}
                        className="text-4xl md:text-6xl font-bold liquid-gradient tracking-tighter inline-block logo-shimmer"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-cyan-400 text-xs md:text-sm mt-2 uppercase tracking-[0.4em] font-medium"
                  >
                    FULL-STACK & AI • 2026
                  </motion.p>

                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 w-64"
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl font-light italic mt-6"
                  >
                    Code. Create. Deploy.
                  </motion.p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="final-line"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: [0.8, 1.1, 1, 40],
                  filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(20px)"]
                }}
                transition={{ 
                  duration: 2.5,
                  times: [0, 0.2, 0.5, 1],
                  ease: "easeInOut"
                }}
                className="flex items-center justify-center w-full h-full"
              >
                <h1 className="text-white text-2xl md:text-4xl font-bold text-center whitespace-nowrap">
                  Turning Ideas Into Reality.
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
