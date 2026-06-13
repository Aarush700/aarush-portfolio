import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { resumeData } from '../data/resume';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black py-16 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left branding and status */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse-slow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Open to Opportunities
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
            Graduate Software Engineer • Specialize in Full-Stack, Cloud Systems & IT support. Located in Melbourne, VIC.
          </p>
        </div>

        {/* Center navigation links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <a href="#home" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right socials & copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a 
              href={resumeData.personal.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href={resumeData.personal.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-900 hover:opacity-85 text-neutral-800 dark:text-neutral-100 transition-opacity"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
            &copy; {currentYear} Aarush Singh. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
