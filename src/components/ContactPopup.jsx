"use client";

import { useState } from "react";

export default function ContactPopup({ isOpen, onClose, propertyTitle }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

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
      alert("Phone number must be 10 digits");
      return;
    }

    try {

      setLoading(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyTitle,
        }),
      });

      const data = await res.json();

      if (data.success) {

        alert("Your enquiry has been submitted!");

        setFormData({
          name: "",
          phone: "",
          message: "",
        });

        onClose();

      } else {
        alert("Something went wrong!");
      }

    } catch (err) {

      alert("Server error!");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      {/* POPUP CARD */}

      <div className="bg-white w-full max-w-sm rounded-xl p-5 sm:p-6 shadow-lg relative border border-gray-200 max-h-[90vh] overflow-y-auto">

        {/* CLOSE BUTTON */}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-[#F75270] text-xl"
        >
          ×
        </button>

        {/* TITLE */}

        <h3 className="text-lg sm:text-xl font-medium bg-gradient-to-r from-[#F75270] to-[#ff8fa3] bg-clip-text text-transparent">
          Schedule Residential Property Visit
        </h3>

        {/* PROPERTY */}

        <p className="text-sm text-gray-600 mt-2 mb-5">

          Enquiry for Residential Property:

          <span className="block font-medium text-gray-900 mt-1">
            {propertyTitle}
          </span>

        </p>

        {/* FORM */}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2.5 text-sm
            border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-[#F75270]
            focus:border-[#F75270]
            outline-none placeholder:text-gray-500"
          />

          {/* PHONE */}

          <input
            name="phone"
            required
            placeholder="Phone Number"
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2.5 text-sm
            border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-[#F75270]
            focus:border-[#F75270]
            outline-none placeholder:text-gray-500"
          />

          {/* MESSAGE */}

          <textarea
            name="message"
            rows="3"
            placeholder="Residential/ Budget / Location"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2.5 text-sm
            border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-[#F75270]
            focus:border-[#F75270]
            outline-none resize-none placeholder:text-gray-500"
          />

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 text-sm
            bg-[#F75270]
            hover:bg-[#ff6f89]
            text-white font-medium
            rounded-lg
            transition shadow-sm disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Submitting..." : "Get Office Details"}
          </button>

        </form>

      </div>

    </div>

  );

}