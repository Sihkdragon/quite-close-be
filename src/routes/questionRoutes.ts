import { Router } from "express";
import { QuestionController } from "../controllers/QuestionController";

const questionsRouter = Router();

questionsRouter.get("/", QuestionController.getQuestions);
questionsRouter.post("/", QuestionController.createQuestion);

export { questionsRouter };
