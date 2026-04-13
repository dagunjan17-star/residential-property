// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#fff1f4]">

      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}

        <div className="relative w-16 h-16">

          {/* Outer Soft Ring */}

          <div className="absolute inset-0 rounded-full border-4 border-[#F75270]/20"></div>

          {/* Spinning Brand Ring */}

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#F75270] border-r-[#ff8fa3] animate-spin"></div>

          {/* Inner Glow Dot */}

          <div className="absolute inset-4 bg-gradient-to-r from-[#F75270] to-[#ff8fa3] rounded-full animate-pulse shadow-lg shadow-[#F75270]/40"></div>

        </div>

        {/* Main Text */}

        <p className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3] bg-clip-text text-transparent font-semibold text-lg tracking-wide">
          Loading Residential Property Details...
        </p>

        {/* Sub Text */}

        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch complete Residential Property information and availability for you.
        </p>

      </div>

    </div>
  );
}