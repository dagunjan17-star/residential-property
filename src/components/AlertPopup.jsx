"use client";

import { CheckCircle2, XCircle, X } from "lucide-react";

export default function AlertPopup({
  open,
  type = "success",
  message,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/75 backdrop-blur-xl px-4">

      {/* Popup */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[40px] border border-white/10 bg-white shadow-[0_35px_120px_rgba(247,82,112,0.30)] animate-popup">

        {/* Top Gradient */}
        <div className="h-2 w-full bg-gradient-to-r from-[#F75270] via-[#ff7f97] to-[#ffb3c1]" />

        {/* Decorative Glow */}
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#F75270]/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl"></div>

        {/* Shine Animation */}
        <div className="absolute top-0 left-[-120%] h-full w-[70%] rotate-12 bg-white/20 blur-2xl animate-shine"></div>

        <div className="relative p-8">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#F75270]/10 bg-[#F75270]/5 text-[#F75270] transition-all duration-300 hover:bg-[#F75270] hover:text-white hover:rotate-90 hover:scale-110 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Icon Box */}
          <div className="flex justify-center">
            <div
              className={`relative flex h-32 w-32 items-center justify-center rounded-[32px] rotate-3 shadow-2xl ${
                type === "success"
                  ? "bg-gradient-to-br from-[#fff1f4] via-[#ffd6de] to-[#ffb3c1]"
                  : "bg-gradient-to-br from-red-100 to-red-200"
              }`}
            >

              {/* Pulse Border */}
              <div className="absolute inset-0 rounded-[32px] border-4 border-[#F75270]/20 animate-ping"></div>

              {/* Glow */}
              <div
                className={`absolute inset-4 rounded-[26px] blur-3xl opacity-40 ${
                  type === "success"
                    ? "bg-[#F75270]"
                    : "bg-red-500"
                }`}
              />

              {/* Glass Layer */}
              <div className="absolute inset-[10px] rounded-[24px] border border-white/40 bg-white/20 backdrop-blur-md"></div>

              {type === "success" ? (
                <CheckCircle2
                  size={64}
                  className="relative z-10 text-[#F75270] drop-shadow-lg"
                />
              ) : (
                <XCircle
                  size={64}
                  className="relative z-10 text-red-600"
                />
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-center text-4xl font-black tracking-tight bg-gradient-to-r from-[#F75270] via-[#ff7f97] to-[#ffb3c1] bg-clip-text text-transparent">
            {type === "success" ? "Success!" : "Error!"}
          </h2>

          {/* Message */}
          <p className="mt-4 text-center text-[16px] leading-7 text-gray-600">
            {message}
          </p>

          {/* Divider */}
          <div className="mt-7 flex items-center justify-center">
            <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent to-[#F75270]/40"></div>

            <div className="mx-3 h-3 w-3 rounded-full bg-[#F75270] shadow-[0_0_18px_#F75270]"></div>

            <div className="h-[2px] w-20 rounded-full bg-gradient-to-l from-transparent to-[#F75270]/40"></div>
          </div>

          {/* Button */}
          <button
            onClick={onClose}
            className={`group relative mt-8 w-full overflow-hidden rounded-2xl py-4 text-[16px] font-black tracking-[2px] text-white shadow-[0_15px_45px_rgba(247,82,112,0.35)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] cursor-pointer ${
              type === "success"
                ? "bg-gradient-to-r from-[#F75270] via-[#ff7f97] to-[#ffb3c1]"
                : "bg-gradient-to-r from-red-600 to-red-700"
            }`}
          >
            {/* Shine */}
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

            <span className="relative z-10">OK, GOT IT</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-popup {
          animation: popupAnimation 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes popupAnimation {
          0% {
            opacity: 0;
            transform: scale(0.6) rotate(-5deg) translateY(60px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }

        @keyframes shine {
          0% {
            left: -120%;
          }
          100% {
            left: 130%;
          }
        }

        .animate-shine {
          animation: shine 3.5s linear infinite;
        }
      `}</style>
    </div>
  );
}