const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Country Info Backend");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/countries", async (req, res) => {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching countries");
  }
});

app.get("/api/country/:code", async (req, res) => {
  const countryCode = req.params.code;

  try {
    const countryInfo = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    const countryName = countryInfo.data.commonName;

    const populationData = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      {
        country: countryName,
      }
    );

    const flagData = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      {
        country: countryName,
      }
    );

    res.json({
      name: countryName,
      borders: countryInfo.data.borders || [],
      population: populationData.data.data,
      flag: flagData.data.data.flag,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching country info");
  }
});
