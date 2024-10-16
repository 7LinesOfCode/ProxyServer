import express from "express";
import { GetRoverPhoto } from "../UseCases/roversServices.js";

const router = express.Router();

router.post("/api/rover", async (req, res) => {
  try {
    console.log(req.body);
    const { id, name, api_key } = req.body;

    const roverPicture = await GetRoverPhoto(id, name, api_key);

    res.json(roverPicture);
  } catch (error) {
    console.error("Error posting rover data:", error);
    res.status(500).json({ message: "Error during getting a response." });
  }
});

export default router;
