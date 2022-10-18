import { Router } from "express";
import { userRouter } from "./userRoutes";
import { questionsRouter } from "./questionRoutes";
const router = Router();

// ================================
// Private Routes
// ================================
router.use("/users", userRouter);
router.use("/questions", questionsRouter);

export { router };
