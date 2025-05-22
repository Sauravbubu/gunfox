import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // example icons for menu toggle

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking a menu item
  const handleMenuItemClick = () => setIsMenuOpen(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">Brand</div>

        {/* Hamburger button - visible only on small screens */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu - hidden on small screens */}
        <nav className="hidden sm:flex space-x-8 text-gray-900 dark:text-white">
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>
      </div>

      {/* Mobile menu panel */}
      <nav
        className={`sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4 text-gray-900 dark:text-white">
          <li>
            <a
              href="#services"
              onClick={handleMenuItemClick}
              className="block px-3 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleMenuItemClick}
              className="block px-3 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleMenuItemClick}
              className="block px-3 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileMenu;
