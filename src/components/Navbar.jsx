import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import logoLight from "../assets/juliangruber_light.png";
import logoDark from "../assets/juliangruber_dark.png";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

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
              className="h-15 w-auto select-none"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="projectinfo"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium text-2xl cursor-pointer"
          >
            Projektinfo
          </Link>
          <Link
            to="requirements"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium text-2xl cursor-pointer"
          >
            Anforderungen
          </Link>
          <Link
            to="concept"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium text-2xl cursor-pointer"
          >
            Konzept
          </Link>
          <Link
            to="implementation"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium text-2xl cursor-pointer"
          >
            Umsetzung
          </Link>
          <Link
            to="results"
            smooth={true}
            duration={500}
            className="hover:text-[var(--accent)] font-quicksand font-medium text-2xl cursor-pointer"
          >
            Ergebnisse
          </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
