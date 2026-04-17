import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award } from "lucide-react";
import { DATA } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Journey & <span className="text-accent">Milestones</span></h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-20 bg-accent mx-auto rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {DATA.experience.map((item, index) => (
          <motion.div
            key={item.title + item.date}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-slate-800 pb-12 last:pb-0"
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-accent flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            </div>
            
            <div className="glass p-8 group hover:border-accent transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 font-medium">{item.company}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                {item.type.includes("🏆") ? <Award className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                {item.type}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
