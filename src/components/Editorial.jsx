import React from "react";

const VerseMark = () => (
  <div className="relative mx-auto w-16 h-16">
    <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
    <svg viewBox="0 0 100 100" className="absolute inset-0 text-white/70">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M50 18 L50 82 M18 50 L82 50" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
);

const Editorial = () => {
  return (
    <section id="story" className="relative py-20 sm:py-28 border-y border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(0,0,0,0))]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <VerseMark />
          <h3 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">An Homage to the Sacred and the Street</h3>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            <span className="first-letter:text-5xl first-letter:font-semibold first-letter:mr-2 first-letter:float-left first-letter:leading-none">B</span>
            orn from the phrase “fruit of the tree of knowledge of good and evil,” FOTTOKOGAE examines how revelation reshapes silhouette. Our atelier studies liturgical lines, coptic arches, and the gravity of monochrome to create garments that feel both consecrated and contemporary.
          </p>
          <blockquote className="mt-8 border-l-2 border-white/20 pl-4 text-neutral-300 italic">
            “Taste and see.” — a reminder that the body learns what the mind cannot yet name.
          </blockquote>
          <p className="mt-6 text-neutral-400">
            We work with small mills, natural fibers, and hand-finished hardware. Each piece is cut with intention and meant to patinate with your rituals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#journal" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-neutral-100 hover:bg-white/5 transition">Read Journal</a>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-white transition">Book Private Viewing</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
