import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { DATA } from "../constants";

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/assets/hero_bg.png')" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">{DATA.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-medium">
            {DATA.role}
          </p>

          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            {DATA.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn btn-primary gap-2">
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>

          <div className="flex gap-6">
            <a href={DATA.socials.github} className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={DATA.socials.linkedin} className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${DATA.email}`} className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 glass p-4 aspect-square max-w-[500px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 group-hover:opacity-100 transition-opacity" />
             <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center border border-white/5">
                {/* Visual Placeholder for high-end graphic */}
                <div className="text-primary/50 opacity-20 transform -rotate-12 scale-150 select-none pointer-events-none font-black text-9xl">
                  GEN<br/>AI
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border-2 border-dashed border-primary/30 rounded-full"
                   />
                   <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 border-2 border-dashed border-secondary/30 rounded-full"
                   />
                </div>
             </div>
          </div>
          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 glass px-4 py-2 text-sm font-semibold text-white/90 z-20"
          >
            🚀 Full Stack
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 glass px-4 py-2 text-sm font-semibold text-white/90 z-20"
          >
            🧠 AI Architect
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
