"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14 flex items-center justify-center
        rounded-full
        bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
        text-white
        shadow-[0_0_25px_rgba(247,82,112,0.6)]
        hover:from-[#ff6f89] hover:to-[#F75270]
        hover:scale-110
        active:scale-95
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >

        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />

      </svg>

    </button>

  );

}