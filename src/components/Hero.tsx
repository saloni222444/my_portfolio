import React from "react";
import HeroContent from "./sub/HeroContent";

export default function Hero() {
  return (
    <section className="relative w-full h-[150vh]" id="about-me">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover opacity-50"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#083344,transparent)]"></div>
        
        <HeroContent />
      </div>
    </section>
  );
}

