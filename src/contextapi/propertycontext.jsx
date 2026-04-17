"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {

  // ================= MAIN STATE =================
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(200);

  // ✅ BHK
  const [propertyType, setPropertyType] = useState(
    ""
  );

  // ✅ 🔥 NEW (SALE / RENT)
  const [listingType, setListingType] = useState("sale");

  // ❌ listingType yaha se hata diya
  const [filters, setFilters] = useState({
    search: "flat,house,builderfloor, studio, apartments",
    propertyCategory: "residential",
    city: "gurgaon",
  });

  // ================= LOCALITY STATE =================
  const [localityData, setLocalityData] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);

  const [localityParams, setLocalityParams] = useState({
    locality: "",
    city: "gurgaon",
    propertyType:
      "flat,house,builderfloor, studio, apartments",
    listingType: "sale,rent",
    page: 1,
    limit: 100,
  });

  // ================= PAGINATION =================
  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError(null);

      const query = new URLSearchParams({
        ...filters,
        page,
        limit,
        propertyType,
        listingType, // ✅ add kiya
      }).toString();

      const res = await axios.get(
        `https://deal-acres-backend.onrender.com/api/listed-properties/searchProperties?${query}`
      );

      setTotalPages(res?.data?.totalPages || 1);
      setProperties(res?.data?.data || []);

    } catch (err) {
      setError("Error fetching data");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ================= FULL DATA =================
  const fetchAllProperties = async () => {
    try {
      const res = await axios.get(
        "https://deal-acres-backend.onrender.com/api/listed-properties/searchProperties?page=1&limit=100&city=gurgaon "
      );

      setAllProperties(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  // ================= LOCALITY API =================
  const fetchByLocality = async (customParams = {}) => {
    try {
      setLoading2(true);
      setError2(null);
      setLocalityData([]);

      const finalParams = {
        ...localityParams,
        propertyType,   // ✅ sync
        listingType,    // ✅ sync
        ...customParams,
      };

      const query = new URLSearchParams(finalParams).toString();

      const res = await axios.get(
        `https://deal-acres-backend.onrender.com/api/listed-properties/searchByLocality?${query}`
      );

      setLocalityData(res?.data?.data || []);

    } catch (err) {
      setError2("Locality fetch failed");
    } finally {
      setLoading2(false);
    }
  };

  // ================= EFFECTS =================
  useEffect(() => {
    fetchProperties();
  }, [page, filters, propertyType, listingType]); // ✅ add listingType

  useEffect(() => {
    fetchAllProperties();
  }, []);

  // ================= UPDATE FILTER =================
  const updateFilters = (newFilters) => {
    setPage(1);
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <PropertyContext.Provider
      value={{
        // main
        properties,
        allProperties,
        loading,
        error,

        // filters
        propertyType,
        setPropertyType,

        listingType,       // ✅ NEW
        setListingType,    // ✅ NEW

        page,
        setPage,
        totalPages,
        filters,
        updateFilters,

        // locality
        localityData,
        loading2,
        error2,
        fetchByLocality,
        setLocalityParams,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) throw new Error("Wrap inside Provider");
  return context;
};