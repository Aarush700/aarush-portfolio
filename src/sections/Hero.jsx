import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Briefcase, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { resumeData } from '../data/resume';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 md:px-12 overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Premium Apple Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Interactive Light Mouse Glow */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none blur-[120px] transition-opacity duration-700"
        style={{
          left: `${mousePosition.x - 225}px`,
          top: `${mousePosition.y - 225}px`,
          background: 'radial-gradient(circle, rgba(120,120,120,0.12) 0%, rgba(120,120,120,0) 70%)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Info Card */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/55 dark:bg-neutral-900/50 backdrop-blur-md mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-800 dark:text-neutral-200">
                Graduate Software Engineer
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white leading-[1.08] mb-6"
            >
              {resumeData.personal.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl font-medium text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg"
            >
              Software Engineering Graduate. Building reliable, high-performance production systems and cloud platforms.
            </motion.p>

            {/* Work rights & WWCC banner */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10 text-xs text-neutral-500 dark:text-neutral-400"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Briefcase className="w-4 h-4 text-neutral-400" />
                <span>Full Work Rights (Subclass 485)</span>
              </div>
              <div className="hidden sm:block text-neutral-300 dark:text-neutral-800">|</div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Award className="w-4 h-4 text-neutral-400" />
                <span>WWCC Current & Valid</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-semibold rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all shadow-lg hover:translate-y-[-1px]"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Aarush_Singh.pdf"
                download="Aarush_Singh_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-semibold rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 text-black dark:text-white transition-all hover:translate-y-[-1px]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 mt-12"
            >
              <a
                href={resumeData.personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors p-2"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5.5 h-5.5" />
              </a>
              <a
                href={resumeData.personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors p-2"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5.5 h-5.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium overlapping image collage */}
          <motion.div 
            className="lg:col-span-5 relative h-[420px] sm:h-[480px] w-full flex items-center justify-center"
            variants={itemVariants}
          >
            {/* Background decorative blob */}
            <div className="absolute w-64 h-64 rounded-full bg-neutral-100 dark:bg-neutral-900 blur-3xl opacity-60 pointer-events-none" />

            {/* Graduation Image — large, tilted left */}
            <motion.div 
              className="absolute w-[230px] sm:w-[265px] h-[300px] sm:h-[350px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50"
              style={{ rotate: -6, x: -60, y: -20 }}
              whileHover={{ rotate: -2, scale: 1.03, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <img 
                src="/images/graduation.jpg" 
                alt="Aarush Singh Graduation" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-white/70 dark:bg-black/60 px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-widest uppercase text-black dark:text-white border border-white/20">
                Graduation · Swinburne
              </div>
            </motion.div>

            {/* Professional Photo 2 — mid, tilted right */}
            <motion.div 
              className="absolute w-[175px] sm:w-[200px] h-[230px] sm:h-[270px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white dark:border-neutral-900"
              style={{ rotate: 7, x: 75, y: 60 }}
              whileHover={{ rotate: 2, scale: 1.05, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <img 
                src="/images/professional.jpg" 
                alt="Aarush Singh Professional" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 backdrop-blur-md bg-white/70 dark:bg-black/60 px-2 py-1 rounded-[8px] text-[9px] font-bold tracking-widest uppercase text-black dark:text-white border border-white/20">
                Software Engineer
              </div>
            </motion.div>

            {/* Third photo — small accent, top-right */}
            <motion.div 
              className="absolute w-[120px] sm:w-[140px] h-[140px] sm:h-[165px] rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-neutral-900"
              style={{ rotate: -3, x: 90, y: -130 }}
              whileHover={{ rotate: 0, scale: 1.07, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <img 
                src="/images/professional2.jpg" 
                alt="Aarush Singh" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium">Scroll to explore</span>
        <div className="w-[1.5px] h-8 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 right-0 h-3 bg-black dark:bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
