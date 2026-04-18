"use client";

import ContactPopup from "@/components/ContactPopup";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useProperty } from "@/contextapi/propertycontext";

export default function PropertyDetails({ propertyy }) {

  const [open, setOpen] = useState(false);

  const { allProperties } = useProperty(); // ✅ correct
  const [relatedLoading, setRelatedLoading] = useState(true);

  /* FORMAT AREA */

  const formatArea = (area, unit) => {
    if (!area) return "—";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  /* SHUFFLE */

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
const relatedProperties = useMemo(() => {
  if (!allProperties?.length) return [];

  let filtered = allProperties.filter(
    (p) =>
      p._id !== propertyy._id &&
      p.city &&
      propertyy.city &&
      p.city.toLowerCase().includes(propertyy.city.toLowerCase())
  );

  // 🔥 fallback if less data
  if (filtered.length < 30) {
    filtered = allProperties.filter((p) => p._id !== propertyy._id);
  }

  const shuffled = [...filtered].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 30);
}, [allProperties, propertyy]);
 


  useEffect(() => {
  console.log("ALL PROPERTIES:", allProperties.length);
    setRelatedLoading(false);
  
}, [allProperties]);
  return (

    <div className="bg-[#fff1f4] text-gray-900 px-4 sm:px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-10 md:gap-14 items-start">

          {/* IMAGE */}

          <div className="relative w-full h-[260px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">

            {propertyy?.media?.url ? (

              <Image
                src={propertyy.media.url}
                unoptimized
                alt={propertyy?.title}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
              />

            ) : (

              <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
                No Image Available
              </div>

            )}

          </div>

          {/* RIGHT CONTENT */}

          <div className="flex flex-col justify-between h-full">

            <div>

              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {propertyy?.title}
              </h1>

              <p className="text-gray-500 mt-2">
                {propertyy?.locality}
              </p>

              {/* META GRID */}

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6 text-sm border-t border-gray-200 pt-6">

                <Meta label="Category" value={propertyy?.propertyCategory} />
                <Meta label="Property Type" value={propertyy?.propertyType} />
                <Meta label="Listing Type" value={propertyy?.listingType} />
                <Meta label="City" value={propertyy?.city} />
                <Meta label="State" value={propertyy?.state} />

                {propertyy?.bedrooms > 0 && (
                  <Meta label="Bedrooms" value={propertyy?.bedrooms} />
                )}

                {propertyy?.bathrooms > 0 && (
                  <Meta label="Bathrooms" value={propertyy?.bathrooms} />
                )}

              </div>

            </div>

            {/* BUTTON */}

            <div className="mt-8">

              <button
                onClick={() => setOpen(true)}
                className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
                hover:from-[#ff6f89] hover:to-[#F75270]
                text-white px-8 py-3 rounded-full
                text-sm font-medium shadow-lg transition"
              >
                Contact for Residential Property Details
              </button>

            </div>

          </div>

        </div>

        {/* ================= DESCRIPTION ================= */}

        <section className="mt-16 md:mt-20 border-t border-gray-200 pt-10">

          <h2 className="text-xl font-semibold text-gray-900">
            Residential Property Description
          </h2>

          <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed max-w-4xl">

            {propertyy?.description2?.length > 0 ? (
              propertyy.description2.map((text, i) => (
                <p key={i}>{text}</p>
              ))
            ) : (
              <p>No additional description available.</p>
            )}

          </div>

        </section>

        {/* ================= RELATED ================= */}
        {relatedProperties.length > 0 && (

          <section className="mt-20 md:mt-24">

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
              Similar Properties
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {relatedProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}

            </div>

          </section>

        )}

        

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={propertyy?.title}
      />

    </div>
  );
}

/* ================= META ================= */

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-gray-400 text-xs uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-1 font-medium text-gray-900">
        {value || "—"}
      </div>
    </div>
  );
}

