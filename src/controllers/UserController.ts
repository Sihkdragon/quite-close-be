import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

class UserController {
  constructor() {}
  async getUsers(req: Request, res: Response) {
    res.json(await UserService.getUsers());
  }
  getUser(req: Request, res: Response) {
    res.json({ message: "get a User" });
  }
  createUsers(req: Request, res: Response) {
    res.json({ message: "Create a User" });
  }
}

export { UserController };
