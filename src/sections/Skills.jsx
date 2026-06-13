import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Monitor, 
  Server, 
  Database, 
  Cloud, 
  Headphones, 
  Cpu, 
  CheckSquare 
} from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Skills() {
  const categories = [
    { key: 'languages', label: 'Languages', icon: Code, skills: resumeData.skills.languages },
    { key: 'webFrameworks', label: 'Frontend', icon: Monitor, skills: ['React.js', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { key: 'backend', label: 'Backend', icon: Server, skills: ['FastAPI', 'Node.js/Express', 'Flask', 'ROS2'] },
    { key: 'databases', label: 'Databases', icon: Database, skills: resumeData.skills.databases },
    { key: 'cloudDevops', label: 'Cloud & DevOps', icon: Cloud, skills: resumeData.skills.cloudDevops },
    { key: 'itSupport', label: 'IT Support', icon: Headphones, skills: resumeData.skills.itSupport },
    { key: 'aiMl', label: 'AI & Machine Learning', icon: Cpu, skills: resumeData.skills.aiMl },
    { key: 'testing', label: 'Testing & Quality', icon: CheckSquare, skills: resumeData.skills.testing },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 px-6 md:px-12 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            04 / Capability
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Technical Arsenal
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 max-w-xl">
            A comprehensive matrix of programming languages, frameworks, infrastructure platforms, and engineering practices.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                variants={cardVariants}
                className="glass-panel dark:bg-neutral-900/40 bg-white p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm tracking-tight text-black dark:text-white">
                      {cat.label}
                    </h3>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
