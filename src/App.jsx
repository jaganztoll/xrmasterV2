import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';
import Concept from './components/Concept';
import Results from './components/Results';
import Thesis from './components/Thesis';
import Footer from './components/Footer';

import { useState, useEffect } from "react";
import { Element } from 'react-scroll';

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
        <Concept darkMode={darkMode} setDarkMode={setDarkMode} />
        <Results darkMode={darkMode} setDarkMode={setDarkMode} />
        <Thesis darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};

export default App;
