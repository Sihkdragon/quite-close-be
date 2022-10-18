import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const User = new UserController();

userRouter.get("/", User.getUsers);
userRouter.post("/", User.createUsers);

export { userRouter };
