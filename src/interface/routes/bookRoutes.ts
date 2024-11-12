import { Router } from "express";
import { BookController } from "../controllers/BookController";
import { authenticateToken } from "../middleware/auth";

const router = Router();
const bookController = new BookController();

router.get("/books", authenticateToken, (req, res) =>
  bookController.getAll(req, res),
);

export { router as bookRoutes };
