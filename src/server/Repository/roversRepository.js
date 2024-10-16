import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const apiBaseUrl = process.env.NASA_API_ROVER_URL;

export const getRoverData = async (apiKey) => {
  const url = `${apiBaseUrl}&api_key=${apiKey}`;
  console.log(url);

  const response = await axios.get(url);
  return response.data;
};
