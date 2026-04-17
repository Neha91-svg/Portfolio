import React from "react";
import { DATA } from "../constants";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-2xl font-bold tracking-tighter mb-2">
            NG<span className="text-primary">.</span>
          </a>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-500 text-xs italic mb-1 uppercase tracking-widest font-bold">Crafted with Precision</p>
          <p className="text-slate-400 text-sm font-medium">React + Tailwind + GenAI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
