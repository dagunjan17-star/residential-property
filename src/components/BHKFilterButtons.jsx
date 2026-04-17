"use client";

import { useProperty } from "@/contextapi/propertycontext";

export default function PropertyTypeButtons() {

  const { listingType, setListingType, setPage } = useProperty();

  const options = ["sale", "rent"];

  return (
    <div className="flex flex-wrap gap-3 md:gap-4">

      {options.map((type) => {

        const isActive = listingType === type;

        return (
          <div
            key={type}
            onClick={() => {
              setListingType(type); // ✅ ye main hai
              setPage(1);           // ✅ page reset
            }}
            className={`
              px-5 md:px-7 py-2.5 md:py-3
              text-xs md:text-base font-semibold tracking-wide
              rounded-tl-xl rounded-br-xl
              border transition-all duration-300
              shadow-sm whitespace-nowrap cursor-pointer

              ${
                isActive
                  ? "bg-gradient-to-r from-[#F75270] to-[#F75270] text-white border-transparent shadow-lg scale-105"
                  : "text-[#F75270] border-[#B500B2] hover:bg-gradient-to-r hover:from-[#F75270] hover:to-[#F75270] hover:text-white hover:scale-105"
              }
            `}
          >
            {type === "sale" ? "Browse Properties For Buy" : "Browse Properties For Rent "}
          </div>
        );
      })}

    </div>
  );
}