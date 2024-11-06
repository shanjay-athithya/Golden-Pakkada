"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiCoffee, FiInfo, FiMail } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-pgreen shadow-lg" : "bg-pgreen"
      } ${isScrolled ? "text-byellow" : "text-byellow"}`}
    >
      <nav className=" mx-auto p-0  flex justify-between items-center">
        <div className="flex  items-center space-x-4">
          {/* Profile Picture */}
          <Link
            href="/"
            className={`hover:text-white transition-colors flex items-center ${
              isScrolled ? "text-byellow" : "text-byellow"
            }`}
          >
            <img
              src="images/logo2.png"
              alt="Profile Picture"
              className="lg:w-40 lg:h-24 h-20 w-32  bg-white object-contain mr-4" // Adjust the size as needed
            />
          </Link>
        </div>

        <div className="hidden p-8 md:flex space-x-6 font-semibold">
          <Link
            href="/"
            className={`hover:text-byellow transition-colors flex items-center ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <FiHome className="mr-2" /> Home
          </Link>
          <Link
            href="/menu"
            className={`hover:text-byellow transition-colors flex items-center ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <FiCoffee className="mr-2" /> Menu
          </Link>
          <Link
            href="/about"
            className={`hover:text-byellow transition-colors flex items-center ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <FiInfo className="mr-2" /> About Us
          </Link>
          <Link
            href="/contact"
            className={`hover:text-byellow transition-colors flex items-center ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <FiMail className="mr-2" /> Contact
          </Link>
        </div>

        <div className="md:hidden ml-4 font-semibold">
          <button
            onClick={toggleMenu}
            className={`text-3xl mt-3 mr-4  focus:outline-none ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white text-pred font-bold`}
      >
        <nav className="flex flex-col items-center font-bold  py-4 space-y-4">
          <Link
            href="/"
            className="hover:text-pastelYellow transition-colors flex items-center"
            onClick={toggleMenu}
          >
            <FiHome className="mr-2" /> Home
          </Link>
          <Link
            href="/menu"
            className="hover:text-pastelYellow transition-colors flex items-center"
            onClick={toggleMenu}
          >
            <FiCoffee className="mr-2" /> Menu
          </Link>
          <Link
            href="/about"
            className="hover:text-pastelYellow transition-colors flex items-center"
            onClick={toggleMenu}
          >
            <FiInfo className="mr-2" /> About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-pastelYellow transition-colors flex items-center"
            onClick={toggleMenu}
          >
            <FiMail className="mr-2" /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
