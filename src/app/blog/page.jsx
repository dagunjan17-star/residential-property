import React from "react";
import BlogList from "./BlogList";

export const metadata = {
  title: "Residential Property Blogs | Home Buying Guide Gurgaon",

  description:
    "Read the latest residential property blogs, home buying guides, investment tips, and real estate market updates in Gurgaon. Explore expert insights for buying apartments, builder floors, and homes.",

  keywords: [
    "residential property blogs",
    "home buying tips gurgaon",
    "apartments for sale in gurgaon",
    "builder floor gurgaon",
    "real estate investment gurgaon",
    "gurgaon property market",
    "home buying guide gurgaon",
  ],

  alternates: {
    canonical: "www.residentialpropertyingurgaon.com/blog", // 👉 apna domain daal dena
  },

  openGraph: {
    title: "Residential Property Blogs & Home Buying Guides",
    description:
      "Latest insights, home buying tips, and Gurgaon residential real estate market updates.",
    url: "www.residentialpropertyingurgaon.com/blog",
    siteName: "www.residentialpropertyingurgaon.com",
    type: "website",
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff1f4]">
      <BlogList />
    </div>
  );
};

export default Page;