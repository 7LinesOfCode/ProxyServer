import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const apiBaseUrl = process.env.NASA_API_URL;
const apiKey = process.env.NASA_API_KEY;

const url = `${apiBaseUrl}?start_date=2024-10-07&api_key=${apiKey}`;

app.get("/api/meteors", async (req, res) => {
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching meteors data:", error);
    res.status(500).json({ message: "Error during getting a response." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
