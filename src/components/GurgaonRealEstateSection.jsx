"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What are the main types of residential property available in Gurgaon?",
    answer:
      "Gurgaon offers independent houses, builder floors, 2D and 3D row houses, affordable and mid-segment apartments, premium and luxury apartments, serviced apartments, studio apartments, and integrated township units.",
  },
  {
    question:
      "Which residential areas in Gurgaon have the best infrastructure?",
    answer:
      "DLF Phase 1-5, Sushant Lok, Golf Course Road, South City, Nirvana Country, and Emaar sectors rank highest for infrastructure quality including roads, water supply, power backup, green areas, and social amenities.",
  },
  {
    question:
      "How has Gurgaon's residential property market performed in the last 5 years?",
    answer:
      "Gurgaon's residential property market has seen 12-20% annual appreciation in luxury segments and 8-12% in mid-segment areas over 2020-2025. Post-COVID demand surge, infrastructure investment, and corporate expansion are key drivers.",
  },
  {
    question:
      "What is GMDA and how does it affect residential property in Gurgaon?",
    answer:
      "GMDA (Gurugram Metropolitan Development Authority) is the city-planning body responsible for Gurgaon's urban development, infrastructure, and zoning. GMDA decisions on land use directly impact property values and development permissions.",
  },
  {
    question:
      "Are there residential properties in Gurgaon near international schools?",
    answer:
      "Yes, many residential developments are located near premier international schools like GD Goenka, The Shriram Millennium School, Pathways, Heritage Xperiential School, and Scottish High International School across different sectors.",
  },
  {
    question:
      "What is the impact of Dwarka Expressway on Gurgaon residential property?",
    answer:
      "The opening of Dwarka Expressway has dramatically boosted residential property prices in Sectors 99-115, improved connectivity to Delhi and the airport, and unlocked a new residential corridor attracting major developers and buyers.",
  },
  {
    question:
      "How do I evaluate a residential property's future appreciation potential in Gurgaon?",
    answer:
      "Consider proximity to planned metro stations, upcoming commercial developments, highway connectivity, school and hospital access, developer reputation, micro-market supply-demand balance, and Gurgaon's master plan zoning for the area.",
  },
  {
    question:
      "Is residential property in Gurgaon affordable for middle-class buyers?",
    answer:
      "Yes. Areas like New Gurgaon, Sectors 82-95, and affordable housing projects along Sohna Road and Dwarka Expressway offer residential property in the ₹30-60 lakh range, well within reach for middle-class homebuyers with home loan support.",
  },
  {
    question:
      "How do I check if a residential project in Gurgaon is RERA registered?",
    answer:
      "Visit the HRERA website (hrera.org.in) and search by project name or developer name to verify RERA registration, approved plans, declared possession dates, and complaint history.",
  },
  {
    question:
      "What factors make Gurgaon's residential property market unique in India?",
    answer:
      "Gurgaon's unique factors include its role as India's largest private sector employment hub, proximity to IGI Airport, fastest growing luxury real estate market, presence of iconic developer brands, and consistently strong rental market driven by corporate demand.",
  },
];

export default function GurgaonRealEstateSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
   <section className="relative overflow-hidden bg-white py-10 px-4 sm:px-6">

  {/* Background Lights */}
  <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#F75270]/10 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#F75270]/10 blur-3xl" />

  {/* Border Circles */}
  <div className="absolute top-16 left-10 h-24 w-24 rounded-full border border-[#F75270]/20" />

  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#F75270]/10" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Main Content Box */}
    <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/70 p-8 md:p-14 shadow-[0_20px_60px_rgba(0,70,255,0.08)]">

      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-gray-900 max-w-5xl">
        About
        <span className="text-[#F75270]">
          {" "}Gurgaon Real Estate
        </span>
      </h2>

      {/* Paragraphs */}
      <div className="mt-8 space-y-7">

        <p className="text-lg leading-9 text-gray-600">
Gurgaon's residential property market is one of the most dynamic, deep, and diverse in all of South Asia. Spanning over 730 sq km with multiple well-defined micro-markets, the city offers residential property options that cater to virtually every demographic. Old Gurgaon sectors (1-57) form the original residential backbone, featuring independent houses, builder floors, and low-rise societies in a mature urban environment. New Gurgaon (Sectors 58-115) and the areas along Dwarka Expressway represent the modern residential frontier — with high-rise towers, integrated townships, and smart city infrastructure shaping tomorrow's Gurgaon. Key residential property zones include Golf Course Road (ultra-premium luxury), Sohna Road (mid to premium), DLF Cyber City periphery (corporate executive housing), Palam Vihar (affordable to mid), and New Gurgaon (affordable to mid-premium). Average residential property prices in Gurgaon start at ₹4,000-5,000 per sq ft in peripheral areas and rise to ₹50,000+ per sq ft in DLF The Camellias — one of India's most expensive addresses. Gurgaon's residential real estate market is supported by a deep institutional ecosystem of home loan providers, professional property management companies, and RERA-enforced developer accountability — making it one of India's most transparent and investor-friendly residential markets.        </p>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-14">

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>

        <p className="mt-2 text-gray-500">
          Everything you need to know before renting a flat in Gurgaon.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-[#F75270]/30 shadow-[0_10px_40px_rgba(0,70,255,0.10)]"
                  : "border-gray-200 hover:border-[#F75270]/20"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h4
                  className={`text-base md:text-lg font-semibold transition ${
                    isOpen
                      ? "text-[#F75270]"
                      : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h4>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#F75270] rotate-180"
                      : "bg-[#F75270]/10"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`${
                      isOpen
                        ? "text-white"
                        : "text-[#F75270]"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-7 bg-gradient-to-b from-[#F75270]/[0.03] to-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
  );
}