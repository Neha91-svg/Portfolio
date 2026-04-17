import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { DATA } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-secondary">Work</span>
          </motion.h2>
          <p className="text-slate-400 max-w-md">
            A selection of projects where I bridge the gap between Full Stack and AI.
          </p>
        </div>
        <div className="h-1 w-20 bg-secondary rounded-full hidden md:block" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DATA.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group glass p-3 flex flex-col h-full relative border-white/5"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900 border border-white/5 mb-6">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="px-4 pb-4 flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-slate-400 uppercase tracking-tighter transition-colors group-hover:border-primary/30 group-hover:text-primary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="px-4 pb-6 flex gap-4">
              <motion.a 
                href={project.github} 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 btn btn-secondary py-2 text-xs gap-2"
              >
                <Github className="w-3.5 h-3.5" /> Code
              </motion.a>
              <motion.a 
                href={project.live} 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 btn btn-primary py-2 text-xs gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Demo
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
