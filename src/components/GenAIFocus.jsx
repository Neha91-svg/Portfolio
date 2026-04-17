import React from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, MessageSquare, Database } from "lucide-react";
import { DATA } from "../constants";

const GenAIFocus = () => {
  const icons = [<Brain key="1" />, <Sparkles key="2" />, <MessageSquare key="3" />, <Database key="4" />];
  
  return (
    <section id="genai" className="section-padding bg-primary/5 rounded-[3rem] my-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
            <Sparkles className="w-5 h-5" />
            Specialized Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {DATA.genai.title}
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>{DATA.genai.description}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {DATA.genai.badges.map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {DATA.genai.badges.map((badge, i) => (
            <div key={badge} className="glass p-8 flex flex-col items-center text-center group hover:border-primary transition-all">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                {i === 0 && <Brain className="w-8 h-8" />}
                {i === 1 && <MessageSquare className="w-8 h-8" />}
                {i === 2 && <Sparkles className="w-8 h-8" />}
                {i === 3 && <Database className="w-8 h-8" />}
              </div>
              <h4 className="text-white font-bold">{badge}</h4>
              <p className="text-xs text-slate-500 mt-2 italic">Advanced Implementation</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GenAIFocus;
