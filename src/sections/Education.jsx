import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, AwardIcon } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Education() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="education" 
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            05 / Academic
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Education
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Institution Card */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-8 glass-panel dark:bg-neutral-900/40 bg-white p-6 md:p-10 rounded-[32px] border border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-400 block mb-1">
                  {resumeData.education.period}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white leading-tight">
                  {resumeData.education.institution}
                </h3>
                <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mt-1">
                  {resumeData.education.degree}
                </p>
                <div className="flex gap-4 mt-2 text-xs text-neutral-400 font-medium">
                  <span>{resumeData.education.location}</span>
                  <span>•</span>
                  <span className="text-black dark:text-white font-bold">{resumeData.education.gpa}</span>
                </div>
              </div>
            </div>

            {/* Coursework details */}
            <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-900">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                <BookOpen className="w-4 h-4 text-neutral-400" />
                Key Coursework Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeData.education.coursework.map(course => (
                  <div 
                    key={course} 
                    className="flex items-center gap-2.5 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800" />
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awards & Certificates Card */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-4 glass-panel dark:bg-neutral-900/40 bg-white p-6 md:p-8 rounded-[32px] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between"
          >
            <div>
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
                <Award className="w-4 h-4 text-neutral-400" />
                Certificates & Awards
              </h4>
              <ul className="space-y-4">
                {resumeData.education.awards.map((award) => (
                  <li key={award} className="flex gap-3 items-start">
                    <div className="h-2 w-2 rounded-full bg-black dark:bg-white shrink-0 mt-1.5 animate-pulse-slow" />
                    <div>
                      <span className="text-xs md:text-sm font-semibold text-black dark:text-white">
                        {award}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-900 text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Awarded based on scholastic excellence, environmental awareness, and extracurricular campus leadership roles.
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
