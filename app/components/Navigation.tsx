import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Advertiser", href: "#advertiser" },
  { label: "Publisher", href: "#publisher" },
  { label: "Contact Us", href: "#contact" },
  { label: "Join Us", href: "#joinus" },
];
const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
          {menuItems.map(({ label, href }) => (
            <a key={href} href={href} className="hover:text-green-600">
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu panel */}
      <nav
        className={`sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4 text-gray-900 dark:text-white">
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleMenuItemClick}
                className="block px-3 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileMenu;
