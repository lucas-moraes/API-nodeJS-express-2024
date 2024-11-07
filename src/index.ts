import express from "express";
import { bookRoutes } from "./interface/routes/bookRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";

const app = express();

app.use(express.json());
app.use("/api", bookRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
