"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";

export default function PropertyTypePage() {

  const { propertyType } = useParams();

  const {
    properties,
    loading3,
    error3,
    fetchPropertiesByType,
    page,
    totalPages
  } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const propertySectionRef = useRef(null);

  /* FETCH BY TYPE */

  useEffect(() => {
    if (propertyType) {
      fetchPropertiesByType(`${propertyType} BHK`, 1);
    }
  }, [propertyType]);

  useEffect(() => {
    if (!loading3 && properties.length > 0) {
      propertySectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [properties]);

  /* LOADING */

  if (loading3) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f7f0ff]">

        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#B500B2]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#B500B2] border-r-[#8100D1] animate-spin"></div>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading {propertyType} BHK Houses...
        </p>

      </div>
    );
  }

  if (error3) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">

        <h2 className="text-2xl font-semibold text-[#8100D1]">
          No {propertyType} BHK Houses Available in Gurgaon
        </h2>

        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>

      </div>
    );
  }

  return (

    <section
      ref={propertySectionRef}
      className="bg-[#f7f0ff] px-4 py-16"
    >

      {/* HEADING */}

      <div className="max-w-7xl mx-auto mb-12">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {propertyType} BHK Houses for Sale in Gurgaon
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl">
          Discover premium {propertyType} BHK houses available in prime Gurgaon
          sectors including Golf Course Road, Dwarka Expressway, Sohna Road
          and New Gurgaon.
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-[#B500B2] to-[#8100D1] mt-6 rounded-full"></div>

        <div className="mt-8">
          <BHKFilterButtons />
        </div>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT LIST */}

        <div className="lg:col-span-2 space-y-8">

          {properties.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
            >

              <div className="flex flex-col md:flex-row">

                {/* IMAGE */}

                <div className="relative md:w-[35%]">

                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />

                  <span
                    onClick={() => {
                      setSelectedProperty(property.title);
                      setOpen(true);
                    }}
                    className="absolute top-3 left-3
                    bg-gradient-to-r from-[#B500B2] to-[#8100D1]
                    text-white text-xs px-3 py-1
                    rounded-tl-xl rounded-br-xl
                    shadow font-medium cursor-pointer"
                  >
                    {property.propertyType}
                  </span>

                </div>

                {/* DETAILS */}

                <div className="p-5 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* INFO BAR */}

                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 text-sm">

                    <div>
                      <span className="text-gray-400 uppercase text-xs">
                        Type:
                      </span>{" "}
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300"></div>

                    <div>
                      <span className="text-gray-400 uppercase text-xs">
                        Status:
                      </span>{" "}
                      <span className="font-semibold text-[#8100D1]">
                        {property.status || "Ready to Move"}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-500 mt-4 line-clamp-2">
                    {property.description ||
                      "Luxury house available in Gurgaon with modern amenities and excellent connectivity."}
                  </p>

                  <div className="flex-1"></div>

                  {/* BUTTONS */}

                  <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">

                    <div className="flex gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-gradient-to-r from-[#B500B2] to-[#8100D1]
                        text-white px-6 py-2
                        rounded-tl-xl rounded-br-xl
                        hover:from-[#8100D1] hover:to-[#B500B2]
                        transition cursor-pointer"
                      >
                        Price On Call
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#B500B2]
                        text-[#8100D1]
                        px-6 py-2
                        rounded-tl-xl rounded-br-xl
                        hover:bg-gradient-to-r hover:from-[#B500B2] hover:to-[#8100D1]
                        hover:text-white
                        transition text-center"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* PAGINATION */}

          <div className="mt-16">

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => {
                fetchPropertiesByType(`${propertyType} BHK`, newPage);
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