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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Runner-Up at VNPS 2026 & EWT Pragati 2.0
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Neha</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-medium">
            Full Stack Developer | Building LLM-Based Applications
          </p>

          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            Backend-focused MERN developer building scalable, secure, and intelligent applications. Fostering innovation as Deputy Organization Head at E-Cell VCET.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a 
              href="#projects" 
              className="btn btn-primary gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary px-8"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.a>
          </div>

          <div className="flex gap-6">
            {[
              { id: 'github', icon: <Github className="w-6 h-6" />, href: DATA.socials.github },
              { id: 'linkedin', icon: <Linkedin className="w-6 h-6" />, href: DATA.socials.linkedin },
              { id: 'email', icon: <Mail className="w-6 h-6" />, href: `mailto:${DATA.email}` }
            ].map((social, idx) => (
              <motion.a
                key={social.id}
                href={social.href}
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ y: -4, scale: 1.2, color: "#6366f1" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10 glass p-4 aspect-square max-w-[500px] overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center border border-white/5 relative">
                {/* Visual Placeholder for high-end graphic */}
                <div className="text-primary/50 opacity-20 transform -rotate-12 scale-150 select-none pointer-events-none font-black text-9xl">
                  GEN<br/>AI
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-72 h-72 border border-dashed border-primary/20 rounded-full"
                   />
                   <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-56 h-56 border border-dashed border-secondary/20 rounded-full"
                   />
                </div>
                
                {/* Center Glow */}
                <div className="absolute w-32 h-32 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/40 transition-colors" />
             </div>
          </motion.div>
          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass px-6 py-3 text-sm font-bold text-white/90 z-20 shadow-2xl border-white/20"
          >
            🚀 Full Stack
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass px-6 py-3 text-sm font-bold text-white/90 z-20 shadow-2xl border-white/20"
          >
            🧠 AI Architect
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
