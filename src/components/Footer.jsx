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

 const [showAll, setShowAll] = useState({
  sale: false,
  rent: false,
});

const initialCount = 14;

const saleLocations = showAll.sale
  ? locations
  : locations.slice(0, initialCount);

const rentLocations = showAll.rent
  ? locations
  : locations.slice(0, initialCount);

const toggleShowAll = (key) => {
  setShowAll((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};;

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
            Explore Residential Properties for Sale in Prime Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm">

            {saleLocations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
                  href={`/residential-property-for-sale-in-${createSlug(loc)}-gurgaon`}
                  className="block truncate text-gray-300 hover:text-white transition"
                >
                  Residential Property for Sale in {loc}
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
                  Residential Property for Sale in {loc}
                </div>

              </div>

            ))}

            {locations.length > initialCount && (
  <div>
    <span
      onClick={() => toggleShowAll("sale")}
      className="block cursor-pointer text-[#F75270] hover:underline"
    >
      {showAll.sale ? "View Less..." : "View More..."}
    </span>
  </div>
)}

          </div>

        </div>
        <div className="mb-10">

          <h3 className="text-lg font-semibold text-white mb-6">
            Explore Residential Properties for Rent in Prime Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm">

            {rentLocations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
                  href={`/residential-property-for-rent-in-${createSlug(loc)}-gurgaon`}
                  className="block truncate text-gray-300 hover:text-white transition"
                >
                  Residential Property for Rent in {loc}
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
                  Residential Property for Rent in {loc}
                </div>

              </div>

            ))}

          {locations.length > initialCount && (
  <div>
    <span
      onClick={() => toggleShowAll("rent")}
      className="block cursor-pointer text-[#F75270] hover:underline"
    >
      {showAll.rent ? "View Less..." : "View More..."}
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