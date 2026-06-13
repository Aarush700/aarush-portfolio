import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download, Send, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { resumeData } from '../data/resume';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            07 / Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Let's Talk
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 max-w-xl">
            Currently seeking full-time Software Engineering roles in Melbourne or remote. Ready to deploy production code from Day 1.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Direct contact directory */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-panel dark:bg-neutral-900/40 bg-white p-6 md:p-10 rounded-[32px] border border-neutral-200 dark:border-neutral-800 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
                Ready to make an impact.
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                If you are a recruiter, startup founder, or engineering manager looking for a detail-oriented graduate engineer with production environment internship experience, feel free to reach out directly.
              </p>
            </div>

            {/* Links and Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-100 dark:border-neutral-900">
              {/* Email Button */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-400">
                  Email Address
                </span>
                <div className="flex items-center gap-2">
                  <a 
                    href={`mailto:${resumeData.personal.email}`}
                    className="flex items-center gap-2 text-xs md:text-sm font-semibold text-black dark:text-white hover:opacity-85 transition-opacity"
                  >
                    <Mail className="w-4 h-4 text-neutral-400" />
                    {resumeData.personal.email}
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="text-[10px] font-bold text-neutral-500 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 px-2 py-0.5 rounded-md transition-colors"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-400">
                  Location
                </span>
                <span className="flex items-center gap-2 text-xs md:text-sm font-semibold text-black dark:text-white">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  {resumeData.personal.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Quick Links Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {/* LinkedIn Card */}
            <a 
              href={resumeData.personal.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel dark:bg-neutral-900/40 bg-white p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black dark:text-white">LinkedIn</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Let's connect professionally</p>
                </div>
              </div>
              <Send className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* GitHub Card */}
            <a 
              href={resumeData.personal.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel dark:bg-neutral-900/40 bg-white p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black dark:text-white">GitHub</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Review repository code & PRs</p>
                </div>
              </div>
              <Send className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Download Resume Card */}
            <a 
              href="/Aarush_Singh.pdf"
              download="Aarush_Singh_Resume.pdf"
              className="glass-panel dark:bg-neutral-900/40 bg-white p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black dark:text-white">Download CV</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Get the latest PDF resume</p>
                </div>
              </div>
              <Download className="w-4 h-4 text-neutral-400 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
