import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Abhinay
          </span>
          <span className="text-emerald-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a
              href="#hero"
              className="hover:text-emerald-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-emerald-600 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-emerald-600 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-emerald-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-emerald-600 transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="https://abhinayrana.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-emerald-600"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-sm bg-white/95 backdrop-blur-lg border-t border-emerald-100">
          <li>
            <a
              href="#hero"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-emerald-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-emerald-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-emerald-600"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-emerald-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-emerald-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="https://abhinayrana.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-emerald-600"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-emerald-600"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
