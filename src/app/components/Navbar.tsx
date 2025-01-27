"use client";
import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (newLocale: string) => {
    const path = newLocale === "sv" ? "/" : `/${newLocale}`;
    router.push(path);
    setIsLanguageMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex flex-row items-center justify-between h-20 bg-gray-800 text-white px-4 sm:px-8 border-b-2 border-gray-700 z-50">
      {/* Logo */}
      <div className="flex-shrink-0 h-full flex items-center">
        <Link href="/">
          <div className="hover:opacity-80 transition-opacity transform hover:scale-105 duration-300">
            <AnimatedLogo />
          </div>
        </Link>
      </div>

      {/* Mobile Controls */}
      <div className="sm:hidden flex items-center space-x-4">
        {/* Language Switcher (Mobile) */}
        <div className="relative">
          <button
            onClick={toggleLanguageMenu}
            className="text-white focus:outline-none"
            aria-label="Change Language"
            aria-expanded={isLanguageMenuOpen}
            aria-controls="mobile-language-menu"
          >
            <Globe className="w-6 h-6" />
          </button>
          {isLanguageMenuOpen && (
            <div
              id="mobile-language-menu"
              className="absolute top-10 right-0 bg-gray-800 rounded-lg shadow-lg py-2 w-32"
              role="menu"
            >
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("sv")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("sv")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "sv" ? "font-bold text-yellow-400" : ""
                }`}
              >
                Svenska
              </div>
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("en")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("en")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "en" ? "font-bold text-yellow-400" : ""
                }`}
              >
                English
              </div>
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("ar")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("ar")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "ar" ? "font-bold text-yellow-400" : ""
                }`}
              >
                العربية
              </div>
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("es")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("es")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "es" ? "font-bold text-yellow-400" : ""
                }`}
              >
                Español
              </div>
            </div>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation */}
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
          {t("about")}
        </Link>
        <Link
          href="#tjanster"
          className="block sm:inline-block text-lg font-medium hover:text-gray-400 transition-colors duration-300 py-2 sm:py-0 px-4 sm:px-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r from-yellow-400 to-orange-500 hover:after:w-full after:transition-all after:duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("services")}
        </Link>
        <Link
          href="#process"
          className="block sm:inline-block text-lg font-medium hover:text-gray-400 transition-colors duration-300 py-2 sm:py-0 px-4 sm:px-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r from-yellow-400 to-orange-500 hover:after:w-full after:transition-all after:duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("contact")}
        </Link>
        <Link
          href="#kontakt"
          className="block sm:inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mt-4 sm:mt-0 mx-4 sm:mx-0 text-center"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("book")}
        </Link>

        {/* Language Switcher (Desktop) */}
        <div className="relative hidden sm:block">
          <button
            onClick={toggleLanguageMenu}
            className="flex items-center space-x-2 text-white hover:text-gray-400 focus:outline-none"
            aria-label="Change Language"
            aria-expanded={isLanguageMenuOpen}
            aria-controls="desktop-language-menu"
          >
            <Globe className="w-6 h-6" />
            <span className="text-lg font-medium">
              {locale === "sv" ? "Svenska" : locale === "en" ? "English" : locale === "ar" ? "العربية" : "Español"}
            </span>
          </button>
          {isLanguageMenuOpen && (
            <div
              id="desktop-language-menu"
              className="absolute top-10 right-0 bg-gray-800 rounded-lg shadow-lg py-2 w-32"
              role="menu"
            >
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("sv")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("sv")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "sv" ? "font-bold text-yellow-400" : ""
                }`}
              >
                Svenska
              </div>
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("en")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("en")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "en" ? "font-bold text-yellow-400" : ""
                }`}
              >
                English
              </div>
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("ar")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("ar")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "ar" ? "font-bold text-yellow-400" : ""
                }`}
              >
                العربية
              </div>
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => changeLanguage("es")}
                onKeyDown={(e) => e.key === "Enter" && changeLanguage("es")}
                className={`cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                  locale === "es" ? "font-bold text-yellow-400" : ""
                }`}
              >
                Español
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
