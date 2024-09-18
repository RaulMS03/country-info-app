"use client";

import { Chart, registerables } from 'chart.js';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

interface PopulationData {
  year: string;
  value: number;
}

interface CountryData {
  name: string;
  flag: string;
  borders: string[];
  population: PopulationData[]; 
}

export default function Page({
  params,
}: {
  params: { code: string };
}) {
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/country-info/${params.code}`
        );
        if (!res.ok) throw new Error("Failed to fetch country info");
        const data: CountryData = await res.json();
        setCountryData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (params.code) {
      fetchCountryInfo();
    }
  }, [params.code]);

  if (!countryData) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  const populationData = {
    labels: countryData.population ? countryData.population.map((item) => item.year) : [],
    datasets: [
      {
        label: "Population",
        data: countryData.population ? countryData.population.map((item) => item.value) : [],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center">{countryData.name}</h1>
      <img
        src={countryData.flag}
        alt={`${countryData.name} flag`}
        className="mx-auto my-4"
      />
      <div>{countryData.flag}</div>
      <h2 className="text-2xl">Border Countries</h2>
      <ul>
        {countryData.borders.map((border) => (
          <li key={border}>
            <Link href={`/country/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl">Population Chart</h2>
      <Line data={populationData} />
    </div>
  );
}
