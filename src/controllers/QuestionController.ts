import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

class QuestionController {
  constructor() {}
  static getQuestions(req: Request, res: Response) {
    res.json(UserService.getUsers);
  }
  static getQuestion(req: Request, res: Response) {
    res.json({ message: "get a Question" });
  }
  static createQuestion(req: Request, res: Response) {
    res.json({ message: "Create a Question" });
  }
}

export { QuestionController };
