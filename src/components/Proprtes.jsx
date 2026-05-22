"use client";

import { useState, useRef } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";
import ViewDetailsButton from "./ViewDetailsButton";
export default function Properties() {

  const { properties, loading, error, page, setPage, totalPages } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const propertySectionRef = useRef(null);

  const itemsPerPage = 150;

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#fff1f4]">

        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#F75270]/20"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#F75270] border-r-[#ff8fa3] animate-spin"></div>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Residential Properties...
        </p>

      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">

        <h2 className="text-2xl font-semibold text-gray-800">
          No Residential Properties Available in Gurgaon
        </h2>

        <p className="text-gray-500 mt-2">
          New residential listings will be updated soon.
        </p>

      </div>
    );
  }

  /* ================= PAGINATION ================= */

  const totalItems = properties.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProperties = properties.slice(startIndex, endIndex);

  return (

    <section id="locations"
      ref={propertySectionRef}
      className="bg-gradient-to-b from-white to-[#fff1f4] px-4 py-16"
    >

      {/* HEADING */}

      <div className="max-w-7xl mx-auto mb-12">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Residential Properties in Gurgaon
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl">
          Explore premium residential properties in Gurgaon including luxury apartments,
          builder floors, and gated societies across prime locations like Golf Course Road,
          Sohna Road, Dwarka Expressway, and New Gurgaon.
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-[#F75270] to-[#ff8fa3] mt-6 rounded-full"></div>
        <div className="mt-8">
          <BHKFilterButtons />
        </div>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT PROPERTY LIST */}

        <div className="lg:col-span-2 space-y-8">

          {currentProperties.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100
              shadow-sm hover:shadow-2xl hover:-translate-y-1
              transition duration-300 overflow-hidden md:h-[250px]"
            >

              <div className="flex flex-col md:flex-row h-full">

                {/* IMAGE */}

                <div className="relative md:w-[35%]">

                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    unoptimized
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-56 md:h-full object-cover"
                  />

                  <span
                    onClick={() => {
                      setSelectedProperty(property.title);
                      setOpen(true);
                    }}
                    className="absolute top-3 left-3
                    bg-[#F75270]
                    text-white text-xs px-4 py-1.5
                    rounded-full
                    shadow-md
                    font-semibold
                    hover:bg-[#ff6f89]
                    hover:shadow-lg
                    hover:scale-105
                    active:scale-95
                    transition-all duration-200
                    cursor-pointer"
                  >
                    {property?.listingType || "Sale"}
                  </span>

                </div>


                {/* DETAILS */}

                <div className="p-5 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold text-gray-900">
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

                  <div className="mt-4 bg-[#fff4f6] border border-[#F75270]/20 rounded-xl px-4 py-3 flex items-center justify-between text-sm">

                    {/* STATUS */}

                    <div className="flex flex-col items-center flex-1">
                      <span className="text-gray-500 text-xs tracking-wide">
                        STATUS
                      </span>
                      <span className="font-semibold text-[#F75270]">
                        {property.status || "Available"}
                      </span>
                    </div>

                    <div className="h-8 w-px bg-[#F75270]/20"></div>

                    {/* TYPE */}

                    <div className="flex flex-col items-center flex-1">
                      <span className="text-gray-500 text-xs tracking-wide">
                        TYPE
                      </span>
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory || "Residential Property"}
                      </span>
                    </div>

                  </div>


                  {/* <p className="text-sm text-gray-500 mt-4 line-clamp-2 leading-relaxed">

                    {property.description ||
                      "Premium residential property in Gurgaon offering modern amenities, prime location, and excellent investment potential."}

                  </p> */}


                  <div className="flex-1"></div>


                  {/* BUTTONS */}

                  <div className="flex gap-3 mt-5">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="flex-1 bg-[#F75270]
                      text-white px-4 py-2
                      rounded-tl-xl rounded-br-xl
                      hover:bg-[#ff6f89]
                      transition
                      text-sm font-medium shadow-sm"
                    >
                      Price on Request
                    </button>
                     <ViewDetailsButton className="flex-1 border border-[#F75270]
                      text-[#F75270]
                      px-4 py-2
                      rounded-tl-xl rounded-br-xl
                      hover:bg-[#F75270]
                      hover:text-white
                      transition text-sm font-medium text-center"

                      slug={property.slug}
                      href={`https://www.dealacres.com/property/${property.slug}`}/>
                    {/* <Link
                      href={`/properties/${property.slug}`}
                      className="flex-1 border border-[#F75270]
                      text-[#F75270]
                      px-4 py-2
                      rounded-tl-xl rounded-br-xl
                      hover:bg-[#F75270]
                      hover:text-white
                      transition text-sm font-medium text-center"
                    >
                      View Details
                    </Link> */}

                  </div>

                </div>

              </div>

            </div>

          ))}


          {/* PAGINATION */}

          <div className="mt-16">

            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={(newPage) => {
                setPage(newPage);

                const yOffset = -90;

                const y =
                  propertySectionRef.current.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });

              }}
            />

          </div>

        </div>


        {/* SIDEBAR */}

        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
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