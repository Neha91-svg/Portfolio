import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Box, Code2, Heart } from "lucide-react";
import { DATA } from "../constants";

const OpenSource = () => {
  return (
    <section id="opensource" className="section-padding">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Open Source <span className="text-accent">Contributions</span>
        </motion.h2>
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-accent mx-auto rounded-full"
        />
        <p className="text-slate-400 mt-6 max-w-lg mx-auto">
          Giving back to the community by improving tools and frameworks I use every day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {DATA.opensource.map((contribution, index) => (
          <motion.div
            key={contribution.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(244, 114, 182, 0.4)" }}
            className="glass p-8 group border-white/5 relative overflow-hidden"
          >
            <div className="flex gap-6 items-start">
              <div className="bg-accent/10 p-3 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {index === 0 ? <Box className="w-6 h-6" /> : <GitBranch className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {contribution.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {contribution.description}
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-2 right-4 flex items-center gap-1 text-[10px] text-accent/40 font-bold uppercase">
              <Heart className="w-2.5 h-2.5 fill-accent/20" /> Community
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-500 text-sm italic">
          More contributions currently in progress...
        </p>
      </motion.div>
    </section>
  );
};

export default OpenSource;
