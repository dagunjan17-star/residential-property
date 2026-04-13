"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Gurgaon", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {

  const [showAll, setShowAll] = useState(false);

  const initialCount = 40;

  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#12001c] pt-16 pb-8 px-4 border-t border-[#F75270]">

      <div className="max-w-7xl mx-auto">

        {/* LOCATIONS */}
{/* 🔥 TOP HEADING */}
<div className="mb-12 ">

  <h2 className="text-2xl sm:text-3xl font-bold text-white">
    Residential Properties in{" "}
    <span className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3] bg-clip-text text-transparent">
      Gurgaon
    </span>
  </h2>

  <p className="text-gray-400 mt-3 max-w-2xl  text-sm sm:text-base">
    Discover premium and affordable residential properties in top Gurgaon locations,
    perfect for families and long-term investment opportunities.
  </p>

  <div className="w-20 h-1 bg-gradient-to-r from-[#F75270] to-[#ff8fa3]  mt-5 rounded-full"></div>

</div>
        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Residential Property Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm">

            {visibleLocations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
                  href={`/residential-property-in-${createSlug(loc)}-gurgaon`}
                  className="block truncate text-gray-300 hover:text-white transition"
                >
                  Residential Property in {loc}
                </Link>

                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
                  text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg
                  z-[9999]
                  pointer-events-none
                "
                >
                  Residential Property in {loc}
                </div>

              </div>

            ))}

            {!showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-white hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-white hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>

        </div>

        {/* BOTTOM */}
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-[#F75270] pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">

    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-gray-400 hover:text-[#F75270] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-400 hover:text-[#F75270] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-[#F75270] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#F75270] transition"
      >
        How It's Work
      </Link>
    </div>

  </div>
</div>
        <div className="border-t border-[#F75270] pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Residential Property In Gurgaon.com | All rights reserved.
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed By -{" "}
            <Link
              href="https://www.parcharmanch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-4"
            >
              Parchar Manch
            </Link>
          </p>

        </div>

      </div>

    </footer>
  );
}