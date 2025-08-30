import React from "react";
import { Menu, ShoppingBag, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-500 shadow ring-1 ring-white/30" />
            <div className="leading-tight">
              <div className="font-semibold tracking-widest text-sm sm:text-base">FOTTOKOGAE</div>
              <div className="text-[10px] sm:text-xs tracking-[0.22em] text-neutral-400 uppercase">Fruit of the Tree of Knowledge</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#collections" className="text-neutral-300 hover:text-white transition">Collections</a>
            <a href="#story" className="text-neutral-300 hover:text-white transition">Story</a>
            <a href="#journal" className="text-neutral-300 hover:text-white transition">Journal</a>
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-white/5 text-neutral-300 hover:text-white transition">
              <Search size={18} />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-white/5 text-neutral-300 hover:text-white transition">
              <ShoppingBag size={18} />
            </button>
            <button aria-label="Menu" className="md:hidden p-2 rounded-full hover:bg-white/5 text-neutral-300 hover:text-white transition">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
