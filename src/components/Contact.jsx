import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { DATA } from "../constants";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative collaborations.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                <a href={`mailto:${DATA.email}`} className="text-slate-200 font-medium hover:text-primary transition-colors">{DATA.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors group">
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-slate-200 font-medium tracking-tight">Mumbai, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            {[
              { id: 'github', icon: <Github />, href: DATA.socials.github, color: "hover:bg-slate-800" },
              { id: 'linkedin', icon: <Linkedin />, href: DATA.socials.linkedin, color: "hover:bg-blue-600/20" }
            ].map((social) => (
              <a 
                key={social.id}
                href={social.href}
                className={`p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="glass p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-50" />
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                 <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-background/30 border border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-background/30 border border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Detailed Message</label>
                <textarea 
                  id="message"
                  required
                  rows="5"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-background/30 border border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary w-full py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <motion.div
                  animate={isSubmitting ? { x: 5, opacity: 0 } : {}}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
