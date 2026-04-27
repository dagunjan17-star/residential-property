import ResidentialFAQ from "./ResidentialFAQ";
import ResidentialHero from "./ResidentialHero";

// ✅ SEO METADATA
export const metadata = {
  title: "Residential Property in Gurgaon | Flats, Houses & Villas for Sale",

  description:
    "Explore residential property in Gurgaon including flats, houses, builder floors, and villas. Find affordable and luxury properties in prime locations like Dwarka Expressway, Sohna Road & Golf Course Road.",

  keywords: [
    "residential property in Gurgaon",
    "property in Gurgaon",
    "flats in Gurgaon",
    "houses in Gurgaon",
    "builder floor Gurgaon",
    "villa in Gurgaon",
    "apartments in Gurgaon",
    "buy property Gurgaon",
    "Gurgaon real estate",
    "luxury property Gurgaon",
    "affordable property Gurgaon",
  ],

  alternates: {
    canonical: "https://www.residentialpropertyingurgaon.com/residential-property",
  },
};

export default function Page() {
  return (
    <>
      <ResidentialHero />
      <ResidentialFAQ />
    </>
  );
}