const axios = require("axios");

require("dotenv").config();

const apiBaseUrl = process.env.NASA_API_URL;
const apiKey = process.env.NASA_API_KEY;

url = `${apiBaseUrl}?start_date=2024-10-07&api_key=${apiKey}`;

console.log(url);

axios
  .get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error during getting a response:", error);
  });
