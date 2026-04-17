import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Technical <span className="text-primary">Mastery</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-20 bg-primary mx-auto rounded-full"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {DATA.skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: "rgba(99,102,241,0.5)" }}
            className="glass p-8 transition-all duration-300 group border-white/5"
          >
            <h3 className="text-xl font-bold mb-8 text-white group-hover:text-primary transition-colors">
              {skillGroup.category}
            </h3>
            <div className="space-y-6">
              {skillGroup.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">{skill.name}</span>
                    <span className="text-xs font-bold text-primary/70">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800/50 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-primary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
