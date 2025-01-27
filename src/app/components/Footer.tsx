"use client";
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react"; // Removed GitHub, LinkedIn, Twitter, YouTube
import { useTranslations } from "next-intl"; // For translations

export default function Footer() {
  const t = useTranslations("footer"); // Translation key for footer

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          {/* Left side: Logo and copyright */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-4">
              <Link href="/" aria-label="Go to homepage">
                <div className="hover:opacity-80 transition-opacity transform hover:scale-105 duration-300">
                  {/* Replace this with your logo */}
                  <h1 className="text-3xl font-bold text-blue-500">{t("companyName")}</h1>
                </div>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {t("companyName")}. All rights reserved.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-8 mt-6 sm:mt-0">
            <Link href="#om-oss" className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              {t("aboutUs")}
            </Link>
            <Link href="#tjanster" className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              {t("services")}
            </Link>
            <Link href="#kontakt" className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
              {t("contact")}
            </Link>
          </div>

          {/* Right side: Social media links */}
          <div className="flex space-x-6 mt-6 sm:mt-0">
            <a href="https://www.facebook.com/LackeaABSE/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/lackeaab/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors duration-300" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B460735757246&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Phone className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
