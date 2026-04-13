"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "How It's Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-[72px]">

            {/* ================= LOGO ================= */}
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className="text-xl sm:text-2xl font-bold tracking-wide 
              bg-gradient-to-r from-[#F75270] to-[#ff8fa3] 
              bg-clip-text text-transparent"
            >
             DA
            </Link>

            {/* ================= DESKTOP LINKS ================= */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative text-lg font-medium text-gray-700 transition duration-300 group hover:text-[#F75270]"
                >
                  {link.name}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                  bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
                  transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* ================= CONTACT BUTTON ================= */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 font-medium text-white
                bg-[#F75270]
                hover:bg-[#ff6f89]
                transition duration-300 shadow-lg
                rounded-tl-xl rounded-br-xl"
              >
                Contact Now
              </Link>
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#F75270]"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed top-[72px] left-0 w-full z-40 md:hidden bg-white shadow-xl border-t border-gray-200">
          <div className="flex flex-col gap-6 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-[#F75270]"
              >
                {link.name}
              </Link>
            ))}

            {/* ================= MOBILE CONTACT BUTTON ================= */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center px-6 py-3 font-semibold text-white
              bg-[#F75270]
              hover:bg-[#ff6f89]
              transition duration-300 shadow-lg
              rounded-tl-xl rounded-br-xl"
            >
              Contact Now
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;