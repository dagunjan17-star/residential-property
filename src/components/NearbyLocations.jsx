
"use client";

import { useEffect, useState } from "react";
import { MapPin, Navigation } from "lucide-react";

export default function NearbyLocations({ blockIndex = 0 }) {
  const [locations, setLocations] = useState([]);

  
   
  useEffect(() => {
  const fetchAreas = async () => {
    try {
      const res = await fetch(
        "https://gurgaon-backend.onrender.com/api/areas/getAllAreas"
      );

      const data = await res.json();

      console.log("FULL RESPONSE =>", data);

      setLocations(data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  fetchAreas();
}, []);
const startIndex =
  locations.length > 0
    ? (blockIndex * 10) % locations.length
    : 0;

let visibleLocations = locations.slice(
  startIndex,
  startIndex + 10
);

if (
  locations.length > 0 &&
  visibleLocations.length < 10
) {
  visibleLocations = [
    ...visibleLocations,
    ...locations.slice(0, 10 - visibleLocations.length),
  ];
}

  if (!locations.length) return null;

  return (
    <section className="w-full py-2">
      <div
        className="
          bg-gradient-to-r
          from-[#FFF1F4]
          via-[#FFE7EC]
          to-[#FFDCE4]
          rounded-[26px]
          overflow-hidden
          shadow-[0_10px_30px_rgba(247,82,112,0.12)]
          border border-[#F75270]/15
        "
      >

        {/* TOP */}
        <div className="px-5 sm:px-6 pt-5">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-[#F75270]/10
                  backdrop-blur-md
                  flex items-center justify-center
                  border border-[#F75270]/15
                "
              >
                <MapPin className="w-6 h-6 text-[#F75270]" />
              </div>

              <div>
                <h2
                  className="
                    text-[16px]
                    sm:text-[16px]
                    font-bold
                    text-[#F75270]
                    leading-tight
                  "
                >
                  Nearby Locations
                </h2>

              </div>

            </div>

            {/* BUTTON */}
            <button
              className="
                flex items-center gap-2
                px-5 py-1
                rounded-2xl
                bg-[#F75270]
                text-white
                font-semibold
                text-sm
                hover:bg-[#ea3d5e]
                hover:scale-[1.03]
                transition-all duration-300
                shadow-lg
                w-fit
              "
            >
              <Navigation className="w-4 h-4" />
              Explore Areas
            </button>

          </div>
        </div>

        {/* LOCATION CARD */}
        <div className="p-5 sm:p-6">

          <div
            className="
              bg-white/85
              backdrop-blur-md
              rounded-[24px]
              p-5
              shadow-xl
              border border-[#F75270]/10
            "
          >

            {/* LOCATION LIST */}
            <div className="flex flex-wrap gap-3">

               {visibleLocations.slice(0, 10).map((item) => (
            <button
              key={item._id}
                  onClick={() =>
                    window.open(
                      `https://www.dealacres.com/properties/residential-property-for-sale-in-gurgaon`,
                      "_blank"
                    )
                  }
                  className="
                    group
                    flex items-center gap-1
                    px-4 py-1
                    rounded-2xl
                    bg-[#F75270]/5
                    border border-[#F75270]/10
                    hover:bg-[#F75270]
                    hover:border-[#F75270]
                    transition-all duration-300
                    cursor-pointer
                    hover:shadow-md
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      w-5 h-5
                      rounded-xl
                      bg-white
                      flex items-center justify-center
                      group-hover:bg-white/20
                      transition-all duration-300
                    "
                  >
                    <MapPin
                      className="
                        w-4 h-4
                        text-[#F75270]
                        group-hover:text-white
                        transition-all duration-300
                      "
                    />
                  </div>

                  {/* TEXT */}
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#F75270]
                      whitespace-nowrap
                      group-hover:text-white
                      transition-all duration-300
                    "
                  >
                    {item.location}
                  </span>

                </button>

              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}