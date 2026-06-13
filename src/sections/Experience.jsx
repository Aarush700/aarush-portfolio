import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section 
      id="experience" 
      className="py-24 px-6 md:px-12 bg-white dark:bg-black transition-colors duration-500 relative"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            02 / History
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <motion.div 
          className="relative border-l border-neutral-200 dark:border-neutral-800 pl-6 md:pl-10 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={`${exp.role}-${index}`}
              variants={cardVariants}
              className="relative"
            >
              {/* Timeline Point */}
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-black border-2 border-black dark:border-white">
                <span className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white animate-ping absolute" />
              </span>

              {/* Experience Card */}
              <div className="glass-panel dark:bg-neutral-900/40 bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-black dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] text-neutral-400 font-medium">
                    <span className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-full text-black dark:text-white">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-full text-black dark:text-white">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mt-4 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-neutral-400 dark:text-neutral-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
