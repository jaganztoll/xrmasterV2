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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Menü schließen nach Klick
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-colors duration-300 ${scrolled ? "bg-[var(--primary)] bg-opacity-80 shadow-md" : "bg-transparent"
        } text-[var(--text)] selection:bg-[var(--accent)]`}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div>
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <img
              src={darkMode ? logoLight : logoDark}
              alt="Logo"
              className="h-12 w-auto select-none"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {["projectinfo", "requirements", "concept", "implementation", "results"].map((id) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              className="hover:text-[var(--accent)] font-quicksand font-medium text-2xl cursor-pointer"
            >
              {id === "projectinfo" && "Projektinfo"}
              {id === "requirements" && "Anforderungen"}
              {id === "concept" && "Konzept"}
              {id === "implementation" && "Umsetzung"}
              {id === "results" && "Ergebnisse"}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:bg-[var(--accent)] p-2 rounded-full"
          >
            {darkMode ? (
              <HiSun className="text-[var(--text)] text-2xl" />
            ) : (
              <HiMoon className="text-[var(--text)] text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[var(--primary)] bg-opacity-95 text-[var(--text)] space-y-6 py-8 px-4 absolute top-full w-full shadow-md">
          {["projectinfo", "requirements", "concept", "implementation", "results"].map((id) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="text-xl font-medium font-quicksand hover:text-[var(--accent)] cursor-pointer"
            >
              {id === "projectinfo" && "Projektinfo"}
              {id === "requirements" && "Anforderungen"}
              {id === "concept" && "Konzept"}
              {id === "implementation" && "Umsetzung"}
              {id === "results" && "Ergebnisse"}
            </Link>
          ))}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="hover:bg-[var(--accent)] p-2 rounded-full"
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
