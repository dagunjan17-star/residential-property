// app/properties/[slug]/page.js

import PropertyDetails from "./PropertyDetails";
import { notFound } from "next/navigation";

/* ================= FETCH PROPERTY ================= */

async function getPropertyBySlug(slug) {

  const res = await fetch(
    `https://gurgaon-backend.onrender.com/api/listed-properties/getPropertyBySlug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  const json = await res.json();

  return json?.data || null;

}

/* ================= SEO ================= */

export async function generateMetadata({ params }) {

  const { slug } = await params;   // ✅ important fix

  const property = await getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Residential Property in Gurgaon",
      description:
        "Explore premium Residential Property available for sale in Gurgaon with verified listings.",
    };
  }

  return {
    title: `${property.title} | Residential Property in Gurgaon`,
    description:
      property.description?.[0] ||
      "View complete house details including price, location, photos and amenities in Gurgaon.",

    alternates: {
      canonical: `https://www.residentialpropertyingurgaon.com/properties/${slug}`,
    },

    openGraph: {
      title: property.title,
      description:
        property.description?.[0] ||
        "Explore house details, photos, price and location.",
      images: [
        {
          url: property?.media?.url || "/no-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };

}

/* ================= PAGE ================= */

export default async function Page({ params }) {

  const { slug } = await params;   // ✅ important fix

  if (!slug) {
    return notFound();             // ✅ better than throw
  }

  const property = await getPropertyBySlug(slug);

  if (!property) {
    return notFound();             // ✅ better UX
  }

  return (
    <div>
      <PropertyDetails propertyy={property} />
    </div>
  );

}