import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Genesis Silk Gown", note: "Hand-loomed mulberry silk", tone: "from-[#FAFAF9] to-[#D4D4D4]" },
  { title: "Seraphim Trench", note: "Waxed cotton, horn closures", tone: "from-[#e2e8f0] to-[#94a3b8]" },
  { title: "Eucharist Satchel", note: "Vegetable-tanned hide", tone: "from-[#f5f5f4] to-[#a8a29e]" },
  { title: "Cathedral Boot", note: "Patinated calf leather", tone: "from-[#f3f4f6] to-[#9ca3af]" },
  { title: "Apocrypha Veil", note: "Sheer silk organza", tone: "from-[#f8fafc] to-[#cbd5e1]" },
  { title: "Thurible Coat", note: "Incense-infused lining", tone: "from-[#f4f4f5] to-[#a1a1aa]" },
];

const Card = ({ title, note, tone }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-[1px]"
    >
      <div className={`rounded-2xl bg-neutral-950/80 backdrop-blur-sm`}> 
        <div className={`relative h-64 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br ${tone}`}>
          <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0),rgba(0,0,0,0.6))]" />
          <svg aria-hidden viewBox="0 0 600 400" className="absolute inset-0 w-full h-full text-neutral-800">
            <path d="M60,360 C100,230 200,60 300,60 C400,60 500,230 540,360" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="mt-1 text-sm text-neutral-400">{note}</p>
          <div className="mt-4 flex items-center justify-between">
            <button className="text-xs tracking-wide uppercase text-neutral-900 bg-neutral-100 hover:bg-white rounded-full px-3 py-1.5">View</button>
            <button className="text-xs tracking-wide uppercase text-neutral-100 border border-white/20 hover:bg-white/5 rounded-full px-3 py-1.5">Lookbook</button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const CollectionGrid = () => {
  return (
    <section id="collections" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">AW — The Knowledge Capsule</h2>
            <p className="mt-2 text-neutral-400 max-w-2xl">Textiles whose drape recalls chapel veils, hardware that mirrors liturgical craft. Each piece is cut with reverence for form and function.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-neutral-300 hover:text-white transition">View All</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
