"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Testimonials", path: "#testimonials" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="flex lg:py-6 flex-wrap items-center justify-between mx-auto px-6 z-20 fixed top-0 left-0 right-0 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-xl">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform"
        >
          Al-Hasan Sarkar
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center p-3 border rounded border-gray-500 text-gray-300 hover:text-white hover:border-white transition-all"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="group">
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors tracking-wider"
                />
                <div className="h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {navbarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 overflow-y-auto flex flex-col items-center justify-start pt-24 gap-8 text-white z-30 transition-all duration-300">
          <button
            onClick={() => setNavbarOpen(false)}
            className="absolute top-8 right-8 p-3 border rounded bg-gray-800 text-white hover:text-gray-300 hover:border-white"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={handleLinkClick} // Close menu on link click
              className="text-3xl font-semibold tracking-wide hover:underline hover:scale-105 transition-transform"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
