import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cloud, Sparkles } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-black transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            01 / Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            About Me
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Story text */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white leading-snug">
              Graduate Software Engineer with a passion for building robust, scalable products that perform in the real world.
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              I recently graduated in Software Engineering from Swinburne University of Technology. During my studies, I specialized in distributed architectures, cloud platforms, and reliable systems.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              Currently, I work as an IT Delivery Consultant at Swinburne, supporting academic infrastructures and managing active AV/network issues. My professional background spans fintech engineering, autonomous robotics research, and logistics operations.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              I am actively looking for a full-time graduate role where I can apply my skills across the full-stack, automate DevOps pipelines, and collaborate with engineering teams to deploy production-grade software.
            </p>
          </motion.div>

          {/* Right Column: Premium Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

            {/* Card 1: Honours */}
            <motion.div
              className="glass-panel dark:bg-neutral-900/40 bg-white p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
            >
              <div className="p-3 rounded-xl bg-black dark:bg-white text-white dark:text-black shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-black dark:text-white mb-1">
                  Honours Graduate
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                  Swinburne University of Technology. Focused on software engineering and cloud systems.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Technical Interest */}
            <motion.div
              className="glass-panel dark:bg-neutral-900/40 bg-white p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="p-3 rounded-xl bg-black dark:bg-white text-white dark:text-black shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-black dark:text-white mb-1">
                  Full-Stack Architecture
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                  Experienced with React, FastAPI, Node.js, and relational databases.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Cloud & Infrastructure */}
            <motion.div
              className="glass-panel dark:bg-neutral-900/40 bg-white p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="p-3 rounded-xl bg-black dark:bg-white text-white dark:text-black shrink-0">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-black dark:text-white mb-1">
                  Cloud & Automation
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                  Hands-on containerization (Docker) and CI/CD pipelines (GitHub Actions) on AWS & Azure.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
