import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, AlertCircle, CheckCircle, Calendar, Compass } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 1.1
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center lg:text-left">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            03 / Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0">
            A curation of production deployments, robotic models, and full-stack environments illustrating backend reliability and robust cloud architecture.
          </p>
        </div>

        {/* Projects Stack */}
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {resumeData.projects.map((project, index) => {
            const isExpanded = expandedProject === index;

            return (
              <motion.div 
                key={project.title}
                variants={cardVariants}
                className="glass-panel dark:bg-neutral-900/35 bg-white rounded-[32px] overflow-hidden border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Large Project Image Cover */}
                <div className="relative h-64 sm:h-96 md:h-[480px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <motion.img 
                    src={`/images/projects/${project.imageIndex}.png`} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale dark:opacity-85 hover:grayscale-0 dark:hover:opacity-100 transition-all duration-700"
                    whileHover={{ scale: 1.03 }}
                    loading="lazy"
                  />
                  {/* Glassmorphism Title Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-neutral-200 border border-white/10">
                        <Calendar className="w-3 h-3" />
                        {project.timeline}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Core Project Card Body */}
                <div className="p-6 md:p-10">
                  
                  {/* Core Focus Section */}
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-100/50 dark:bg-neutral-950/60 border border-neutral-200/40 dark:border-neutral-800/40 mb-8">
                    <Compass className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-400 block mb-0.5">
                        Core Focus
                      </span>
                      <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack & Links header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-100 dark:border-neutral-900">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 shrink-0">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-black dark:text-white hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Project Link
                      </a>
                    </div>
                  </div>

                  {/* Challenge description */}
                  <div className="text-sm leading-relaxed mb-6">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-400 block mb-1">
                      Problem Context
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {project.problem}
                    </p>
                  </div>

                  {/* Details Toggle Button */}
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-xs font-bold text-neutral-800 dark:text-neutral-100 mt-4 hover:opacity-85 transition-opacity"
                  >
                    {isExpanded ? (
                      <>
                        Hide Key Achievements & Impact
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show Key Achievements & Impact
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Expandable Details Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-900 space-y-6"
                      >
                        {/* Achievements Checklist */}
                        <div>
                          <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-400 block mb-3">
                            Technical Implementations
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                            {project.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Business Impact Card */}
                        <div className="p-4 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/40 dark:border-neutral-800/40 flex items-start gap-3">
                          <AlertCircle className="w-4.5 h-4.5 text-neutral-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-500 dark:text-neutral-400 block mb-1">
                              System Outcome & Impact
                            </span>
                            <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                              {project.impact}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
