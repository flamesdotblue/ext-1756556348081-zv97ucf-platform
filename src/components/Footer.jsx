import React from "react";
import { Instagram, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold tracking-widest">FOTTOKOGAE</div>
            <p className="mt-3 text-sm text-neutral-400 max-w-xs">Atelier and house. Objects of devotion, cut in the language of today.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-medium text-neutral-200">Navigate</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li><a href="#collections" className="hover:text-white">Collections</a></li>
                <li><a href="#story" className="hover:text-white">Story</a></li>
                <li><a href="#journal" className="hover:text-white">Journal</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium text-neutral-200">Info</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">Care</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex sm:justify-end">
            <div>
              <div className="text-sm font-medium text-neutral-200">Follow</div>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-neutral-300 hover:text-white transition"><Instagram size={16} /></a>
                <a href="#" aria-label="Twitter" className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-neutral-300 hover:text-white transition"><Twitter size={16} /></a>
                <a href="#" aria-label="Website" className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-neutral-300 hover:text-white transition"><Globe size={16} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} FOTTOKOGAE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
