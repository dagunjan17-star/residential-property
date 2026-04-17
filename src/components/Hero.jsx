"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center px-4 sm:px-6"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')",
      // }}
    >
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F75270]/50 to-[#ff8fa3]/50"></div>

      <div className="relative max-w-7xl mx-auto py-10 grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">

          <h1 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight">
            Premium{" "}
            <span className="text-white">
              Residential Properties for Sale
            </span>{" "}
            in Gurgaon
          </h1>

          <p className="text-lg max-w-2xl text-gray-200 leading-relaxed">
            Gurgaon has emerged as one of the most sought-after residential destinations
            in Delhi NCR, offering a perfect blend of modern lifestyle and connectivity.
            <br /><br />
            Whether you are looking for luxury apartments, builder floors, gated societies,
            or investment-friendly homes, Gurgaon provides a wide range of options to suit
            every budget and lifestyle.
            <br /><br />
            Explore verified residential properties in Gurgaon located in prime sectors,
            near metro connectivity, schools, hospitals, and commercial hubs — ensuring
            both comfort and high appreciation potential.
          </p>
<Link href="/how-it-works">
  <button className="relative overflow-hidden bg-[#F75270] text-white px-6 py-3 rounded-tl-xl rounded-br-xl cursor-pointer font-semibold shadow-md transition-all duration-300 hover:bg-[#F75270] hover:shadow-xl hover:scale-105 mt-4 ">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-5 lg:col-span-4">

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-white">

            <h3 className="text-2xl font-semibold mb-2">
              Schedule a Site Visit
            </h3>

            <p className="text-sm mb-6 text-gray-200">
              Get the best deals on residential properties in Gurgaon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#F75270] focus:border-[#F75270]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#F75270] focus:border-[#F75270]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="BHK / Budget / Preferred Location"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#F75270] focus:border-[#F75270]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-semibold 
                bg-[#F75270]
                text-white 
                hover:bg-[#ff6f89]
                transition duration-300 
                disabled:opacity-70 shadow-xl
                rounded-tl-xl rounded-br-xl cursor-pointer"
              >
                {loading ? "Submitting..." : "Get Property Details"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;