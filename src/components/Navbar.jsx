import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-8 py-4 ${
        scrolled ? 'top-2' : 'top-0'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-panel dark:bg-black/50 bg-white/60 shadow-lg border border-black/5 dark:border-white/10'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 group-hover:scale-105" />
          <span className="font-bold tracking-tight text-sm text-black dark:text-white group-hover:opacity-80 transition-opacity">
            AARUSH
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-4.5 py-2 text-sm tracking-wide font-medium transition-all duration-300 rounded-full hover:text-black dark:hover:text-white ${
                activeSection === item.href.slice(1)
                  ? 'text-black dark:text-white bg-black/5 dark:bg-white/10'
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* CV Download button */}
          <a
            href="/Aarush_Singh.pdf"
            download="Aarush_Singh_Resume.pdf"
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white dark:text-black bg-black dark:bg-white rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile controls & Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 z-40 p-6 rounded-3xl glass-panel bg-white/95 dark:bg-black/95 shadow-xl border border-black/10 dark:border-white/10 md:hidden flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-1" />
            <a
              href="/Aarush_Singh.pdf"
              download="Aarush_Singh_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
