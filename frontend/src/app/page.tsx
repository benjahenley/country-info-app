"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Title from "@/infrastructure/components/Title";

import Button from "@/infrastructure/components/Button";
import { useRouter } from "next/navigation";
import Banner from "@/infrastructure/components/Banner";

interface Country {
  alpha2Code: string;
  name: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/countries`)
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  function handleClick() {
    router.push("/countries");
  }

  return (
    <section className="bg-gray-100 min-h-[100vh]">
      <Banner>Country Info App</Banner>
      <div className="p-5 text-center mt-10">
        <div className="py-5 px-2 max-w-lg m-auto text-xl mb-10">
          <p className="text-gray-800 text-lg font-semibold">
            Welcome to the Country Info App! Press the button below to explore
            various countries, including their population statistics and
            geographical information.
          </p>
        </div>
        <Button onClick={handleClick}>Go to finder</Button>
      </div>
    </section>
  );
};

export default Home;
