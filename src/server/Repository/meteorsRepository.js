import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const apiBaseUrl = process.env.NASA_API_URL;
const apiKey = process.env.NASA_API_KEY;

export const getMeteors = async (startDate, endDate) => {
  const url = `${apiBaseUrl}?api_key=${apiKey}`;
  const response = await axios.get(url, {
    params: {
      startDate,
      endDate,
    },
  });
  return response.data;
};
