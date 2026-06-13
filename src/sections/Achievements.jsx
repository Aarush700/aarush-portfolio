import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Milestone, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Achievements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="achievements" 
      className="py-24 px-6 md:px-12 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            06 / Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Honours & Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Achievements Checklist Bento */}
          <div className="lg:col-span-8">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {resumeData.achievements.map((ach, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="glass-panel dark:bg-neutral-900/40 bg-white p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex gap-3.5 items-start hover:border-black dark:hover:border-white transition-colors duration-300"
                >
                  <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-neutral-800 dark:text-neutral-200 leading-normal">
                    {ach}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Certifications List */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-panel dark:bg-neutral-900/40 bg-white p-6 md:p-8 rounded-[32px] border border-neutral-200 dark:border-neutral-800"
            >
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
                <ShieldCheck className="w-4.5 h-4.5" />
                Additional Credentials
              </h4>
              <div className="space-y-4">
                {resumeData.certifications.map((cert) => (
                  <div key={cert.title} className="pb-3 border-b border-neutral-100 dark:border-neutral-900/60 last:border-b-0 last:pb-0">
                    <h5 className="text-xs md:text-sm font-bold text-black dark:text-white">
                      {cert.title}
                    </h5>
                    <div className="flex justify-between items-center text-[10px] text-neutral-400 mt-1 font-medium">
                      <span>{cert.provider}</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
