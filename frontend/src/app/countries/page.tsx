"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Title from "@/infrastructure/components/Title";
import Banner from "@/infrastructure/components/Banner";

interface Country {
  countryCode: string;
  name: string;
}

const CountriesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/countries`)
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="bg-gray-100 min-h-[100vh]">
      <Banner>Countries List</Banner>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full p-2">
        {countries.map((country) => (
          <li key={country.countryCode}>
            ✯&nbsp;
            <Link
              className="underline cursor-pointer hover:font-bold"
              href={`/country/${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CountriesPage;
