import { useState, useEffect } from "react";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";
import logoLight from "../assets/juliangruber_light.png";
import logoDark from "../assets/juliangruber_dark.png";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-colors duration-300 ${scrolled
        ? "bg-[var(--primary)] bg-opacity-80 shadow-md"
        : "bg-transparent"
        } text-[var(--text)] selection:bg-[var(--accent)]`}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img
              src={darkMode ? logoLight : logoDark}
              alt="Logo"
              className="h-10 w-auto select-none"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="projectinfo"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
          >
            Projektinfo
          </Link>
          <Link
            to="concept"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
          >
            Konzept
          </Link>
          <Link
            to="results"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
          >
            Ergebnisse
          </Link>
          <Link
            to="thesis"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
          >
            Download
          </Link>
          <a
            href="https://juliangruber.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
          >
            Portfolio
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:bg-[var(--accent)] p-2 rounded-full cursor-pointer"
          >
            {darkMode ? (
              <HiSun className="text-[var(--text)] text-2xl" />
            ) : (
              <HiMoon className="text-[var(--text)] text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiXMark className="text-3xl" />
            ) : (
              <HiBars3 className="text-3xl cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col items-center space-y-4 px-6 py-6 bg-[var(--primary)] shadow-md md:hidden z-40">
          <Link
            to="projectinfo"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Projektinfo
          </Link>
          <Link
            to="concept"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Konzept
          </Link>
          <Link
            to="results"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Ergebnisse
          </Link>
          <Link
            to="thesis"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Download
          </Link>
          <a
            href="https://juliangruber.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] font-quicksand font-medium cursor-pointer"
          >
            Portfolio
          </a>

          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="hover:bg-[var(--accent)] p-2 rounded-full cursor-pointer"
          >
            {darkMode ? (
              <HiSun className="text-[var(--text)] text-2xl" />
            ) : (
              <HiMoon className="text-[var(--text)] text-2xl" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
