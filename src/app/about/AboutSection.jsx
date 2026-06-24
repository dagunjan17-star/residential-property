"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerSection from "./DisclaimerSection";
export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#fff1f4] px-4 py-20">
      <div className="max-w-7xl mx-auto">
<div className="py-3">
        <Breadcrumb/>
      </div>
        {/* HERO */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}

          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

              About{" "}
              <span className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3] bg-clip-text text-transparent">
                Residential Properties in Gurgaon
              </span>

            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">

              Looking for your dream home in Gurgaon? Our platform brings together
              verified residential property listings including apartments, builder floors,
              villas, and gated societies across the most sought-after sectors of Gurgaon.

            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/"
                className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
                text-white px-6 py-3
                rounded-tl-xl rounded-br-xl
                font-medium hover:from-[#ff6f89] hover:to-[#F75270]
                transition shadow-md"
              >
                Browse All Properties
              </Link>

              <Link
                href="/contact"
                className="border border-[#F75270] text-[#F75270]
                px-6 py-3 rounded-tl-xl rounded-br-xl
                font-medium hover:bg-[#F75270]
                hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* IMAGE */}

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Residential Property in Gurgaon"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          </div>

        </div>


        {/* MISSION */}

        <div className="mb-28 max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">

            Gurgaon is one of the fastest-growing residential hubs in India,
            known for modern infrastructure, premium housing societies, and
            excellent connectivity. Our mission is to simplify the process of
            buying residential properties by providing a trusted platform
            where homebuyers and investors can explore the best options.

          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">

            From affordable homes in emerging sectors to luxury apartments
            on Golf Course Road, Sohna Road, Dwarka Expressway, and New Gurgaon —
            we cover every residential segment so buyers can find the perfect home
            for their lifestyle and investment goals.

          </p>

        </div>


        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#F75270]/10 text-center">
            <h3 className="text-4xl font-bold text-[#F75270]">
              3000+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Residential Properties Listed
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#F75270]/10 text-center">
            <h3 className="text-4xl font-bold text-[#F75270]">
              400+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Housing Projects & Societies
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#F75270]/10 text-center">
            <h3 className="text-4xl font-bold text-[#F75270]">
              8000+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Happy Homebuyers Served
            </p>
          </div>

        </div>


        {/* WHY US */}

        <div className="mb-28">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#F75270]/10">
              <h3 className="font-semibold text-lg text-[#F75270] mb-3">
                Verified Property Listings
              </h3>
              <p className="text-gray-600 text-sm">
                Every property is verified to ensure buyers explore only genuine
                residential options in Gurgaon.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#F75270]/10">
              <h3 className="font-semibold text-lg text-[#F75270] mb-3">
                Prime Residential Locations
              </h3>
              <p className="text-gray-600 text-sm">
                We focus on homes located in Gurgaon’s top sectors with excellent
                connectivity, lifestyle amenities, and future growth potential.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#F75270]/10">
              <h3 className="font-semibold text-lg text-[#F75270] mb-3">
                Expert Property Advisors
              </h3>
              <p className="text-gray-600 text-sm">
                Our experts guide you in choosing the right home based on budget,
                location, and long-term investment value.
              </p>
            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
        text-white rounded-3xl p-16 text-center shadow-2xl">

          <h2 className="text-3xl font-bold mb-4">
            Find Your Dream Home in Gurgaon
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">

            Browse verified residential listings across Gurgaon’s prime sectors
            including Golf Course Road, Sohna Road, Dwarka Expressway, and New Gurgaon.

          </p>

        </div>

      </div>
      <DisclaimerSection/>
    </section>
  );
}