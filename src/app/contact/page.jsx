"use client"

import { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"

export default function Page() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : ""

  const handleChange = (e) => {

    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits")
      return
    }

    setLoading(true)

    try {

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
          source: "Contact Page Residential Property Form",
        }),
      })

      const result = await res.json()

      if (result.success) {

        toast.success("Your property enquiry has been submitted!")

        setFormData({
          name: "",
          phone: "",
          message: "",
        })

      } else {
        toast.error("Something went wrong. Please try again.")
      }

    } catch (err) {
      toast.error("Server error. Please try later.")
    } finally {
      setLoading(false)
    }

  }

  return (

    <section className="bg-gradient-to-b from-white to-[#fff1f4] py-20 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">

            Let’s Find Your{" "}
            <span className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3] bg-clip-text text-transparent">
              Dream Home
            </span>

          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">

            Looking to buy a home in Gurgaon? Our property experts
            will help you find the best residential properties based on your
            budget, lifestyle, and preferred location.

          </p>

        </div>

        {/* FORM + IMAGE */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* FORM */}

          <div className="bg-white border border-[#F75270]/20
          rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500">

            <h3 className="text-2xl font-semibold mb-2
            bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
            bg-clip-text text-transparent">

              Register Your Property Requirement

            </h3>

            <p className="text-gray-500 mb-8 text-sm">
              Fill in your details and our expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}

              <div>

                <label className="text-sm text-gray-600">
                  Full Name*
                </label>

                <input
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#fff4f6]
                  border border-[#F75270]/20 text-gray-900
                  focus:ring-2 focus:ring-[#F75270] outline-none transition"
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="text-sm text-gray-600">
                  Phone*
                </label>

                <input
                  name="phone"
                  required
                  inputMode="numeric"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#fff4f6]
                  border border-[#F75270]/20 text-gray-900
                  focus:ring-2 focus:ring-[#F75270] outline-none transition"
                />

              </div>

              {/* MESSAGE */}

              <div>

                <label className="text-sm text-gray-600">
                  Requirements
                </label>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="BHK, Budget, Preferred Location, Possession..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#fff4f6]
                  border border-[#F75270]/20 text-gray-900
                  focus:ring-2 focus:ring-[#F75270] outline-none resize-none transition"
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full font-semibold
                bg-gradient-to-r from-[#F75270] to-[#ff8fa3]
                text-white
                hover:from-[#ff6f89] hover:to-[#F75270]
                transition shadow-md hover:shadow-lg cursor-pointer"
              >

                {loading ? "Submitting..." : "Submit Property Enquiry"}

              </button>

            </form>

          </div>

          {/* IMAGE */}

          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-[#F75270]/20 shadow-xl">

            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Residential Property Consultation"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          </div>

        </div>

        {/* MAP */}

        <div className="mt-24 rounded-3xl overflow-hidden border border-[#F75270]/20 shadow-xl">

          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=29.134042,75.740044&z=18&output=embed"
            className="w-full h-[500px] border-0"
            loading="lazy"
          />

        </div>

      </div>

    </section>

  )

}