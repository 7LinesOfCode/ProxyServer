import express from "express";
import dotenv from "dotenv";
import meteorsController from "./Delivery/meteorsController.js";
import nunjucks from "nunjucks";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(meteorsController);

nunjucks.configure("Views", {
  autoescape: true,
  express: app,
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
