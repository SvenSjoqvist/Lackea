"use client"; // Required for interactivity (e.g., useState)
import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo"; // Adjust the import path based on your file structure
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex flex-row items-center justify-between h-20 bg-gray-800 text-white px-4 sm:px-8 border-b-2 border-gray-700 z-50">
      {/* Logo aligned to the left */}
      <div className="flex-shrink-0 h-full flex items-center">
        <Link href="/">
          <div className="hover:opacity-80 transition-opacity transform hover:scale-105 duration-300">
            <AnimatedLogo />
          </div>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Navigation links aligned to the right */}
      <nav
        className={`${
          isMenuOpen
            ? "block absolute top-20 left-0 w-full bg-gray-800 py-4"
            : "hidden"
        } sm:flex sm:items-center sm:space-x-8`}
      >
        <Link
          href="#om-oss"
          className="block sm:inline-block text-lg font-medium hover:text-gray-400 transition-colors duration-300 py-2 sm:py-0 px-4 sm:px-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r from-yellow-400 to-orange-500 hover:after:w-full after:transition-all after:duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Om Oss
        </Link>
        <Link
          href="#tjanster"
          className="block sm:inline-block text-lg font-medium hover:text-gray-400 transition-colors duration-300 py-2 sm:py-0 px-4 sm:px-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r from-yellow-400 to-orange-500 hover:after:w-full after:transition-all after:duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Tjänster
        </Link>
        <Link
          href="#kontakt"
          className="block sm:inline-block text-lg font-medium hover:text-gray-400 transition-colors duration-300 py-2 sm:py-0 px-4 sm:px-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r from-yellow-400 to-orange-500 hover:after:w-full after:transition-all after:duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Kontakt
        </Link>
        {/* CTA Button for Booking */}
        <Link
          href="#book"
          className="block sm:inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mt-4 sm:mt-0 mx-4 sm:mx-0 text-center"
          onClick={() => setIsMenuOpen(false)}
        >
          Boka Nu
        </Link>
      </nav>
    </div>
  );
}