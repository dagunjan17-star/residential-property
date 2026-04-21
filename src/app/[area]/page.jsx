import FilterProperties from "./FilterProperties";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
export default async function Page({ params }) {

  const resolvedParams = await params;

      const rawArea = resolvedParams?.area;

// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("residential-property-in-", "")
  ?.replace(/-gurgaon$/i, "")
  ?.trim();;

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (

    <div className="bg-[#fff1f4] min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
        {/* HEADING */}

        <div className="mb-14">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">

            Residential Properties in{" "}
            <span className="bg-gradient-to-r from-[#F75270] to-[#ff8fa3] bg-clip-text text-transparent">
              {formattedArea || "Gurgaon"} Gurgaon
            </span>

          </h1>

          <p className="text-gray-600 mt-3">
            Explore verified residential properties including apartments, builder floors,
            and gated societies in prime locations with modern amenities and excellent connectivity.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-[#F75270] to-[#ff8fa3] mt-6 rounded-full"></div>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-8 space-y-6">

            <FilterProperties area={area} />

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-4">

            <div className="sticky top-24">

              <SidebarEnquiryForm />

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}