"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Title from "@/infrastructure/components/Title";
import PopulationChart from "@/infrastructure/components/Chart";
import Link from "next/link";
import SubTitle from "@/infrastructure/components/SubTitle";
import Loader from "@/infrastructure/components/Loader";
import Button from "@/infrastructure/components/Button";
import { useRouter } from "next/navigation";
import Banner from "@/infrastructure/components/Banner";

const CountryPage = ({ params }: { params: { countryCode: string } }) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleClick() {
    router.push("/countries");
  }

  useEffect(() => {
    setError(null);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/country/${params.countryCode}`
      )
      .then((response) => {
        setCountryInfo(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(
          "Failed to fetch country information. Please try again later."
        );
      });
  }, [params.countryCode]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
        <Button onClick={handleClick} className="mt-6">
          Return to list
        </Button>
      </div>
    );
  }

  if (!countryInfo) return <Loader />;

  return (
    <div className="max-w-lg lg:max-w-full mx-auto bg-white rounded-lg overflow-hidden transform transition-transform duration-300">
      <div className="">
        <Banner>{countryInfo.name}</Banner>
        <div className="px-2 pb-2 my-10 flex flex-col max-w-xl mx-auto items-center">
          <div className="flex justify-center mb-4 max-w-xs m-auto w-full">
            <img
              src={countryInfo.flag}
              alt={`Flag of ${countryInfo.name}`}
              className="w-full h-auto rounded-md shadow"
            />
          </div>

          <div className="mt-6 w-full">
            <SubTitle className="text-center">Population</SubTitle>

            <ul className="list-disc list-inside mt-4 space-y-1 ">
              <PopulationChart
                populationCounts={countryInfo.population.populationCounts}
              />
            </ul>
          </div>

          <div className="mt-6 w-full mx-auto bg-white rounded-lg ">
            <SubTitle className="text-center">Border Countries</SubTitle>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {countryInfo.borders.length > 0 ? (
                countryInfo.borders.map((border, key) => (
                  <Link
                    href={`/country/${border.countryCode}`}
                    key={key}
                    className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors">
                    <li className="text-gray-700">{border.commonName}</li>
                  </Link>
                ))
              ) : (
                <p className="text-gray-700">No Border Countries</p>
              )}
            </ul>
          </div>

          <Button onClick={handleClick} className="mt-10">
            Return to list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
