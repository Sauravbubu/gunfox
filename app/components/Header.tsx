"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Optional: Close menu on resize if switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${
        isDarkMode ? "bg-gray-950/80" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-wrap justify-between items-center font-sans">
        {/* Logo */}
        <div className="px-3 py-1">
          <img
            src={
              isDarkMode
                ? "/avengers_media_white_text.png"
                : "/avengers_media_black_text.png"
            }
            alt="Logo"
            className="h-8 md:h-10 w-auto transition duration-300"
          />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden focus:outline-none ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row md:items-center text-[17px] font-medium tracking-wide ${
            isDarkMode ? "text-white" : "text-gray-900"
          } ${menuOpen ? "flex" : "hidden"} md:flex`}
        >
          {[
            { label: "Home", href: "#" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Advertiser", href: "#advertiser" },
            { label: "Publisher", href: "#publisher" },
            { label: "Contact Us", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className={`font-semibold ${
              isDarkMode
                ? "text-pink-300 hover:text-pink-200"
                : "text-pink-500 hover:text-pink-400"
            } transition`}
          >
            Join Us
          </a>
          <button
            onClick={toggleDarkMode}
            className={`ml-4 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
