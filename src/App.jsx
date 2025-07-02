import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';
import Requirements from './components/Requirements';
import Concept from './components/Concept';
import Implementation from './components/Implementation';
import Results from './components/Results';
import Thesis from './components/Thesis';
import Footer from './components/Footer';

import { useState, useEffect } from "react";
import { Element } from 'react-scroll';

import bhtLogoDark from './assets/bhtlogodark.png';
import bhtLogoLight from './assets/bhtlogolight.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Element name="hero"></Element>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="bg-[var(--background)] text-[var(--text)]">
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        <ProjectInfo darkMode={darkMode} setDarkMode={setDarkMode} />
        <Requirements darkMode={darkMode} setDarkMode={setDarkMode} />
        <Concept darkMode={darkMode} setDarkMode={setDarkMode} />
        <Implementation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Results darkMode={darkMode} setDarkMode={setDarkMode} />
        <Thesis darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Fixed Logo unten rechts */}
      <img
        src={darkMode ? bhtLogoLight : bhtLogoDark}
        alt="BHT Logo"
        className="fixed bottom-4 right-4 w-48 h-auto select-none pointer-events-none z-50"
      />
    </>
  );
};

export default App;
