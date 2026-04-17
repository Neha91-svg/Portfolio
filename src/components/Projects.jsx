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

      <div className="grid md:grid-cols-2 gap-10">
        {DATA.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass p-2 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900 border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="p-6 flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="p-6 pt-0 flex gap-4">
              <a 
                href={project.github} 
                className="btn btn-secondary px-4 py-2 text-sm gap-2"
              >
                <Github className="w-4 h-4" /> Code
              </a>
              <a 
                href={project.live} 
                className="btn btn-primary px-4 py-2 text-sm gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
