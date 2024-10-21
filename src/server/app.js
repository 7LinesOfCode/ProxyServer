import express from "express";
import dotenv from "dotenv";
import meteorsController from "./Delivery/meteorsController.js";
import roversController from "./Delivery/roversController.js";
import nunjucks from "nunjucks";
import errorHandler from "./Middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(meteorsController);
app.use(roversController);

app.use(errorHandler);

nunjucks.configure("Views", {
  autoescape: true,
  express: app,
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
