import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "@/contextapi/BlogContext";
import { LocalityProvider } from "@/contextapi/LocalityContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Residential Property in Gurgaon | Verified Apartments, Flats & Houses for Sale",

  description:
    "Explore verified residential properties in Gurgaon including apartments, flats, builder floors, villas, and independent houses. Find ready-to-move and new launch residential projects in Sohna Road, Dwarka Expressway, Golf Course Road, New Gurgaon, and other prime locations.",

  keywords: [
    "Residential Property in Gurgaon",
    "Residential Property Gurgaon",
    "Apartments in Gurgaon",
    "Flats for Sale in Gurgaon",
    "Builder Floor Gurgaon",
    "Independent House Gurgaon",
    "Villa for Sale Gurgaon",
    "Residential Projects Gurgaon",
    "Ready to Move Property Gurgaon",
    "New Launch Property Gurgaon",
    "Buy Property Gurgaon",
    "Luxury Residential Property Gurgaon",
    "Verified Property Gurgaon",
    "Property in Gurgaon"
  ],

  alternates: {
    canonical: "https://www.residentialpropertyingurgaon.com/",
  },

  openGraph: {
    title:
      "Residential Property in Gurgaon | Verified Apartments, Flats & Houses",
    description:
      "Find verified residential properties in Gurgaon including apartments, flats, builder floors, villas, and independent houses at the best prices.",
    url: "https://www.residentialpropertyingurgaon.com/",
    siteName: "Residential Property in Gurgaon",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Residential Property in Gurgaon | Verified Apartments & Houses",
    description:
      "Browse verified residential properties, apartments, flats, villas, and houses in Gurgaon.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Provider Wrap Start */}
        <PropertyProvider>
           <BlogProvider>
            <LocalityProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Toaster position="top-right" reverseOrder={false} />
          <Footer/>
          </LocalityProvider>
          </BlogProvider>
        </PropertyProvider>
        {/* ✅ Provider Wrap End */}
      </body>
    </html>
  );
}