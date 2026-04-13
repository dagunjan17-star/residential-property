"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function PropertyCard({ property }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-2xl border border-gray-100
        shadow-sm hover:shadow-2xl hover:-translate-y-2
        transition duration-300 overflow-hidden flex flex-col h-full"
      >

        {/* IMAGE */}
        <div className="relative w-full h-48 overflow-hidden">

          <Image
            src={property?.media?.url || "/no-image.png"}
            alt={property.title}
            width={400}
            height={250}
            className="w-full h-full object-cover"
          />

          {/* TYPE BADGE */}
          <span
            onClick={() => setOpen(true)}
            className="absolute top-3 left-3
            bg-[#F75270]
            text-white text-xs px-3 py-1
            rounded-full
            shadow font-medium cursor-pointer"
          >
            {property.listingType || "sale"}
          </span>

        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">

          <h2 className="text-base font-semibold text-gray-900 line-clamp-2">
            {property.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>

  {property.locality}
</p>

          {/* STATS */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">

            <div className="bg-gray-50 rounded-lg p-2">

              <span className="text-gray-400 uppercase tracking-wide block mb-1">
                Type
              </span>

              <span className="font-semibold text-gray-900 text-sm">
                {property.propertyCategory || "Office Space"}
              </span>

            </div>

            <div className="bg-gray-50 rounded-lg p-2">

              <span className="text-gray-400 uppercase tracking-wide block mb-1">
                Status
              </span>

              <span className="font-semibold text-[#F75270] text-sm">
                {property.status || "Available"}
              </span>

            </div>

          </div>

          {/* DESCRIPTION */}

          {/* <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
            {property.description ||
              "Premium office space available in Gurgaon with excellent connectivity and strong investment potential."}
          </p> */}

          <div className="flex-1" />

          {/* PRICE + BUTTONS */}

          <div className="mt-4 pt-4 border-t border-gray-100">

            <div className="flex gap-3">

              {/* CONTACT BUTTON */}

              <button
                onClick={() => setOpen(true)}
                className="flex-1
                bg-[#F75270]
                text-white py-2
                rounded-tl-xl rounded-br-xl
                text-sm font-medium
                hover:bg-[#ff6f89]
                transition shadow-md cursor-pointer"
              >
                Price On Call
              </button>

              {/* VIEW DETAILS */}

              <Link
                href={`/properties/${property.slug}`}
                className="flex-1 border border-[#F75270]
                text-[#F75270] py-2
                rounded-tl-xl rounded-br-xl
                text-sm font-medium text-center
                hover:bg-[#F75270]
                hover:text-white
                transition cursor-pointer"
              >
                View Details
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* CONTACT POPUP */}

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={property.title}
      />

    </>
  );
}