import express from "express";
import { formatMeteors } from "../UseCases/meteorsServices.js";
const router = express.Router();

router.get("/api/meteors", async (req, res) => {
  try {
    const meteors = await formatMeteors();
    res.json(meteors);
  } catch (error) {
    console.error("Error fetching meteors data:", error);
    res.status(500).json({ message: "Error during getting a response." });
  }
});

export default router;
