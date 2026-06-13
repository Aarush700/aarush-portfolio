import React from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white selection:bg-neutral-200 dark:selection:bg-neutral-800">
      {/* Floating Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
