import express from "express";
import { meteorsValidator } from "../Validators/meteorValidator.js";
import { formatMeteors } from "../Services/meteorsServices.js";
import { validate } from "../Middleware/validationHandler.js";

const router = express.Router();

router.get("/api/meteors", validate(meteorsValidator), async (req, res) => {
  try {
    const { startDate, endDate, count, wereDangerousMeteors } = req.query;

    const meteors = await formatMeteors(
      startDate,
      endDate,
      Boolean(count),
      Boolean(wereDangerousMeteors)
    );

    if (req.headers["accept"].includes("text/html")) {
      res.render("meteorsView.njk", meteors);
    } else {
      res.json(meteors);
    }
  } catch (error) {
    console.error("Error fetching meteors data:", error);
    res.status(500).json({ message: "Error during getting a response." });
  }
});

export default router;
