"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/countries");
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="containe mx-auto p-4">
      <h1 className="text-3xl text-center mb-6">Available Countries List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {countries.length > 0 ? (
          countries.map((country) => (
            <Link
              key={country.countryCode}
              href={`/country/${country.countryCode}`}
            >
              <div className="bg-gray-400/10 text-sm shadow-md rounded-lg p-4 text-center transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400/20">
                <h2 className="text-xl font-semibold">{country.name}</h2>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center justify-center items-center w-full">
            No countries found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryList;
