"use client";

import { useEffect, useState, useMemo } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {

  // ✅ ONLY LOCALITY DATA USE
  const { localityData, loading2, error2, fetchByLocality } = useProperty();

  const safeData = Array.isArray(localityData) ? localityData : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // ✅ CORRECT API CALL
  useEffect(() => {
    if (formattedArea) {
      fetchByLocality({
        locality: formattedArea,
        city: "gurgaon",
        propertyType: "1 BHK,2 BHK,3 BHK,4 BHK,5 BHK,6 BHK",
        listingType: "sale",
      });
    }
  }, [formattedArea]);

  /* LOADING */

  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#fff1f4]">

        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#F75270]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#F75270] border-r-[#ff8fa3] animate-spin"></div>
        </div>

        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Residential Property Listings...
        </p>

      </div>
    );
  }

  /* ERROR */

  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-[#fff1f4]">
        <p className="text-red-500 text-lg">
          Something went wrong while loading Residential Property.
        </p>
      </div>
    );
  }

  /* EMPTY */

  if (!safeData || safeData.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#fff1f4]">

        <h2 className="text-2xl font-semibold text-gray-800">
          No Residential Property Available in {formattedArea}
        </h2>

        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>

      </div>
    );
  }

  return (

    <section className="bg-[#fff1f4] py-4">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 gap-6">

          {safeData.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-2xl border border-[#F75270]/10
              shadow-sm hover:shadow-2xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}

              <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto">

                {property?.media?.url ? (

                  <Image
                    src={property.media.url}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />

                ) : (

                  <div className="bg-[#fff4f6] w-full h-full flex items-center justify-center text-[#F75270] text-sm">
                    No Image
                  </div>

                )}

                {/* BADGE */}

                <span
                  onClick={() => {
                    setSelectedProperty(property.title);
                    setOpen(true);
                  }}
                  className="absolute top-3 left-3
                  bg-[#F75270]
                  text-white text-xs px-3 py-1
                  rounded-full
                  shadow font-medium cursor-pointer"
                >
                  {property.propertyType || "Office"}
                </span>

              </div>

              {/* CONTENT */}

              <div className="p-6 flex-1 flex flex-col">

                <h2 className="text-base font-semibold text-gray-900">
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

                {/* INFO BAR */}

                <div className="mt-4 bg-[#fff4f6] border border-[#F75270]/20 rounded-xl px-4 py-3 text-xs flex items-center justify-between">

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">STATUS</span>
                    <span className="font-semibold text-[#F75270]">
                      {property.status || "Available"}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-[#F75270]/20"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">TYPE</span>
                    <span className="font-semibold text-gray-900">
                      {property.propertyCategory || "Office Space"}
                    </span>
                  </div>

                </div>

                {/* <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description ||
                    "Premium office space available with modern amenities and excellent connectivity."}
                </p> */}

                <div className="flex-1"></div>

                {/* BUTTONS */}

                <div className="mt-5 flex justify-between items-center gap-4">

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
                      text-white px-4 py-2
                      rounded-tl-xl rounded-br-xl
                      text-sm font-medium
                      hover:from-[#ff6f89] hover:to-[#F75270]
                      transition cursor-pointer"
                    >
                      Price On Call
                    </button>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="border border-[#F75270] text-[#F75270]
                      px-4 py-2 text-sm
                      rounded-tl-xl rounded-br-xl
                      hover:bg-[#F75270]
                      hover:text-white transition"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />

    </section>
  );
}