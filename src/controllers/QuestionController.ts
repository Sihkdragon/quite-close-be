import { Request, Response } from "express";

class QuestionController {
  constructor() {}
  static getQuestions(req: Request, res: Response) {
    res.json({ message: "get ALl Question" });
  }
  static getQuestion(req: Request, res: Response) {
    res.json({ message: "get a Question" });
  }
  static createQuestion(req: Request, res: Response) {
    res.json({ message: "Create a Question" });
  }
}

export { QuestionController };
