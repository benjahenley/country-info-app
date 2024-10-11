interface PopulationCount {
  year: number;
  value: number;
}

interface PopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCount[];
}

interface BorderData {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderData[] | null;
}

interface CountryInfo {
  name: string;
  borders: BorderData[];
  population: PopulationData;
  flag: string;
}
