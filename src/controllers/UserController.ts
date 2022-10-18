import { Request, Response } from "express";

class UserController {
  constructor() {}
  getUsers(req: Request, res: Response) {
    res.json({ message: "get ALl User" });
  }
  getUser(req: Request, res: Response) {
    res.json({ message: "get a User" });
  }
  createUsers(req: Request, res: Response) {
    res.json({ message: "Create a User" });
  }
}

export { UserController };
