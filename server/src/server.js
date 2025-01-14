import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { appConfig } from "./config/index.js";
import connectDB from "./db.js";
import configureRoutes from "./routes/index.js";

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(
  cors({
    origin: appConfig.ALLOWED_ORIGIN,
  })
);

configureRoutes(app);

// Start the server
app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
