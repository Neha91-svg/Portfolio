import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, MapPin, Calendar, Star } from "lucide-react";
import { DATA } from "../constants";

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Milestones & <span className="text-secondary">Awards</span>
          </motion.h2>
          <p className="text-slate-400 max-w-md">
            Recognition for technical excellence, innovation, and leadership.
          </p>
        </div>
        <div className="h-1 w-20 bg-secondary rounded-full hidden md:block" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {DATA.achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, borderColor: "rgba(14, 165, 233, 0.4)" }}
            className="glass p-8 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Trophy className="w-20 h-20 text-secondary" />
            </div>

            <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
              {index === 2 ? <Star className="w-6 h-6" /> : <Award className="w-6 h-6" />}
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
              {achievement.title}
            </h3>
            <p className="text-secondary/80 font-medium text-sm mb-4">
              {achievement.organization}
            </p>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {achievement.description}
            </p>

            <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
              {achievement.date && (
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  <Calendar className="w-3 h-3" /> {achievement.date}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
