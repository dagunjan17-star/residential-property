"use client";
import { useState } from "react";

export default function ResidentialFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. Is Gurgaon a good place to buy residential property?",
      a: "Yes, Gurgaon is one of the fastest-growing cities with strong job opportunities and infrastructure. Buying a residential property in Gurgaon can give both lifestyle and investment benefits.",
    },
    {
      q: "2. What types of residential property are available in Gurgaon?",
      a: "You can find apartments, builder floors, villas, and plots. All types of residential property in Gurgaon are available on trusted platforms.",
    },
    {
      q: "3. Are property prices increasing in Gurgaon?",
      a: "Yes, prices are growing steadily due to high demand and development. Investing now can give good returns in the future.",
    },
    {
      q: "4. How can I find trusted property listings?",
      a: "Use platforms that provide verified listings. This helps avoid fake deals and ensures safe buying.",
    },
    {
      q: "5. Can I buy property without a broker in Gurgaon?",
      a: "Yes, many platforms allow direct buyer-seller interaction. This helps save money and makes the process simple.",
    },
    {
      q: "6. What documents are needed to buy property?",
      a: "You need ID proof, sale agreement, and property documents. Always verify ownership before buying.",
    },
    {
      q: "7. Is it safe to invest in new Gurgaon areas?",
      a: "Yes, new areas are developing fast and offer affordable options. They are good for long-term investment.",
    },
    {
      q: "8. How does free property listing help sellers?",
      a: "It allows sellers to list properties without cost and reach more buyers easily.",
    },
    {
      q: "9. What should I check before buying property?",
      a: "Check legal documents, location, price, and ownership. This ensures a safe purchase.",
    },
    {
      q: "10. Why choose a platform with verified listings?",
      a: "Verified listings reduce risk, save time, and help you find genuine residential property in Gurgaon quickly.",
    },
  ];

  return (
    <section className="bg-[#fff1f4] py-6 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#F75270] to-[#ff8fa3] bg-clip-text text-transparent">
          FAQs – Residential Property in Gurgaon
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className={`border border-[#ffd6e0] rounded-xl px-4 py-3 cursor-pointer transition-all duration-300
                ${
                  isOpen
                    ? "bg-[#ffe4ea] shadow-md"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#1a1a1a]">
                    {faq.q}
                  </span>

                  <span
                    className={`text-sm text-[#1a1a1a] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}