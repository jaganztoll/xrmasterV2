import React from 'react';
import bhtDark from '../assets/bhtlogodark.png';
import bhtLight from '../assets/bhtlogolight.png';

const Footer = ({ darkMode }) => {
  return (
    <footer className="w-full py-2 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <div className="max-w-4xl mx-auto text-center">
        © 2025 Julian Gruber
        <img
          src={darkMode ? bhtLight : bhtDark}
          alt="BHT Logo"
          className="h-14 w-auto mx-auto inline select-none align-middle"
        />
      </div>
    </footer>
  );
};

export default Footer;
