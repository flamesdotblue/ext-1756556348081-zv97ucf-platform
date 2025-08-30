import React from "react";
import { motion } from "framer-motion";

const Halo = () => (
  <svg aria-hidden viewBox="0 0 600 600" className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-30">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
        <stop offset="60%" stopColor="#a3a3a3" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="300" cy="300" r="260" fill="url(#g)" />
    <circle cx="300" cy="300" r="230" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    <circle cx="300" cy="300" r="180" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
  </svg>
);

const GothicArch = () => (
  <svg aria-hidden viewBox="0 0 600 400" className="absolute inset-x-0 bottom-0 w-full h-[60%] opacity-[0.14]">
    <path d="M20,380 C60,230 150,40 300,40 C450,40 540,230 580,380" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-200" />
    <path d="M80,380 C120,250 200,80 300,80 C400,80 480,250 520,380" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-400/40" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <Halo />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center py-24 sm:py-32">
          <GothicArch />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="tracking-[0.28em] uppercase text-xs sm:text-sm text-neutral-300"
          >
            Fottokogae — Haute Atelier
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight"
          >
            Fruit of the Tree of Knowledge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-2xl text-neutral-300"
          >
            A study in contrast: innocence and revelation. Inspired by sacred architecture and artisanal couture, crafted for the modern altar of the street.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a href="#collections" className="inline-flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-white transition shadow">Explore Collection</a>
            <a href="#story" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-neutral-100 hover:bg-white/5 transition">Read the Homily</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
