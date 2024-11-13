import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { bookRoutes } from "./interface/routes/bookRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";
import { logger } from "./infrastructure/logger";

const app = express();

app.use(express.json());
app.use("/api", bookRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  logger.info("Server is running on port 3000");
});
