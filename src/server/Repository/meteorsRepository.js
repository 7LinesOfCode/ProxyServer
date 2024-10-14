import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const apiBaseUrl = process.env.NASA_API_URL;
const apiKey = process.env.NASA_API_KEY;

const url = `${apiBaseUrl}?start_date=2024-10-07&api_key=${apiKey}`;

export const getMeteors = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching meteors data:", error);
    throw error;
  }
};
